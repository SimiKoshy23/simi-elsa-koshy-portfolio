import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "simi92001@gmail.com",
    href: "mailto:simi92001@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9605504754",
    href: "tel:+919605504754",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "simi-elsa-koshy",
    href: "https://linkedin.com/in/simi-elsa-koshy-a7aa32291",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangalore, India",
    href: "https://maps.google.com/?q=Bangalore,+Karnataka,+India",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
           
          </div>

          <div className="grid gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card rounded-xl p-4 hover-lift text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.title}</p>
                    <p className="font-medium text-sm truncate">{item.value}</p>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-display font-semibold mb-3">Open to Opportunities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm currently exploring new opportunities in frontend development, 
                  especially roles focused on React/Next.js, TypeScript, and accessibility-first development. 
                  Let's discuss how I can contribute to your team!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
