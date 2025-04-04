import React from 'react';
import { Scissors, Clock, Sparkles, Award, Star } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => (
  <div className="p-8 rounded-2xl glass-card hover-card border border-zinc-800/50">
    <div className="w-12 h-12 text-rose-500 mb-6">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <ul className="mt-6 space-y-2 text-gray-400">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Clock className="w-4 h-4 text-rose-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Scissors />,
      title: 'Wedding Film Editing',
      description: 'Transform your wedding footage into an emotional cinematic journey that tells your love story.',
      features: [
        '48-hour preview delivery',
        'Custom color grading',
        'Licensed music selection'
      ]
    },
    {
      icon: <Star />,
      title: 'Mitzvah Highlights',
      description: 'Create memorable highlight reels that capture the essence of this special celebration.',
      features: [
        'Same-day edit available',
        'Multiple delivery formats',
        'Social media optimization'
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-8 lg:px-16 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
