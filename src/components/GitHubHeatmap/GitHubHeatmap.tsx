import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

type ContributionDay = {
    date: string // YYYY-MM-DD
    count: number
}

type Props = {
    data: ContributionDay[]
    year: number
}

const COLORS = [
    "bg-neutral-800",
    "bg-emerald-900",
    "bg-emerald-800",
    "bg-emerald-600",
    "bg-emerald-400",
]

const getColor = (count: number) => {
    if (count === 0) return COLORS[0]
    if (count <= 2) return COLORS[1]
    if (count <= 5) return COLORS[2]
    if (count <= 10) return COLORS[3]
    return COLORS[4]
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = MONTHS[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
}

const GitHubHeatmap = ({ data, year }: Props) => {
    const map = new Map(data.map(d => [d.date, d.count]))

    // 1️⃣ Find the first Sunday before or on Jan 1
    const start = new Date(year, 0, 1)
    start.setDate(start.getDate() - start.getDay())

    // 2️⃣ Find the last Saturday after or on Dec 31
    const end = new Date(year, 11, 31)
    end.setDate(end.getDate() + (6 - end.getDay()))

    // 3️⃣ Build weeks
    const weeks: Date[][] = []
    let current = new Date(start)

    while (current <= end) {
        const week: Date[] = []
        for (let i = 0; i < 7; i++) {
            week.push(new Date(current))
            current.setDate(current.getDate() + 1)
        }
        weeks.push(week)
    }

    // 4️⃣ Month label positions
    const monthLabels: { month: string; index: number }[] = []

    weeks.forEach((week, i) => {
        const firstDay = week[0]
        if (
            firstDay.getDate() <= 7 &&
            firstDay.getMonth() === new Date(firstDay).getMonth()
        ) {
            monthLabels.push({
                month: MONTHS[firstDay.getMonth()],
                index: i,
            })
        }
    })

    return (
        <div className="text-neutral-400 text-sm space-y-3 overflow-x-auto">
            {/* Month labels */}
            <div className="relative ml-16 h-6">
                {monthLabels.map(({ month, index }) => (
                    <span
                        key={month + index}
                        className="absolute text-xs"
                        style={{ left: index * 14 }}
                    >
                        {month}
                    </span>
                ))}
            </div>

            <div className="flex">
                {/* Day labels (GitHub-style) */}
                <div className="relative w-8 mr-8 text-xs text-neutral-400">
                    {[
                        { label: "Mon", row: 1 },
                        { label: "Wed", row: 3 },
                        { label: "Fri", row: 5 },
                    ].map(({ label, row }) => (
                        <span
                            key={label}
                            className="absolute"
                            style={{
                                top: row * 14, // (cell 12px + gap 2px)
                            }}
                        >
                            {label}
                        </span>
                    ))}
                </div>


                {/* Heatmap */}
                <div className="flex gap-[2px]">
                    {weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[2px]">
                            {week.map((day, di) => {
                                const iso = day.toISOString().split("T")[0]
                                const formattedDate = formatDate(day)
                                const count = day.getFullYear() === year ? map.get(iso) || 0 : 0
                                return (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div
                                                key={di}
                                                className={`w-3 h-3 rounded-sm ${getColor(count)}`}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{`${count} contributions on ${formattedDate}`}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs">
                <span>
                    {data.reduce((a, b) => a + b.count, 0)} contributions in {year}
                </span>

                <div className="flex items-center gap-1">
                    <span>Less</span>
                    {COLORS.map(c => (
                        <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}

export default GitHubHeatmap
