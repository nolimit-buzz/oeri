import { Zap, DollarSign, Bot, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Streamline Operations',
      description: 'Standardize SOPs, cut handoffs, and make every process findable in seconds.',
      color: 'blue'
    },
    {
      icon: DollarSign,
      title: 'Cut Costs',
      description: 'Reduce wasted admin hours, consolidate tools, and minimize rework.',
      color: 'green'
    },
    {
      icon: Bot,
      title: 'Automate/Digitize',
      description: 'Put onboarding and training on rails — auto-enrollments, nudges, recerts, reminders.',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      title: 'Scale Confidently',
      description: 'Replicate excellence across teams with consistent onboarding and training.',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'Meet Compliance Standards',
      description: 'Ensure every SOP, course, and policy is tracked, updated, and audit-ready.',
      color: 'violet'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-50 to-white border-blue-200 hover:border-blue-400',
    green: 'from-green-50 to-white border-green-200 hover:border-green-400',
    orange: 'from-orange-50 to-white border-orange-200 hover:border-orange-400',
    pink: 'from-pink-50 to-white border-pink-200 hover:border-pink-400',
    violet: 'from-violet-50 to-white border-violet-200 hover:border-violet-400'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-blue-600',
    orange: 'text-blue-600',
    pink: 'text-blue-600',
    violet: 'text-blue-600'
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pick Your Priority — The Assessment Adapts to You
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses]} border-2 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`w-12 h-12 ${iconColorClasses[benefit.color as keyof typeof iconColorClasses]} mb-4`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
