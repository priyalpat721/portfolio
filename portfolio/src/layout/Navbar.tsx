
import { Button } from "@components/Button";

const navLinks = [
    {href: '#', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
]

export const Navbar = () => {
    return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                PP<span>.</span>
            </a>
            <div className="flex gap-1 items-center">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-foreground px-4 py-2 text-sm text-muted-foreground">{link.label}</a>
                    ))}
                </div>
            </div>

            <div>
                <Button>Get in touch</Button>
            </div>
        </nav>
    </header>
}