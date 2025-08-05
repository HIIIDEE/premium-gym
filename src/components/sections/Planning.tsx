"use client";

import React from "react";
import { Users, Dumbbell, Calendar, Star, Heart, Zap, Target, Trophy } from "lucide-react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import { scheduleData, collectiveClasses } from "../../data";

const Planning: React.FC = () => {
  return (
    <section id="planning" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre <span className="gradient-text">Planning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Horaires adaptés à vos besoins avec des créneaux dédiés et des cours collectifs variés
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ScrollAnimationWrapper animationType="fadeInLeft">
            <div className="glass-morphism p-8 rounded-2xl border border-pink-500/30 hover-lift">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-pink-400 neon-glow">
                  Femmes
                </h3>
              </div>
              <div className="space-y-4">
                {scheduleData.women.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-pink-400">
                        {item.day}
                      </span>
                      <span className="text-gray-300 text-sm">{item.general}</span>
                    </div>
                    <div className="text-xs text-pink-300 bg-pink-500/10 px-2 py-1 rounded">
                      Cours: {item.hours}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fadeInRight">
            <div className="glass-morphism p-8 rounded-2xl border border-blue-500/30 hover-lift">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-400 neon-glow">
                  Hommes
                </h3>
              </div>
              <div className="space-y-4">
                {scheduleData.men.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-blue-400">
                        {item.day}
                      </span>
                      <span className="text-gray-300 text-sm">{item.general}</span>
                    </div>
                    <div className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                      {item.hours}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper
          className="text-center mt-12"
          animationType="fadeInUp"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-400/30 mb-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Cours Collectifs Disponibles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <span className="bg-pink-500/20 px-3 py-2 rounded-full text-pink-300 flex items-center justify-center">
                <Heart className="w-4 h-4 mr-1" />
                Fitness
              </span>
              <span className="bg-blue-500/20 px-3 py-2 rounded-full text-blue-300 flex items-center justify-center">
                <Zap className="w-4 h-4 mr-1" />
                Crossfit
              </span>
              <span className="bg-green-500/20 px-3 py-2 rounded-full text-green-300 flex items-center justify-center">
                <Target className="w-4 h-4 mr-1" />
                Kickboxing
              </span>
              <span className="bg-purple-500/20 px-3 py-2 rounded-full text-purple-300 flex items-center justify-center">
                <Users className="w-4 h-4 mr-1" />
                Stretching
              </span>
              <span className="bg-red-500/20 px-3 py-2 rounded-full text-red-300 flex items-center justify-center">
                <Trophy className="w-4 h-4 mr-1" />
                Lutte
              </span>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-xl mb-6">
            <p className="text-gray-400 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              * Les horaires peuvent varier selon les jours fériés
            </p>
            <p className="text-green-400">
              <Star className="w-4 h-4 inline mr-2" />
              * Réduction de 10% pour les étudiants sur présentation de la carte
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Planning;