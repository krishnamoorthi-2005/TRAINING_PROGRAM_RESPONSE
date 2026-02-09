import { ArrowRight, FileText } from 'lucide-react';
import DevOpsPipeline from './DevOpsPipeline';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative min-h-screen bg-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>Enterprise Training Program 2024</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Enterprise{' '}
                <span className="text-gradient-accent">DevOps</span>
                <br />
                Training Program
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light">
                <span className="text-accent font-medium">GUVI</span> × <span className="text-white/90">Kongu Engineering College</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-white/60 max-w-lg leading-relaxed">
              Building Industry-Ready DevOps Engineers with hands-on experience in CI/CD, 
              Containerization, Cloud Infrastructure, and Modern Deployment Practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('registration')}
                className="btn-accent-gradient inline-flex items-center justify-center gap-2 text-lg"
              >
                🚀 Enroll Now
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('infrastructure')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <FileText size={20} />
                View Architecture
              </button>
            </div>

            {/* Stats Preview */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { value: '1000+', label: 'Students' },
                { value: '40+', label: 'Hours' },
                { value: '10+', label: 'Tools' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Pipeline Animation */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <DevOpsPipeline />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
