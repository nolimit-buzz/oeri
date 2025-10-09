import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

export default function Deliverables() {
  const deliverables = [
    'Overall OERI Readiness Score',
    'Benchmark vs industry leaders & peers',
    'Pillar-by-pillar analysis',
    'Quick wins tailored to your intent (streamline, cut cost, automate, scale, compliance)',
    'ROI forecast (time saved, costs reduced, risks avoided)',
    'A board-ready PDF report'
  ];

  const radarData = [
    { category: 'Strategy', yourCompany: 85, industryAvg: 68, topPerformers: 95 },
    { category: 'Process', yourCompany: 78, industryAvg: 65, topPerformers: 92 },
    { category: 'Technology', yourCompany: 82, industryAvg: 70, topPerformers: 94 },
    { category: 'People', yourCompany: 80, industryAvg: 72, topPerformers: 93 },
    { category: 'Governance', yourCompany: 84, industryAvg: 66, topPerformers: 96 },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Personalized Report Includes:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200 shadow-lg"
            >
              <h3 className="text-base font-bold text-gray-900 mb-4">Benchmark Comparison</h3>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <defs>
                      <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#fed7aa" stopOpacity={0.6}/>
                      </linearGradient>
                    </defs>
                    <PolarGrid stroke="#d1d5db" strokeWidth={1} />
                    <PolarAngleAxis
                      dataKey="category"
                      tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      stroke="#d1d5db"
                    />
                    <Radar
                      name="Your Company"
                      dataKey="yourCompany"
                      stroke="#ea580c"
                      fill="url(#radarGradient)"
                      fillOpacity={0.7}
                      strokeWidth={2.5}
                      dot={{ fill: '#ea580c', r: 4 }}
                    />
                    <Radar
                      name="Industry Avg"
                      dataKey="industryAvg"
                      stroke="#9ca3af"
                      fill="#9ca3af"
                      fillOpacity={0.15}
                      strokeWidth={2}
                      dot={{ fill: '#9ca3af', r: 3 }}
                    />
                    <Radar
                      name="Top Performers"
                      dataKey="topPerformers"
                      stroke="#6b7280"
                      fill="transparent"
                      fillOpacity={0}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#6b7280', r: 3 }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: '12px', fontWeight: 500, paddingTop: '16px' }}
                      iconType="circle"
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 border border-green-100"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-900">Your OERI Score</h3>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="text-3xl font-bold text-green-600"
                >
                  82
                </motion.div>
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                    className={`flex-1 h-2 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-200'} origin-left`}
                  ></motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-900">OERI Report</h3>
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-2 bg-blue-200 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-2 bg-blue-200 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '66%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-2 bg-blue-200 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/40 inline-flex items-center gap-2"
          >
            Get My Free Report
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
