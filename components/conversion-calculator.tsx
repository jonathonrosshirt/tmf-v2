'use client'

import { useState, type CSSProperties } from 'react'

type CalculatorValues = {
  leadsPerYear: number
  currentConversion: number
  conversionLift: number
  averageLoanSize: number
  compensationBps: number
}

type CalculatorKey = keyof CalculatorValues

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
const numberFormatter = new Intl.NumberFormat('en-US')

function rangeStyle(value: number, min: number, max: number): CSSProperties {
  return {
    '--range-progress': `${((value - min) / (max - min)) * 100}%`,
  } as CSSProperties
}

export default function ConversionCalculator() {
  const [values, setValues] = useState<CalculatorValues>({
    leadsPerYear: 100,
    currentConversion: 15,
    conversionLift: 10,
    averageLoanSize: 350_000,
    compensationBps: 125,
  })

  const earnedPerLoan = Math.round((values.averageLoanSize * values.compensationBps) / 10_000)
  const additionalClosings = Math.round((values.leadsPerYear * values.conversionLift) / 100)
  const closingsPerYear = Math.round(
    (values.leadsPerYear * (values.currentConversion + values.conversionLift)) / 100,
  )
  const additionalIncome = additionalClosings * earnedPerLoan
  const totalConversion = values.currentConversion + values.conversionLift

  const controls: Array<{
    key: CalculatorKey
    label: string
    min: number
    max: number
    step: number
    displayValue: string
  }> = [
    {
      key: 'leadsPerYear',
      label: 'Leads per year',
      min: 0,
      max: 600,
      step: 10,
      displayValue: numberFormatter.format(values.leadsPerYear),
    },
    {
      key: 'currentConversion',
      label: 'Current conversion',
      min: 0,
      max: 50,
      step: 1,
      displayValue: `${values.currentConversion}%`,
    },
    {
      key: 'conversionLift',
      label: 'Conversion lift',
      min: 0,
      max: 20,
      step: 1,
      displayValue: `+${values.conversionLift} pts`,
    },
    {
      key: 'averageLoanSize',
      label: 'Average loan size',
      min: 100_000,
      max: 1_000_000,
      step: 10_000,
      displayValue: currencyFormatter.format(values.averageLoanSize),
    },
    {
      key: 'compensationBps',
      label: 'Your comp (basis points)',
      min: 50,
      max: 200,
      step: 5,
      displayValue: `${values.compensationBps} bps`,
    },
  ]

  const updateValue = (key: CalculatorKey, value: number) => {
    setValues((currentValues) => ({ ...currentValues, [key]: value }))
  }

  return (
    <section
      className="conversion-calculator-section"
      id="loan-calculator"
      aria-labelledby="conversion-calculator-title"
    >
      <div className="conversion-calculator-layout">
        <header className="conversion-calculator-intro">
          <h2 id="conversion-calculator-title">
            <span className="conversion-title-line">Same leads.</span>
            <span className="conversion-title-line">Same effort.</span>
            <span className="conversion-title-line"><span className="headline-highlight">More closings.</span></span>
          </h2>
          <p>
            Competitive pricing and a team that keeps files moving lift conversion. See what a few
            more points would be worth to you.
          </p>
        </header>

        <div className="conversion-calculator-grid">
          <div className="conversion-controls-card" role="group" aria-label="Income estimate inputs">
            <div className="conversion-control-list">
              {controls.map((control) => {
                const inputId = `conversion-${control.key}`

                return (
                  <div className="conversion-control" key={control.key}>
                    <div className="conversion-control-heading">
                      <label htmlFor={inputId}>{control.label}</label>
                      <output htmlFor={inputId}>{control.displayValue}</output>
                    </div>
                    <input
                      className="conversion-range"
                      id={inputId}
                      type="range"
                      min={control.min}
                      max={control.max}
                      step={control.step}
                      value={values[control.key]}
                      style={rangeStyle(values[control.key], control.min, control.max)}
                      aria-valuetext={control.displayValue}
                      onChange={(event) => updateValue(control.key, Number(event.target.value))}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <aside className="conversion-result-card" aria-label="Estimated additional annual income">
            <div className="conversion-result-summary">
              <p className="conversion-result-label">Additional annual income</p>
              <p className="conversion-result-amount" aria-live="polite">
                {currencyFormatter.format(additionalIncome)}
              </p>
              <p className="conversion-result-description">
                from closing {numberFormatter.format(additionalClosings)} more{' '}
                {additionalClosings === 1 ? 'loan' : 'loans'} a year at {totalConversion}% conversion
                instead of {values.currentConversion}%.
              </p>
            </div>

            <div className="conversion-result-stats">
              <div className="conversion-result-stat">
                <span>Earned per loan</span>
                <strong>{currencyFormatter.format(earnedPerLoan)}</strong>
              </div>
              <div className="conversion-result-stat">
                <span>Closings per year</span>
                <strong>{numberFormatter.format(closingsPerYear)}</strong>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  )
}
