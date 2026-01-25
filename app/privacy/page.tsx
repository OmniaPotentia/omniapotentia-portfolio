export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[color:var(--color-text)]">
      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
            Omnia Potentia
          </p>
          <h1 className="font-display text-4xl font-semibold text-[color:var(--color-primary)]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[color:var(--color-muted)]">
            Last updated: September 24, 2025
          </p>
          <p className="mt-4 text-base text-[color:var(--color-muted)]">
            This Privacy Policy explains how Omnia Potentia (“we,” “us,” or
            “our”) collects and uses information for Omnia Potentia, a social
            media content scheduling platform. We are headquartered in Istanbul,
            Turkey, and operate at omniapotentia.com.
          </p>
        </header>

        <section className="space-y-6 text-base leading-7 text-[color:var(--color-text)]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              We collect only the information needed to operate the scheduling
              service:
            </p>
            <ul className="mt-3 space-y-2 text-[color:var(--color-muted)]">
              <li>
                OAuth access tokens from connected social platforms (such as
                Meta, LinkedIn, TikTok) to post content on your behalf.
              </li>
              <li>
                Scheduled posts, including the content you submit and the time
                you choose for publishing.
              </li>
              <li>User email address for account access and support.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              2. How We Use Your Information
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              We use your data only to provide the scheduling service. This
              includes authenticating your connected accounts and publishing
              scheduled content at the time you set. We do not use your data for
              advertising, profiling, or resale.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              3. Data Storage and Security
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              We store data securely and encrypt sensitive information,
              including OAuth tokens. We do not share your information with
              third parties except when required to operate the service (for
              example, communicating with the social platform APIs you connect).
              We maintain technical and organizational safeguards to protect
              data from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              4. User Rights and Data Deletion
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              You can delete your account at any time. When you do, we remove
              your scheduled posts, OAuth tokens, and associated account data
              from our systems. If you need assistance with deletion, contact us
              using the information below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              5. Cookies
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              We use minimal cookies that are required for authentication and
              session security. We do not use cookies for advertising or
              cross-site tracking.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              6. Compliance
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              We follow data protection principles and comply with applicable
              GDPR requirements. We process personal data lawfully, minimize
              collection, and provide transparency about how information is
              used.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-primary)]">
              7. Contact Us
            </h2>
            <p className="mt-3 text-[color:var(--color-muted)]">
              If you have questions about this policy or your data, contact us
              at info@omniapotentia.com.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
