import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect backdrop-blur-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-cosmic">Abelion Lavv</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-cosmic transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cosmic transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cosmic transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cosmic transition-colors">Contact</button>
            
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" className="glass-effect">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="glass-effect">
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="glass-effect">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden glass-effect"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-cosmic transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-cosmic transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-cosmic transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-cosmic transition-colors">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;