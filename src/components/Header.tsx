import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">OERI</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Solutions
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </motion.a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-600/30"
          >
            Start Assessment
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
