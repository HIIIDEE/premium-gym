"use client";

import React from "react";
import { ScrollAnimationWrapper } from "../../hooks/useScrollAnimation";
import { contactInfo, faqData } from "../../data";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rejoignez-nous et commencez votre transformation dès aujourd'hui.
            Notre équipe est là pour vous accompagner !
          </p>
        </ScrollAnimationWrapper>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <ScrollAnimationWrapper animationType="fadeInUp">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold gradient-text mb-4">Informations de Contact</h3>
                <p className="text-gray-300">N'hésitez pas à nous contacter pour toute question ou information</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => item.link && window.open(item.link, "_blank")}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      cursor: item.link ? "pointer" : "default"
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-center mb-2">{item.title}</h3>
                    <p className="text-gray-300 font-medium text-center">{item.info}</p>
                    <p className="text-gray-400 text-sm text-center mt-1">{item.subInfo}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <ScrollAnimationWrapper className="mt-20" animationType="fadeInUp">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Questions Fréquentes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-colors">
                  <h4 className="font-bold mb-2 text-yellow-400">{item.question}</h4>
                  <p className="text-gray-300 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Contact;