import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold gradient-text">
              Simi Elsa Koshy
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:simi92001@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <Mail size={20} className="text-muted-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/simi-elsa-koshy-a7aa32291"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <Linkedin size={20} className="text-muted-foreground" />
            </a>
            <a
              href="tel:+919605504754"
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <Phone size={20} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
