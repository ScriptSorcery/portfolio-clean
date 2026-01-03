import ExperienceCard from "../custom/ExperienceCard"
import mindFireLogo from "@/shared/company_logos/mindfire_solutions_logo.jpg"
import tekSystemsLogo from "@/shared/company_logos/teksystems_logo.jpg"
import rheoAiLogo from "@/shared/company_logos/rheo_ai_logo.jpg"

const Experience = () => {
    return (
        <div className="flex flex-col">
            <span className="text-white mb-2 text-lg font-semibold">
                Experience
            </span>
            
            <ExperienceCard
                role="Senior Fullstack Developer"
                company="TEKsystems"
                companyLogo={tekSystemsLogo}
                locationType="Bangalore, Karnataka"
                dateRange="Apr 2025 - Present"
                description="Worked on enterprise-level projects, focusing on backend development and API integration for large-scale systems"
                highlights={[
                    "Built an internal React component library (org-react-components) on top of ShadCN/UI, enabling developers to quickly scaffold custom UI modules",
                    "Contributed across multiple React applications under the client ecosystem, focusing on maintainability, accessibility, and modular design patterns",
                    "Collaborated with cross-functional teams (frontend, backend, and infrastructure) under Agile sprints, ensuring timely delivery, peer code reviews, and alignment with CI/CD workflows",
                ]}
            />

            <ExperienceCard
                role="Senior Systems Engineer"
                company="Rheo AI"
                companyLogo={rheoAiLogo}
                locationType="Chennai, Tamil Nadu"
                dateRange="Nov 2022 - Apr 2025"
                description="Contributed to the development of a customer-facing AI-driven analytics platform, working across the frontend, backend, and ElasticSearch stack to deliver performant and reliable product features"
                highlights={[
                    "Led frontend architecture using ReactJS with reusable components, state management, and responsive design — ensuring consistent UX across browsers and devices",
                    "Implemented secure, role-based access control (RBAC) and JWT-based authentication for different user tiers, enhancing application security and compliance",
                    "Engineered a custom onboarding library (forked from React Joyride) to streamline guided tours, enhancing user onboarding efficiency by 30%",
                ]}
            />

            <ExperienceCard
                role="Software Developer"
                company="Mindfire Solutions"
                companyLogo={mindFireLogo}
                locationType="Bhubaneswar, Odisha"
                dateRange="Jan 2021 - Nov 2022"
                description="Developed and maintained scalable web applications, collaborating with cross-functional teams to deliver high-quality solutions on time"
                highlights={[
                    "Developed an internal Blogging Platform using React, Flask, and ElasticSearch, enabling full-text content search with minimal latency",
                    "Designed RESTful APIs with Flask and MongoDB queries, reducing response times by 25%",
                    "Built modular frontend components and integrated analytics dashboards for improved content engagement tracking",
                ]}
            />

        </div>
    )
}

export default Experience