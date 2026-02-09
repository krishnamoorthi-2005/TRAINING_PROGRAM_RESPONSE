import { Calendar, Monitor, Users, Book } from 'lucide-react';

const schedule = [
  { week: 'Week 1', title: 'Linux & Git', topics: 'Linux Fundamentals, Shell Scripting, Git Basics' },
  { week: 'Week 2', title: 'Docker & Containers', topics: 'Docker Installation, Dockerfile, Container Management' },
  { week: 'Week 3', title: 'Kubernetes', topics: 'K8s Architecture, Pods, Services, Deployments' },
  { week: 'Week 4', title: 'CI/CD Pipelines', topics: 'Jenkins, GitHub Actions, Pipeline Automation' },
  { week: 'Week 5', title: 'Cloud & Monitoring', topics: 'AWS Basics, Prometheus, Grafana, ELK' },
  { week: 'Week 6', title: 'Final Project', topics: 'End-to-End DevOps Project Implementation' },
];

const details = [
  { icon: Monitor, label: 'Mode', value: 'Online / Hybrid' },
  { icon: Users, label: 'Audience', value: 'Kongu Engineering College Students' },
  { icon: Book, label: 'Prerequisites', value: 'Basic Programming Knowledge' },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Calendar size={16} />
            Program Schedule
          </div>
          <h2 className="section-title">Training Schedule & Eligibility</h2>
          <p className="section-subtitle mx-auto">
            A structured 6-week program designed for maximum learning impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">6-Week Training Timeline</h3>
              
              <div className="space-y-0">
                {schedule.map((item, index) => (
                  <div
                    key={item.week}
                    className="timeline-node animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-accent font-bold text-sm min-w-[60px]">{item.week}</span>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{item.topics}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div>
            <div className="glass-card-dark p-8 h-full">
              <h3 className="font-heading font-bold text-xl text-white mb-6">Program Details</h3>
              
              <div className="space-y-6">
                {details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-white/60 text-sm">{detail.label}</span>
                        <p className="text-white font-medium">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Certification Badge */}
              <div className="mt-8 p-4 bg-accent/20 rounded-xl border border-accent/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">GUVI Certification</p>
                    <p className="text-white/60 text-sm">Upon successful completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
