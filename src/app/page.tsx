"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Dumbbell,
  Clock,
  Users,
  Trophy,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Check,
  Crown,
  ChevronUp,
  Play,
  Shield,
  Heart,
  Zap,
  Target,
  Award,
  Calendar,
  MessageCircle,
  ArrowRight,
  Facebook,
  Youtube,
  ChevronDown,
} from "lucide-react";
import {
  useScrollAnimation,
  useCountUp,
  ScrollAnimationWrapper,
} from "../hooks/useScrollAnimation";
import { link } from "fs";

// Composant de compteur animé
const AnimatedCounter = ({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { count, startAnimation } = useCountUp(end, 2000, delay);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <span ref={elementRef} className="text-3xl font-bold text-yellow-400">
      {count}
      {suffix}
    </span>
  );
};

// Composant de texte typewriter
const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, isTyping]);

  return <span className="typing-cursor">{displayText}</span>;
};

// Composant Modal pour vidéo
const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
        
        {/* Remplacez cette partie par votre lecteur vidéo */}
        <div className="w-full h-full">
          <video 
            className="w-full h-full object-cover" 
            controls 
            autoPlay
          >
            {/* Ajoutez vos sources vidéo ici */}
            <source src="/videos/PRMGYM.mp4" type="video/mp4" />
            <source src="/videos/PRMGYM.webm" type="video/webm" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </div>
  );
};

// Layout principal
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

// Header avec animations
const Header = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}: {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
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

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-8 animate-fade-in-right delay-300">
          {["Accueil", "Services", "Planning", "Tarifs", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-all duration-300 hover:scale-110 relative group"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
          {/* <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full font-semibold text-gray-900 hover:shadow-lg transform hover:scale-105 transition-all animate-shimmer">
            Rejoindre
          </button> */}
        </div>

        {/* Menu mobile */}
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

      {/* Menu mobile avec animation */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {["Accueil", "Services", "Planning", "Tarifs", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-all duration-300 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full font-semibold text-gray-900 w-fit animate-bounce-in delay-500">
            Rejoindre
          </button>
        </div>
      </div>
    </header>
  );
};

// Section Hero avec animations spectaculaires
const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section
        id="accueil"
        className="relative h-screen flex items-center justify-center overflow-hidden floating-particles"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-1000">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-bold text-gray-900 text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-gradient-shift">
              Commencer Maintenant
            </button>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="border-2 border-yellow-400 px-8 py-4 rounded-full font-bold text-yellow-400 text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 interactive-element flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Voir la vidéo</span>
            </button>
          </div>

          {/* Badge de confiance */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>

        {/* Flèches décoratives animées */}
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

      <VideoModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
    </>
  );
};

// Section Services avec animations au scroll
const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-yellow-400" />,
      title: "Musculation",
      description:
        "Équipements de dernière génération pour développer votre force et votre masse musculaire",
      features: ["Machines professionnelles", "Poids libres", "Zones dédiées"],
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Cours Collectifs",
      description: "Fitness, Crossfit, Kickboxing, Stretching et Lutte avec nos coachs certifiés",
      features: ["5 disciplines", "Coachs experts", "Horaires flexibles"],
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: "Planning Flexible",
      description: "Horaires étendus pour s'adapter à votre emploi du temps chargé",
      features: ["Ouvert 7j/7", "Créneaux adaptés", "Planning optimisé"],
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-400" />,
      title: "Coaching Personnel",
      description:
        "Accompagnement personnalisé pour atteindre vos objectifs rapidement",
      features: ["Suivi individuel", "Programme sur mesure", "Résultats garantis"],
    },
  ];

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

// Section avec statistiques animées
const Stats = () => {
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
          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-100"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-gray-300 mt-2">Membres Satisfaits</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-200"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={95} suffix="%" />
              <p className="text-gray-300 mt-2">Taux de Satisfaction</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-300"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={10} suffix="+" />
              <p className="text-gray-300 mt-2">Coachs Certifiés</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-400"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter end={5} suffix="+" />
              <p className="text-gray-300 mt-2">Années d'Expérience</p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

// Section Planning avec animations
const Planning = () => {
  const scheduleData = {
    women: [
      { day: "SAMEDI", hours: "9h30-11h30 (Fitness)", general: "8 AM - 4 PM" },
      { day: "DIMANCHE", hours: "17h30-18h45 (Kickboxing)", general: "11 AM - 7 PM" },
      { day: "LUNDI", hours: "11h30-13h (Stretching)", general: "11 AM - 5 PM" },
      { day: "MARDI", hours: "17h30-18h45 (Crossfit)", general: "11 AM - 7 PM" },
      { day: "MERCREDI", hours: "11h30-13h (Fitness)", general: "11 AM - 5 PM" },
      { day: "JEUDI", hours: "17h30-18h45 (Crossfit)", general: "11 AM - 7 PM" },
      { day: "VENDREDI", hours: "15h30-17h45 (Kickboxing)", general: "2 PM - 6 PM" },
    ],
    men: [
      { day: "SAMEDI", hours: "Lutte 19h30-21h", general: "4 PM - 12 AM" },
      { day: "DIMANCHE", hours: "Cours collectifs disponibles", general: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "LUNDI", hours: "Cours collectifs disponibles", general: "6 AM - 11 AM / 5 PM - 12 AM" },
      { day: "MARDI", hours: "Lutte 19h30-21h", general: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "MERCREDI", hours: "Cours collectifs disponibles", general: "6 AM - 11 AM / 5 PM - 12 AM" },
      { day: "JEUDI", hours: "Cours collectifs disponibles", general: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "VENDREDI", hours: "Lutte 19h30-21h", general: "6 PM - 12 AM" },
    ],
  };

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
          {/* Planning Femmes */}
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

          {/* Planning Hommes */}
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
          {/* <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-bold text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all animate-shimmer flex items-center space-x-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Réserver une Séance</span>
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

// Section Tarifs avec animations
const Tarifs = () => {
  const plans = [
    {
      name: "8 Séances",
      price: "3900",
      period: "mois",
      description: "Idéal pour débuter",
      badge: "Débutant",
      features: [
        "8 séances par mois",
        "Accès aux équipements",
        "Vestiaires et douches",
        "Accès Wi-Fi",
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
      iconColor: "text-gray-400",
    },
    {
      name: "12 Séances", 
      price: "4900",
      period: "mois",
      description: "Equilibré et populaire",
      badge: "Équilibré",
      features: [
        "12 séances par mois",
        "Accès aux équipements",
        "Vestiaires et douches", 
        "1 séance coaching gratuite",
        "Accès Wi-Fi",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-400",
    },
    {
      name: "16 Séances",
      price: "5900", 
      period: "mois",
      description: "Pour les motivés",
      badge: "POPULAIRE",
      features: [
        "16 séances par mois",
        "Accès aux équipements",
        "Vestiaires et douches",
        "2 séances coaching gratuites",
        "Programme personnalisé",
        "Suivi nutritionnel de base",
        "Accès Wi-Fi",
      ],
      popular: true,
      color: "from-yellow-400 to-orange-500",
      iconColor: "text-yellow-400",
    },
    {
      name: "Illimité",
      price: "6900",
      period: "mois", 
      description: "Accès total premium",
      badge: "Premium",
      features: [
        "Séances illimitées",
        "Accès aux équipements",
        "Vestiaires et douches",
        "3 séances coaching gratuites", 
        "Programme personnalisé",
        "Suivi nutritionnel complet",
        "Support VIP 24/7",
        "Invité gratuit 1x/mois",
        "Accès Wi-Fi prioritaire",
      ],
      popular: false,
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
    },
  ];

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
          {plans.map((plan, index) => (
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
                    {plan.name === "Illimité" ? (
                      <Crown className="w-8 h-8 text-white" />
                    ) : plan.name === "16 Séances" ? (
                      <Trophy className="w-8 h-8 text-white" />
                    ) : plan.name === "12 Séances" ? (
                      <Target className="w-8 h-8 text-white" />
                    ) : (
                      <Star className="w-8 h-8 text-white" />
                    )}
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

        {/* Section comparaison */}
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

// Section Témoignages avec animations
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: "28 ans",
      rating: 5,
      comment:
        "Équipements au top et ambiance motivante ! J'ai atteint mes objectifs en 3 mois grâce aux coachs exceptionnels.",
      image: "👩‍💼",
      transformation: "Perte de 12kg",
    },
    {
      name: "Ahmed K.",
      age: "35 ans",
      rating: 5,
      comment:
        "Les coachs sont exceptionnels, très professionnels et à l'écoute. Le planning flexible s'adapte parfaitement à mon travail.",
      image: "👨‍💻",
      transformation: "Gain de 8kg de muscle",
    },
    {
      name: "Lina B.",
      age: "24 ans",
      rating: 5,
      comment:
        "Salle moderne et propre, horaires parfaits pour mon emploi du temps. Les cours de kickboxing sont fantastiques !",
      image: "👩‍🎓",
      transformation: "Amélioration de 40% de sa forme",
    },
  ];

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

        {/* Section CTA témoignages */}
        {/* <ScrollAnimationWrapper className="text-center mt-12" animationType="fadeInUp">
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Rejoignez nos membres satisfaits !</h3>
            <p className="text-gray-300 mb-6">Plus de 500 personnes nous font confiance pour leur transformation</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-bold text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all animate-shimmer">
              Commencer Mon Transformation
            </button>
          </div>
        </ScrollAnimationWrapper> */}
      </div>
    </section>
  );
};

// Section Contact avec animations
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé ! Nous vous recontacterons bientôt.');
  };

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

    {/* Section Contact - Alignement horizontal */}
    <div className="flex justify-center">
      <div className="w-full max-w-6xl">
        <ScrollAnimationWrapper animationType="fadeInUp">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold gradient-text mb-4">Informations de Contact</h3>
            <p className="text-gray-300">N'hésitez pas à nous contacter pour toute question ou information</p>
          </div>

          {/* Conteneur horizontal - 4 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                info: "En face Carrefour, Bab Ezzouar",
                subInfo: "Alger, Algérie",
                color: "from-red-400 to-red-500",
              },
              {
                icon: Phone,
                title: "Téléphone",
                info: "0561379356",
                subInfo: "Disponible 7j/7 de 8h à 22h",
                color: "from-green-400 to-green-500",
              },
              {
                icon: Mail,
                title: "Email", 
                info: "gympremium6@gmail.com",
                subInfo: "Réponse sous 24h",
                color: "from-blue-400 to-blue-500",
              },
              {
                icon: Instagram,
                title: "Instagram",
                info: "@premium.gym_",
                subInfo: "Suivez nos actualités",
                color: "from-purple-400 to-pink-500",
                link:"https://www.instagram.com/premium.gym__/"
              },
            ].map((item, index) => (
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

          {/* Réseaux sociaux - Centré */}
          {/* <div className="pt-12 border-t border-gray-700 text-center mt-12">
            <h4 className="font-semibold mb-6 text-yellow-400">Suivez-nous sur les réseaux</h4>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Instagram, color: "from-purple-400 to-pink-500", name: "Instagram" },
                { icon: Facebook, color: "from-blue-500 to-blue-600", name: "Facebook" },
                { icon: Youtube, color: "from-red-500 to-red-600", name: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex flex-col items-center group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 mb-2`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors">{social.name}</span>
                </a>
              ))}
            </div>
          </div> */}
        </ScrollAnimationWrapper>
      </div>
    </div>

    {/* Section FAQ */}
    <ScrollAnimationWrapper className="mt-20" animationType="fadeInUp">
      <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Questions Fréquentes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Puis-je essayer avant de m'abonner ?",
              answer: "Oui ! Séance d'essai gratuite offerte."
            },
            {
              question: "Les coachs sont-ils qualifiés ?",
              answer: "Tous nos coachs sont certifiés et expérimentés."
            },
            {
              question: "Puis-je suspendre mon abonnement ?",
              answer: "Oui, pour raisons médicales ou professionnelles."
            },
            {
              question: "Y a-t-il des douches ?",
              answer: "Oui, des douches modernes et propres."
            }
          ].map((item, index) => (
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

// Footer avec animations
const Footer = () => {
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

// Scroll to top button avec animations
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 animate-bounce-in glow-animation ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      aria-label="Retour en haut"
    >
      <ChevronUp className="w-6 h-6 text-gray-900" />
    </button>
  );
};

// Composant principal avec toutes les animations
const PremiumGymSite = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Stats />
      <Planning />
      <Tarifs />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default PremiumGymSite;
