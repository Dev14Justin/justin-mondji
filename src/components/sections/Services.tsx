import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiSearch, FiTool, FiCode, FiUsers } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  technologies: string[];
}

const services: Service[] = [
  {
    icon: FiGlobe,
    title: "Développement Web",
    description: "Création d'applications web modernes et performantes adaptées à vos besoins",
    technologies: ["React", "Next.js", "Laravel", "Node.js"]
  },
  {
    icon: FiSmartphone,
    title: "Développement Mobile",
    description: "Applications mobiles cross-platform avec des technologies de pointe",
    technologies: ["Flutter", "React Native", "Firebase"]
  },
  {
    icon: FiSearch,
    title: "SEO & Optimisation",
    description: "Optimisation de votre présence en ligne et amélioration des performances",
    technologies: ["Google Analytics", "SEO", "Performance Web"]
  },
  {
    icon: FiTool,
    title: "Maintenance & Support",
    description: "Support technique et maintenance continue de vos applications",
    technologies: ["DevOps", "CI/CD", "Monitoring"]
  },
  {
    icon: FiCode,
    title: "Intégration IA",
    description: "Intégration de solutions d'intelligence artificielle dans vos projets",
    technologies: ["OpenAI", "TensorFlow", "Machine Learning"]
  },
  {
    icon: FiUsers,
    title: "Coaching & Formation",
    description: "Formation et accompagnement sur les technologies modernes",
    technologies: ["Workshops", "Code Reviews", "Mentorat"]
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--title))]"
            variants={itemVariants}
          >
            Mes Services
          </motion.h2>
          <motion.p
            className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Solutions complètes adaptées à vos besoins professionnels
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-xl border border-[hsl(var(--border))] 
                       bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))]
                       transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[hsl(var(--primary)/0.1)] 
                               text-[hsl(var(--secondary-foreground))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}