
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, Send, Globe, Shield, Brain, Code, Star, Rocket, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import FloatingIdBadge from '@/components/FloatingIdBadge';
import ContactModal from '@/components/ContactModal';
import CircularProgress from '@/components/CircularProgress';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="text-center space-y-6">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <Globe className="w-8 h-8 text-cosmic" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-cosmic">Initializing Portfolio</h2>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
      </div>
    );
  }

  const projects = [
    {
      title: "Python POS System",
      description: "Advanced point-of-sale system with inventory management and analytics",
      tech: ["Python", "SQLite", "Tkinter", "Analytics"],
      icon: <Terminal className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "StreakLock",
      description: "Habit tracking app with gamification and streak management",
      tech: ["React Native", "Firebase", "Gamification", "UI/UX"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "AI Prompt Flows",
      description: "Intelligent workflow automation using advanced prompt engineering",
      tech: ["AI/ML", "Automation", "NLP", "APIs"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "CyberSec Tools",
      description: "Security analysis and penetration testing toolkit",
      tech: ["Python", "Cybersecurity", "Networks", "Analysis"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-rose-600"
    }
  ];

  const timeline = [
    { year: "2020", title: "The Beginning", description: "Started coding journey with Python" },
    { year: "2022", title: "System Builder", description: "Developed first major POS system" },
    { year: "2024", title: "AI Explorer", description: "Diving deep into AI and cybersecurity" },
    { year: "2025", title: "Future Architect", description: "Building the next generation of systems" }
  ];

  const skills = [
    { name: "Python", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Cybersecurity", level: 85, icon: <Shield className="w-5 h-5" /> },
    { name: "AI/ML", level: 75, icon: <Brain className="w-5 h-5" /> },
    { name: "System Design", level: 80, icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Noise Texture Background */}
      <div className="fixed inset-0 noise-texture -z-20"></div>
      
      {/* Starfield Background */}
      <div className="fixed inset-0 starfield -z-10"></div>
      
      {/* Floating Orbs */}
      <div className="fixed top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl orb-glow floating -z-10"></div>
      <div className="fixed top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl orb-glow floating -z-10" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl orb-glow floating -z-10" style={{ animationDelay: '4s' }}></div>
      
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Floating ID Badge */}
      <FloatingIdBadge />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
        
        {/* Floating 3D Earth */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 floating">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 animate-spin-slow opacity-20"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ></div>
            <div 
              className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 animate-spin-slow opacity-30"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            ></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up pt-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cosmic">
            Portfolio by Abelion Lavv
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            I don't just build code. I build <span className="text-cosmic font-semibold">cosmos</span>.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Button size="lg" className="neon-glow">
              Enter The Universe
            </Button>
            <Button variant="outline" size="lg" className="glass-effect">
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cosmic" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cosmic">About Abelion</h2>
            <p className="text-xl text-muted-foreground">A young cyber dreamer shaping digital realms</p>
          </div>
          
          <Card className="glass-effect neon-glow p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-cosmic">The Digital Architect</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Born in the digital age, I'm a passionate system builder with an insatiable curiosity for 
                  technology's limitless possibilities. My journey spans from crafting elegant code to 
                  fortifying digital landscapes through cybersecurity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise in AI, machine learning, and cutting-edge development practices, 
                  I transform complex problems into innovative solutions that push the boundaries 
                  of what's possible.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Systems", "AI", "Cybersecurity", "Innovation"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="glass-effect">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse opacity-20"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 floating opacity-30"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-spin-slow opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Rocket className="w-16 h-16 text-cosmic" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cosmic">Cosmic Creations</h2>
            <p className="text-xl text-muted-foreground">Projects that transcend ordinary boundaries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-effect hover:neon-glow transition-all duration-500 p-6 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-cosmic group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-effect text-xs group-hover:bg-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cosmic">Journey Through Time</h2>
            <p className="text-xl text-muted-foreground">Evolution of a digital architect</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`glass-effect neon-glow p-6 max-w-md ${index % 2 === 0 ? 'mr-auto ml-8' : 'ml-auto mr-8'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-cosmic">{item.year}</span>
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </div>
                
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pulse-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cosmic">Mastered Arts</h2>
            <p className="text-xl text-muted-foreground">Skills forged in the digital cosmos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <CircularProgress percentage={skill.level} size={140}>
                  <div className="text-center">
                    <div className="p-3 rounded-full glass-effect mb-2">
                      {skill.icon}
                    </div>
                    <div className="text-2xl font-bold text-cosmic">{skill.level}%</div>
                  </div>
                </CircularProgress>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic">Let's Build Something Eternal</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to collaborate on the next cosmic adventure?
          </p>
          
          <Card className="glass-effect neon-glow p-8 md:p-12">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                Whether you're looking to build groundbreaking systems, explore AI frontiers, 
                or secure digital landscapes, let's connect and create something extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactModal 
                  trigger={
                    <Button size="lg" className="neon-glow group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  }
                />
                <Button size="lg" variant="outline" className="glass-effect group">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  GitHub
                </Button>
                <Button size="lg" variant="outline" className="glass-effect group">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email
                </Button>
                <Button size="lg" variant="outline" className="glass-effect group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Telegram
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                "The future belongs to those who code it into existence."
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Abelion Lavv. Crafted in the digital cosmos with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
