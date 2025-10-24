import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--title))]">
              Contact
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Connectons-nous et construisons quelque chose d'extraordinaire ensemble
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cartes de contact */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/justin-mondji/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                         rounded-xl hover:border-[hsl(var(--primary))] transition-colors
                         flex flex-col items-center text-center gap-3"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-[hsl(var(--secondary))] 
                              text-[hsl(var(--secondary-foreground))] 
                              group-hover:bg-[hsl(var(--primary))] 
                              group-hover:text-[hsl(var(--primary-foreground))]
                              transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[hsl(var(--foreground))]">LinkedIn</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">linkedin</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/+22897791374"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                         rounded-xl hover:border-[hsl(var(--primary))] transition-colors
                         flex flex-col items-center text-center gap-3"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-[hsl(var(--secondary))] 
                              text-[hsl(var(--secondary-foreground))] 
                              group-hover:bg-[hsl(var(--primary))] 
                              group-hover:text-[hsl(var(--primary-foreground))]
                              transition-colors">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[hsl(var(--foreground))]">WhatsApp</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Discutons</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/justinPodo"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                         rounded-xl hover:border-[hsl(var(--primary))] transition-colors
                         flex flex-col items-center text-center gap-3"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-[hsl(var(--secondary))] 
                              text-[hsl(var(--secondary-foreground))] 
                              group-hover:bg-[hsl(var(--primary))] 
                              group-hover:text-[hsl(var(--primary-foreground))]
                              transition-colors">
                  <FiGithub className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[hsl(var(--foreground))]">GitHub</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">GitHub</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contactjustinmondji@gmail.com"
                className="group p-6 bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                         rounded-xl hover:border-[hsl(var(--primary))] transition-colors
                         flex flex-col items-center text-center gap-3"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-[hsl(var(--secondary))] 
                              text-[hsl(var(--secondary-foreground))] 
                              group-hover:bg-[hsl(var(--primary))] 
                              group-hover:text-[hsl(var(--primary-foreground))]
                              transition-colors">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-[hsl(var(--foreground))]">E-mail</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">E-mail</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Section CV */}
            <motion.div
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] 
                       rounded-xl p-8 flex flex-col items-center justify-center gap-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Besoin d'un document imprimé ?
              </h3>
              <p className="text-center text-[hsl(var(--muted-foreground))]">
                Cliquez pour télécharger
              </p>
              <motion.a
                href="/CV-Justin-MONDJI.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-[hsl(var(--primary))] 
                         text-[hsl(var(--primary-foreground))] rounded-full
                         hover:bg-[hsl(var(--primary-hover))] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                Télécharger le CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}