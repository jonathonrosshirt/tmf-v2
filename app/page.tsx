import { ArrowRight, Check, Home, TrendingUp, Users } from 'lucide-react'
import ConversionCalculator from '../components/conversion-calculator'
import SectionFour from '../components/section-four'
import WorkYourWaySection from '../components/work-your-way-section'
import FreeReviewSection from '../components/free-review-section'

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

const teamResponsibilities = [
  'Application setup and initial disclosures',
  'Document collection and borrower follow-up',
  'Processing and condition clearing',
  'Underwriting coordination',
  'Appraisal, title and closing scheduling',
  'Status updates to borrowers and agents',
]

const producerFocus = [
  'Building and deepening referral relationships',
  'Meeting with borrowers and partners',
  'Growing your past-client and database business',
  'Marketing your personal brand',
  'The moments that matter outside of work',
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
                We’ll handle <span className="headline-highlight">the rest.</span>
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
            <span className="ownership-title-line">You set the direction.</span>
            <span className="ownership-title-line">Your team does the <span className="headline-highlight">heavy lifting.</span></span>
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

      <section className="workflow-section" id="model" aria-labelledby="workflow-title">
        <div className="workflow-layout">
          <h2 id="workflow-title" className="workflow-title">
            <span className="workflow-title-line">Your time is the business.</span>
            <span className="workflow-title-line">We <span className="headline-highlight">protect it.</span></span>
          </h2>
          <p className="workflow-description">
            Every hour spent chasing paperwork is an hour you’re not building relationships. Your
            loan team takes on the work that gets a loan closed, so you can stay in the work that
            grows your production.
          </p>

          <div className="workflow-panels">
            <section className="workflow-card workflow-card-team" aria-labelledby="team-handles-title">
              <h3 id="team-handles-title" className="workflow-panel-title">
                Your team handles
              </h3>
              <ul className="workflow-list team-responsibilities">
                {teamResponsibilities.map((responsibility) => (
                  <li className="workflow-list-item" key={responsibility}>
                    <span className="workflow-row-icon workflow-check-icon" aria-hidden="true">
                      <Check size={17} strokeWidth={2.5} />
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="workflow-card workflow-card-focus" aria-labelledby="focus-title">
              <h3 id="focus-title" className="workflow-panel-title">
                So you can focus on
              </h3>
              <ul className="workflow-list producer-focus-list">
                {producerFocus.map((focus) => (
                  <li className="workflow-list-item" key={focus}>
                    <span className="workflow-row-icon workflow-arrow-icon" aria-hidden="true">
                      <ArrowRight size={17} strokeWidth={2.5} />
                    </span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
              <p className="workflow-support-note">
                Support cost to you: $0. Your loan team is never paid out of your basis points.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SectionFour />
      <ConversionCalculator />
      <WorkYourWaySection />
      <FreeReviewSection />
    </main>
  )
}
