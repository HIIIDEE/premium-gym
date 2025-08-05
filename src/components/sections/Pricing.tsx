"use client";

import React from "react";
import { Check, Star, Crown, Trophy, Target, Shield, Users, Heart } from "lucide-react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import { pricingPlans } from "../../data";

const Pricing: React.FC = () => {
  const getPlanIcon = (planName: string) => {
    switch (planName) {
      case "Illimité":
        return <Crown className="w-8 h-8 text-white" />;
      case "16 Séances":
        return <Trophy className="w-8 h-8 text-white" />;
      case "12 Séances":
        return <Target className="w-8 h-8 text-white" />;
      default:
        return <Star className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="tarifs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="gradient-text">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez l'abonnement qui correspond le mieux à vos besoins et
            commencez votre transformation dès aujourd'hui.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Offre spéciale : -10% pour les étudiants</span>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimationWrapper
              key={index}
              animationType="scaleIn"
              className={`delay-${(index + 1) * 200}`}
            >
              <div
                className={`relative bg-gray-800 p-8 rounded-2xl border-2 transition-all duration-500 hover:scale-105 card-hover ${
                  plan.popular
                    ? "border-yellow-400 shadow-2xl shadow-yellow-400/20 glow-animation"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-in delay-300">
                    <div className="bg-yellow-400 px-6 py-2 rounded-full text-gray-900 font-bold text-sm flex items-center space-x-2 shadow-lg border-2 border-yellow-300">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-gray-900">{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      plan.popular ? 'bg-yellow-400/20 text-yellow-400' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 float-animation`}
                  >
                    {getPlanIcon(plan.name)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">DA/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3 animate-fade-in-left"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-bold transition-all duration-300 interactive-element ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg hover:scale-105 animate-gradient-shift"
                      : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                  }`}
                >
                  Choisir ce Plan
                </button>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper className="mt-16" animationType="fadeInUp">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Pourquoi choisir Premium Gym ?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Équipements Premium</h4>
                <p className="text-gray-400 text-sm">Machines de dernière génération régulièrement entretenues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Coachs Certifiés</h4>
                <p className="text-gray-400 text-sm">Équipe d'experts diplômés pour vous accompagner</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Ambiance Conviviale</h4>
                <p className="text-gray-400 text-sm">Environnement motivant et communauté bienveillante</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Pricing;