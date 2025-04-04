import React, { useEffect, useState } from 'react';
import { Film, Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const menuItems = [
  { id: 'services', label: 'SERVICES' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'about', label: 'ABOUT' },
  { id: 'pricing', label: 'PRICING' },
  { id: 'contact', label: 'CONTACT' }
];

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'py-6'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/"
            onClick={(e) => handleNavigation(e, '/')}
            className="group flex items-center space-x-3 hover:opacity-90 transition-all duration-300"
          >
            <Film className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl sm:text-2xl font-bold tracking-wider group-hover:text-rose-500 transition-colors duration-300">
              4688 Post-Productions
            </span>
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:scale-105"
            aria-expanded={isMenuOpen}
          >
            <span className="text-sm font-medium hidden sm:block">MENU</span>
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div className={`
          mt-4 transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-2 px-2 bg-black/50 backdrop-blur-sm rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {menuItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavigation(e, `#${id}`)}
                  className="w-full py-3 px-4 text-sm font-medium text-center rounded-lg
                    hover:bg-rose-500 hover:scale-105 transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
