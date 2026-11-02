import { Check } from 'lucide-react'

const benefits = [
  {
    title: 'Your brand stays front and center',
    description:
      'Market yourself as a business within a business — your name on the relationship.',
  },
  {
    title: 'Your schedule, your call',
    description: 'Kid’s game on Saturday? Your team keeps files moving without you.',
  },
  {
    title: 'Your process, supported',
    description: 'Your loan partner and processor adapt to how you run your pipeline.',
  },
  {
    title: 'Stability underneath it all',
    description:
      'A healthy, purchase-focused lender — a steady place to build for the long run.',
  },
]

export default function WorkYourWaySection() {
  return (
    <section className="work-your-way-section" aria-labelledby="work-your-way-title">
      <div className="work-your-way-layout">
        <div className="work-your-way-copy">
          <h2 id="work-your-way-title">
            <span>Run it your way.</span>
            <span>We&apos;ll keep up.</span>
          </h2>
          <p>
            Open houses, referral partners, the phone, social — however you generate business, your
            team adapts to you. Your name stays on the relationship. Coaching and community are there
            when you want them, not on someone else&apos;s schedule.
          </p>
        </div>

        <ul className="work-your-way-benefits" aria-label="Ways your team supports your business">
          {benefits.map((benefit) => (
            <li className="work-your-way-benefit" key={benefit.title}>
              <span className="work-your-way-check" aria-hidden="true">
                <Check size={16} strokeWidth={2.8} />
              </span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
