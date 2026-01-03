const InfoItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) => {
  return (
    <div className="flex items-center gap-2 text-slate-300">
    <span className="text-slate-500">{icon}</span>
    <span>{text}</span>
  </div>
  )
}

export default InfoItem