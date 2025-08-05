"use client";

import React from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { navItems } from "../../data";

interface HeaderProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 animate-slide-in-blur">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center hover-lift glow-animation">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">PREMIUM GYM</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 animate-fade-in-right delay-300">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition-all duration-300 hover:scale-110 relative group"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden animate-bounce-in delay-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition-all duration-300 animate-fade-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full font-semibold text-gray-900 w-fit animate-bounce-in delay-500">
            Rejoindre
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;