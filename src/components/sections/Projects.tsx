import { motion } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa';

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
    tech: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Next.js", "PostgreSQL"],
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
  },
  {
    title: "Cave à Vin Le Bourgeios",
    description: "La cave du Bourgeios est une plateforme e-commerce développée pour la vente en ligne de vins haut de gamme. L’interface intègre un tableau de bord administrateur pour la gestion des produits et des commandes.", 
    image: "/bourgeois.jpg",
    tech: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    live: "#",
    category: "Site web"
  },
  {
    title: "TechStore",
    description: "Boutique en ligne Premium d'Outils IA et Formations Digitales regroupant Logiciels exclusifs, templates professionnels, formations expertes et accompagnement sur-mesure.", 
    image: "/techstore.jpg",
    tech: ["Wordpress"],
    live: "https://dev-numerique-academy.pantheonsite.io/",
    category: "Site web"
  },
]

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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<any | null>(null);

  const openModal = (project: any) => { setModalProject(project); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setModalProject(null); };

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
            className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--title))] text-center flex items-center justify-center gap-3"
            variants={projectVariants}
          >
            <FaCode className="w-8 h-8" /> Projets
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
              className="group relative bg-[hsl(var(--card))] rounded-xl mx-0 overflow-hidden 
                       border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]
                       transition-all duration-300"
              variants={projectVariants}
            >
              <div className="relative aspect-[18/9] overflow-hidden">
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
                  {project.status ? (
                    <motion.button
                      type="button"
                      onClick={() => openModal(project)}
                      className="p-2 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary-hover))]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Ouvrir ${project.title} - en développement`}
                    >
                      <FiExternalLink size={20} />
                    </motion.button>
                  ) : (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary-hover))]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
                <p className="text-[hsl(var(--muted-foreground))] mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
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

        {modalOpen && modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative z-10 max-w-lg mx-4 w-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">{modalProject.title}</h3>
                <button onClick={closeModal} aria-label="Fermer" className="text-[hsl(var(--muted-foreground))]">
                  <FiX size={20} />
                </button>
              </div>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">Cette plateforme est actuellement en développement. Revenez bientôt pour découvrir les nouveautés.</p>
              <div className="flex justify-end">
                <button onClick={closeModal} className="px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md">Fermer</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}