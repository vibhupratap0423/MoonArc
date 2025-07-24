'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AboutUsPage = () => {
  return (
    <main className="bg-gradient-to-br from-[#0c1222] to-[#131a2e] text-white">

      {/* Section 1: We’re Not Just Another Agency */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We&apos;re Not Just Another <span className="text-purple-400">Agency</span>
            </h1>
            <p className="text-gray-300 mb-6">
              We are growth hackers, data scientists, and creative visionaries who live and breathe digital marketing.
              Our mission is simple: turn your business into an unstoppable force in the digital landscape.
            </p>
            <div className="flex space-x-8 mt-6 text-center">
              <div>
                <p className="text-3xl font-bold text-purple-400">150+</p>
                <p className="text-sm text-gray-400">Brands Transformed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">$50M+</p>
                <p className="text-sm text-gray-400">Revenue Generated</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#1f263f] rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Innovation-First Approach',
                'Transparent Communication',
                'Results-Driven Execution',
                'Long-term Partnerships'
              ].map((value, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-purple-400 text-xl">•</span> {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Meet the Growth Architects */}
      <section className="py-20 px-6 md:px-16 bg-[#0e1525]">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Meet The Growth Architects</h2>
          <p className="text-gray-400">Industry veterans with a track record of turning startups into unicorns</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alex Rodriguez',
              role: 'CEO & Growth Strategist',
              desc: 'Former VP of Growth at 3 unicorn startups. Scaled companies from $1M to $100M+ ARR.',
              emoji: '🧔‍♂️',
            },
            {
              name: 'Sarah Chen',
              role: 'Head of Performance Marketing',
              desc: 'Ex-Google Ads specialist with $50M+ in managed ad spend and 400%+ average ROAS.',
              emoji: '👩‍💻',
            },
            {
              name: 'Marcus Johnson',
              role: 'Creative Director',
              desc: 'Award-winning designer whose campaigns have generated over 100M impressions and viral success.',
              emoji: '👨‍🎨',
            },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-[#1f263f] rounded-xl p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">{member.emoji}</div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-purple-400 text-sm">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Our Story & Mission */}
      <section className="py-20 px-6 md:px-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-6">
            Founded in 2019 by a team of ex-Silicon Valley growth hackers, PurpleEdge Digital was born from
            frustration with traditional agencies that promised the world but delivered mediocre results.
          </p>
          <p className="text-gray-300 mb-10">
            We&apos;ve since helped over 150 companies achieve explosive growth, from bootstrapped startups to
            Fortune 500 enterprises. Our secret? We don&apos;t just execute campaigns—we become an extension of your
            team, obsessing over your success as much as you do.
          </p>

          <motion.div
            className="bg-[#1f263f] rounded-2xl p-6 shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To democratize world-class digital marketing and make explosive growth accessible to every
              ambitious business, regardless of size or budget.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

export default AboutUsPage
