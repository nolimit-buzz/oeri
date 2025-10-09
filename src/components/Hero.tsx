import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Hero() {
  const intents = [
    'Streamline Operations',
    'Cut Costs',
    'Automate/Digitize',
    'Scale Confidently',
    'Meet Compliance Standards'
  ];

  const areaDataGreen = [
    { value: 20 },
    { value: 28 },
    { value: 25 },
    { value: 35 },
    { value: 32 },
    { value: 42 },
    { value: 45 }
  ];

  const areaDataRed = [
    { value: 35 },
    { value: 28 },
    { value: 32 },
    { value: 25 },
    { value: 28 },
    { value: 22 },
    { value: 20 }
  ];

  const pieData = [
    { value: 89 },
    { value: 11 }
  ];

  const COLORS = ['#A5B4FC', '#FCA5A5'];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-blue-50">
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative min-h-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="absolute top-[5%] left-[2%] hidden lg:block w-[180px] bg-white rounded-3xl shadow-sm p-3.5 hover:shadow-md transition-shadow z-10"
        >
          <div className="mb-2">
            <p className="text-3xl font-bold text-gray-900">40%</p>
            <p className="text-xs text-gray-500">Faster Onboarding</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="absolute top-[5%] right-[2%] hidden lg:block w-[180px] bg-white rounded-3xl shadow-sm p-3.5 hover:shadow-md transition-shadow z-10"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">3x</p>
            <p className="text-xs text-gray-500">Productivity<br/>Increase</p>
          </div>
        </motion.div>

       
{/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 relative z-20"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600">Trusted by thousands of SDRs, BDRs, Sales Ops, Team Leads & more</span>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6 relative z-20"
        >
          <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
            NO.1 LMS SOLUTION FOR SOP MANAGEMENT & TRAINING
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Transform Your SOPs</span>
            <br />
            <span className="text-gray-900">Into Powerful </span>
            <span className="text-blue-600">Learning Experiences</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-8 leading-relaxed relative z-20"
        >
          Take the OERI Assessment to discover how our LMS platform can turn your Standard Operating Procedures into engaging training modules that boost employee productivity and client satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-20"
        >
          <button 
            onClick={() => window.location.href = '/assessment'}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-gray-200 hover:border-gray-300 flex items-center gap-2 cursor-pointer">
            View Demo
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500 mb-12 relative z-20"
        >
          Free assessment. 5 minutes. Instant LMS readiness report.
        </motion.p>


        <div className="lg:hidden relative max-w-6xl mx-auto h-[400px] md:h-[300px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="absolute top-0 left-0 md:left-[5%] w-full md:w-[280px] bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1 font-medium">Average Sales</p>
                <p className="text-xs text-gray-400">Last Month</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">$20,560</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <p className="text-xs text-green-600 font-semibold">+12%</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={70}>
              <AreaChart data={areaDataGreen}>
                <defs>
                  <linearGradient id="colorAreaGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={3}
                  fill="url(#colorAreaGreen)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="absolute top-[140px] md:top-[40px] right-0 md:right-[8%] w-full md:w-[240px] bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center h-full">
              <div className="relative w-full">
                <ResponsiveContainer width="100%" height={140}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={65}
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">62.02%</p>
                    <p className="text-xs text-gray-500 font-medium">USA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="absolute top-[280px] md:top-[140px] left-0 md:left-[35%] w-full md:w-[300px] bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-900 mb-1 font-bold">Netflix</p>
                <p className="text-xs text-gray-400">Netflix Inc</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">$10,260</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <p className="text-xs text-red-500 font-semibold">-5%</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={70}>
              <AreaChart data={areaDataRed}>
                <defs>
                  <linearGradient id="colorAreaRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#EF4444"
                  strokeWidth={3}
                  fill="url(#colorAreaRed)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div> */}
        </div>
<div className='flex justify-center items-center gap-8'>
  <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="relative -left-[5%] block w-[302px] bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition-shadow z-10"
        >
          <div className="mb-4">
          <p className="text-sm text-gray-900 mb-1 font-bold">Training Efficiency</p>
          <p className="text-xs text-gray-400 mb-2">Last Quarter</p>
          </div>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="100%" height={50}>
              <AreaChart data={areaDataGreen}>
                <defs>
                  <linearGradient id="colorAreaGreenSmall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#colorAreaGreenSmall)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">92%</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <p className="text-xs text-green-600 font-semibold">+18%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className=" relative top-10 block w-[184px] bg-white rounded-3xl shadow-sm p-5 hover:shadow-md transition-shadow z-10"
        >
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1 max-w-[100px]">SOP Compliance</p>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="relative -right-[5%] block w-[343px] bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow z-10"
        >
          <div className="mb-4">
            <p className="text-sm text-gray-900 mb-1 font-bold">Time to Competency</p>
            <p className="text-xs text-gray-400 mb-2">New Hires</p>
          </div>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="70%" height={50}>
              <AreaChart data={areaDataRed}>
                <defs>
                  <linearGradient id="colorAreaRedSmall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#colorAreaRedSmall)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">45 days</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <p className="text-xs text-green-600 font-semibold">-30%</p>
              </div>
            </div>
          </div>
        </motion.div></div>
      </div>
      
    </section>
  );
}
