const TechPill = ({
  icon,
  children,
}: {
  icon?: React.ReactNode
  children: React.ReactNode
}) => (
  <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-800 px-2 py-0.5 text-cyan-400">
    {icon}
    {children}
  </span>
)
export default TechPill