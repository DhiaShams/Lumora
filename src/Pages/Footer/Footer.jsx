import React from "react";
import { Instagram, Linkedin, Phone, MapPin } from "lucide-react"; 
import { FaWhatsapp } from "react-icons/fa6";
import lumora from "../../assets/title.png";

const Footer = () => {
  const contactLeads = [
    { name: 'FIDHA AHAMED', number: '+91 88912 36906' },
    { name: 'EVIN BRIJESH', number: '+91 70124 87465' }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/dsc_mace/', label: 'Instagram' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/gdgmaceoncampus/', label: 'LinkedIn' },
    { icon: FaWhatsapp, url: 'https://chat.whatsapp.com/HfLqLarHMzlKgvVBkLdsQm?mode=hqrt3', label: 'WhatsApp' }
  ];

  return (
    <footer className="relative overflow-hidden bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(83, 184, 201, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(83, 184, 201, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-12 px-4 md:px-8">
        {/* Contact Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wide">
            Contact Us
          </h2>
          {/* Updated divider color */}
          <div className="w-24 h-1 bg-[#53b8c9] dark:bg-[#78b7c2] mx-auto mt-3 rounded-full" />
        </div>

        {/* Contact Leads */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto mb-10">
          {contactLeads.map((lead, i) => (
            <div
              key={i}
              className="text-center md:text-left transition-transform hover:scale-105 duration-300"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {/* Updated Icon Color */}
                <Phone className="text-[#53b8c9] dark:text-[#78b7c2]" size={20} />
                <span>{lead.name}</span>
              </div>
              <a 
                href={`tel:${lead.number.replace(/\s/g, '')}`}
                // Updated Link Color
                className="text-[#53b8c9] dark:text-[#78b7c2] font-mono text-sm tracking-wide hover:underline"
              >
                {lead.number}
              </a>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="flex justify-center mb-8 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-2 max-w-xs md:max-w-none">
            {/* Added mt-1 to align icon with the first line of text visually */}
            <MapPin className="text-[#53b8c9] dark:text-[#78b7c2] flex-shrink-0 mt-1" size={18} />
            <a
              href="https://www.google.com/maps/place/Mar+Athanasius+College+of+Engineering+Kothamangalam/@10.053937,76.6193309,17z/data=!3m1!4b1!4m6!3m5!1s0x3b07e6154a2133e5:0x2c26b2d532bb30ea!8m2!3d10.053937!4d76.6193309!16zL20vMDR0ejJ6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#53b8c9] dark:hover:text-[#78b7c2] transition-colors text-center"
            >
              Mar Athanasius College of Engineering, Kothamangalam
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {socialLinks.map(({ icon: Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#53b8c9] dark:bg-[#78b7c2] text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Brand Logo */}
        <div className="text-center mb-6">
          <img
            src={lumora}
            alt="Lumora"
            className="mx-auto w-48 md:w-64 h-auto select-none opacity-90 dark:opacity-80"
            draggable={false}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 py-4 border-t border-gray-300/50 dark:border-[#53b8c9]/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            © 2026 Lumora Team. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;