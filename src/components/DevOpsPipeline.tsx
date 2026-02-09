import { Code, GitBranch, Settings, Package, Cloud, Activity, Server, BarChart3 } from 'lucide-react';

const pipelineSteps = [
  { icon: Code, label: 'Developer', color: 'from-blue-500 to-blue-600' },
  { icon: GitBranch, label: 'Git', color: 'from-orange-500 to-red-500' },
  { icon: Settings, label: 'CI/CD', color: 'from-purple-500 to-purple-600' },
  { icon: Package, label: 'Docker', color: 'from-cyan-500 to-blue-500' },
  { icon: Server, label: 'Kubernetes', color: 'from-blue-600 to-indigo-600' },
  { icon: Cloud, label: 'Cloud', color: 'from-orange-400 to-yellow-500' },
  { icon: Activity, label: 'Monitor', color: 'from-green-500 to-emerald-500' },
  { icon: BarChart3, label: 'Logging', color: 'from-pink-500 to-rose-500' },
];

const DevOpsPipeline = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Central Hub */}
      <div className="relative aspect-square">
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-accent/20 rounded-full blur-3xl" />
        
        {/* Pipeline Circle */}
        <div className="absolute inset-8 border-2 border-white/10 rounded-full" />
        <div className="absolute inset-16 border border-white/5 rounded-full" />
        
        {/* Animated Flow Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            strokeDasharray="8 4"
            className="animate-[spin_30s_linear_infinite]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(26 100% 55%)" />
              <stop offset="50%" stopColor="hsl(260 70% 50%)" />
              <stop offset="100%" stopColor="hsl(190 90% 50%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-accent to-orange-glow rounded-2xl flex items-center justify-center shadow-glow animate-pulse-glow">
            <span className="text-white font-heading font-bold text-2xl">∞</span>
          </div>
        </div>

        {/* Pipeline Nodes */}
        {pipelineSteps.map((step, index) => {
          const angle = (index * 360) / pipelineSteps.length - 90;
          const radius = 42; // percentage
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Node */}
              <div 
                className={`relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Icon className="w-6 h-6 text-white" />
                
                {/* Pulse Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl animate-ping opacity-30`} style={{ animationDuration: '2s', animationDelay: `${index * 0.2}s` }} />
              </div>

              {/* Label */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                <span className="text-xs text-white/70 font-medium bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.label}
                </span>
              </div>

              {/* Connection Line to next node */}
              <svg 
                className="absolute w-8 h-2 opacity-30"
                style={{
                  left: '100%',
                  top: '50%',
                  transform: `translateY(-50%) rotate(${45}deg)`,
                }}
              >
                <line x1="0" y1="1" x2="32" y2="1" stroke="white" strokeWidth="1" strokeDasharray="4 2" />
              </svg>
            </div>
          );
        })}
      </div>

      {/* Flow Animation Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
            style={{
              animation: `orbit ${8 + i}s linear infinite`,
              animationDelay: `${i * -1.3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(160px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DevOpsPipeline;
