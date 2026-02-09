import { Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About GUVI */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              <span className="text-accent">GUVI</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              GUVI is a leading EdTech company offering world-class vernacular technology education, 
              making quality tech education accessible to all.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About KEC */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Kongu Engineering College</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A premier autonomous institution affiliated with Anna University, 
              known for academic excellence and industry-ready education since 1984.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Perundurai, Erode, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Overview', id: 'overview' },
                { label: 'Infrastructure', id: 'infrastructure' },
                { label: 'Curriculum', id: 'curriculum' },
                { label: 'Tools', id: 'tools' },
                { label: 'Schedule', id: 'schedule' },
                { label: 'Register', id: 'registration' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:devops@guvi.in"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-5 h-5" />
                devops@guvi.in
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </a>
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('registration')}
              className="mt-6 btn-accent-gradient text-sm"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2024 GUVI × Kongu Engineering College. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
