import { motion } from "framer-motion";
import {  Linkedin, Mail, Phone, MapPin } from "lucide-react";
const Hero = () => {    
   return <section
  className="py-24 relative overflow-hidden pt-20 flex md:items-center md:justify-center"
>
     <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="pt-24 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Simi Elsa Koshy</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Frontend Developer with 3 years of experience specializing in React, Next.js, TypeScript & accessibility-first development.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            
            
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://linkedin.com/in/simi-elsa-koshy-a7aa32291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm">
              <Linkedin size={18} className="text-primary" />
              <span className="text-muted-foreground">LinkedIn</span>
            </a>
            <a href="mailto:simi92001@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm">
              <Mail size={18} className="text-primary" />
              <span className="text-muted-foreground">simi92001@gmail.com</span>
            </a>
            <a href="tel:+919605504754" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-muted transition-colors text-sm">
              <Phone size={18} className="text-primary" />
              <span className="text-muted-foreground">+91 9605504754</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-sm">
              <MapPin size={18} className="text-primary" />
              <span className="text-muted-foreground">Bangalore, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;