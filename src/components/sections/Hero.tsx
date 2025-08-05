"use client";

import React from "react";
import { Trophy, Shield, Heart, Award, ChevronDown } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";

const Hero: React.FC = () => {

  return (
    <>
      <section
        id="accueil"
        className="relative h-screen flex items-center justify-center overflow-hidden floating-particles"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center space-x-3 glass-morphism px-6 py-3 rounded-full border border-yellow-400/30 animate-bounce-in">
            <Trophy className="w-6 h-6 text-yellow-400 float-animation" />
            <span className="text-yellow-400 font-semibold">
              Salle de sport premium à Bab Ezzouar
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <div className="animate-fade-in-up">Sculptez Votre</div>
            <div className="block neon-glow animate-fade-in-up delay-300">
              <TypewriterText text="Corps Idéal" delay={800} />
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in-up delay-700">
            Équipements de pointe, coaching personnalisé et ambiance motivante
            <br />
            pour atteindre vos objectifs fitness
          </p>

          <div className="flex justify-center animate-fade-in-up delay-1000">
            <a 
              href="#tarifs"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-bold text-gray-900 text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-gradient-shift"
            >
              Commencer Maintenant
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Certifié Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm">500+ Membres Satisfaits</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">5 Ans d'Expérience</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>

        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400/30 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-180 hidden lg:block">
          <div className="flex flex-col space-y-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400/30 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;