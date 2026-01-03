import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
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

        <main className="mx-auto flex max-w-2xl flex-col gap-12 px-4 pb-20 pt-16 md:px-6">
          <Intro />
          <MusicPlayer />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
