import { Check, Download, Mail } from 'lucide-react'
import { Button, Reveal, WhatsAppIcon } from '../components/ui'
import { PageHeader, FeatureGrid, ProductTabs, SectionTitle, CTABlock } from '../components/blocks'
import { DeviceShowcase } from '../components/devices'
import { ScaledScreen } from '../components/mockups/Frames'
import { InvoiceDoc } from '../components/mockups/Documents'
import { FEATURES, MODULES, INTEGRATIONS, SECURITY } from '../data/content'

export default function Features() {
  return (
    <>
      <PageHeader pill="Features" title="Every tool you need," accent="nothing you don't."
        sub="From the first booking call to the final GST return, beautifully connected in one platform.">
        <Button to="/demo" className="!min-h-12 !px-7">Book Free Demo</Button>
        <Button to="/pricing" variant="secondary" className="!min-h-12 !px-7">See pricing</Button>
      </PageHeader>

      <FeatureGrid items={FEATURES.filter((f) => f.title !== 'Vendor Management')} title="Built around how you work" />

      {/* GST billing spotlight */}
      <section id="billing" className="section scroll-mt-20">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" title="GST invoices" accent="in ten seconds." sub="Close a trip and the invoice is ready, with SAC codes, CGST/SGST/IGST split, toll add-ons and a UPI QR so customers pay instantly." />
            <Reveal as="ul" className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Auto CGST / SGST / IGST', 'UPI QR on every invoice', 'Custom logo & series', 'GSTR-1 ready export', 'Monthly B2B statements', 'Credit notes & receipts'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink-700"><Check className="size-5 text-accent" aria-hidden="true" />{t}</li>
              ))}
            </Reveal>
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <span className="pill"><Download className="size-4 text-accent" aria-hidden="true" />Download PDF</span>
              <span className="pill"><WhatsAppIcon className="size-4 text-[#128C4B]" />Send on WhatsApp</span>
              <span className="pill"><Mail className="size-4 text-accent" aria-hidden="true" />Email invoice</span>
            </Reveal>
          </div>
          <Reveal className="surface p-4 sm:p-6" role="img" aria-label="Sample GST tax invoice with CGST, SGST and a UPI payment QR">
            <div className="overflow-hidden rounded-xl" aria-hidden="true"><ScaledScreen width={560} height={600}><InvoiceDoc /></ScaledScreen></div>
          </Reveal>
        </div>
      </section>

      <ProductTabs />
      <DeviceShowcase />

      {/* All modules */}
      <section id="modules" className="section scroll-mt-20">
        <div className="container-x">
          <SectionTitle title="20+ modules," accent="one database." sub="Switch on what you need today and add more as you grow." />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {MODULES.map(({ icon: I, name }, i) => (
              <Reveal key={name} delay={(i % 5) * 0.04} className="surface flex items-center gap-3 px-4 py-4">
                <span className="icon-circle !size-10 shrink-0"><I className="size-[18px]" strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="text-[15px] leading-tight">{name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations + security */}
      <section id="integrations" className="section scroll-mt-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[['Integrations', 'Connected to the tools India runs on.', INTEGRATIONS.map((x) => [x.icon, x.name, x.desc])], ['Security', 'Bank-grade protection for your data.', SECURITY.map((x) => [x.icon, x.title, x.desc])]].map(([title, sub, rows]) => (
            <Reveal key={title} className="surface p-8 sm:p-10">
              <h2 className="text-3xl">{title}</h2>
              <p className="mt-2 text-ink-700">{sub}</p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {rows.map(([I, name, desc]) => (
                  <li key={name} className="flex gap-3">
                    <span className="icon-circle !size-10 shrink-0"><I className="size-[18px]" strokeWidth={1.7} aria-hidden="true" /></span>
                    <div><div className="font-medium">{name}</div><div className="text-sm text-ink-500">{desc}</div></div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABlock />
    </>
  )
}
