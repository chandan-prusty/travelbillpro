import { SITE } from '../data/site'

function LegalLayout({ title, updated, children }) {
  return (
    <article className="pt-36 pb-20 sm:pt-44 sm:pb-28 [@media(max-height:500px)]:pt-24">
      <div className="container-x max-w-3xl">
        <span className="pill"><span className="size-2 rounded-full bg-accent" />Legal</span>
        <h1 className="mt-7 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-ink-500">Last updated: {updated}</p>
        <div className="prose-legal surface mt-10 p-6 text-[16px] sm:p-10">{children}</div>
      </div>
    </article>
  )
}

export function Privacy() {
  return (
    <>
      <LegalLayout title="Privacy Policy" updated="1 September 2025">
        <p>Travel Bill Pro ("we", "us", "our") provides cloud software for travel businesses in India. This policy explains what information we collect, why we collect it and how we protect it, in line with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.</p>
        <h2>1. Information we collect</h2>
        <ul>
          <li><b>Account information:</b> name, business name, phone number, email address, GSTIN and billing address.</li>
          <li><b>Business data you enter:</b> bookings, invoices, customers, vehicles, drivers, expenses and payroll records.</li>
          <li><b>Usage information:</b> device type, browser, IP address and in-app activity used to improve performance and security.</li>
          <li><b>Enquiry information:</b> details you submit through our demo and contact forms.</li>
        </ul>
        <h2>2. How we use information</h2>
        <ul>
          <li>To provide, maintain and improve the Travel Bill Pro platform.</li>
          <li>To generate invoices, reports and notifications you request, including WhatsApp and email messages.</li>
          <li>To provide customer support and respond to demo requests.</li>
          <li>To send service updates. Marketing messages are sent only with your consent and can be stopped anytime.</li>
        </ul>
        <h2>3. Your business data belongs to you</h2>
        <p>We process the business data you enter only to provide the service. We do not sell, rent or share your data or your customers' data with advertisers. You can export or delete your data at any time.</p>
        <h2>4. Storage and security</h2>
        <p>Data is hosted on secure cloud infrastructure, encrypted in transit (TLS 1.3) and at rest (AES-256). Access is restricted by role-based permissions, and automated daily backups protect against loss.</p>
        <h2>5. Sharing with service providers</h2>
        <p>We use trusted providers for hosting, database, messaging and payments. They process data only on our instructions and under confidentiality obligations.</p>
        <h2>6. Data retention</h2>
        <p>We retain account data for as long as your subscription is active and as required by Indian tax laws (generally eight years for invoice records). After account closure, data is deleted within 90 days unless law requires otherwise.</p>
        <h2>7. Your rights</h2>
        <p>You may access, correct, export or request deletion of your personal data, and withdraw consent, by writing to us. We respond within 30 days.</p>
        <h2>8. Cookies</h2>
        <p>Our website uses only essential cookies and privacy-friendly analytics. We do not use third-party advertising cookies.</p>
        <h2>9. Contact</h2>
        <p>Grievance Officer, Travel Bill Pro, {SITE.location}, India · <a className="text-accent underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      </LegalLayout>
    </>
  )
}

export function Terms() {
  return (
    <>
      <LegalLayout title="Terms & Conditions" updated="1 September 2025">
        <p>These terms govern your use of the Travel Bill Pro website and software ("Service"). By creating an account or using the Service, you agree to these terms.</p>
        <h2>1. Subscription & billing</h2>
        <ul>
          <li>Plans are billed monthly in advance. Prices are exclusive of applicable GST (currently 18%).</li>
          <li>You may upgrade, downgrade or cancel at any time. Cancellation takes effect at the end of the current billing period.</li>
          <li>Fees paid are non-refundable except where required by law.</li>
        </ul>
        <h2>2. Your account</h2>
        <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account, including actions taken by users you invite.</p>
        <h2>3. Acceptable use</h2>
        <p>You agree not to misuse the Service, attempt unauthorised access, reverse-engineer the software, or use it to send spam or unlawful content, including via WhatsApp or email features.</p>
        <h2>4. Your data</h2>
        <p>You retain all rights to the data you enter. You grant us a limited licence to host and process it solely to provide the Service. See our Privacy Policy for details.</p>
        <h2>5. Tax compliance</h2>
        <p>Travel Bill Pro helps you generate GST-compliant invoices and reports. However, you remain responsible for the accuracy of the information you enter and for your tax filings. We recommend review by a qualified chartered accountant.</p>
        <h2>6. Availability</h2>
        <p>We target 99.9% monthly uptime and schedule maintenance outside business hours where possible. We are not liable for interruptions caused by events beyond our reasonable control.</p>
        <h2>7. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, our total liability for any claim is limited to the fees you paid in the three months before the claim.</p>
        <h2>8. Termination</h2>
        <p>We may suspend accounts that violate these terms. On termination, you may export your data within 30 days.</p>
        <h2>9. Governing law</h2>
        <p>These terms are governed by the laws of India, and courts in Hyderabad, Telangana have exclusive jurisdiction.</p>
        <h2>10. Contact</h2>
        <p>Questions about these terms? Email <a className="text-accent underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </LegalLayout>
    </>
  )
}
