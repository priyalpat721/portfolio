const workExperience = [
  {
    period: "Nov 2025 – Present",
    role: "AI/ML Engineer II",
    company: "BlackRock",
    description: [
      "Designed and implemented end-to-end Identity and Access Management for the firm’s AI/ML platform.",
      "Developed authentication methods for the team’s Python SDK.",
      "Designed and built an AI assistant using retrieval-augmented generation (RAG) and vector databases."
    ],
    technologies: [
      "Rust",
      "TypeScript",
      "Python",
      "React",
      "Tailwind CSS",
      "Vector Databases",
      "RAG"
    ],
    current: true
  },
  {
    period: "Aug 2023 – Nov 2025",
    role: "Software Engineer I - Rotational Analyst",
    company: "BlackRock",
    description: [
      "Completed a 2-year rotational program across four engineering teams.",
      "Mentored three summer interns and participated in reverse mentorship initiatives focused on inclusivity.",
      "Won BlackRock’s Global Hackathon by building an LLM-powered productivity tool for task and message management.",
      "Enhanced portfolio management APIs and UI components, and built Python automation for data comparison.",
      "Optimized ETF workflows using caching and multithreading, reducing processing times by 75–90%.",
      "Built a full-stack metrics platform and implemented secure OAuth 2.0 secret management.",
      "Developed NLP evaluation pipelines and improved system health checks and entity management APIs."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Go",
      "React",
      "TypeScript",
      "Angular",
      "gRPC",
      "Protobuf",
      "Grafana",
      "Prometheus",
      "PromQL",
      "Splunk",
      "Kubernetes",
      "Docker",
      "HashiCorp Vault",
      "OAuth 2.0"
    ],
    current: false
  },
  {
    period: "Jun 2022 – Aug 2022",
    role: "Software Engineer Intern",
    company: "Amazon Fulfillment Technologies & Robotics",
    description: [
      "Implemented a full-stack AR CoMET application.",
      "Led stakeholder interviews, feature planning, and mockups.",
      "Delivered a customizable, widget-based dashboard."
    ],
    technologies: [
      "React",
      "JavaScript",
      "AWS",
      "Kotlin",
      "Python",
      "Augmented Reality (AR)"
    ],
    current: false
  },
  {
    period: "Jun 2022 – Aug 2022",
    role: "Software Engineer Intern",
    company: "BlackRock",
    description: [
      "Built a full-stack application leveraging OpenAI APIs.",
      "Implemented backend services to process data and store results in MongoDB.",
      "Worked with prompt engineering and ML experimentation tooling."
    ],
    technologies: [
      "OpenAI APIs",
      "Go",
      "TypeScript",
      "Python",
      "MongoDB",
      "Jupyter",
      "Kubernetes",
      "Docker",
      "gRPC"
    ],
    current: false
  },
  {
    period: "Dec 2021 – May 2022",
    role: "Software Engineer Co-op",
    company: "Bracebridge Capital",
    description: [
      "Refactored and optimized a core C# and T-SQL library using OOD principles and design patterns.",
      "Improved runtime performance by 10–30% and enhanced stored procedures.",
      "Built a full-stack Blazor dashboard and migrated dependencies from .NET Core to .NET."
    ],
    technologies: [
      "C#",
      "T-SQL",
      ".NET",
      "Blazor",
      "Object-Oriented Design",
      "Microsoft SQL Server"
    ],
    current: false
  }
];


export const Experience = () => {
    return <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
                <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
                    Experience that <span className="font-serif italic font-normal text-white">speaks volumes.</span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">Each role has shaped my approach to building scalable, user-focused software solutions, driving innovation and delivering value to teams and users alike.</p>
            </div>

            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
            
                <div className="space-y-12">
                    {workExperience.map((exp, index) => {
                        return (
                        <div key={index} className="relative grid md:grid-cols-2 gap-8 animate-fade-in">
                            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background"></div>

                            <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                                <div className="glass p-6 rounded-2xl border border-primary/30">
                                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        {exp.technologies.map((tech, i) => 
                                        <span key={i} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{tech}</span>)}
                                    </div>
                                </div>                              
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
}