import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Heart, Zap, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Enterprise Banking Platform",
    icon: Building2,
    domain: "Banking & Finance",
    description:
      "Built ADA/WCAG-compliant interfaces for a major banking enterprise, ensuring seamless accessibility and cross-browser performance for millions of users.",
    achievements: [
      "Built modular component library with Blue.js",
      "Modernized legacy UI components",
      "Enhanced security compliance features",
    ],
    tags: ["Blue.js", "TypeScript", "Material UI", "Jest","Karma", "Cypress"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Healthcare Management System",
    icon: Heart,
    domain: "Healthcare",
    description:
      "Developed reusable UI components for a healthcare platform using micro-frontend architecture, accelerating feature rollout and reducing defects.",
    achievements: [
      "Implemented monorepo architecture",
      "Achieved 85% test coverage with RTL",
      "Collaborated with cross-functional teams",
      "Integrated GraphQL APIs for real-time data",
    ],
    tags: ["Next.js", "React.js", "Material UI","Jest", "GraphQL", "RTL"],
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Energy Sector Dashboard",
    icon: Zap,
    domain: "Energy",
    description:
      "Contributed to UI enhancements and feature modernization for energy sector applications, meeting strict security and accessibility standards.",
    achievements: [
      "Implemented accessibility standards across all modules",
      "Reduced page load time by 40%",
      "Integrated REST APIs for real-time data",
    ],
    tags: ["React.js", "TypeScript", "SASS", "Jest", "Bitbucket"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
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
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Enterprise <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Key contributions at Deloitte across banking, healthcare, and energy sectors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group glass-card rounded-2xl overflow-hidden hover-lift`}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {project.domain}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            * Due to NDA restrictions, specific client details and live links cannot be shared.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
