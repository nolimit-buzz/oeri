import { BarChart3, Clock, DollarSign, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

export default function ROI() {
  const impacts = [
    {
      icon: Clock,
      value: '30-50%',
      label: 'faster staff onboarding (TTP)',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      value: '25-40%',
      label: 'faster client Time-to-Value (TTV)',
      color: 'green'
    },
    {
      icon: DollarSign,
      value: '50%',
      label: 'reduction in admin workload through automation',
      color: 'orange'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'improved compliance readiness with tracked SOPs',
      color: 'violet'
    }
  ];

  const barData = [
    { name: 'Before', value: 40 },
    { name: 'After', value: 85 }
  ];

  const colorClasses = {
    blue: 'from-blue-50 to-white border-blue-200',
    green: 'from-green-50 to-white border-green-200',
    orange: 'from-orange-50 to-white border-orange-200',
    violet: 'from-violet-50 to-white border-violet-200'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-blue-600',
    orange: 'text-blue-600',
    violet: 'text-blue-600'
  };

  const valueColorClasses = {
    blue: 'text-blue-600',
    green: 'text-blue-600',
    orange: 'text-blue-600',
    violet: 'text-blue-600'
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Measurable Impact of Readiness
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${colorClasses[impact.color as keyof typeof colorClasses]} border-2 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer`}
              >
                <Icon className={`w-10 h-10 ${iconColorClasses[impact.color as keyof typeof iconColorClasses]} mb-4`} />
                <p className={`text-4xl font-bold ${valueColorClasses[impact.color as keyof typeof valueColorClasses]} mb-2`}>
                  {impact.value}
                </p>
                <p className="text-gray-700 font-medium text-sm">{impact.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Performance Improvement
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
              <YAxis tick={{ fill: '#6B7280' }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#F59E0B' : '#10B981'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <p className="text-3xl md:text-4xl font-bold mb-2">
            Efficiency is the new growth.
          </p>
          <p className="text-xl md:text-2xl opacity-90">
            OERI shows you where to save first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
