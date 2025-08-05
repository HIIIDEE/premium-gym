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
} from "lucide-react";
import {
  useScrollAnimation,
  useCountUp,
  ScrollAnimationWrapper,
} from "../hooks/useScrollAnimation";

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
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full font-semibold text-gray-900 hover:shadow-lg transform hover:scale-105 transition-all animate-shimmer">
            Rejoindre
          </button>
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
  return (
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
          <button className="border-2 border-yellow-400 px-8 py-4 rounded-full font-bold text-yellow-400 text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 interactive-element">
            Découvrir nos Services
          </button>
        </div>
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
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Cours Collectifs",
      description: "Sessions motivantes en groupe avec nos coachs certifiés",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: "Planning Flexible",
      description: "Horaires étendus pour s'adapter à votre emploi du temps",
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: "Coaching Personnel",
      description:
        "Accompagnement personnalisé pour atteindre vos objectifs rapidement",
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
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
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
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-4 gap-8">
          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-100"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-gray-300 mt-2">Membres Satisfaits</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-200"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <AnimatedCounter end={95} suffix="%" />
              <p className="text-gray-300 mt-2">Taux de Satisfaction</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-300"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
              <AnimatedCounter end={10} suffix="+" />
              <p className="text-gray-300 mt-2">Coachs Certifiés</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            animationType="scaleIn"
            className="text-center delay-400"
          >
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30 hover-lift">
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
      { day: "SAMEDI", hours: "8 AM - 4 PM" },
      { day: "DIMANCHE", hours: "11 AM - 7 PM" },
      { day: "LUNDI", hours: "11 AM - 5 PM" },
      { day: "MARDI", hours: "11 AM - 7 PM" },
      { day: "MERCREDI", hours: "11 AM - 5 PM" },
      { day: "JEUDI", hours: "11 AM - 7 PM" },
      { day: "VENDREDI", hours: "2 PM - 6 PM" },
    ],
    men: [
      { day: "SAMEDI", hours: "4 PM - 12 AM" },
      { day: "DIMANCHE", hours: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "LUNDI", hours: "6 AM - 11 AM / 5 PM - 12 AM" },
      { day: "MARDI", hours: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "MERCREDI", hours: "6 AM - 11 AM / 5 PM - 12 AM" },
      { day: "JEUDI", hours: "6 AM - 11 AM / 7 PM - 12 AM" },
      { day: "VENDREDI", hours: "6 PM - 12 AM" },
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
            Horaires adaptés à vos besoins avec des créneaux dédiés
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Planning Femmes */}
          <ScrollAnimationWrapper animationType="fadeInLeft">
            <div className="glass-morphism p-8 rounded-2xl border border-pink-500/30 hover-lift">
              <h3 className="text-3xl font-bold text-center mb-8 text-pink-400 neon-glow">
                Femmes
              </h3>
              <div className="space-y-4">
                {scheduleData.women.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-semibold text-pink-400">
                      {item.day}
                    </span>
                    <span className="text-gray-300">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Planning Hommes */}
          <ScrollAnimationWrapper animationType="fadeInRight">
            <div className="glass-morphism p-8 rounded-2xl border border-blue-500/30 hover-lift">
              <h3 className="text-3xl font-bold text-center mb-8 text-blue-400 neon-glow">
                Hommes
              </h3>
              <div className="space-y-4">
                {scheduleData.men.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-semibold text-blue-400">
                      {item.day}
                    </span>
                    <span className="text-gray-300 text-sm">{item.hours}</span>
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
          <p className="text-gray-400 mb-6">
            * Les horaires peuvent varier selon les jours fériés
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-bold text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all animate-shimmer">
            Réserver une Séance
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

// Section Tarifs avec animations
const Tarifs = () => {
  const plans = [
    {
      name: "Mensuel",
      price: "3500",
      period: "mois",
      description: "Parfait pour commencer",
      features: [
        "Accès illimité aux équipements",
        "Vestiaires et douches",
        "Parking gratuit",
        "Support de base",
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Trimestriel",
      price: "9000",
      period: "3 mois",
      description: "Le plus populaire",
      features: [
        "Accès illimité aux équipements",
        "Vestiaires et douches",
        "Parking gratuit",
        "1 séance coaching gratuite",
        "Programme d'entraînement personnalisé",
        "Support prioritaire",
      ],
      popular: true,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Annuel",
      price: "30000",
      period: "12 mois",
      description: "Meilleure valeur",
      features: [
        "Accès illimité aux équipements",
        "Vestiaires et douches",
        "Parking gratuit",
        "3 séances coaching gratuites",
        "Programme d'entraînement personnalisé",
        "Suivi nutritionnel",
        "Support VIP",
        "Invitations aux événements spéciaux",
      ],
      popular: false,
      color: "from-purple-500 to-pink-500",
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
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      <span className="text-gray-900">POPULAIRE</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 float-animation`}
                  >
                    {plan.name === "Annuel" ? (
                      <Crown className="w-8 h-8 text-white" />
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
      </div>
    </section>
  );
};

// Section Témoignages avec animations
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      comment:
        "Équipements au top et ambiance motivante ! J'ai atteint mes objectifs en 3 mois.",
    },
    {
      name: "Ahmed K.",
      rating: 5,
      comment:
        "Les coachs sont exceptionnels, très professionnels et à l'écoute.",
    },
    {
      name: "Lina B.",
      rating: 5,
      comment:
        "Salle moderne et propre, horaires parfaits pour mon emploi du temps.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent nos <span className="gradient-text">Membres</span>
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper
              key={index}
              animationType="fadeInUp"
              className={`delay-${(index + 1) * 200}`}
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/30 transition-all hover:scale-105 card-hover hover-lift">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-bounce-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-yellow-400">
                  - {testimonial.name}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section Contact avec animations
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rejoignez-nous et commencez votre transformation dès aujourd'hui
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollAnimationWrapper animationType="fadeInLeft">
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  info: "En face Carrefour, Bab Ezzouar",
                },
                { icon: Phone, title: "Téléphone", info: "+213 XXX XXX XXX" },
                { icon: Instagram, title: "Instagram", info: "@premium.gym_" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center float-animation">
                    <item.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fadeInRight">
            <div className="glass-morphism p-8 rounded-2xl border border-gray-700 hover-lift">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none focus:scale-105"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-4 rounded-lg font-bold text-gray-900 hover:shadow-lg transform hover:scale-105 transition-all animate-shimmer">
                  Envoyer le Message
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
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
