import { Button } from '../components/ui'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-28 pb-20">
      <div className="container-x flex flex-col items-center text-center">
        <span className="text-8xl text-accent/70">404</span>
        <h1 className="mt-4 text-4xl sm:text-5xl">Looks like a wrong turn.</h1>
        <p className="mt-4 max-w-md text-lg text-ink-700">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary">Contact support</Button>
        </div>
      </div>
    </section>
  )
}
