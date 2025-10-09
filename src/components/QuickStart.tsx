import { Zap, Grid3x3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuickStart() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-gray-600">Get started in minutes.</p>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-3xl p-12 flex items-center justify-center"
            >
              <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="text-6xl font-bold text-white">O</span>
              </div>
            </motion.div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Grid3x3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Automation</h3>
                <p className="text-gray-600">Reduce manual workload.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Boost Your Business with OERI!
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Streamline workflows, automate tasks, and drive growth—all in one platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/40 inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
