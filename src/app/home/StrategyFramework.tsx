'use client'

import { motion } from 'framer-motion'

const StrategyFramework = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  }

  const funnelSteps = [
    { title: 'AWARENESS', sub: '10,000 Prospects', bg: 'bg-purple-500', text: 'text-white' },
    { title: 'INTEREST', sub: '3,000 Engaged', bg: 'bg-purple-500', text: 'text-white' },
    { title: 'CONSIDERATION', sub: '1,000 Qualified', bg: 'bg-purple-500', text: 'text-white' },
    { title: 'CONVERSION', sub: '300 Customers', bg: 'bg-purple-300', text: 'text-black' }
  ]

  return (
    <section className="bg-gradient-to-b from-[#0c1222] to-[#141c33] text-white py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            variants={fadeUp}
            custom={0}
          >
            Our Proven Strategy Framework
          </motion.h2>

          {[
            {
              step: '1 Deep Market Analysis',
              desc: 'We dissect your market, competitors, and audience to identify untapped opportunities.'
            },
            {
              step: '2 Strategic Blueprint',
              desc: 'Custom-crafted marketing funnels designed for maximum conversion at every touchpoint.'
            },
            {
              step: '3 Execution & Optimization',
              desc: 'Continuous testing and refinement to ensure peak performance and ROI.'
            }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1}>
              <p className="text-purple-400 font-bold">{item.step}</p>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Funnel Card */}
        <motion.div
          className="bg-[#1f263f] p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold mb-4 text-center">Marketing Funnel Visualization</h4>
          <div className="space-y-4">
            {funnelSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`rounded-lg text-center py-3 px-4 ${step.bg} ${step.text} shadow-lg`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {step.title}<br />
                <span className="text-sm opacity-80">{step.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StrategyFramework
