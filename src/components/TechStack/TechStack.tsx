import {
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  TailwindIcon,
  JSIcon,
  NodeJSIcon,
  ExpressJSIcon,
  GitIcon,
  MongoDBIcon,
  MySQLIcon,
  FigmaIcon,
  PostmanIcon,
  BunIcon,
  ShadCNIcon,
  SocketIOIcon,
  PythonIcon,
} from "@/shared/icons"

type Tech = {
  name: string
  icon: React.ComponentType<{ size?: number }>
  category: "Frontend" | "Backend" | "Database" | "Tools"
}

const technologies: Tech[] = [
  { name: "TypeScript", icon: TypeScriptIcon, category: "Frontend" },
  { name: "JavaScript", icon: JSIcon, category: "Frontend" },
  { name: "React", icon: ReactIcon, category: "Frontend" },
  { name: "Next.js", icon: NextIcon, category: "Frontend" },
  { name: "Tailwind CSS", icon: TailwindIcon, category: "Frontend" },
  { name: "shadcn/ui", icon: ShadCNIcon, category: "Frontend" },
  { name: "Node.js", icon: NodeJSIcon, category: "Backend" },
  { name: "Express", icon: ExpressJSIcon, category: "Backend" },
  { name: "Bun", icon: BunIcon, category: "Backend" },
  { name: "Python", icon: PythonIcon, category: "Backend" },
  { name: "Socket.io", icon: SocketIOIcon, category: "Backend" },
  { name: "MongoDB", icon: MongoDBIcon, category: "Database" },
  { name: "MySQL", icon: MySQLIcon, category: "Database" },
  { name: "Git", icon: GitIcon, category: "Tools" },
  { name: "Figma", icon: FigmaIcon, category: "Tools" },
  { name: "Postman", icon: PostmanIcon, category: "Tools" },
]

const TechStack = () => {
  const categories = ["Frontend", "Backend", "Database", "Tools"] as const

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
        <p className="text-neutral-400">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const techs = technologies.filter((t) => t.category === category)
          return (
            <div
              key={category}
              className="rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg
                        bg-neutral-800/50 border border-white/5
                        hover:border-white/20 transition-colors"
                    >
                      <Icon size={18} />
                      <span className="text-sm text-neutral-300">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechStack