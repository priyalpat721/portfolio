import { BookOpen, Bot, Code2, Lightbulb, PencilRuler, Rocket, Shield, User2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Developer",
        description: "Building robust web applications from frontend to backend"
    },
    {
        icon: Bot,
        title: "AI/ML Engineer",
        description: "Building and deploying machine learning models to solve real-world problems"
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Staying updated with the latest technologies and best practices"
    },
    {
        icon: PencilRuler,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces"
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Breaking down complex challenges into elegant solutions"
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing systems for speed and efficiency"
    },
    {
        icon: User2,
        title: "Team Collaboration",
        description: "Working effectively with cross-functional teams to deliver quality products"
    },
    {
        icon: Shield,
        title: "Security",
        description: "Building secure systems that protect user data and privacy"
    }
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase text-primary">
                                About Me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
                            Turning AI prototypes into 
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                            secure, production-grade systems at scale.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a software engineer passionate about building secure, scalable platforms that take machine-learning systems from experimentation to production.
                                My work sits at the intersection of backend engineering, cloud infrastructure, and applied AI with a strong emphasis
                                on performance, reliability, and security.
                            </p>

                            <p>
                                I’ve designed end-to-end identity and access management for AI platforms, built authentication systems and SDKs,
                                and developed AI assistants using retrieval-augmented generation and vector databases. Across multiple teams,
                                I’ve optimized large-scale workflows, improved system performance by up to 90%, and delivered production-ready
                                systems using Rust, Python, Java, and TypeScript.
                            </p>

                            <p>
                                I enjoy working on complex, ambiguous problems especially where distributed systems, ML tooling, and developer
                                experience meet. I care deeply about building things that scale well, are secure by default, and make other
                                engineers more effective.
                            </p>

                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animiate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to design AI infrastructure that scales, stays secure by default, and makes engineers more effective at building real-world ML systems.
                            </p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-14">
                    {highlights.map((highlight, index) => (
                            <div key={index} className="glass rounded-2xl p-6 animiate-fade-in">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                                    <highlight.icon className="w-8 h-8 text-primary" />
                                </div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
    </section>
    )
}