import { motion } from 'framer-motion';

export default function Clients() {
  const clients = [
    {
      name: "TechCorp Solutions",
      logo: "TechCorp"
    },
    {
      name: "FinanceFirst Group",
      logo: "FinanceFirst"
    },
    {
      name: "HealthCare Plus",
      logo: "HealthCare Plus"
    },
    {
      name: "EduTech Global",
      logo: "EduTech"
    },
    {
      name: "RetailMax Inc",
      logo: "RetailMax"
    },
    {
      name: "ManufacturingPro",
      logo: "ManufacturingPro"
    },
    {
      name: "StartupFlow",
      logo: "StartupFlow"
    }
  ];

  return (
    <section className="pt-8 pb-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Trusted by 500+ companies, including:
          </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
                className="text-lg font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                {client.logo}
            </motion.div>
          ))}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 max-w-4xl mx-auto"
        >
          OERI is not affiliated, or endorsed, with any of these platforms. All trademarks remain property of their respective owners.
        </motion.p>
      </div>
    </section>
  );
}
