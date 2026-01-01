import { Button } from "@components/Button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"

export const skills = {
  backend: [
    "Rust",
    "Python",
    "Java",
    "Go",
    "Kotlin",
    "C",
    "C#",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Spring Framework",
    "Spring Boot",
    "Spring MVC",
    "Domain-Driven Design (DDD)",
    "Model-View-Controller (MVC)",
    "Optimization"
  ],

  infra: [
    "Docker",
    "Kubernetes",
    "Azure Kubernetes Service (AKS)",
    "Rancher Kubernetes Management",
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "AWS Lambda",
    "AWS IoT",
    "AWS CodePipeline",
    "AWS CloudFormation",
    "AWS Command Line Interface (CLI)",
    "Continuous Integration / Continuous Delivery (CI/CD)",
    "Git",
    "YAML"
  ],

  security: [
    "Okta",
    "Okta Administration",
    "Okta Single Sign-On",
    "AWS Identity and Access Management (IAM)",
    "HashiCorp Vault"
  ],

  frontend: [
    "React.js",
    "React Hooks",
    "Redux.js",
    "AngularJS",
    "Blazor",
    "HTML",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Java Swing",
    "Figma",
    "User Experience (UX)",
    "Human Computer Interaction",
    "Virtual Reality (VR)",
    "Augmented Reality (AR)"
  ],

  data_and_databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Amazon DynamoDB",
    "Microsoft SQL Server",
    "Azure SQL",
    "Transact-SQL (T-SQL)"
  ],

  observability_and_tooling: [
    "Prometheus",
    "PromQL",
    "Grafana",
    "Splunk",
    "Postman",
    "Postman API",
    "Jupyter",
    "Workbench",
    "Open-Source Software",
    "GitHub Copilot"
  ],

  ai_ml_and_genai: [
    "OpenAI",
    "ChatGPT",
    "DALL·E",
    "GPT-5",
    "Hugging Face",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "Llama.cpp",
    "Transformers",
    "Hugging Face Inference API",
    "OpenAI Embeddings",
    "OpenAI Fine-tuning"
  ]
} as const;


export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="/hero.jpg" alt="Hero" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-1">
            {[...Array(30)].map((_, index) => (
                <div key={index} className="absolute w-1.5 h-1.5 rounded-full opacity-100"
                style={{
                    backgroundColor: "#c42acc",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: "orbit 15s ease-in-out infinite",
                    animationDelay: `${Math.random() * 5}s`,
                }} />
            ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                        AI/ML Engineer • Full Stack Software Developer
                    </span>
                </div>
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Building <span className="text-primary glow-text">secure</span>, <span className="text-primary glow-text">scalable</span>, and <span className="text-primary glow-text">high-performance</span> platforms.
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        I am a software engineer with a passion for building secure, scalable, and high-performance platforms. I have experience in a variety of programming languages and frameworks, and I am always looking for new ways to improve my skills. My recent projects have focused on the emerging field of AI/ML engineering.
                    </p>
                </div>
                <div className="flex gap-4 flex-wrap animate-fade-in animation-delay-300">
                    <Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /></Button>
                    <Button size="lg">Download CV <Download className="w-5 h-5" /></Button>
                </div>

                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">Follow me on</span>
                    {[
                        {icon: Github, href: "#"},
                        {icon: Linkedin, href: "#"},
                    ].map((social, index) => (
                        <a key={index} href={social.href} className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                            {<social.icon className="w-5 h-5"/>}
                        </a>
                    ))}
                </div>
                </div>
                <div className="relative animate-fade-in animation-delay-300">
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                        <div className="relative glass rounded-3xl glow-border">
                            <img src="/priyal-gpt.jpeg" alt="Profile" className="w-full aspect-3/4 rounded-2xl object-cover" />

                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"/>
                                    <span className="text-sm text-white">Available for work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-lg text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden text-muted-foreground mb-2">AI, ML, and GenAI
                    <div className="flex animate-marquee">
                        {[...skills.ai_ml_and_genai, ...skills.ai_ml_and_genai].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Backend
                    <div className="flex animate-marquee">
                        {[...skills.backend, ...skills.backend].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Infra
                    <div className="flex animate-marquee">
                        {[...skills.infra, ...skills.infra].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Frontend
                    <div className="flex animate-marquee">
                        {[...skills.frontend, ...skills.frontend].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Security
                    <div className="flex animate-marquee">
                        {[...skills.security, ...skills.security].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Data & Databases
                    <div className="flex animate-marquee">
                        {[...skills.data_and_databases, ...skills.data_and_databases].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden text-muted-foreground mb-2">Observability & Tooling
                    <div className="flex animate-marquee">
                        {[...skills.observability_and_tooling, ...skills.observability_and_tooling].map((skill, index) => (
                            <div key={index} className="flex shrink-0 px-8 py-4">
                                <span key={index} className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}