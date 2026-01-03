import AnimatedTextSlider from "../custom/AnimatedTextSlider"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"

const Intro = () => {
    return (
        <div className="flex items-center gap-4">
            {/* Avatar */}
            <Avatar className="size-16 rounded-xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SA</AvatarFallback>
            </Avatar>

            {/* Text content */}
            <div className="flex flex-col">
                {/* Name + Status */}
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-white leading-none">
                        Sayed Mubashir Ali
                    </h1>
                    <Badge
                        variant="outline"
                        className="flex items-center gap-2 rounded-full border-slate-700 text-slate-300 px-3 py-1"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                        </span>
                        Available for work
                    </Badge>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                    <AnimatedTextSlider
                    texts={[
                        "Software Tinkerer",
                        "Full Stack Developer",
                        "React & TypeScript Enthusiast",
                        "Problem Solver",
                    ]}
                    className="text-slate-400 text-sm"
                />
                </p>
                
            </div>
        </div>
    )
}

export default Intro
