import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type ExperienceCardProps = {
  role: string
  company: string
  companyLogo?: string
  locationType: string // "Remote, Part-time"
  dateRange: string // "Feb 2024 - Present"
  description: string
  highlights?: string[]
}

const ExperienceCard = ({
  role,
  company,
  companyLogo,
  locationType,
  dateRange,
  description,
  highlights = [],
}: ExperienceCardProps) => {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-neutral-900/60
        backdrop-blur
        p-6
        shadow-lg
        space-y-4
        mb-3
      "
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <Avatar className="size-12 rounded-xl bg-neutral-800">
          {companyLogo ? (
            <AvatarImage src={companyLogo} />
          ) : (
            <AvatarFallback>
              {company.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="flex-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-base font-semibold text-white">
              {role}
            </h3>
            <span className="text-sm text-neutral-400 whitespace-nowrap">
              {dateRange}
            </span>
          </div>

          <div className="text-sm text-neutral-400 mt-0.5">
            {company} <span className="mx-1">•</span> {locationType}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-300 leading-relaxed">
        {description}
      </p>

      {/* Bullet points */}
      {highlights.length > 0 && (
        <ul className="space-y-1 text-sm text-neutral-400 list-disc list-inside">
          {highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceCard
