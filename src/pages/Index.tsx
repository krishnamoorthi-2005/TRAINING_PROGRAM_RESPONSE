import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import InfrastructureSection from '../components/InfrastructureSection';
import DashboardStats from '../components/DashboardStats';
import CurriculumSection from '../components/CurriculumSection';
import ToolsSection from '../components/ToolsSection';
import EnvironmentSection from '../components/EnvironmentSection';
import ScheduleSection from '../components/ScheduleSection';
import RegistrationSection from '../components/RegistrationSection';
import WhySection from '../components/WhySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DashboardStats />
      <InfrastructureSection />
      <CurriculumSection />
      <ToolsSection />
      <EnvironmentSection />
      <ScheduleSection />
      <RegistrationSection />
      <WhySection />
      <Footer />
    </div>
  );
};

export default Index;
