"use client";

import React from "react";
import { Star, Check } from "lucide-react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import { testimonials } from "../../data";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent nos <span className="gradient-text">Membres</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les témoignages authentiques de nos membres qui ont transformé leur vie
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper
              key={index}
              animationType="fadeInUp"
              className={`delay-${(index + 1) * 200}`}
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/30 transition-all hover:scale-105 card-hover hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.age}</p>
                    <div className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400 mt-1">
                      {testimonial.transformation}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-bounce-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Membre vérifié</span>
                  <Check className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;