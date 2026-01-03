import { Button } from "@components/Button";
import { Mail, MapPin, Send, CheckCircle, XCircle, PhoneCall } from "lucide-react";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SubmitStatus = {
    IDLE: "idle",
    SENDING: "sending",
    SUCCESS: "success",
    ERROR: "error"
};

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "priyalpat721@gmail.com",
        href: "mailto:priyalpat721@gmail.com"
    },
    {
        icon: PhoneCall,
        label: "Phone",
        value: "908-720-2190",
        href: null
    },
    {
        icon: MapPin,
        label: "Location",
        value: "New York, New York",
        href: "https://www.google.com/maps/place/New+York,+NY"
    }
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState<{
        type: typeof SubmitStatus.IDLE;
        message: string;
    }>({
        type: SubmitStatus.IDLE,
        message: ""
    });
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting({ type: SubmitStatus.SENDING, message: "Sending your message..." });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration missing. Please check your environment variables.");
            }
            
            await emailjs.send(serviceId, templateId, formData, publicKey);
            setIsSubmitting({ type: SubmitStatus.SUCCESS, message: "Message sent successfully!" });

            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setIsSubmitting({ type: SubmitStatus.ERROR, message: "Failed to send message. Please try again." });
        } finally {
            setIsLoaded(false);
        }
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-primary">
                        Let's build <span className="text-white italic">something amazing</span> together.
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-600 max-w-2xl mx-auto">
                        I'm currently available for new opportunities and exciting projects. Let's connect and bring your ideas to life!
                        Feel free to reach out if you'd like to collaborate or just say hello!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit }>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Name </label>
                                <input id="name" 
                                type="text" 
                                required 
                                placeholder="Your name..." 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Email </label>
                                <input id="email" 
                                type="email" 
                                placeholder="Your email..." 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Message </label>
                                <textarea rows={5}
                                required 
                                placeholder="Your message..." 
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                            </div>

                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                {
                                    !isLoaded ? (
                                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                                    ) : (
                                        "Sending..."
                                    )
                                }
                            </Button>

                            {isSubmitting.type === SubmitStatus.IDLE && <p className="text-sm text-muted-foreground">{isSubmitting.message}</p>}
                            
                            {isSubmitting.type === SubmitStatus.SENDING && <p className="text-sm text-muted-foreground">Sending...</p>}
                            
                            {isSubmitting.type === SubmitStatus.SUCCESS && <p className="text-sm text-green-600"><CheckCircle className="inline mr-2 h-4 w-4" /> Message sent successfully!</p>}
                            
                            {isSubmitting.type === SubmitStatus.ERROR && <p className="text-sm text-red-600"><XCircle className="inline mr-2 h-4 w-4" /> {isSubmitting.message}</p>}
                        </form>
                    </div>

                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {
                                    contactInfo.map((info, index) => (
                                        <a 
                                            key={index} 
                                            href={info.href || undefined}
                                            className="flex items-center space-x-3 mb-10 rounded-xl hover:bg-surface transition-colors duration-200"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                                                <info.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground">{info.label}</div>
                                                <div className="font-medium">{info.value}</div>
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-purple-700 rounded-full animate-pulse"/>
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                I'm open to new opportunities and collaborations. Whether you need a full-time engineer or a freelance consultant, let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}