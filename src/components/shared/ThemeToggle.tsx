import { motion } from 'framer-motion';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed z-50 bottom-80 right-6 p-1 rounded-full
                bg-white/90 dark:bg-zinc-800/90 shadow-lg backdrop-blur-sm
                hover:bg-gray-100 dark:hover:bg-zinc-700/90 
                border border-gray-200 dark:border-zinc-700
                transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-primary-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Basculer vers le mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      {theme === 'light' ? (
        <BsMoonStarsFill className="w-5 h-5 text-zinc-800" />
      ) : (
        <BsSunFill className="w-5 h-5 text-yellow-400" />
      )}
    </motion.button> 
  );
}