import {
  Dumbbell,
  Users,
  Clock,
  Target,
  Trophy,
  Crown,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Zap,
  Heart
} from "lucide-react";
import { Service, PricingPlan, Testimonial, ScheduleData, ContactInfo, FAQ } from '../types';

export const services: Service[] = [
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

export const pricingPlans: PricingPlan[] = [
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

export const testimonials: Testimonial[] = [
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

export const scheduleData: ScheduleData = {
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

export const contactInfo: ContactInfo[] = [
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
];

export const faqData: FAQ[] = [
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
];

export const navItems = ["Accueil", "Services", "Planning", "Tarifs", "Contact"];

export const collectiveClasses = [
  { name: "Fitness", icon: Heart, color: "bg-pink-500/20 text-pink-300" },
  { name: "Crossfit", icon: Zap, color: "bg-blue-500/20 text-blue-300" },
  { name: "Kickboxing", icon: Target, color: "bg-green-500/20 text-green-300" },
  { name: "Stretching", icon: Users, color: "bg-purple-500/20 text-purple-300" },
  { name: "Lutte", icon: Trophy, color: "bg-red-500/20 text-red-300" },
];