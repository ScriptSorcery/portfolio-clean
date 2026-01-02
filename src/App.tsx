import Header from './components/Header/Header'
import { ThemeProvider } from './components/theme-provider'

const features = [
  {
    title: 'Sticky + blurred',
    copy: 'Nav stays pinned with a soft glassmorphism treatment so the brand and links remain visible as you scroll.',
  },
  {
    title: 'Mobile-ready toggle',
    copy: 'The hamburger animates into a close icon and the menu slides open with a smooth height transition.',
  },
  {
    title: 'CTA always present',
    copy: 'Primary contact action is accessible on both desktop and the mobile drawer, so visitors can reach you quickly.',
  },
]

const projects = [
  {
    title: 'Portfolio refresh',
    status: 'In progress',
    copy: 'New hero visuals, interactions, and responsive polish that keep the brand recognizable on any screen.',
  },
  {
    title: 'Case study kit',
    status: 'Complete',
    copy: 'Reusable storytelling sections that make projects easy to skim while highlighting outcomes.',
  },
  {
    title: 'Design system',
    status: 'Complete',
    copy: 'Tokens, components, and motion guidelines so future pages ship quickly and stay consistent.',
  },
]

function App() {
  return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),_radial-gradient(circle_at_80%_0,rgba(236,72,153,0.16),transparent_22%),_linear-gradient(180deg,#f8fafc,#eef2ff)] text-slate-900">
      <Header />

      {/* <main className="mx-auto flex max-w-2xl flex-col gap-12 px-4 pb-20 pt-16 md:px-6">
        <section
          id="home"
          className="flex flex-col gap-6 rounded-2xl border border-white/70 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">Live preview</p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">A clean, sticky header that adapts</h1>
            <p className="text-base text-slate-600">
              Resize your screen to see the frosted nav stay pinned, collapse smoothly into a mobile menu, and keep your key actions close.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              Book a call
            </a>
          </div>
        </section>

        <section id="about" className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/70 bg-white/75 p-5 shadow-md shadow-slate-900/5 backdrop-blur-lg supports-[backdrop-filter]:bg-white/65"
            >
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.copy}</p>
            </div>
          ))}
        </section>

        <section
          id="projects"
          className="space-y-4 rounded-2xl border border-white/70 bg-white/75 p-8 shadow-md shadow-slate-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Featured projects</h2>
              <p className="text-base text-slate-600">Quick highlights that pair well with the header links above.</p>
            </div>
            <span className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm shadow-slate-900/10 md:inline-block">
              Scroll ready
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-3 rounded-xl border border-slate-200/70 bg-white/80 p-4 shadow-inner shadow-white/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{project.copy}</p>
                <button className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-slate-900">
                  View details
                  <span aria-hidden className="transition duration-150 ease-out group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="space-y-4 rounded-2xl border border-white/70 bg-white/75 p-8 shadow-md shadow-slate-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65"
        >
          <h2 className="text-2xl font-semibold text-slate-900">Try scrolling</h2>
          <p className="text-base text-slate-600">
            This extra content is here so you can scroll and see the header remain pinned with its blurred background. On mobile widths the
            links tuck neatly into the slide-down panel and the hamburger morphs into a close icon for clarity.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 text-sm text-slate-700 shadow-inner shadow-white/80">
              Blur is applied via backdrop utilities, letting the gradient behind the header softly show through without sacrificing legibility.
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 text-sm text-slate-700 shadow-inner shadow-white/80">
              The mobile drawer uses a grid row transition for smooth height animation and closes automatically when a link is tapped.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200/70 bg-slate-50/70 p-5 shadow-inner shadow-white/80">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900">Ready to collaborate?</h3>
              <p className="text-sm text-slate-600">Use the header links or tap below to start a conversation.</p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Email me
            </a>
          </div>
        </section>
      </main> */}
      </div>
        </ThemeProvider>
  )
}

export default App
