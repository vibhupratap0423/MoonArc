'use client'

import { Target, BarChart3, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  {
    icon: <Target className="text-pink-400 w-10 h-10" />,
    title: 'Precision Targeting',
    desc: 'Advanced AI-powered audience segmentation ensures every dollar reaches your ideal customer at the perfect moment.',
    delay: 0.1,
  },
  {
    icon: <BarChart3 className="text-purple-400 w-10 h-10" />,
    title: 'Data-Driven Results',
    desc: 'Real-time analytics and conversion optimization that turns insights into revenue-generating actions.',
    delay: 0.3,
  },
  {
    icon: <Zap className="text-yellow-400 w-10 h-10" />,
    title: 'Lightning Fast',
    desc: 'Rapid deployment and optimization cycles that get you results in weeks, not months.',
    delay: 0.5,
  }
]

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0e1525] text-white py-20 px-6 md:px-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-2">Why Industry Leaders Choose Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We do not just run campaigns—we architect digital ecosystems that turn your audience into loyal customers and brand advocates.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#1f263f] rounded-xl p-6 shadow-md hover:shadow-purple-700/30 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{card.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
