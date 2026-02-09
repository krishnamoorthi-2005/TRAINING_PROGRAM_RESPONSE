import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'tools', label: 'Tools' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'registration', label: 'Registration' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logos */}
          <div className="flex items-center gap-3 lg:gap-6">
            <div className={`font-heading font-bold text-lg lg:text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="text-accent">GUVI</span>
            </div>
            <div className={`hidden sm:block h-6 w-px ${isScrolled ? 'bg-border' : 'bg-white/30'}`} />
            <div className={`hidden sm:block font-heading text-xs lg:text-sm font-medium ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
              Kongu Engineering College
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link py-2 ${
                  activeSection === item.id
                    ? isScrolled ? 'text-accent' : 'text-accent'
                    : isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
                } ${activeSection === item.id ? 'after:w-full' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('registration')}
              className="btn-accent-gradient text-sm"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent/10 text-accent font-medium'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('registration')}
              className="w-full mt-4 btn-accent-gradient text-center"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
