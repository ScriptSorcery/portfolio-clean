import Experience from './components/Experience/Experience'
import GitHubHeatmap from './components/GitHubHeatmap/GitHubHeatmap'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import TechStack from './components/TechStack/TechStack'
import { ThemeProvider } from './components/theme-provider'

function App() {
  const mockData = Array.from({ length: 300 }).map((_, i) => ({
    date: `2025-${String(Math.floor(i / 25) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
    count: Math.floor(Math.random() * 15),
  }))
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_25%),_radial-gradient(circle_at_80%_0,rgba(236,72,153,0.16),transparent_22%),_linear-gradient(180deg,#f8fafc,#eef2ff)] text-slate-900">
        <Header />

        <main className="mx-auto flex max-w-4xl flex-col gap-12 px-4 pb-20 pt-16 md:px-6">
          <Intro />
          {/* <MusicPlayer /> */}
          <GitHubHeatmap data={mockData} year={2025} />
          <TechStack />
          <Experience />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
