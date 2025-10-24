import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function Skills() {
  const skills = {
    frontend: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux/Context API",
      "HTML5/CSS3",
      "SASS/SCSS"
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "SQL/NoSQL",
      "RESTful APIs",
      "GraphQL"
    ],
    tools: [
      "Git/GitHub",
      "Docker",
      "VS Code",
      "Jest/Testing Library",
      "Webpack/Vite",
      "CI/CD"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={skillVariants}
          >
            Compétences Techniques
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
            variants={skillVariants}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="bg-card p-6 rounded-lg shadow-lg border border-border"
            variants={skillVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
            <ul className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center space-x-2"
                  variants={skillVariants}
                >
                  <FiCheck className="text-green-500" />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="bg-card p-6 rounded-lg shadow-lg border border-border"
            variants={skillVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
            <ul className="space-y-3">
              {skills.backend.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center space-x-2"
                  variants={skillVariants}
                >
                  <FiCheck className="text-green-500" />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools & Others */}
          <motion.div 
            className="bg-card p-6 rounded-lg shadow-lg border border-border"
            variants={skillVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Outils & DevOps</h3>
            <ul className="space-y-3">
              {skills.tools.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="flex items-center space-x-2"
                  variants={skillVariants}
                >
                  <FiCheck className="text-green-500" />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}