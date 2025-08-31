'use client';

import * as React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  Users, 
  BookOpen, 
  MessageSquare,
  ArrowRight,
  Mail,
  Phone as PhoneIcon, 
  MapPin as MapPinIcon, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Clock,
  PlayCircle
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Componente para animação de entrada
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Componente para o efeito de máquina de escrever
interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150 - Math.random() * 100);

  const toRotate = [text];
  const period = 2000;

  React.useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      
      setDisplayText(isDeleting 
        ? fullText.substring(0, currentIndex - 1) 
        : fullText.substring(0, currentIndex + 1));
      
      setTypingSpeed(isDeleting ? 30 : 150 - Math.random() * 100);

      if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      
      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);
    };

    const timer = setTimeout(() => {
      tick();
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, text, toRotate, typingSpeed]);

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>;
};


// Testimonial type definition
export type Testimonial = {
  id?: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 p-0.5">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
            priority={index < 3}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {testimonial.role}
          </p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </motion.div>
  );
};

export const TestimonialsCarousel: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const handlePrev = React.useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleNext = React.useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  }, [totalPages]);

  const handleDotClick = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Ensure all testimonials have an id
  const processedTestimonials = React.useMemo(() => {
    return testimonials.map((testimonial, index) => ({
      ...testimonial,
      id: testimonial.id || `testimonial-${index}`
    }));
  }, [testimonials]);

  const visibleTestimonials = React.useMemo(() => {
    if (processedTestimonials.length === 0) return [];
    
    const startIndex = currentIndex * itemsPerPage;
    const result: Testimonial[] = [];
    
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % processedTestimonials.length;
      if (processedTestimonials[index]) {
        result.push(processedTestimonials[index]);
      }
    }
    return result;
  }, [currentIndex, itemsPerPage, processedTestimonials]);
  
  if (testimonials.length === 0) {
    return null;
  }


  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 z-10 hidden md:flex items-center justify-center w-10 h-10"
          aria-label="Previous testimonial"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id || index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 z-10 hidden md:flex items-center justify-center w-10 h-10"
          aria-label="Next testimonial"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Section Component
function Section({ children, className = '', id = '' }: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) {
  return (
    <section 
      className={cn("py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden", className)}
      id={id}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}


// Theme state
const NewLandingPage = () => {
  // Dados de exemplo para depoimentos
  const testimonials = [
    {
      quote: "Economizei mais de 10 horas por semana na preparação de aulas. Agora consigo focar mais no que realmente importa: meus alunos.",
      author: "Ana Clara S.",
      role: "Professora do Ensino Fundamental II",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Os planos de aula gerados são incrivelmente completos e personalizáveis. Meus alunos estão mais engajados do que nunca!",
      author: "Carlos Eduardo R.",
      role: "Professor de Física",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "A ferramenta de feedback me ajudou a dar um retorno mais consistente e personalizado para cada um dos meus 150 alunos.",
      author: "Juliana M.",
      role: "Professora Universitária",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/logo.png" 
                  alt="TamanduAI Logo" 
                  width={40} 
                  height={40} 
                  className="w-12 h-12  "
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  TamanduAI
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Recursos
                </a>
                <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Depoimentos
                </a>
                <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Preços
                </a>
                <a href="#faq" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  FAQ
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login" className="no-underline">
                  <Button asChild variant="outline" className="ml-2">
                    <span>Entrar</span>
                  </Button>
                </Link>
                <Link href="/register" className="no-underline">
                  <Button asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    <span>Comece Grátis</span>
                  </Button>
                </Link>
              </div>
              
              <div className="md:hidden">
                {/* Mobile menu button */}
                <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-blue-900 min-h-[90vh] flex items-center">
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced background with more depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-800/90 via-green-700/90 to-blue-900/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          
          {/* Animated floating elements - enhanced */}
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 400 + 100; // Larger elements
            const color = i % 4 === 0 ? '#FFCC29' : 
                         i % 3 === 0 ? '#2E7D32' : 
                         i % 2 === 0 ? '#002776' : '#FFFFFF';
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full mix-blend-overlay"
                style={{
                  background: color,
                  opacity: 0.08 + Math.random() * 0.15,
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(30px)'
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 30 + Math.random() * 30,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse' as const,
                  delay: i * 0.3
                }}
              />
            );
          })}
          
          {/* Enhanced Brazilian flag pattern - Larger and more prominent */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-6xl h-[500px]">
                {/* Larger yellow diamond */}
                <motion.div 
                  className="absolute inset-0 bg-yellow-400"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    background: 'radial-gradient(ellipse at center, #FFCC29 0%, #FFCC29 30%, transparent 70%)',
                    transform: 'scale(1.2)'
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: [0.9, 1.2, 0.9],
                    rotate: [0, 5, 0],
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                />
                
                {/* Blue circle with glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-48 h-48 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #002776 0%, #001a4d 100%)',
                      boxShadow: '0 0 80px 20px rgba(0, 39, 118, 0.5)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1,
                      opacity: 1,
                      rotate: 10
                    }}
                    transition={{ 
                      delay: 0.7, 
                      type: 'spring',
                      stiffness: 100,
                      damping: 10
                    }}
                  />
                </div>
                
                {/* Subtle orbiting elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white/30"
                    style={{
                      top: '50%',
                      left: '50%',
                      x: -8, // Half of width
                      y: -8, // Half of height
                    }}
                    animate={{
                      x: ['0px', '200px', '0px', '-200px', '0px'],
                      y: ['0px', '150px', '300px', '150px', '0px'],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 20 + i * 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Transforme sua prática docente com <TypewriterText text="IA" className="text-yellow-300" />
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Crie planos de aula, atividades e avalie seus alunos de forma rápida e personalizada com o poder da inteligência artificial.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-900 font-semibold py-6 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="/register">
                    Comece Agora Grátis
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 py-6 px-8 text-lg rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="#features">
                    Conheça Nossos Recursos
                  </Link>
                </Button>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.5} className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <div className="relative z-10 w-full cursor-pointer group">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full">
                    {/* Video Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-900 opacity-90">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 group-hover:bg-white/20 transition-colors duration-300">
                              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-white font-medium text-lg">Assista ao vídeo</p>
                          <p className="text-white/70 text-sm mt-1">Veja como funciona</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              Recursos Poderosos para Professores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tudo o que você precisa para revolucionar sua prática docente em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Planos de Aula Inteligentes",
                description: "Gere planos de aula personalizados em segundos com base no seu currículo e necessidades específicas."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
                title: "Atividades Criativas",
                description: "Acesse milhares de ideias de atividades alinhadas à BNCC e ao seu plano de ensino."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Avaliações Personalizadas",
                description: "Crie avaliações personalizadas em minutos com nossa biblioteca de questões e rubricas."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Gestão de Turmas",
                description: "Organize suas turmas, acompanhe o desempenho dos alunos e mantenha tudo em um só lugar."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-red-500" />,
                title: "Feedback Imediato",
                description: "Receba sugestões de melhoria e dicas pedagógicas baseadas nas melhores práticas educacionais."
              },
              {
                icon: <Clock className="w-8 h-8 text-cyan-500" />,
                title: "Economize Tempo",
                description: "Reduza em até 70% o tempo gasto com planejamento e correção de atividades."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              O que os professores estão dizendo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Veja como o TamanduAI está transformando a vida de educadores em todo o Brasil
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Pronto para transformar sua prática docente?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Comece gratuitamente hoje e descubra como a IA pode te ajudar a economizar tempo e melhorar o aprendizado dos seus alunos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              size="lg"
              asChild
            >
              Começar Agora Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="group relative bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              size="lg"
            >
              <span className="relative z-10 flex items-center">
                Ver Demonstração
                <PlayCircle className="ml-2 h-5 w-5" />
              </span>
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">TamanduAI</h3>
              <p className="text-sm">A plataforma de inteligência artificial feita por professores, para professores.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm hover:text-white">Recursos</a></li>
                <li><a href="#" className="text-sm hover:text-white">Preços</a></li>
                <li><a href="#" className="text-sm hover:text-white">Depoimentos</a></li>
                <li><a href="#" className="text-sm hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm hover:text-white">Carreiras</a></li>
                <li><a href="#" className="text-sm hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2" /> contato@tamanduai.com
                </li>
                <li className="flex items-center text-sm">
                  <PhoneIcon className="h-4 w-4 mr-2" /> (11) 98765-4321
                </li>
                <li className="flex items-start text-sm">
                  <MapPinIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TamanduAI. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-white">Termos de Uso</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLandingPage;
