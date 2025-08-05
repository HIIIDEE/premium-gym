"use client";

import React from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="w-full h-full">
          <video 
            className="w-full h-full object-cover" 
            controls 
            autoPlay
          >
            <source src="/videos/PRMGYM.mp4" type="video/mp4" />
            <source src="/videos/PRMGYM.webm" type="video/webm" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;