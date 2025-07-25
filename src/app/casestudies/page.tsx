'use client';
import React from 'react';

const CaseStudiesPage = () => {
  return (
    <main className="bg-white text-black">

      {/* Section 1: Intro */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">
          Success <span className="text-purple-800">Stories</span> That Inspire
        </h1>
        <p className="text-black max-w-2xl mx-auto">
          Real results from real businesses. See how we&apos;ve transformed companies across industries with our proven growth strategies.
        </p>
      </section>

      {/* Section 2: Featured Case */}
      <section className="px-6 md:px-16 pb-16">
        <div className="bg-gray-100 p-8 rounded-2xl grid md:grid-cols-2 gap-10 shadow">
          <div>
            <p className="text-sm font-bold text-purple-600 uppercase mb-2">Featured Success Story</p>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              TechStart SaaS: From $0 to $2M ARR in 18 Months
            </h2>
            <p className="text-black mb-6">
              A B2B SaaS startup struggling to find product-market fit. We implemented a comprehensive growth strategy that resulted in explosive revenue growth.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-green-600 text-2xl font-bold">2,400%</p>
                <p className="text-sm text-black">Revenue Growth</p>
              </div>
              <div>
                <p className="text-green-600 text-2xl font-bold">850%</p>
                <p className="text-sm text-black">Lead Generation</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <div className="bg-gray-200 p-4 rounded-md">
              <p className="font-bold text-purple-700">Challenge</p>
              <p className="text-black">
                Low brand awareness, poor conversion rates, and limited marketing budget
              </p>
            </div>
            <div className="bg-purple-600 text-white p-4 rounded-md">
              <p className="font-bold">Solution</p>
              <p>Multi-channel growth strategy with focus on content marketing and paid acquisition</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-md">
              <p className="font-bold">Result</p>
              <p>$2M ARR, 500+ enterprise customers, successful Series A funding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: More Success Cases */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: '🛍️',
              title: 'E-commerce Fashion Brand',
              desc: 'Increased online sales by 450% through strategic social media advertising and influencer partnerships.',
              stats: ['Revenue Increase: +450%', 'ROAS: 6.2x', 'Customer Acquisition: +320%'],
            },
            {
              emoji: '🧪',
              title: 'Healthcare Startup',
              desc: 'Generated 10,000+ qualified leads and achieved 40% market share in target region within 12 months.',
              stats: ['Lead Generation: 10,000+', 'Market Share: 40%', 'Cost per Lead: -65%'],
            },
            {
              emoji: '🏠',
              title: 'Real Estate Platform',
              desc: 'Scaled from local to national presence with 200% increase in property listings and transactions.',
              stats: ['Property Listings: +200%', 'Transactions: +180%', 'Expansion: 15 Cities'],
            },
          ].map((item) => (
            <div key={item.title} className="bg-gray-100 p-6 rounded-xl shadow">
              <p className="text-2xl">{item.emoji}</p>
              <h3 className="font-bold text-lg mb-2 text-purple-700">{item.title}</h3>
              <p className="text-sm text-black mb-4">{item.desc}</p>
              <ul className="text-sm text-green-600 space-y-1">
                {item.stats.map((s) => <li key={s}>✔ {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="px-6 md:px-16 py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-2 text-purple-600">What Our Clients Say</h2>
        <p className="text-black mb-12">
          Don&apos;t just take our word for it—hear from the businesses we&apos;ve transformed
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              name: 'Sundar Singh ',
              title: 'CEO, TechStart SaaS',
              review: 'PurpleEdge Digital didn\'t just help us grow—they transformed our entire business. Their strategic approach and execution excellence took us from struggling startup to industry leader.',
            },
            {
              name: 'Bhawna Rawat',
              title: 'Founder, StyleHub Fashion',
              review: 'The ROI we\'ve achieved with PurpleEdge is incredible. They understand our brand, our customers, and most importantly, how to drive real business results.',
            },
            {
              name: 'Dr. Vibhu Pratap',
              title: 'CMO, HealthTech Solutions',
              review: 'Working with PurpleEdge has been a game-changer. Their data-driven approach and creative execution helped us dominate our market in record time.',
            },
            {
              name: 'MD Alam',
              title: 'VP Marketing, PropTech Inc',
              review: 'The team at PurpleEdge doesn\'t just deliver campaigns—they deliver growth. Their strategic thinking and flawless execution have exceeded every expectation.',
            },
          ].map((client) => (
            <div key={client.name} className="bg-gray-100 p-6 rounded-xl shadow">
              <div className="text-3xl mb-2">🧑‍💼</div>
              <h4 className="text-lg font-semibold text-purple-700">{client.name}</h4>
              <p className="text-sm text-purple-600 mb-2">{client.title}</p>
              <p className="text-black text-sm mb-3">{client.review}</p>
              <div className="text-yellow-500 text-lg">★★★★★</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
