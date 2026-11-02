import { Home, TrendingUp, Users } from 'lucide-react'

const loanSteps = [
  { label: 'Initial disclosures sent', owner: 'Loan partner' },
  { label: 'Appraisal ordered', owner: 'Processor' },
  { label: 'Borrower docs collected', owner: 'Loan partner' },
  { label: 'Conditions submitted', owner: 'Processor' },
  { label: 'Clear to close', owner: 'Underwriting' },
]

const ownershipFeatures = [
  {
    title: 'A full team behind you',
    description:
      'Dedicated loan partners and processors take disclosures, docs, conditions and closing coordination off your plate, and they’re not paid out of your basis points.',
    icon: TrendingUp,
  },
  {
    title: 'Call your own shots',
    description:
      'Your process, your referral partners, your brand, your schedule. Run your book like a business you own, with W-2 stability and none of the overhead.',
    icon: Users,
  },
  {
    title: 'Be more competitive',
    description:
      'Lower cost per loan means pricing that holds up when your borrower is shopping. Sharper quotes, fewer deals lost on rate.',
    icon: Home,
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-line">Run it like you own it.</span>
              <span className="hero-title-line">
                We’ll handle <span className="hero-highlight">the rest.</span>
              </span>
            </h1>
            <p className="hero-description">
              Built for ambitious producers who want to call their own shots, with a full loan team
              behind them so every hour goes to growing the business, not processing it.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#loan-calculator">
                <span>Run your numbers</span>
                <span aria-hidden="true" className="button-arrow">
                  →
                </span>
              </a>
              <a className="hero-button hero-button-secondary" href="#model">
                See how the model works
              </a>
            </div>
          </div>

          <div className="loan-visual">
            <section className="loan-card" aria-labelledby="loan-team-title">
              <div className="loan-window-bar">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="loan-file-label font-mono">Loan file · Purchase</span>
              </div>

              <div className="loan-card-content">
                <div className="loan-team-header">
                  <div>
                    <p className="loan-kicker">Your loan team</p>
                    <h2 id="loan-team-title" className="loan-team-title">
                      Handling it for you
                    </h2>
                  </div>
                  <div className="loan-avatars" role="group" aria-label="Your loan team">
                    <span className="loan-avatar avatar-partner" title="Loan partner">
                      LP
                    </span>
                    <span className="loan-avatar avatar-processor" title="Processor">
                      PR
                    </span>
                    <span className="loan-avatar avatar-underwriting" title="Underwriting">
                      UW
                    </span>
                  </div>
                </div>

                <ul className="loan-steps" aria-label="Loan file progress">
                  {loanSteps.map((step) => (
                    <li className="loan-step" key={step.label}>
                      <span className="step-check" role="img" aria-label="Complete" />
                      <span className="step-label">{step.label}</span>
                      <span className="step-owner font-mono">{step.owner}</span>
                    </li>
                  ))}
                </ul>

                <div className="business-status">
                  <span className="status-dot" aria-hidden="true" />
                  <span>You: running your business.</span>
                </div>
              </div>
            </section>

            <div
              className="support-cost"
              aria-label="Support cost to you: zero dollars, zero basis points"
            >
              <span className="support-cost-label font-mono">Support cost to you</span>
              <strong>$0 · 0 bps</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ownership-section" aria-labelledby="ownership-title">
        <div className="ownership-layout">
          <h2 id="ownership-title" className="ownership-title">
            <span className="ownership-title-line">You set the direction. Your team</span>
            <span className="ownership-title-line">does the heavy lifting.</span>
          </h2>
          <p className="ownership-description">
            Too many producers split their week between generating loans and servicing them. At LO
            Direct, you make the calls on how your business runs, while a dedicated loan team handles
            everything it takes to get each file to the closing table. And because we built the
            company lean, you keep more of what you earn.
          </p>

          <ul className="ownership-features" aria-label="Benefits of the LO Direct model">
            {ownershipFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <li className="ownership-card" key={feature.title}>
                  <span className="ownership-icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={2.3} />
                  </span>
                  <h3 className="ownership-card-title">{feature.title}</h3>
                  <p className="ownership-card-description">{feature.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
