'use client'

import { useState, type FormEvent } from 'react'

export default function FreeReviewSection() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice('This preview form is not connected, so your request was not sent or saved.')
  }

  return (
    <section className="free-review-section" aria-labelledby="free-review-title">
      <div className="free-review-layout">
        <div className="free-review-copy">
          <h2 id="free-review-title">
            Not looking to move? Good. Start with a free production review.
          </h2>
          <p>
            We&apos;ll look at your conversion, pricing and referral mix, and hand you a scaling roadmap
            you can use wherever you are today.
          </p>
        </div>

        <div className="free-review-card">
          <form className="free-review-form" onSubmit={handleSubmit}>
            <div className="free-review-fields">
              <div className="free-review-field">
                <label htmlFor="review-first-name">First name</label>
                <input
                  id="review-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="free-review-field">
                <label htmlFor="review-last-name">Last name</label>
                <input
                  id="review-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>

              <div className="free-review-field free-review-field-full">
                <label htmlFor="review-work-email">Work email</label>
                <input
                  id="review-work-email"
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="free-review-field">
                <label htmlFor="review-nmls">NMLS #</label>
                <input
                  id="review-nmls"
                  name="nmls"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{1,10}"
                  maxLength={10}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="free-review-field">
                <label htmlFor="review-volume">Last 12 mo. volume</label>
                <select id="review-volume" name="volume" defaultValue="under-5m" required>
                  <option value="under-5m">Under $5M</option>
                  <option value="5m-10m">$5M–$10M</option>
                  <option value="10m-25m">$10M–$25M</option>
                  <option value="25m-50m">$25M–$50M</option>
                  <option value="50m-plus">$50M+</option>
                </select>
              </div>
            </div>

            <button className="free-review-submit" type="submit">
              Request my free review
            </button>

            {notice ? (
              <p className="free-review-notice" role="status" aria-live="polite">
                {notice}
              </p>
            ) : null}

            <p className="free-review-confidentiality">
              Confidential. We never contact your current employer.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
