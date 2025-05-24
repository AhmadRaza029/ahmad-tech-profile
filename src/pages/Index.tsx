
import { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, GraduationCap, User, Briefcase, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const skills = {
    'Programming Languages': ['JavaScript (ES6+)', 'TypeScript', 'Dart (Flutter)', 'HTML5', 'CSS3', 'SCSS'],
    'Frameworks & Libraries': ['React.js', 'Next.js', 'Flutter'],
    'Backend & Databases': ['Node.js (Express)', 'Firebase', 'Appwrite', 'MySQL', 'MongoDB'],
    'Tools & Technologies': ['Git & GitHub', 'VS Code', 'REST APIs', 'JWT', 'Firebase SDK', 'Appwrite SDK'],
    'Other Expertise': ['Responsive Web Design', 'SPA Development', 'Cross-platform Mobile Development', 'UI/UX Design', 'Animation Libraries']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">
              Ahmad Raza
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center w-full px-4 py-2 text-left text-gray-300 hover:text-blue-400 hover:bg-slate-700"
                >
                  <item.icon size={16} className="mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ahmad Raza</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 animate-fade-in">
                Final-year B.Tech Computer Science student passionate about building smart, user-centric web and mobile applications
              </p>
              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                <Badge variant="outline" className="text-blue-400 border-blue-400">Full-Stack Development</Badge>
                <Badge variant="outline" className="text-purple-400 border-purple-400">Flutter</Badge>
                <Badge variant="outline" className="text-green-400 border-green-400">Firebase</Badge>
                <Badge variant="outline" className="text-orange-400 border-orange-400">Data-Driven Solutions</Badge>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-6xl font-bold text-slate-800">
                    AR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <ArrowDown className="mx-auto text-gray-400 animate-bounce" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Passionate Technology Enthusiast</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a final-year Computer Science student at Maulana Abul Kalam Azad University Of Technology, 
                I combine academic excellence with practical experience in building innovative solutions. 
                My passion lies in creating technology that makes a real impact on people's lives.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in full-stack development and mobile app creation, I enjoy tackling 
                complex problems with data-driven approaches. My entrepreneurial mindset drives me to 
                continuously learn new technologies and explore creative ways to solve real-world challenges.
              </p>
            </div>
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <GraduationCap className="mr-2 text-blue-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-gray-300">Maulana Abul Kalam Azad University Of Technology</p>
                  <p className="text-blue-400">2022 – Present</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Diploma in Electronics Engineering</h4>
                  <p className="text-gray-300">Jamia Millia Islamia</p>
                  <p className="text-blue-400">2018 – 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Secondary Education</h4>
                  <p className="text-gray-300">R.N.P. Public School</p>
                  <p className="text-blue-400">2016 – 2018</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Project</h2>
          <Card className="bg-slate-800 border-slate-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Web-Based Hostel Allotment System</CardTitle>
              <CardDescription className="text-gray-400">Using Weighted Sum Model (WSM) for Data-Driven Allocation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Problem Statement</h4>
                <p className="text-gray-300">
                  Traditional hostel allotment methods often lack transparency and efficiency, leading to disputes and 
                  unfair allocations. Manual processes are time-consuming and prone to human error.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300">
                  Developed a comprehensive web application using the Weighted Sum Model (WSM) for objective, 
                  data-driven student scoring and hostel allocation. The system ensures transparency, 
                  efficiency, and fairness in the allocation process.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Key Features</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Student registration and profile management</li>
                  <li>• Automated scoring using WSM algorithm</li>
                  <li>• Real-time application tracking</li>
                  <li>• Admin management interface</li>
                  <li>• Transparent allocation results</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-orange-400 border-orange-400">HTML5</Badge>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">CSS3</Badge>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">JavaScript</Badge>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">Appwrite</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Benefits</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-gray-300">
                    <span className="text-green-400">✓</span> Enhanced transparency
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400">✓</span> Improved efficiency
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400">✓</span> Reduced human errors
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400">✓</span> Better user experience
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-600 text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-center mb-8 text-lg">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow technology enthusiasts. Let's build something amazing together!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:ahmad.raza@example.com"
                className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors group"
              >
                <Mail className="text-blue-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">ahmad.raza@example.com</p>
                </div>
              </a>

              <a 
                href="tel:+1234567890"
                className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-green-400 transition-colors group"
              >
                <Phone className="text-green-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 12345 67890</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/ahmad-raza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-blue-600 transition-colors group"
              >
                <Linkedin className="text-blue-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-300">Connect with me</p>
                </div>
              </a>

              <a 
                href="https://github.com/ahmad-raza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-gray-400 transition-colors group"
              >
                <Github className="text-gray-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-300">View my projects</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('mailto:ahmad.raza@example.com', '_blank')}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Md Ahmad Raza. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Ready for opportunities as a fresher with strong academic credentials and practical project experience.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
