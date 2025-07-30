import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  trigger: React.ReactNode;
}

const ContactModal = ({ trigger }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="glass-effect border-none neon-glow max-w-md">
        <DialogHeader>
          <DialogTitle className="text-cosmic text-center text-2xl">Let's Connect</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 glass-effect border-cosmic/30 focus:border-cosmic neon-input"
                required
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                name="email"
                type="email"
                placeholder="your.email@cosmos.dev"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 glass-effect border-cosmic/30 focus:border-cosmic neon-input"
                required
              />
            </div>
            
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Textarea
                name="message"
                placeholder="Let's build something extraordinary together..."
                value={formData.message}
                onChange={handleChange}
                className="pl-10 pt-10 glass-effect border-cosmic/30 focus:border-cosmic neon-input min-h-[100px] resize-none"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full neon-glow group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;