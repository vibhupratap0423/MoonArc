'use client'

import { motion } from 'framer-motion'
import { FaGoogle, FaFacebookF, FaMailchimp, FaSearch } from 'react-icons/fa'

const tools = [
  { name: 'Google Analytics', icon: <FaGoogle /> },
  { name: 'Facebook Ads', icon: <FaFacebookF /> },
  { name: 'Canva Pro', icon: 'C' },  
  { name: 'Mailchimp', icon: <FaMailchimp /> },
  { name: 'SEMrush', icon: <FaSearch /> },
  { name: 'Zapier', icon: 'Z' }         
]

const ToolsTech = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-purple-700">
          Cutting-Edge Tools & Technologies
        </h2>
        <p className="text-gray-700">
          We leverage the most advanced marketing technologies to deliver superior results
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm font-medium text-gray-800">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-200 transition duration-300 shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl text-purple-700">{tool.icon}</div>
            <span className="text-black">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ToolsTech
