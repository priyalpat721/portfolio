import { useState } from "react";

import { Button } from "@components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: '#', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                PP<span>.</span>
            </a>
            <div className="hidden md:flex gap-1 items-center">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-foreground px-4 py-2 text-sm text-muted-foreground">{link.label}</a>
                    ))}
                </div>
            </div>

            <div className="hidden md:block">
                <Button>Contact Me</Button>
            </div>

            <button className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </nav>
        {isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-foreground px-4 py-2 text-lg text-muted-foreground">{link.label}</a>
                ))}

                <Button size="sm">Contact Me</Button>
            </div>
        </div>}
    </header>
)}