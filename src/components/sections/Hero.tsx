import { motion, type Variants } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { HiOutlineCode, HiOutlineDesktopComputer, HiOutlineDeviceMobile } from 'react-icons/hi';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants} 
          className="mb-8 mt-8 relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Rotating gradient border effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 60%)`,
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Image container */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/50 dark:border-primary/50 overflow-hidden p-1 relative
                         backdrop-blur-sm bg-background/30">
            <motion.img
              src="/justin_mondji.jpg"
              alt="Justin Mondji"
              className="w-full h-full rounded-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.p 
          variants={itemVariants}
          className="text-2xl md:text-xl mb-4 text-slate-500 dark:text-[#94A3B8] font-medium italic"
        >
          <i>
            Hello, je suis
          </i>
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--title))]"
        >
          Justin MONDJI 
        </motion.h1> 

        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl mb-6 text-[hsl(var(--subtitle))] font-medium"
        >
          Développeur Full Stack
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-8 text-[hsl(var(--muted-foreground))] dark:text-[#94A3B8] text-lg"
        >
          Passionné par la création d'expériences numériques exceptionnelles. 
          Je combine créativité et expertise technique pour développer des solutions 
          innovantes qui répondent aux besoins de mes clients.
        </motion.p>

        {/* Service Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {[
            { icon: HiOutlineDesktopComputer, title: "Sites Web" },
            { icon: HiOutlineCode, title: "Applications Web" },
            { icon: HiOutlineDeviceMobile, title: "Applications Mobile" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 justify-center">
                <service.icon className="text-[hsl(var(--primary))] text-2xl" />
                <h3 className="text-[hsl(var(--card-foreground))] font-medium">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir mes projets
            <FiArrowRight />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))] text-[hsl(var(--card-foreground))] font-medium flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
            <FiMail />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}