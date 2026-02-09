import { Layers, Container, Cpu, Activity } from 'lucide-react';

const environments = [
  {
    name: 'Development',
    color: 'from-blue-500 to-blue-600',
    icon: Layers,
    features: [
      { label: 'Containers', value: '2' },
      { label: 'K8s Nodes', value: '1' },
      { label: 'CI/CD', value: 'Active' },
      { label: 'Monitoring', value: 'Basic' },
    ],
    status: 'Running',
  },
  {
    name: 'Testing',
    color: 'from-purple-500 to-purple-600',
    icon: Container,
    features: [
      { label: 'Containers', value: '4' },
      { label: 'K8s Nodes', value: '2' },
      { label: 'CI/CD', value: 'Active' },
      { label: 'Monitoring', value: 'Full' },
    ],
    status: 'Running',
  },
  {
    name: 'Staging',
    color: 'from-orange-500 to-accent',
    icon: Cpu,
    features: [
      { label: 'Containers', value: '6' },
      { label: 'K8s Nodes', value: '3' },
      { label: 'CI/CD', value: 'Active' },
      { label: 'Monitoring', value: 'Full' },
    ],
    status: 'Running',
  },
  {
    name: 'Production',
    color: 'from-green-500 to-emerald-500',
    icon: Activity,
    features: [
      { label: 'Containers', value: '12' },
      { label: 'K8s Nodes', value: '5' },
      { label: 'CI/CD', value: 'Active' },
      { label: 'Monitoring', value: 'Full + Alerts' },
    ],
    status: 'Running',
  },
];

const EnvironmentSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Layers size={16} />
            Lab Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Hands-On Lab Infrastructure
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience real deployment pipelines across multiple environments, from development to production.
          </p>
        </div>

        {/* Environments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {environments.map((env, index) => {
            const Icon = env.icon;
            return (
              <div
                key={env.name}
                className="glass-card-dark p-6 animate-fade-in-up group hover:bg-white/10 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${env.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-xs text-success font-medium">{env.status}</span>
                  </div>
                </div>

                {/* Environment Name */}
                <h3 className="font-heading font-bold text-white text-xl mb-4">{env.name}</h3>

                {/* Features */}
                <div className="space-y-3">
                  {env.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{feature.label}</span>
                      <span className="text-white font-medium">{feature.value}</span>
                    </div>
                  ))}
                </div>

                {/* Flow Arrow */}
                {index < environments.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-white/30 transform rotate-45" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pipeline Flow */}
        <div className="mt-12 hidden lg:flex items-center justify-center gap-2">
          {environments.map((env, index) => (
            <div key={env.name} className="flex items-center">
              <div className={`px-4 py-2 bg-gradient-to-r ${env.color} rounded-full text-primary-foreground text-sm font-medium shadow-lg`}>
                {env.name}
              </div>
              {index < environments.length - 1 && (
                <div className="w-8 h-0.5 bg-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent flow-line" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
