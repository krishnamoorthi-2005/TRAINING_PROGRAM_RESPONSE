import { Terminal, GitBranch, Github, Package, Server, Settings, Cloud, FileCode, Activity, BarChart3 } from 'lucide-react';

const tools = [
  { name: 'Linux', icon: Terminal, color: 'from-yellow-500 to-orange-500' },
  { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-500' },
  { name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
  { name: 'Docker', icon: Package, color: 'from-cyan-500 to-blue-500' },
  { name: 'Kubernetes', icon: Server, color: 'from-blue-600 to-indigo-600' },
  { name: 'Jenkins', icon: Settings, color: 'from-red-500 to-red-600' },
  { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-yellow-500' },
  { name: 'Terraform', icon: FileCode, color: 'from-violet-500 to-purple-500' },
  { name: 'Prometheus', icon: Activity, color: 'from-orange-600 to-red-500' },
  { name: 'Grafana', icon: BarChart3, color: 'from-orange-500 to-yellow-500' },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Package size={16} />
            Technology Stack
          </div>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle mx-auto">
            Master industry-standard DevOps tools used by leading tech companies worldwide.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="tool-badge flex flex-col items-center gap-4 p-6 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Tool Name */}
                <span className="font-heading font-semibold text-foreground">{tool.name}</span>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Industry Standard', desc: 'Tools used by 90% of Fortune 500 companies' },
            { title: 'Hands-On Labs', desc: 'Practical exercises with real-world scenarios' },
            { title: 'Latest Versions', desc: 'Always updated with the newest features' },
          ].map((item, index) => (
            <div key={index} className="glass-card p-6 text-center animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
