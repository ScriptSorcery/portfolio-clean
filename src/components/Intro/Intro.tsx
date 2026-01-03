import AnimatedTextSlider from "../custom/AnimatedTextSlider"
import InfoItem from "../custom/InfoItem"
import TechPill from "../custom/TechPill"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
    Clock,
    Globe,
    Mail,
    MapPin,
    Code2,
    User,
    ArrowDownToLine,
    Phone,
    Linkedin,
    Github,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { ReactIcon, NextIcon, TailwindIcon, TypeScriptIcon } from "../../shared/icons"
import resume from "@/shared/Sayed Mubashir Ali Resume.pdf"
import { toast } from "sonner"

const Intro = () => {
    return (
        <section className="space-y-8">
            {/* Header */}
            <div className="flex items-start gap-4">
                <Avatar className="size-16 rounded-xl">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2">
                    {/* Name + Badge */}
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-white leading-none">
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

                    {/* Animated role */}
                    <AnimatedTextSlider
                        texts={[
                            "UI / UX Enthusiast",
                            "Full Stack Developer",
                            "React & TypeScript Engineer",
                            "Problem Solver",
                        ]}
                        className="text-slate-400 text-sm"
                    />
                </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-sm text-slate-300">
                <InfoItem icon={<Code2 size={16} />} text="Full-Stack Developer" />
                <InfoItem icon={<Clock size={16} />} text="11:37 AM // same time" />

                <InfoItem
                    icon={<MapPin size={16} />}
                    text="Bangalore, Karnataka, India"
                />
                <InfoItem icon={<Globe size={16} />} text="mubashir.dev" />

                <span 
                    onClick={() => {
                        navigator.clipboard.writeText("ali.mubashir40@gmail.com")
                        toast.success("Email copied to clipboard!")
                    }}
                    className="cursor-pointer"
                >
                    <InfoItem
                        icon={<Mail size={16} />}
                        text="ali.mubashir40@gmail.com"
                    />
                </span>
                <InfoItem icon={<User size={16} />} text="he / him" />
            </div>

            {/* Bio */}
            <p className="max-w-3xl text-slate-400 leading-relaxed text-sm">
                I build interactive web apps using{" "}
                <TechPill icon={<TypeScriptIcon />}>TypeScript</TechPill>,{" "}
                <TechPill icon={<ReactIcon />}>React</TechPill>,{" "}
                <TechPill icon={<NextIcon />}>Next.js</TechPill>, and{" "}
                <TechPill icon={<TailwindIcon />}>Tailwind CSS</TechPill>. With a
                focus on UI design, I enjoy creating seamless user experiences
                driven by a keen eye for detail.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="flex items-center" variant="secondary" asChild>
                            <a href={resume} download="Sayed_Mubashir_Ali_Resume.pdf">
                                <ArrowDownToLine />Resume
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Download Resume</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="flex items-center" variant="secondary"><Phone />Contact</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Me</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="secondary" className="gap-2" asChild>
                            <a href="https://github.com/hulkmania40" target="_blank" rel="noopener noreferrer">
                                <Github />
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Github</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="secondary" className="gap-2" asChild>
                            <a href="https://www.linkedin.com/in/sayed-mubashir-ali-0709aa193/" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="secondary" className="gap-2" asChild>
                            <a href="mailto:ali.mubashir40@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mail size={16} />
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Email</p>
                    </TooltipContent>
                </Tooltip>

            </div>
        </section>
    )
}

export default Intro
