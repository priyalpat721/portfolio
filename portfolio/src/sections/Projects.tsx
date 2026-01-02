import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "TravelScraps",
        description: "A social media platform for travelers to share their experiences and discover new destinations.",
        image: "/projects/TravelScraps/TravelScrapsMain.png",
        tags: ["React", "Node.js", "MongoDB", "JavaScript", "Express", "REST API"],
        link: "https://github.com/priyalpat721/travelScraps"
    },
    {
        title: "C Shell",
        description: "A custom shell implementation with advanced scripting capabilities",
        image: "/projects/Shell/ShellMain.png",
        tags: ["C", "Linux", "System Programming"],
        link: "https://github.com/priyalpat721/Mini-Shell"
    },
    {
        title: "Planet Protector",
        description: "A third person shooter game about protecting planets from alien threats built.",
        image: "/projects/MiniGame/MinigameMain.png",
        tags: ["Unity", "C#", "Game Development"],
        link: "https://github.com/priyalpat721/spacedefender"
    },
    {
        title: "eBaby",
        description: "A full stack web application for managing inventory similiar to eBay.",
        image: "/projects/eBaby/eBabyMain.png",
        tags: ["React", "Node.js", "JavaScript", "MSSQL", "Springboot", "Java", "REST API"],
        link: "https://github.com/priyalpat721/eBaby"
    },
    {
        title: "MatchGame",
        description: "A memory matching card game built.",
        image: "/projects/MatchGame/MatchGameMain.png",
        tags: ["Python", "Pygame", "Object-Oriented Programming"],
        link: "https://github.com/priyalpat721/memory_game"
    },
    {
        title: "EasyAnimator",
        description: "A tool for creating and editing animations with an intuitive interface.",
        image: "/projects/EasyAnimator/EasyAnimatorMain.png",
        tags: ["Java", "Java Swing", "GUI", "Swing", "MVC Architecture", "Design Patterns", "Object-Oriented Programming"],
        link: "https://github.com/priyalpat721/EasyAnimatorCode"
    }
];

export const Projects = () => {
    return (
    <section className="py-32 overflow-hidden" id="projects">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
                    Projects that <span className="font-serif italic font-normal text-white">make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in">A selection of my recent work showcasing my fullstack abilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projects.map((project, index) => (
                        <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col h-full">
                            <div className="relative overflow-hidden aspect-16/10 shrink-0">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5" /></a>
                                </div>
                            </div>
                            <div className="p-6 space-y-4 flex-1 flex flex-col">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex-1">
                                    <a href={project.link} className="hover:text-primary transition-colors group-hover:text-primary">
                                        {project.title}
                                    </a>
                                </h3>
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all shrink-0 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                                </a>
                            </div>
                            <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags?.map((tag, i) => (
                                    <span key={i} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border-border/50 text-muted-foreground hover:border-primary/70 transition-colors/50 transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}