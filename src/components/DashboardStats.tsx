import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Clock, Wrench, Award, Building2 } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: 1000,
    suffix: '+',
    label: 'Students Trained',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Clock,
    value: 40,
    suffix: '+',
    label: 'Hours Training',
    color: 'from-accent to-orange-glow',
  },
  {
    icon: Wrench,
    value: 10,
    suffix: '+',
    label: 'DevOps Tools',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'GUVI Certification',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Building2,
    value: 1,
    suffix: '',
    label: 'KEC Partnership',
    color: 'from-cyan-500 to-blue-500',
  },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, inView]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const DashboardStats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Program Overview Dashboard
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real-time metrics showcasing the impact and scope of our DevOps training program.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`stat-card bg-white/10 backdrop-blur-sm border-white/10 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Counter */}
                <div className="text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>

                {/* Label */}
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
