import React from 'react';
import { User, Shield, Star } from 'lucide-react';

const FloatingIdBadge = () => {
  return (
    <div className="fixed top-20 right-8 z-40 floating-badge">
      <div className="relative w-24 h-32 glass-effect neon-glow rounded-lg p-3 transform rotate-3 hover:rotate-0 transition-transform duration-500">
        {/* Badge Header */}
        <div className="text-center mb-2">
          <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-1">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-cosmic font-bold">ID: AL-2024</div>
        </div>
        
        {/* Badge Content */}
        <div className="text-center space-y-1">
          <div className="text-xs font-medium">Abelion Lavv</div>
          <div className="text-[10px] text-muted-foreground">Cyber Architect</div>
          <div className="flex justify-center items-center space-x-1">
            <Shield className="w-2 h-2 text-green-400" />
            <Star className="w-2 h-2 text-yellow-400" />
          </div>
        </div>
        
        {/* Holographic Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        
        {/* Scan Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
      </div>
    </div>
  );
};

export default FloatingIdBadge;