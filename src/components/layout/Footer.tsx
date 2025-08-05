"use client";

import React from "react";
import { Dumbbell } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in-up">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center float-animation">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">PREMIUM GYM</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © 2025 Premium Gym. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm">
              Bab Ezzouar, Alger - En face Carrefour
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;