import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-0">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo Section */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.jpg" // Place your logo in /public folder
              alt="Moon Arc Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
          <p className="text-gray-600 mt-2">Moon Arc is a forward-thinking digital marketing agency focused on driving real business growth. We specialize in SEO, social media, paid ads, and branding strategies tailored for modern brands. Let us elevate your online presence and turn ideas into impact.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-indigo-600">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-indigo-600">Case Studies</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
          <p className="text-gray-600">📍 123 Digital Avenue, New Delhi, India</p>
          <p className="text-gray-600 mt-2">📞 +91 98765 43210</p>
          <p className="text-gray-600 mt-2">📧 hello@moonarc.in</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Moon Arc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
