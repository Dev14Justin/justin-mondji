import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Optix",
    description: "Optix est une entreprise spécialisée dans la conception de solutions technologiques optimisées avec la Data. Nous transformons les défis numériques en opportunités de croissance grâce à notre expertise technique et notre approche centrée sur l'innovation.",
    image: "/optix.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Next.js", "MongoDB"],
    live: "https://optix-tg.vercel.app/",
    category: "Site web"
  },
  {
    title: "KpiHub",
    description: "KpiHub est une plateforme web révolutionnaire qui permet aux influenceurs de présenter leurs performances à travers un portfolio dynamique basé sur des indicateurs clés (KPI). Elle aide les marques à évaluer, comparer et collaborer avec les bons profils.",
    image: "/kpihub.jpg",
    tech: ["React", "Tailwind CSS", "Node.js", "Next.js", "PostgreSQL"],
    live: "#",
    category: "Application web",
    status: "En développement"
  },
  {
    title: "InEvent",
    description: "InEvent est une plateforme mobile et web qui digitalise et simplifie toute la gestion d'organisation des événements et leur promotion. Facilitant la gestion des prestataires, le réseautage et l'accès aux insights socio-économiques.",
    image: "/inevent.png",
    tech: ["Flutter", "Firebase"],
    live: "#",
    category: "Application mobile",
    status: "En développement"
  },
  {
    title: "Tchiav's Excellence",
    description: "Transformez votre soutenance en un véritable succès. Plateforme d'accompagnement complet conçue pour faire de votre soutenance un véritable succès avec des coachs expérimentés.",
    image: "/tchiavs.jpg",
    tech: ["Tailwind CSS", "HTML", "SpreadsheetApp"],
    live: "https://tchiav-s-excellence.vercel.app/",
    category: "Site web"
  },
  {
    title: "Portfolio Jessica",
    description: "Jessica KOFFI, Communicante passionnée et voix-off professionnelle, elle transforme vos idées en messages percutants.",
    image: "/jessica.jpg",
    tech: ["Tailwind CSS", "HTML", "SpreadsheetApp"],
    live: "https://jessica-koffi.vercel.app/",
    category: "Site web"
  },
  {
    title: "Brandify",
    description: "Brandify accompagne les entreprises dans leur transformation numérique : développement web & mobile, communication digitale, design & UX/UI, stratégie marketing et analyse data.",
    image: "/brandify.jpg",
    tech: ["Tailwind CSS", "HTML", "SpreadsheetApp"],
    live: "https://brandify-five.vercel.app/",
    category: "Site web"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
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
            variants={projectVariants}
          >
            Projets
          </motion.h2>
          <motion.p
            className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto"
            variants={projectVariants}
          >
            Explorez mon portfolio de projets et de solutions innovantes
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative bg-[hsl(var(--card))] rounded-xl overflow-hidden 
                       border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]
                       transition-all duration-300"
              variants={projectVariants}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[hsl(var(--background))/60] opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-4 py-2 bg-[hsl(var(--card))] 
                                   text-[hsl(var(--card-foreground))] text-sm rounded-full">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="ml-2 inline-block px-4 py-2 bg-[hsl(var(--primary))] 
                                     text-[hsl(var(--primary-foreground))] text-sm rounded-full">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.live}
                    className="p-2 rounded-full bg-[hsl(var(--secondary))] 
                             text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary-hover))]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[hsl(var(--secondary))] 
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