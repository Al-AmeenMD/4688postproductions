import React, { useEffect, useState } from 'react';
import { Film, Scissors, Play, Star, Clapperboard, Mail, Instagram, Linkedin, Facebook, ChevronDown, Award, Clock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { ErrorBoundary } from './components/error/ErrorBoundary';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <header className="relative h-screen">
          <div className="absolute inset-0">
            <video 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover opacity-40"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src="https://player.vimeo.com/external/403155936.sd.mp4?s=86cdad3d7d23f68fdcb62293a3e2fc2d1d4a6947&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          
          <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Film className="w-8 h-8 text-rose-500 animate-float" />
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <span className="text-2xl font-bold tracking-wider">4688 Post-Productions</span>
                </a>
              </div>
              <div className="hidden md:flex space-x-12 text-sm tracking-wider">
                <a href="#services" className="hover:text-rose-500 transition-colors">SERVICES</a>
                <a href="#portfolio" className="hover:text-rose-500 transition-colors">PORTFOLIO</a>
                <a href="#about" className="hover:text-rose-500 transition-colors">ABOUT</a>
                <a href="#pricing" className="hover:text-rose-500 transition-colors">PRICING</a>
                <a href="#contact" className="hover:text-rose-500 transition-colors">CONTACT</a>
              </div>
            </div>
          </nav>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                Post-Production
                <span className="block text-gradient mt-2">Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto tracking-wide">
                Transforming raw footage into cinematic masterpieces through expert editing and storytelling
              </p>
              <button className="bg-rose-500 text-white px-12 py-5 rounded-full font-semibold hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 tracking-wider shadow-lg hover:shadow-rose-500/25">
                <a 
                  href="#portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#portfolio');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="block"
                >
                  VIEW OUR WORK
                </a>
              </button>
            </div>
            <a href="#services" className="absolute bottom-12 animate-bounce">
              <ChevronDown className="w-8 h-8 text-rose-500" />
            </a>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-32 px-8 lg:px-16 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl glass-card hover-card border border-zinc-800/50">
                <Scissors className="w-12 h-12 text-rose-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Wedding Film Editing</h3>
                <p className="text-gray-400">Transform your wedding footage into an emotional cinematic journey that tells your love story.</p>
                <ul className="mt-6 space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-rose-500 mr-2" />
                    <span>7-10 Days preview delivery</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Custom color grading</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Licensed music selection</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl glass-card hover-card border border-zinc-800/50">
                <Star className="w-12 h-12 text-rose-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Mitzvah Highlights</h3>
                <p className="text-gray-400">Craft memorable highlight reels that capture the joy and significance of this special milestone.</p>
                <ul className="mt-6 space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-rose-500 mr-2" />
                    <span>7-10 Days preview available</span>
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Motion graphics included</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Multiple edit versions</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl glass-card hover-card border border-zinc-800/50">
                <Clapperboard className="w-12 h-12 text-rose-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Color Grading</h3>
                <p className="text-gray-400">Professional color correction and grading to give your videos a cinematic look and feel.</p>
                <ul className="mt-6 space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Custom LUT creation</span>
                  </li>
                  {/* <li className="flex items-center">
                    <Sparkles className="w-4 h-4 text-rose-500 mr-2" />
                    <span>HDR optimization</span>
                  </li> */}
                  <li className="flex items-center">
                    <Award className="w-4 h-4 text-rose-500 mr-2" />
                    <span>Scene matching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section id="portfolio" className="py-32 px-8 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80",
                title: "Kayleen & John",
                category: "Wedding Highlight Film",
                link: "https://vimeo.com/1046792239"
              },
              {
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
                title: "David's Bar Mitzvah",
                category: "Celebration Highlights",
                link: "https://vimeo.com/1046792239"
              },
              {
                image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
                title: "Kayleen & John",
                category: "Cinematic Edit",
                link: "https://vimeo.com/1046792239"
              }
            ].map((item, index) => (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                className="group relative overflow-hidden rounded-lg hover-card block cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <Play className="w-16 h-16 text-rose-500 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://vimeo.com/4688postproductions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-rose-500 rounded-md hover:bg-rose-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              See More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-8 lg:px-16 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">The Art of Editing</h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  At 4688 Post-Productions, we transform raw footage into compelling visual stories. Our expert editing team specializes in crafting emotional narratives that resonate with viewers.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Using industry-leading software and techniques, we ensure every frame is perfectly timed, every transition is smooth, and every moment is enhanced to its fullest potential.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center p-6 rounded-xl glass-card hover-card">
                    <div className="text-4xl font-bold text-rose-500 mb-2">5</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-6 rounded-xl glass-card hover-card">
                    <div className="text-4xl font-bold text-rose-500 mb-2">500+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 rounded-xl glass-card hover-card">
                    <div className="text-4xl font-bold text-rose-500 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80" 
                  alt="Video editing workspace" 
                  className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Packages</h2>
              <p className="text-gray-400 text-lg mb-6">Professional videography packages tailored to your special moments</p>
              <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
            </div>

            {/* Wedding Packages */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                <span className="text-white">Wedding</span> <span className="text-rose-500">Films</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-4">
                {/* Highlight Only */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Highlight Only </h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$265</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>4-6 Minutes Highlight</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Cinematic Highlight Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Professional Editing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
               
                {/* Short Film*/}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Short Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$300</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>8-15 Minutes Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Cinematic Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Professional Editing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Highlight & Short Film */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Highlight & Short Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$400</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Reception Events</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Full Film */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Full Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$300</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>45-90 Minutes Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Reception Events</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Highlight & Full Film */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Highlight & Full Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$400</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Reception Events</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Complete Package */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg relative">
                  <div className="absolute -top-4 right-4 z-10">
                    <div className="bg-rose-500 text-white text-sm px-4 py-1.5 rounded-full font-medium tracking-wide shadow-lg shadow-rose-500/20">Most Popular</div>
                  </div>
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">The Complete Package</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$500</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Highlight, Short Film & Full Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Reception Events</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mitzvah Packages */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                <span className="text-white">Mitzvah</span> <span className="text-rose-500">Films</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-4">
                {/* Highlight */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Highlight</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$250</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Cinematic Highlight Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Professional Editing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Full Film */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg">
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Full Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$250</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Party Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Highlight & Full Film */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 backdrop-blur-lg relative">
                  <div className="absolute -top-4 right-4 z-10">
                    <div className="bg-rose-500 text-white text-sm px-4 py-1.5 rounded-full font-medium tracking-wide shadow-lg shadow-rose-500/20">Best Value</div>
                  </div>
                  <div className="text-center pt-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-4">Highlight & Full Film</h4>
                    <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
                      <span className="text-base font-normal text-gray-400 block mb-2">Starting at</span>$350</div>
                    <ul className="space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Cinematic Highlight Film</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Complete Ceremony Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Full Party Coverage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                        <span>Digital Delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project</h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                {status === 'success' && (
                  <div className="flex items-center space-x-2 p-4 mb-6 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center space-x-2 p-4 mb-6 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white transition-all duration-300"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-rose-500 text-white px-8 py-4 rounded-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 font-semibold tracking-wide shadow-lg hover:shadow-rose-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              <div className="space-y-12">
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-rose-500" />
                      <span>contact@4688postproductions.com</span>
                    </p>
                  </div>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-xl font-semibold mb-6">Follow Our Work</h4>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-12 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <Film className="w-8 h-8 text-rose-500 animate-float" />
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <span className="text-2xl font-bold tracking-wider">4688 Post-Productions</span>
                </a>
              </div>
              <div className="text-center md:text-right text-gray-400">
                <p>&copy; {new Date().getFullYear()} 4688 Post-Productions. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;