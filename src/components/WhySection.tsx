import { BookOpen, Users, Wrench, Award, Building2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Industry-Aligned Curriculum',
    description: 'Curriculum designed with input from top tech companies to ensure job readiness.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Expert Mentors from GUVI',
    description: 'Learn from industry practitioners with years of DevOps experience.',
    color: 'from-accent to-orange-glow',
  },
  {
    icon: Wrench,
    title: 'Real DevOps Infrastructure',
    description: 'Hands-on experience with production-grade tools and environments.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Award,
    title: 'Certification & Career Readiness',
    description: 'Earn GUVI certification recognized by industry employers.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Building2,
    title: 'College-Recognized Program',
    description: 'Official collaboration with Kongu Engineering College.',
    color: 'from-cyan-500 to-blue-500',
  },
];

const WhySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award size={16} />
            Why Choose Us
          </div>
          <h2 className="section-title">Why GUVI × Kongu Engineering College</h2>
          <p className="section-subtitle mx-auto">
            The perfect partnership for launching your DevOps career.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Partnership Banner */}
        <div className="mt-16 glass-card p-8 lg:p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-right">
              <span className="text-accent font-heading font-bold text-3xl">GUVI</span>
              <p className="text-muted-foreground text-sm mt-1">EdTech Pioneer</p>
            </div>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-accent text-3xl font-bold">×</span>
            </div>
            <div className="text-center md:text-left">
              <span className="text-primary font-heading font-bold text-xl">Kongu Engineering College</span>
              <p className="text-muted-foreground text-sm mt-1">Excellence in Education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
