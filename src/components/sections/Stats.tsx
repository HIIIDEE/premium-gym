"use client";

import React from "react";
import { Users, Heart, Award, Trophy } from "lucide-react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import AnimatedCounter from "../ui/AnimatedCounter";

const Stats: React.FC = () => {
  const statsData = [
    {
      icon: Users,
      count: 500,
      suffix: "+",
      label: "Membres Satisfaits",
      color: "from-yellow-400 to-orange-500",
      delay: 100,
    },
    {
      icon: Heart,
      count: 95,
      suffix: "%",
      label: "Taux de Satisfaction",
      color: "from-green-400 to-green-500",
      delay: 200,
    },
    {
      icon: Award,
      count: 10,
      suffix: "+",
      label: "Coachs Certifiés",
      color: "from-blue-400 to-blue-500",
      delay: 300,
    },
    {
      icon: Trophy,
      count: 5,
      suffix: "+",
      label: "Années d'Expérience",
      color: "from-purple-400 to-purple-500",
      delay: 400,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Nos Résultats en Chiffres
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des statistiques qui témoignent de notre excellence et de la satisfaction de nos membres
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <ScrollAnimationWrapper
              key={index}
              animationType="scaleIn"
              className={`text-center delay-${stat.delay}`}
            >
              <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;