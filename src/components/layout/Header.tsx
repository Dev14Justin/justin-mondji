import { motion } from 'framer-motion';

export default function Header() {
  const menuItems = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div className="w-full flex justify-center">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-full md:w-fit md:mt-6 px-6 py-3 bg-[#0A192F]/90 backdrop-blur-md border-b md:border border-white/10 shadow-lg shadow-black/5 md:rounded-full"
        >
          <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12">
          {/* Left Menu Items */}
          <div className="flex gap-4 md:gap-6 flex-1 md:flex-none justify-end">
            {menuItems.slice(0, 2).map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-xs md:text-sm tracking-wider whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Center Avatar */}
          <motion.div
            className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#hero">
              <img
              src="/justin_mondji.jpg"
              alt="Justin Mondji"
              className="w-full h-full object-cover"
              />
            </a>
            
          </motion.div>

          {/* Right Menu Items */}
          <div className="flex gap-4 md:gap-6 flex-1 md:flex-none">
            {menuItems.slice(2).map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-xs md:text-sm tracking-wider whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
      </div>
    </header>
  );
}