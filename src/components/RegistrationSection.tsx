import { useState } from 'react';
import { Send, CheckCircle, User, Hash, Building2, Calendar, Mail, Phone } from 'lucide-react';

const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    registerNumber: '',
    department: '',
    year: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="registration" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Send size={16} />
            Join the Program
          </div>
          <h2 className="section-title">Register Now</h2>
          <p className="section-subtitle mx-auto">
            Secure your spot in the Enterprise DevOps Training Program.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Registration Form */}
          <div className="glass-card p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="input-glass w-full"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Register Number */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Hash className="inline w-4 h-4 mr-2" />
                  Register Number
                </label>
                <input
                  type="text"
                  name="registerNumber"
                  value={formData.registerNumber}
                  onChange={handleChange}
                  required
                  className="input-glass w-full"
                  placeholder="Enter your register number"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Department */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Building2 className="inline w-4 h-4 mr-2" />
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="input-glass w-full cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="EEE">Electrical & Electronics</option>
                    <option value="MECH">Mechanical</option>
                    <option value="CIVIL">Civil</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                {/* Year */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Year of Study
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="input-glass w-full cursor-pointer"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-glass w-full"
                  placeholder="your.email@kec.ac.in"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-glass w-full"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-accent-gradient text-lg py-4 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Registration
              </button>
            </form>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              By registering, you agree to the program terms and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="glass-card p-8 max-w-md mx-4 text-center animate-scale-in">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Registration Submitted Successfully!
            </h3>
            <p className="text-muted-foreground">
              Thank you for registering. We'll contact you shortly with further details.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegistrationSection;
