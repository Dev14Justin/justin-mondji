// import { motion } from 'framer-motion';
// import type { Variants } from 'framer-motion';
// import { 
//   SiTailwindcss, 
//   SiReact, 
//   SiLaravel, 
//   SiNextdotjs, 
//   SiMysql, 
//   SiMongodb, 
//   SiGithub, 
//   SiFlutter,
//   SiFirebase,
//   SiWordpress
// } from 'react-icons/si';

// interface StackItem {
//   icon: React.ComponentType;
//   name: string;
//   description: string;
//   color: string;
// }

// const stacks: StackItem[] = [
//   {
//     icon: SiReact,
//     name: 'React',
//     description: 'Bibliothèque JavaScript pour créer des interfaces utilisateurs',
//     color: '#61DAFB'
//   },
//   {
//     icon: SiTailwindcss,
//     name: 'Tailwind CSS',
//     description: 'Framework CSS utilitaire pour un design rapide et flexible',
//     color: '#06B6D4'
//   },
//   {
//     icon: SiLaravel,
//     name: 'Laravel',
//     description: 'Framework PHP robuste pour des applications web modernes',
//     color: '#FF2D20'
//   },
//   {
//     icon: SiNextdotjs,
//     name: 'Next.js',
//     description: 'Framework React pour la production avec SSR et SSG',
//     color: '#000000'
//   },
//   {
//     icon: SiMysql,
//     name: 'MySQL',
//     description: 'Système de gestion de base de données relationnelle',
//     color: '#4479A1'
//   },
//   {
//     icon: SiMongodb,
//     name: 'MongoDB',
//     description: 'Base de données NoSQL flexible et scalable',
//     color: '#47A248'
//   },
//   {
//     icon: SiGithub,
//     name: 'GitHub',
//     description: 'Plateforme de versioning et collaboration de code',
//     color: '#181717'
//   },
//   {
//     icon: SiFlutter,
//     name: 'Flutter',
//     description: 'SDK pour développer des applications multiplateformes',
//     color: '#02569B'
//   },
//   {
//     icon: SiFirebase,
//     name: 'Firebase',
//     description: 'Plateforme de développement d\\\'applications mobiles',
//     color: '#FFCA28'
//   },
//   {
//     icon: SiWordpress,
//     name: 'WordPress',
//     description: 'CMS le plus populaire pour la création de sites web',
//     color: '#21759B'
//   }
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const itemVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100
//     }
//   }
// };

// function About() {
//   return (
//     <section id="about" className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <motion.h2 
//           variants={itemVariants} 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold mb-6 text-center text-[hsl(var(--title))]"
//         >
//           À propos de moi
//         </motion.h2>

//         {/* Main description */}
//         <motion.p 
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-16 text-center"
//         >
//           Développeur Full Stack passionné par les nouvelles technologies et l'innovation. 
//           Fort de plusieurs années d'expérience dans le développement web et mobile, 
//           je m'efforce de créer des solutions élégantes et performantes qui répondent 
//           aux besoins spécifiques de chaque projet.
//         </motion.p>

//         {/* Stack section */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-8"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[hsl(var(--title))]">
//             Mes stacks
//           </h3>
//           <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-12 text-center">
//             Découvrez les technologies et outils que j'utilise pour donner vie à vos projets.
//             Mon expertise couvre un large éventail de solutions modernes et robustes.
//           </p>
//         </motion.div>

//         {/* Stack cards */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
//         >
//           {stacks.map((stack, index) => (
//             <motion.div
//               key={stack.name}
//               variants={itemVariants}
//               className="p-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))] transition-colors"
//               style={{
//                 background: `radial-gradient(circle at center, hsl(var(--card)) 0%, hsl(var(--background)) 100%)`
//               }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <div className="flex flex-col items-center text-center gap-3">
//                 <stack.icon 
//                   className="text-4xl mb-2" 
//                   style={{ color: stack.color }}
//                 />
//                 <h4 className="font-medium text-[hsl(var(--card-foreground))]">
//                   {stack.name}
//                 </h4>
//                 <p className="text-sm text-[hsl(var(--muted-foreground))]">
//                   {stack.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default About;