import { useState } from 'react';
import { 
  Terminal, 
  GitBranch, 
  Package, 
  Server, 
  Settings, 
  Cloud, 
  FileCode,
  Activity,
  Award,
  ChevronRight
} from 'lucide-react';

const modules = [
  {
    id: 1,
    icon: Terminal,
    title: 'Linux & Shell Scripting',
    duration: '6 Hours',
    topics: ['Linux Fundamentals', 'Shell Commands', 'Bash Scripting', 'File Systems', 'Process Management'],
    color: 'from-gray-700 to-gray-900',
  },
  {
    id: 2,
    icon: GitBranch,
    title: 'Git & GitHub',
    duration: '4 Hours',
    topics: ['Version Control', 'Branching Strategies', 'Pull Requests', 'Merge Conflicts', 'Git Workflows'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    icon: Package,
    title: 'Docker & Containers',
    duration: '6 Hours',
    topics: ['Container Basics', 'Dockerfile', 'Docker Compose', 'Image Optimization', 'Container Networks'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    icon: Server,
    title: 'Kubernetes Orchestration',
    duration: '8 Hours',
    topics: ['K8s Architecture', 'Pods & Services', 'Deployments', 'ConfigMaps & Secrets', 'Ingress Controllers'],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 5,
    icon: Settings,
    title: 'CI/CD Pipelines',
    duration: '6 Hours',
    topics: ['Jenkins Setup', 'GitHub Actions', 'Pipeline as Code', 'Automated Testing', 'Deployment Strategies'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 6,
    icon: Cloud,
    title: 'Cloud Fundamentals (AWS)',
    duration: '4 Hours',
    topics: ['AWS Overview', 'EC2 & EKS', 'S3 & RDS', 'IAM & Security', 'Cost Optimization'],
    color: 'from-orange-400 to-yellow-500',
  },
  {
    id: 7,
    icon: FileCode,
    title: 'Infrastructure as Code',
    duration: '4 Hours',
    topics: ['Terraform Basics', 'Resource Provisioning', 'State Management', 'Modules', 'Best Practices'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 8,
    icon: Activity,
    title: 'Monitoring & Logging',
    duration: '4 Hours',
    topics: ['Prometheus', 'Grafana Dashboards', 'ELK Stack', 'Alerting', 'Log Analysis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 9,
    icon: Award,
    title: 'DevOps Best Practices',
    duration: '4 Hours',
    topics: ['Security (DevSecOps)', 'GitOps', 'SRE Principles', 'Documentation', 'Career Guidance'],
    color: 'from-accent to-orange-glow',
  },
];

const CurriculumSection = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  return (
    <section id="curriculum" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Settings size={16} />
            Learning Path
          </div>
          <h2 className="section-title">DevOps Curriculum — Pipeline View</h2>
          <p className="section-subtitle mx-auto">
            Follow our structured CI/CD-style learning path through comprehensive DevOps training modules.
          </p>
        </div>

        {/* Pipeline Timeline */}
        <div className="relative">
          {/* Pipeline Background Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-accent to-cyan-accent opacity-20 rounded-full transform -translate-y-1/2" />

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isSelected = selectedModule === module.id;

              return (
                <div
                  key={module.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Pipeline Connector */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 transform -translate-x-1/2 flex-col items-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${module.color} shadow-md`} />
                    <div className="w-0.5 h-4 bg-muted" />
                  </div>

                  {/* Module Card */}
                  <div
                    onClick={() => setSelectedModule(isSelected ? null : module.id)}
                    className={`pipeline-border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${isSelected ? 'ring-2 ring-accent' : ''}`}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-accent">Module {module.id}</span>
                            <span className="text-xs text-muted-foreground">• {module.duration}</span>
                          </div>
                          <h3 className="font-heading font-semibold text-foreground truncate">{module.title}</h3>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                      </div>

                      {/* Topics (Expandable) */}
                      <div className={`overflow-hidden transition-all duration-300 ${isSelected ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-4 border-t border-border space-y-2">
                          {module.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${module.color}`} />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Hours */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
            <span className="text-muted-foreground">Total Training Hours:</span>
            <span className="text-2xl font-heading font-bold text-accent">46+ Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
