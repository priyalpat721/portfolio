import { BookOpen, Bot, Code2, Lightbulb, PencilRuler, Rocket, User2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Development",
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
    }
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
        <div>
            <div>
                <div>
                    <span>
                        About Me
                    </span>
                </div>
                
            </div>
        </div>
    </section>
    )
}