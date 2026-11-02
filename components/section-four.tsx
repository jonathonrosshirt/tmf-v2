'use client'

import { useRef, useState, type KeyboardEvent } from 'react'

const investmentTracks = [
  {
    category: 'Business development',
    tabLabel: 'Referral partners & business development',
    title: 'Build a referral base that doesn’t depend on one source.',
    description:
      'Most producers live and die by a handful of agents. We help you open new channels on purpose, with a process you can repeat.',
    steps: [
      {
        title: 'Map your referral mix',
        description: 'We look at where your business actually comes from and where you’re exposed.',
      },
      {
        title: 'Pick your next channels',
        description:
          'CPAs, financial planners, builders, divorce attorneys: we help you choose the partners that fit your market.',
      },
      {
        title: 'Start the conversations',
        description:
          'Outreach playbooks, co-branded materials and value-first offers give you a reason to get the meeting.',
      },
      {
        title: 'Track and double down',
        description:
          'Production data shows which partners are sending business, so your time goes where it pays.',
      },
    ],
    outcome: 'A diversified referral pipeline and a repeatable process for adding new partners.',
    resources: ['Partner playbooks', 'Co-branded materials', 'Production intelligence'],
  },
  {
    category: 'Marketing & brand',
    tabLabel: 'Marketing, branding & database engagement',
    title: 'Your name is the brand. We help you build it.',
    description:
      'You market yourself, not just the company. Our marketing team builds around you, and your database keeps working between transactions.',
    steps: [
      {
        title: 'Define your brand',
        description:
          'Our in-house marketing team helps shape how you show up to borrowers and partners.',
      },
      {
        title: 'Content built for you',
        description:
          'Co-branded campaigns, social content and partner materials with your name front and center.',
      },
      {
        title: 'Automate the follow-up',
        description:
          'Database nurture and re-engagement campaigns keep you top of mind with past clients.',
      },
      {
        title: 'Give them a reason to call',
        description:
          'Timely market updates give you something worth saying to your database and partners.',
      },
    ],
    outcome:
      'A recognizable personal brand and a database that keeps sending repeat and referral business.',
    resources: ['In-house marketing team', 'Database automation', 'Daily market updates'],
  },
  {
    category: 'Sales & conversion',
    tabLabel: 'Sales strategy, conversion & pipeline',
    title: 'Close more of the opportunities you already earn.',
    description:
      'The same leads with a better process means more closings. We help you find where deals stall and fix it.',
    steps: [
      {
        title: 'Audit your conversion',
        description: 'We trace where your leads drop off, from first call to clear to close.',
      },
      {
        title: 'Borrow what’s working',
        description:
          'Strategies that are winning across our team, like seller credits and rate buydowns, packaged into playbooks.',
      },
      {
        title: 'Review your pipeline',
        description:
          'Work through your pipeline with sales leadership to prioritize and forecast.',
      },
      {
        title: 'Keep deals moving',
        description: 'Your loan team handles the file so good opportunities don’t die in process.',
      },
    ],
    outcome: 'Higher conversion and a pipeline you can actually forecast.',
    resources: ['Conversion audits', 'Sales playbooks', 'Sales leadership'],
  },
  {
    category: 'Economics',
    tabLabel: 'Business acumen & profitability',
    title: 'Know the numbers behind your business.',
    description:
      'Great producers think like owners. We help you understand what drives your income and where your time earns the most.',
    steps: [
      {
        title: 'Run a profitability review',
        description: 'Break down your production, compensation and where your hours actually go.',
      },
      {
        title: 'Understand the market',
        description: 'Learn how pricing, rate locks and market moves affect your borrowers and your deals.',
      },
      {
        title: 'Set targets with real math',
        description: 'Turn income goals into the leads, conversion and partners it takes to hit them.',
      },
      {
        title: 'Build your scaling roadmap',
        description: 'A plan for growing production without burning out.',
      },
    ],
    outcome: 'Clear economics and a growth plan built on your own numbers.',
    resources: ['Profitability analysis', 'Scaling roadmap', 'Market education'],
  },
  {
    category: 'Coaching',
    tabLabel: 'Leadership, coaching & accountability',
    title: 'Coaching from people who’ve built it themselves.',
    description:
      'Remote doesn’t have to mean isolated. You get leaders, peers and a structure that keeps you growing.',
    steps: [
      {
        title: 'Join the coaching group',
        description:
          'Our internal coaching group brings together sales leadership and top producers.',
      },
      {
        title: 'Learn from peers',
        description:
          'Workshops and peer discussions with loan officers solving the same problems you are.',
      },
      {
        title: 'Set goals and stay accountable',
        description:
          'Work with leadership on the goals you choose and check in on progress.',
      },
      {
        title: 'See how others grew',
        description: 'Case studies from producers on our team show what worked and why.',
      },
    ],
    outcome: 'Mentors, a peer network and the habits that keep you improving.',
    resources: ['Internal coaching group', 'Peer workshops', 'Producer case studies'],
  },
  {
    category: 'Systems',
    tabLabel: 'Technology, automation & efficiency',
    title: 'Systems that give you your time back.',
    description:
      'The right tools take repetitive work off your plate, and we pay for the ones most companies leave to their loan officers.',
    steps: [
      {
        title: 'See your market clearly',
        description: 'Production intelligence shows where business and partners are moving.',
      },
      {
        title: 'Automate the follow-up',
        description: 'CRM automation handles nurture and reminders so nothing slips.',
      },
      {
        title: 'Stay informed daily',
        description: 'Market intelligence keeps you current on rates and timing.',
      },
      {
        title: 'Streamline operations',
        description: 'Efficient processes and a full loan team keep admin from landing on you.',
      },
    ],
    outcome: 'An operation that scales your production without adding hours to your week.',
    resources: ['MMI', 'Bonzo', 'MBS Highway'],
  },
]

export default function SectionFour() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeTrack = investmentTracks[activeIndex]

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = (index + 1) % investmentTracks.length
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = (index - 1 + investmentTracks.length) % investmentTracks.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = investmentTracks.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="investment-section" aria-labelledby="investment-heading">
      <div className="investment-layout">
        <h2 id="investment-heading" className="investment-heading">
          <span>How we invest in you</span>
        </h2>

        <div className="investment-grid">
          <div
            className="investment-tabs"
            role="tablist"
            aria-label="Business investment topics"
            aria-orientation="vertical"
          >
            {investmentTracks.map((track, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  className={`investment-tab${isActive ? ' is-active' : ''}`}
                  id={`investment-tab-${index + 1}`}
                  key={track.tabLabel}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="investment-panel"
                  tabIndex={isActive ? 0 : -1}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className="investment-tab-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="investment-tab-label">{track.tabLabel}</span>
                </button>
              )
            })}
          </div>

          <div
            className="investment-panel"
            id="investment-panel"
            role="tabpanel"
            aria-labelledby={`investment-tab-${activeIndex + 1}`}
            tabIndex={0}
          >
            <div className="investment-panel-main">
              <p className="investment-eyebrow font-mono">{activeTrack.category}</p>
              <h3 className="investment-panel-heading">
                {activeTrack.title.split(/(?<=[.!?])\s+/).map((sentence, index, sentences) => (
                  <span key={`${activeTrack.category}-${index}`}>
                    {sentence}{index < sentences.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </h3>
              <p className="investment-panel-description">{activeTrack.description}</p>

              <h4 className="investment-how-title font-mono">How it works</h4>
              <ol className="investment-steps">
                {activeTrack.steps.map((step, index) => (
                  <li className="investment-step" key={step.title}>
                    <span className="investment-step-number" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div>
                      <h5 className="investment-step-title">{step.title}</h5>
                      <p className="investment-step-description">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="investment-panel-footer">
              <section className="investment-outcome" aria-labelledby="investment-outcome-title">
                <h4 id="investment-outcome-title" className="investment-eyebrow font-mono">
                  What you build
                </h4>
                <p>{activeTrack.outcome}</p>
              </section>
              <section className="investment-resources" aria-labelledby="investment-resources-title">
                <h4 id="investment-resources-title" className="investment-resource-heading font-mono">
                  Resources behind it
                </h4>
                <ul className="investment-resource-list">
                  {activeTrack.resources.map((resource) => (
                    <li key={resource}>{resource}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
