import { Seo } from '../components/Layout'
import { Hero, VideoTour, ProblemFix, WhyChoose, FeatureGrid, ProductTabs, StatsBand, Testimonials, CTABlock } from '../components/blocks'
import { DeviceShowcase } from '../components/devices'
import { FEATURES } from '../data/content'

const HOME_FEATURES = FEATURES.filter((f) => f.title !== 'Vendor Management')

export default function Home() {
  return (
    <>
      <Seo path="/" description="Travel Bill Pro helps travel agencies manage bookings, GST invoices, drivers, vehicles, expenses, payroll, CRM, and reports in one dashboard." />
      <Hero />
      <VideoTour />
      <ProblemFix />
      <WhyChoose />
      <FeatureGrid items={HOME_FEATURES} title="Everything your travel business needs" sub="Nine tools that replace registers, Excel sheets and five different apps." />
      <ProductTabs />
      <DeviceShowcase />
      <StatsBand />
      <Testimonials />
      <CTABlock />
    </>
  )
}
