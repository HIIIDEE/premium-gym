"use client";

import React from "react";
import { Zap } from "lucide-react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import { services } from "../../data";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services conçus pour transformer
            votre expérience fitness
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={index}
              animationType="fadeInUp"
              className={`delay-${(index + 1) * 100}`}
            >
              <div className="group bg-gray-900 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-400/10 hover:to-orange-500/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 card-hover">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 float-animation">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;