import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "REST", "GraphQL"],
  },
  {
    title: "UI Libraries & Tools",
    color: "from-purple-500 to-pink-500",
    skills: ["Blue.js", "Material UI", "Tailwind CSS", "Bootstrap", "SASS"],
  },
  {
    title: "Testing & QA",
    color: "from-green-500 to-emerald-500",
    skills: ["Cypress", "Jest", "Karma", "RTL", "Unit Testing", "E2E Testing"],
  },
  {
    title: "Version Control & Workflow",
    color: "from-orange-500 to-red-500",
    skills: ["Git", "GitHub", "Bitbucket", "Jira"],
  },
  {
    title: "Accessibility & Performance",
    color: "from-teal-500 to-cyan-500",
    skills: ["ADA/WCAG Compliance", "Semantic HTML", "Performance Optimization", "Cross-Browser Compatibility", "Responsive Design", "Component Reusability"],
  },
  {
    title: "Soft Skills",
    color: "from-indigo-500 to-purple-500",
    skills: ["Collaboration", "Communication", "Problem Solving", "Time Management", "Initiative", "Innovation"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
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
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                 <div className="flex items-center gap-3 mb-5">
                  <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="font-display text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1.5 bg-muted/50 hover:bg-primary/10 hover:text-primary rounded-lg text-sm font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-sm">🏆</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">2x Applause Award Winner</p>
                <p className="text-xs text-muted-foreground">Exceptional delivery, innovation & accessibility compliance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
