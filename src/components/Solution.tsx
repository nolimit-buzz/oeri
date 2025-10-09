import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solution() {
  const benefits = [
    { text: 'Assess Your SOP-to-LMS Conversion Potential', col: 1 },
    { text: 'Identify Training Content Gaps', col: 1 },
    { text: 'Get Personalized LMS Implementation Plan', col: 2 },
    { text: 'Discover Employee & Client Training Opportunities', col: 2 }
  ];

  const stats = [
    { value: '500+', label: 'SOPs Converted to Training' },
    { value: '5min', label: 'Assessment Time' },
    { value: '5', label: 'LMS Readiness Pillars' }
  ];

  const metrics = [
    { label: 'SOP Maturity', value: 75.2 },
    { label: 'Training Quality', value: 56.7 },
    { label: 'Onboarding Flow', value: 48.6 },
    { label: 'Documentation', value: 39.7 }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Discover Your LMS Readiness in 5 Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            Get instant insights into how well your organization can convert SOPs into engaging training content. Discover exactly what LMS features you need to maximize employee engagement and client satisfaction.
          </p>

          {/* Benefits with Checkmarks in 2 columns - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 justify-center md:justify-start"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-900 font-normal text-base leading-snug">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
