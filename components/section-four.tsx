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
    category: 'Sales strategy',
    tabLabel: 'Sales strategy, conversion & pipeline',
    title: 'Turn the right conversations into closed loans.',
    description:
      'A thoughtful sales process helps you follow up with confidence and turn more opportunities into closed loans.',
    steps: [
      {
        title: 'See the whole pipeline',
        description: 'Keep every prospect, active file and next step visible.',
      },
      {
        title: 'Follow up with purpose',
        description: 'Use timely, relevant outreach that keeps the conversation moving.',
      },
      {
        title: 'Guide the decision',
        description: 'Give borrowers clarity on their options, timing and what happens next.',
      },
      {
        title: 'Review your conversion',
        description: 'Spot where deals stall and strengthen the right part of your process.',
      },
    ],
    outcome: 'A steadier pipeline and a repeatable path from first conversation to closing.',
    resources: ['Pipeline reviews', 'Conversion coaching', 'Follow-up systems'],
  },
  {
    category: 'Business acumen',
    tabLabel: 'Business acumen & profitability',
    title: 'Know what drives a more profitable business.',
    description:
      'Clear insight into your margins and operating choices helps you grow without guessing where your effort pays off.',
    steps: [
      {
        title: 'Understand your numbers',
        description: 'See how production, pricing and expenses shape profitability.',
      },
      {
        title: 'Set clear targets',
        description: 'Turn business goals into measurable monthly priorities.',
      },
      {
        title: 'Choose the right opportunities',
        description: 'Focus on the work and partnerships that support your model.',
      },
      {
        title: 'Adjust with intention',
        description: 'Review results and make informed changes before issues compound.',
      },
    ],
    outcome: 'A more resilient business with a clear view of what drives profit.',
    resources: ['Profitability planning', 'Business reviews', 'Growth scorecards'],
  },
  {
    category: 'Leadership & coaching',
    tabLabel: 'Leadership, coaching & accountability',
    title: 'Build the habits behind sustainable growth.',
    description:
      'Regular coaching and accountability make ambitious goals actionable and help you stay focused on progress.',
    steps: [
      {
        title: 'Set a clear direction',
        description: 'Define your priorities and what success looks like to you.',
      },
      {
        title: 'Build your weekly rhythm',
        description: 'Turn your goals into consistent business-building actions.',
      },
      {
        title: 'Get support when it matters',
        description: 'Work through challenges with practical feedback and coaching.',
      },
      {
        title: 'Review progress together',
        description: 'Recognize wins, identify gaps and reset your next steps.',
      },
    ],
    outcome: 'Stronger habits, steady accountability and a path to your next level.',
    resources: ['Producer coaching', 'Goal setting', 'Peer accountability'],
  },
  {
    category: 'Technology & efficiency',
    tabLabel: 'Technology, automation & efficiency',
    title: 'Make more room for the work only you can do.',
    description:
      'The right tools and clear processes reduce busywork while keeping each loan moving and every client informed.',
    steps: [
      {
        title: 'Map repetitive work',
        description: 'Identify tasks that slow your day or cause handoff delays.',
      },
      {
        title: 'Simplify the process',
        description: 'Use clear workflows to keep files and follow-ups organized.',
      },
      {
        title: 'Automate the routine',
        description: 'Put reminders and handoffs on dependable systems.',
      },
      {
        title: 'Keep the human connection',
        description: 'Let technology support your relationships, not replace them.',
      },
    ],
    outcome: 'More time for borrowers and partners, with less friction behind the scenes.',
    resources: ['Workflow templates', 'Automation guidance', 'Technology toolkit'],
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
              <h3 className="investment-panel-heading">{activeTrack.title}</h3>
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
