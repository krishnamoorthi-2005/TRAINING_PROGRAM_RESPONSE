import { useState } from 'react';
import { 
  Monitor, 
  GitBranch, 
  Settings, 
  Database, 
  Package, 
  Server, 
  Cloud, 
  Activity, 
  FileText,
  ArrowRight
} from 'lucide-react';

const infrastructureNodes = [
  {
    id: 'developer',
    icon: Monitor,
    title: 'Developer Workstation',
    description: 'Local development environment with IDE, version control, and testing tools.',
    color: 'from-blue-500 to-blue-600',
    details: ['VS Code / IntelliJ', 'Local Docker', 'Git CLI', 'Testing Frameworks']
  },
  {
    id: 'github',
    icon: GitBranch,
    title: 'GitHub Repository',
    description: 'Source code management with branching strategies and code reviews.',
    color: 'from-gray-700 to-gray-900',
    details: ['Version Control', 'Pull Requests', 'Code Reviews', 'Branch Protection']
  },
  {
    id: 'cicd',
    icon: Settings,
    title: 'CI/CD Pipeline',
    description: 'Automated build, test, and deployment pipelines with Jenkins/GitHub Actions.',
    color: 'from-purple-500 to-purple-600',
    details: ['Jenkins', 'GitHub Actions', 'Build Automation', 'Test Automation']
  },
  {
    id: 'registry',
    icon: Database,
    title: 'Container Registry',
    description: 'Secure storage for Docker images with versioning and vulnerability scanning.',
    color: 'from-teal-500 to-cyan-500',
    details: ['Docker Hub', 'ECR', 'Image Scanning', 'Version Tags']
  },
  {
    id: 'docker',
    icon: Package,
    title: 'Docker Containers',
    description: 'Containerized applications ensuring consistency across environments.',
    color: 'from-cyan-500 to-blue-500',
    details: ['Dockerfile', 'Multi-stage Builds', 'Container Networks', 'Volume Mounts']
  },
  {
    id: 'kubernetes',
    icon: Server,
    title: 'Kubernetes Cluster',
    description: 'Container orchestration with auto-scaling, self-healing, and load balancing.',
    color: 'from-blue-600 to-indigo-600',
    details: ['Pods & Services', 'Deployments', 'Ingress', 'ConfigMaps']
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Provider (AWS)',
    description: 'Scalable cloud infrastructure with managed services and global reach.',
    color: 'from-orange-400 to-yellow-500',
    details: ['EC2', 'EKS', 'RDS', 'S3']
  },
  {
    id: 'monitoring',
    icon: Activity,
    title: 'Monitoring Stack',
    description: 'Real-time metrics, alerting, and visualization with Prometheus & Grafana.',
    color: 'from-green-500 to-emerald-500',
    details: ['Prometheus', 'Grafana', 'Alerting', 'Dashboards']
  },
  {
    id: 'logging',
    icon: FileText,
    title: 'Logging (ELK)',
    description: 'Centralized logging with Elasticsearch, Logstash, and Kibana.',
    color: 'from-pink-500 to-rose-500',
    details: ['Elasticsearch', 'Logstash', 'Kibana', 'Log Aggregation']
  },
];

const InfrastructureSection = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <section id="infrastructure" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Server size={16} />
            Enterprise Architecture
          </div>
          <h2 className="section-title">Training Infrastructure & DevOps Architecture</h2>
          <p className="section-subtitle mx-auto">
            Explore our production-grade DevOps infrastructure that mirrors real-world enterprise environments.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative">
          {/* Connection Lines Background */}
          <div className="hidden lg:block absolute inset-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Infrastructure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {infrastructureNodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;

              return (
                <div
                  key={node.id}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Connection Arrow (for non-last items) */}
                  {index < infrastructureNodes.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-accent/40" />
                    </div>
                  )}

                  <div
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    className={`infra-node cursor-pointer h-full ${isSelected ? 'border-accent ring-2 ring-accent/20' : ''}`}
                  >
                    {/* Icon Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-foreground text-lg">{node.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{node.description}</p>
                      </div>
                    </div>

                    {/* Details (Expandable) */}
                    <div className={`overflow-hidden transition-all duration-300 ${isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-2">
                          {node.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Expand Hint */}
                    <div className={`text-xs text-accent font-medium mt-4 transition-opacity ${isSelected ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                      Click to view details →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Indicator */}
          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Data Flow</span>
            <div className="relative w-32 h-1 bg-muted rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-accent to-cyan-accent flow-line" />
            </div>
            <span>Production</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
