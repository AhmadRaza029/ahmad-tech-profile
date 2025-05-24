import { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, GraduationCap, User, Briefcase, MessageCircle, Sparkles, Download, Bot, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
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
  const navigationItems = [{
    id: 'home',
    label: 'Home',
    icon: User
  }, {
    id: 'about',
    label: 'About',
    icon: User
  }, {
    id: 'portfolio',
    label: 'Portfolio',
    icon: Briefcase
  }, {
    id: 'skills',
    label: 'Skills',
    icon: Code
  }, {
    id: 'contact',
    label: 'Contact',
    icon: MessageCircle
  }];
  const skills = {
    'Programming Languages': ['JavaScript (ES6+)', 'TypeScript', 'Dart (Flutter)', 'HTML5', 'CSS3', 'SCSS'],
    'Frameworks & Libraries': ['React.js', 'Next.js', 'Flutter'],
    'Backend & Databases': ['Node.js (Express)', 'Firebase', 'Appwrite', 'MySQL', 'MongoDB'],
    'Tools & Technologies': ['Git & GitHub', 'VS Code', 'REST APIs', 'JWT', 'Firebase SDK', 'Appwrite SDK'],
    'Other Expertise': ['Responsive Web Design', 'SPA Development', 'Cross-platform Mobile Development', 'UI/UX Design', 'Animation Libraries']
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AR</span>
              </div>
              Ahmad Raza
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300'}`}>
                  {item.label}
                  {activeSection === item.id && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>}
                </button>)}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-4 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-slate-700">
              {navigationItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="flex items-center w-full px-4 py-3 text-left text-gray-300 hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-200">
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                </button>)}
            </div>}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Md Ahmad Raza</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 blur-xl -z-10"></div>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Final-year <span className="text-blue-400 font-semibold">B.Tech Computer Science</span> student passionate about building 
                <span className="text-purple-400 font-semibold"> smart, user-centric</span> web and mobile applications
              </p>

              <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                <Badge variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-400/5 px-4 py-2 text-sm font-medium hover:bg-blue-400/10 transition-colors">
                  <Code className="w-4 h-4 mr-2" />
                  Full-Stack Development
                </Badge>
                <Badge variant="outline" className="text-purple-400 border-purple-400/30 bg-purple-400/5 px-4 py-2 text-sm font-medium hover:bg-purple-400/10 transition-colors">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Flutter
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-400/30 bg-green-400/5 px-4 py-2 text-sm font-medium hover:bg-green-400/10 transition-colors">
                  Firebase
                </Badge>
                <Badge variant="outline" className="text-orange-400 border-orange-400/30 bg-orange-400/5 px-4 py-2 text-sm font-medium hover:bg-orange-400/10 transition-colors">
                  Data-Driven Solutions
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300" onClick={() => scrollToSection('portfolio')}>
                  <Download className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a href="https://github.com/ahmad-raza" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 hover:scale-110 text-gray-400 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ahmad-raza" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 hover:scale-110 text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ahmad.raza@example.com" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 hover:scale-110 text-gray-400 hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Enhanced Profile Picture Section */}
            <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 animate-spin" style={{
                animationDuration: '8s'
              }}>
                  <div className="w-full h-full rounded-full bg-slate-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 animate-spin" style={{
                animationDuration: '6s',
                animationDirection: 'reverse'
              }}>
                  <div className="w-full h-full rounded-full bg-slate-900"></div>
                </div>
                
                {/* Main profile container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden p-1">
                    {/* Profile Image */}
                    <img src="https://i.postimg.cc/pLFCGpCv/BARC.jpg" alt="Ahmad Raza" className="w-full h-full rounded-full object-cover shadow-inner" />
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
                    <div className="absolute top-1/3 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
                  </div>
                </div>

                {/* Floating skill badges */}
                <div className="absolute -top-4 -left-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                  React.js
                </div>
                <div className="absolute -bottom-4 -right-4 bg-purple-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-1000">
                  Flutter
                </div>
                <div className="absolute top-1/2 -right-8 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-500">
                  Firebase
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2 font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
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

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Hostel Allotment System */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Users className="mr-2 text-blue-400" size={24} />
                  Web-Based Hostel Allotment System
                </CardTitle>
                <CardDescription className="text-gray-400">Using Weighted Sum Model (WSM) for Data-Driven Allocation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Problem Statement</h4>
                  <p className="text-gray-300 text-sm">
                    Traditional hostel allotment methods often lack transparency and efficiency, leading to disputes and 
                    unfair allocations. Manual processes are time-consuming and prone to human error.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">
                    Developed a comprehensive web application using the Weighted Sum Model (WSM) for objective, 
                    data-driven student scoring and hostel allocation ensuring transparency and fairness.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Key Features</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Student registration and profile management</li>
                    <li>• Automated scoring using WSM algorithm</li>
                    <li>• Real-time application tracking</li>
                    <li>• Admin management interface</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-orange-400 border-orange-400/30 bg-orange-400/5">HTML5</Badge>
                    <Badge variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-400/5">CSS3</Badge>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400/30 bg-yellow-400/5">JavaScript</Badge>
                    <Badge variant="outline" className="text-purple-400 border-purple-400/30 bg-purple-400/5">Appwrite</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Human Following Robot */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Bot className="mr-2 text-green-400" size={24} />
                  Human Following Robot
                </CardTitle>
                <CardDescription className="text-gray-400">Autonomous Mobile Robot with Advanced Sensor Integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Project Overview</h4>
                  <p className="text-gray-300 text-sm">
                    An intelligent autonomous mobile robot that detects, tracks, and follows humans using ultrasonic sensors 
                    and embedded systems. Demonstrates hardware-software integration for robotic assistance applications.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Core Technology</h4>
                  <p className="text-gray-300 text-sm">
                    Utilizes ultrasonic sensors for distance measurement, Arduino microcontroller for data processing, 
                    and motor drivers for precise movement control with real-time path adjustment capabilities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Key Features</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Real-time human detection and tracking</li>
                    <li>• Autonomous path planning and navigation</li>
                    <li>• Obstacle avoidance system</li>
                    <li>• Consistent distance maintenance</li>
                    <li>• Multi-sensor data fusion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Applications</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-400/5">Retail Assistant</Badge>
                    <Badge variant="outline" className="text-red-400 border-red-400/30 bg-red-400/5">Healthcare</Badge>
                    <Badge variant="outline" className="text-indigo-400 border-indigo-400/30 bg-indigo-400/5">Logistics</Badge>
                    <Badge variant="outline" className="text-emerald-400 border-emerald-400/30 bg-emerald-400/5">Elderly Care</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-300">
                      <span className="text-green-400">✓</span> Reliable human following
                    </div>
                    <div className="text-gray-300">
                      <span className="text-green-400">✓</span> Accurate turning response
                    </div>
                    <div className="text-gray-300">
                      <span className="text-green-400">✓</span> Consistent distance control
                    </div>
                    <div className="text-gray-300">
                      <span className="text-green-400">✓</span> Safe navigation
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Future Enhancements</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• AI integration for facial recognition</li>
                    <li>• Computer vision for advanced tracking</li>
                    <li>• Voice command functionality</li>
                    <li>• GPS and LIDAR for outdoor operation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => <Card key={category} className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => <Badge key={skill} variant="secondary" className="bg-slate-600 text-gray-200">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
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
              <a href="mailto:ahmad.raza@example.com" className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors group">
                <Mail className="text-blue-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">ahmadrajacpr@gmail.com</p>
                </div>
              </a>

              <a href="tel:+1234567890" className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-green-400 transition-colors group">
                <Phone className="text-green-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 7289095126</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/ahmad-raza" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-blue-600 transition-colors group">
                <Linkedin className="text-blue-600 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-300">https://www.linkedin.com/in/md-ahmad-raza-10735023b/</p>
                </div>
              </a>

              <a href="https://github.com/ahmad-raza" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-600 hover:border-gray-400 transition-colors group">
                <Github className="text-gray-400 mr-3 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-300">https://github.com/AhmadRaza029</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg" onClick={() => window.open('mailto:ahmad.raza@example.com', '_blank')}>
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
    </div>;
};
export default Index;