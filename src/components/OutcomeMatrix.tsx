import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OutcomeMatrix() {
  const headers = ['Pillar', 'Streamline', 'Cut Costs', 'Automate/Digitize', 'Scale', 'Compliance'];

  const rows = [
    {
      pillar: 'SOP Excellence',
      outcomes: ['Fewer handoffs', 'Less rework', 'SOP→tool linking', 'Repeatable playbooks', 'Version control']
    },
    {
      pillar: 'Team Development',
      outcomes: ['Faster TTP', 'Less shadowing', 'Auto role paths', 'Mastery across roles', 'Mandatory certs']
    },
    {
      pillar: 'Client Onboarding',
      outcomes: ['Smooth flow', 'Lower hrs/client', 'Playbook automation', 'Faster TTV', 'Onboarding evidence']
    },
    {
      pillar: 'Platform & Automation',
      outcomes: ['Single hub', 'Tool consolidation', 'Enroll/nudge/recert', 'Scalable infra', 'SSO & logs']
    },
    {
      pillar: 'Governance & Analytics',
      outcomes: ['Clear owners', 'Visibility into waste', 'SLA alerts', 'Exec dashboards', 'Audit trails']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Search className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            How OERI Maps to Real Business Outcomes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                  {headers.map((header, index) => (
                    <motion.th
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider"
                    >
                      {header}
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
                    whileHover={{ backgroundColor: '#EFF6FF' }}
                    className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors cursor-pointer`}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900 border-r-2 border-gray-200">
                      {row.pillar}
                    </td>
                    {row.outcomes.map((outcome, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 text-gray-700 text-sm"
                      >
                        {outcome}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
