import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Award, Briefcase, GraduationCap } from "lucide-react";
const highlights = [
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized cross-browser experiences",
  },
  {
    icon: Users,
    title: "Cross-Functional",
    description: "Product, Design, Backend & QA collaboration",
  },
];
const experience = [
  {
    icon: Briefcase,
    title: "Frontend Developer",
    company: "Deloitte",
    period: "Feb 2023 – Present",
    location: "Bangalore, India",
  },
];
const education = [
  {
    icon: GraduationCap,
    title: "Master of Computer Applications",
    institution: "Lovely Professional University",
    period: "2024 – Present",
    score: "Ongoing",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Applications",
    institution: "Kristu Jyoti College",
    period: "2019 – 2022",
    score: "89.99%",
  },
];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frontend Developer 
              <br />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                  Frontend Developer with 3 years of experience across{" "}
                  <span className="text-foreground font-medium">
                    banking, healthcare, and energy sectors
                  </span>
                  , specializing in React/Next.js, TypeScript, REST/GraphQL
                  APIs, and ADA/WCAG accessibility compliance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 relative z-10">
                  At Deloitte, I deliver enterprise-grade interfaces using
                  modern frontend architectures including monorepos and
                  micro-frontends, while ensuring comprehensive test coverage
                  with Jest, RTL, and Cypress.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Experience
                </h3>
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1,
                    }}
                    className="glass-card rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{exp.title}</h4>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div
              className="
    flex
    flex-col
    justify-between
    h-full
    gap-8
  "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="grid grid-cols-2 gap-4"
              >
                {/* {highlights.map((item, index) => <motion.div key={item.title} initial={{
                opacity: 0,
                y: 20
              }} animate={isInView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1
              }} className="glass-card rounded-xl p-5 hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>)} */}
                {highlights.map((item, index) => {
                  const isLastSingle =
                    highlights.length === 3 && index === highlights.length - 1;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.1,
                      }}
                      className={`glass-card rounded-xl p-5 hover-lift ${
                        isLastSingle ? "col-span-2" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <h3 className="font-display font-semibold text-sm mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="glass-card rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{edu.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          {edu.period}
                        </span>
                        <span className="text-xs text-primary font-medium">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
