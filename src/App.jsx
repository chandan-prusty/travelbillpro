import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Layout from './components/Layout'

// Route-level code splitting
const Home = lazy(() => import('./pages/Home'))
const Features = lazy(() => import('./pages/Features'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Demo = lazy(() => import('./pages/Demo'))
const Landing = lazy(() => import('./pages/Landing'))
const Blog = lazy(() => import('./pages/Blog'))
const Article = lazy(() => import('./pages/Article'))
const Privacy = lazy(() => import('./pages/Legal').then((mod) => ({ default: mod.Privacy })))
const Terms = lazy(() => import('./pages/Legal').then((mod) => ({ default: mod.Terms })))
const NotFound = lazy(() => import('./pages/NotFound'))

// Keyword landing pages (content lives in data/landing.js)
const LANDING_PATHS = ['/travel-billing-software', '/travel-agency-software', '/travel-billing-management-software']

/** Router-agnostic app: wrapped in BrowserRouter (client) or StaticRouter (prerender). */
export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="demo" element={<Demo />} />
              {LANDING_PATHS.map((p) => <Route key={p} path={p.slice(1)} element={<Landing path={p} />} />)}
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<Article />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </MotionConfig>
    </LazyMotion>
  )
}
