'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  return (
    <main className="bg-white text-black">
      
      {/* Section 1: Services Overview */}
      <motion.section
        className="px-6 md:px-16 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">
          Services That <span className="text-purple-800">Scale</span> Businesses
        </h1>
        <p className="text-black max-w-3xl mx-auto mb-12">
          From startup launch to enterprise expansion, we offer comprehensive digital marketing solutions that drive measurable growth at every stage of your journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              emoji: '🚀',
              title: 'Growth Marketing',
              desc: 'End-to-end growth strategies that turn your business into a customer acquisition machine.',
              bullets: ['Conversion Rate Optimization', 'A/B Testing & Analytics', 'Customer Journey Mapping']
            },
            {
              emoji: '📱',
              title: 'Paid Advertising',
              desc: 'High-performance ad campaigns across all major platforms with guaranteed ROI.',
              bullets: ['Google Ads Management', 'Facebook & Instagram Ads', 'LinkedIn B2B Campaigns']
            },
            {
              emoji: '🎯',
              title: 'SEO & Content',
              desc: 'Dominate search results and establish thought leadership in your industry.',
              bullets: ['Technical SEO Audits', 'Content Strategy & Creation', 'Link Building Campaigns']
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-purple-300 transition-all"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl mb-2">{service.emoji}</p>
              <h3 className="text-xl font-bold mb-2 text-purple-600">{service.title}</h3>
              <p className="text-black mb-4">{service.desc}</p>
              <ul className="text-sm text-black space-y-1 list-disc list-inside">
                {service.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 2: Social Media ROI */}
      <motion.section
        className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Social Media Marketing</h2>
          <p className="text-black mb-4">
            Build a community of brand advocates and turn social media into your most powerful sales channel.
          </p>
          <ul className="text-sm text-black space-y-2 list-disc list-inside">
            <li>Platform-specific content strategies</li>
            <li>Influencer partnership programs</li>
            <li>Community management & engagement</li>
            <li>Social commerce optimization</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl p-6 text-sm space-y-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Social Media ROI</h3>
          {[
            ['Engagement Rate', '+340%'],
            ['Follower Growth', '+250%'],
            ['Social Traffic', '+180%'],
            ['Conversion Rate', '+120%']
          ].map(([label, value]) => (
            <div className="flex justify-between text-black" key={label}>
              <span>{label}</span>
              <span className="text-purple-600 font-bold">{value}</span>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section 3: Email Marketing Automation */}
      <motion.section
        className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-gray-100 rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-purple-600">Email Marketing Performance</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: '45%', label: 'Open Rate' },
              { title: '12%', label: 'Click Rate' },
              { title: '8.5%', label: 'Conversion' },
              { title: '$42', label: 'ROI per $1' },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="bg-purple-600 text-white rounded-md py-4 text-center font-bold hover:bg-purple-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                {item.title}
                <div className="text-sm font-normal">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Email Marketing Automation</h2>
          <p className="text-black mb-4">
            Nurture leads and maximize customer lifetime value with sophisticated email marketing campaigns.
          </p>
          <ul className="text-sm text-black space-y-2 list-disc list-inside">
            <li>Advanced segmentation & personalization</li>
            <li>Automated drip campaigns</li>
            <li>Behavioral trigger sequences</li>
            <li>A/B testing & optimization</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Section 4: Investment Plans */}
      <motion.section
        className="px-6 md:px-16 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-2 text-purple-600">Investment Plans</h2>
        <p className="text-black mb-12">Choose the growth package that fits your ambition</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              name: 'Startup Accelerator',
              price: '$2,500/month',
              features: ['2 Marketing Channels', 'Monthly Strategy Sessions', 'Performance Dashboard', 'Email Support'],
              button: 'Get Started',
            },
            {
              name: 'Growth Engine',
              price: '$5,000/month',
              tag: 'MOST POPULAR',
              features: ['4 Marketing Channels', 'Weekly Strategy Sessions', 'Advanced Analytics', 'Priority Support', 'Creative Assets'],
              button: 'Start Growing',
              highlight: true,
            },
            {
              name: 'Enterprise Scale',
              price: '$10,000/month',
              features: ['Unlimited Channels', 'Daily Optimization', 'Custom Reporting', 'Dedicated Account Manager', '24/7 Support'],
              button: 'Contact Sales',
            },
          ].map((plan,) => (
            <motion.div
              key={plan.name}
              className={`rounded-xl p-6 bg-gray-100 border relative ${
                plan.highlight ? 'border-purple-500' : 'border-transparent'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-purple-600">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4 text-purple-600">{plan.price}</p>
              <ul className="text-sm text-black space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

export default ServicesPage
