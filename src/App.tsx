import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Briefcase,
  CheckCircle2, 
  ChevronDown, 
  Globe, 
  Instagram, 
  Linkedin, 
  Menu, 
  MessageSquare, 
  MousePointer2, 
  Scale, 
  Smartphone, 
  X,
  Zap,
  Star,
  TrendingUp,
  Users,
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import mffLogo from './assets/MFF-Logo-transparente.webp';
import olavoLogo from './assets/olavo.webp';
import saLogo from './assets/silmara.webp';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-sans font-extrabold text-2xl tracking-tight text-white">ROWP.</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <a href="#metodologia" className="text-xs font-medium uppercase tracking-widest text-stone-300 hover:text-gold-300 transition-colors">Metodologia</a>
              <a href="#servicos" className="text-xs font-medium uppercase tracking-widest text-stone-300 hover:text-gold-300 transition-colors">Serviços</a>
              <a href="#resultados" className="text-xs font-medium uppercase tracking-widest text-stone-300 hover:text-gold-300 transition-colors">Resultados</a>
              <a href="#quem-somos" className="text-xs font-medium uppercase tracking-widest text-stone-300 hover:text-gold-300 transition-colors">Quem Somos</a>
              <a href="#contato" className="border border-gold-300/30 text-gold-300 hover:bg-gold-300 hover:text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
                Agendar Reunião
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-300 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020202] border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#metodologia" className="text-stone-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Metodologia</a>
            <a href="#servicos" className="text-stone-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Serviços</a>
            <a href="#resultados" className="text-stone-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resultados</a>
            <a href="#quem-somos" className="text-stone-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Quem Somos</a>
            <a href="#contato" className="text-gold-300 block px-3 py-2 rounded-md text-base font-bold">Agendar Reunião</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Additional Ambient Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(197,160,104,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="mb-8">
               <span className="font-sans font-extrabold text-2xl tracking-tight text-white">ROWP.</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light tracking-tight mb-8 leading-[1.1] text-white">
              Conheça a solução usada pelos <span className="font-semibold text-gold-300">maiores advogados</span> para atrair mais clientes.
            </h1>
            
            <p className="mt-6 text-lg text-stone-300 mb-10 leading-relaxed max-w-xl font-light">
              Descubra como podemos multiplicar a quantidade de clientes qualificados de maneira previsível gerando mais reconhecimento, liberdade e lucro.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="#contato" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 bg-gold-300 rounded-full hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(227,199,158,0.4)]">
                Quero escalar meu escritório
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-stone-400 font-medium uppercase tracking-widest border-l border-white/10 pl-4 py-1">
                Metodologia GRL <br/> 100% Ética OAB
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Refined Collage Layout with Glassmorphism */}
            {/* Top Right Image - Text moved to top-right to avoid overlap */}
            <div className="absolute top-0 right-0 w-[55%] h-[45%] rounded-sm overflow-hidden border border-white/5 z-10 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent z-10" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-90" 
                 alt="Meeting" 
                 width="1000"
                 height="667"
               />
               <div className="absolute top-6 right-6 z-20 text-right">
                  <span className="text-white font-light text-3xl block drop-shadow-lg">+4</span> 
                  <span className="text-gold-300 text-[10px] uppercase tracking-[0.2em] drop-shadow-lg font-medium">Anos de Mercado</span>
               </div>
            </div>

            {/* Bottom Left Image - Text moved to bottom-left to avoid overlap */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-sm overflow-hidden border border-white/5 z-10 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-90" 
                 alt="Working" 
                 width="1000"
                 height="667"
               />
               <div className="absolute bottom-6 left-6 z-20 text-left">
                  <div className="text-white font-light text-3xl">+2.2M</div>
                  <div className="text-gold-300 text-[10px] uppercase tracking-[0.2em]">Em Publicidade</div>
               </div>
            </div>

            {/* Center Image - Centered to overlap corners evenly */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[55%] rounded-sm overflow-hidden border border-gold-500/20 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover" 
                 alt="Professional" 
                 width="1000"
                 height="1500"
                 fetchPriority="high"
               />
               <div className="absolute bottom-8 left-0 w-full text-center z-20">
                  <div className="text-white font-light text-4xl mb-1">+17M</div>
                  <div className="text-gold-300 text-[10px] uppercase tracking-[0.2em]">Vendas Geradas</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Methodology = () => {
  const steps = [
    { 
      title: "Atração", 
      desc: "Estratégias para atrair clientes certos para seu escritório.",
      icon: <Users className="w-8 h-8 text-white stroke-[1.5]" />
    },
    { 
      title: "Funil de Aquisição", 
      desc: "Conteúdo estratégico para qualificar leads.",
      icon: <Target className="w-8 h-8 text-white stroke-[1.5]" />
    },
    { 
      title: "Conversão", 
      desc: "Transformação de leads em clientes reais.",
      icon: <CheckCircle2 className="w-8 h-8 text-white stroke-[1.5]" />
    },
    { 
      title: "Crescimento", 
      desc: "Multiplicação das estratégias para expansão sustentável do seu escritório.",
      icon: <TrendingUp className="w-8 h-8 text-white stroke-[1.5]" />
    },
  ];

  return (
    <section id="metodologia" className="py-24 relative overflow-hidden">
      {/* Subtle Transition Effect */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 w-[60%] h-32 bg-[radial-gradient(ellipse_at_top,rgba(197,160,104,0.15)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white tracking-tight">Como aceleramos seu crescimento:</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-8 text-stone-300 text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" />
              <span>Atendimento especializado e transparente</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" />
              <span>Estratégias validadas e eficazes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" />
              <span>Mapeamento de KPIs e previsibilidade de faturamento</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-light text-white tracking-tight">O que faremos no seu escritório:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full border border-white/10 group-hover:border-gold-300/50 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-stone-300 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section Background Enhancement */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[radial-gradient(ellipse_at_center,rgba(197,160,104,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Tráfego Pago para Advogados",
      description: "Estratégias avançadas de Google Ads, Facebook Ads, Tik Tok Ads para captação de clientes qualificados.",
      icon: <MousePointer2 className="w-6 h-6 stroke-[1.5]" />
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Atrair e engajar clientes com conteúdos relevantes e estratégicos.",
      icon: <Smartphone className="w-6 h-6 stroke-[1.5]" />
    },
    {
      title: "Desenvolvimento de Sites Jurídicos",
      description: "Sites profissionais, responsivos e otimizados para converter visitantes em clientes reais.",
      icon: <Globe className="w-6 h-6 stroke-[1.5]" />
    },
    {
      title: "Automação com Inteligência Artificial",
      description: "Transforme contatos em consultas agendadas com atendimento humanizado operado integralmente por Inteligência Artificial.",
      icon: <Zap className="w-6 h-6 stroke-[1.5]" />
    },
    {
      title: "Estruturação e Processo Comercial",
      description: "Estruturação completa do seu funil de vendas e treinamento de equipe. Implementamos processos validados para garantir que nenhum lead seja perdido e que sua taxa de conversão seja maximizada.",
      icon: <Briefcase className="w-6 h-6 stroke-[1.5]" />,
      featured: true
    }
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />
      <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">
            Nossas Soluções
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border border-white/10 hover:border-gold-300/30 transition-all duration-300 bg-[#0A0A0A] group ${service.featured ? 'md:col-span-2 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] border-gold-300/20 shadow-[0_0_30px_rgba(227,199,158,0.05)]' : ''}`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-3 border rounded-lg shrink-0 transition-colors ${service.featured ? 'border-gold-300/40 text-gold-300 bg-gold-300/5' : 'border-white/10 text-white group-hover:border-white/30'}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${service.featured ? 'text-gold-300' : 'text-white'}`}>{service.title}</h3>
                  <p className="text-stone-300 leading-relaxed text-sm font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 mb-10 text-center relative group">
          <div className="absolute inset-0 bg-gold-300 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
          <h3 className="relative text-2xl md:text-3xl font-light text-white tracking-tight mb-8">
            Entenda como podemos <span className="font-bold text-gold-300 border-b border-gold-300/30 pb-1">transformar o seu escritório.</span>
          </h3>
          <a href="#contato" className="relative z-10 inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-widest text-black bg-gold-300 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(227,199,158,0.3)]">
            Fale com um especialista
          </a>
        </div>
      </div>
      
      {/* Sophisticated Transition */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
         <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
         <div className="absolute bottom-0 w-[40%] h-20 bg-[radial-gradient(ellipse_at_bottom,rgba(197,160,104,0.1)_0%,transparent_70%)] blur-2xl" />
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    { text: "A consultoria trouxe clareza de prioridade. Ajustamos funil, atendimento e controle de métricas em pouco tempo.", author: "Dr. Renato Azevedo", location: "Campinas, SP", tag: "Processo" },
    { text: "O maior ganho foi organização comercial. Hoje a equipe segue rotina e o lead não fica perdido.", author: "RVP Advocacia", location: "Belo Horizonte, MG", tag: "Vendas" },
    { text: "A implantação foi prática. Menos teoria e mais padrão de execução no dia a dia do escritório.", author: "CMA Advogados", location: "Curitiba, PR", tag: "Execução" },
    { text: "Tráfego deixou de ser tentativa. Passamos a ter critério, teste e leitura de resultado.", author: "Dra. Paula Menezes", location: "Recife, PE", tag: "Tráfego" },
    { text: "O modelo de atendimento e follow-up mudou o jogo. O time ficou mais rápido e consistente.", author: "SFA Sociedade de Advogados", location: "Florianópolis, SC", tag: "Atendimento" },
    { text: "A estrutura de CRM e pipeline trouxe previsibilidade. Ficou fácil ver gargalos e cobrar o time.", author: "KLT Advocacia", location: "Goiânia, GO", tag: "CRM" },
    { text: "A parte de IA foi aplicada com bom senso. Automatizamos o básico sem perder padrão e controle.", author: "Dr. Eduardo Nogueira", location: "São Paulo, SP", tag: "IA" },
    { text: "A consultoria ajudou a alinhar marketing com operação. Antes era desconectado.", author: "MBS Advogados", location: "Salvador, BA", tag: "Alinhamento" },
    { text: "O processo comercial ficou replicável. Hoje consigo delegar e acompanhar com clareza.", author: "Dra. Marina Cardoso", location: "Vitória, ES", tag: "Gestão" },
    { text: "O padrão de comunicação e roteiro de reunião elevaram a qualidade das conversas.", author: "PAX Advocacia", location: "Brasília, DF", tag: "Reunião" },
    { text: "A gente precisava de método. A Hope trouxe rotina, controle e execução.", author: "JTR Advogados", location: "Ribeirão Preto, SP", tag: "Método" },
    { text: "A governança do tráfego ficou mais madura. Menos ansiedade e mais decisão com base em dados.", author: "Dr. Thiago Ramos", location: "Fortaleza, CE", tag: "Métricas" },
    { text: "Melhorou o padrão do time. Do primeiro contato até a proposta, ficou tudo mais claro.", author: "LMA Advocacia", location: "Porto Alegre, RS", tag: "Padronização" },
    { text: "O trabalho foi bem mão na massa. Ajuste de processo e tecnologia com foco no que gera resultado operacional.", author: "NVP Sociedade de Advogados", location: "Rio de Janeiro, RJ", tag: "Implementação" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(testimonials.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
  }

  return (
    <div className="mt-20 relative z-20">
      <div className="relative px-4 md:px-12 max-w-6xl mx-auto">
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-30 p-2 bg-black/50 border border-white/10 rounded-full text-white hover:bg-gold-300 hover:text-black transition-colors hidden md:flex backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-30 p-2 bg-black/50 border border-white/10 rounded-full text-white hover:bg-gold-300 hover:text-black transition-colors hidden md:flex backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                {pageItems.map((item, i) => (
                  <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl flex flex-col justify-between h-full hover:border-gold-300/30 transition-colors group select-none">
                    <p className="text-stone-300 text-sm font-light italic mb-6 leading-relaxed">"{item.text}"</p>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-bold text-sm">{item.author}</h4>
                        {item.tag && (
                          <span className="text-[10px] uppercase tracking-wider text-gold-300 bg-gold-300/10 px-2 py-1 rounded-full border border-gold-300/20 group-hover:bg-gold-300 group-hover:text-black transition-colors">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-xs">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-gold-300 w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  const cases = [
    {
      name: "MFF Advocacia",
      result: "Do faturamento inicial de 0 a 280 mil reais com contratos trabalhistas em 2 meses.",
      logo: mffLogo
    },
    {
      name: "Olavo Filho Advocacia",
      result: "273 Leads gerados com custo médio de R$ 4,34, em apenas 30 dias.",
      logo: olavoLogo
    },
    {
      name: "SA Advogados Associados",
      result: "18 contratos fechados na primeira semana de parceira.",
      logo: saLogo
    }
  ];

  return (
    <section id="resultados" className="py-24 relative">
      {/* Background Enhancement */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mt-6 text-white tracking-tight">Resultados Comprovados</h2>
          <p className="text-stone-300 mt-4 text-sm font-light">Veja como ajudamos nossos parceiros a escalar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="bg-[#0A0A0A] p-8 rounded-sm border border-white/10 flex flex-col items-center text-center h-full">
              <div className="h-32 w-full flex items-center justify-center mb-8">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-[80%] object-contain"
                  loading="lazy"
                  width="200"
                  height="100"
                />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">{item.name}</h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">"{item.result}"</p>
            </div>
          ))}
        </div>

        <Testimonials />

        <div className="mt-20 text-center">
          <div className="inline-block mb-10 relative group">
            <div className="absolute inset-0 bg-gold-300 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <p className="relative text-2xl md:text-3xl font-light text-white tracking-tight">
              Seu escritório pode ser o <span className="font-bold text-gold-300 border-b border-gold-300/30 pb-1">próximo case de sucesso!</span>
            </p>
          </div>
          
          <div>
            <a href="#contato" className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-widest text-black bg-gold-300 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(227,199,158,0.3)]">
              Quero resultados como estes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessAndForm = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Sophisticated Entry Transition */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gold-300/50 to-gold-300" />
        <div className="w-4 h-4 rounded-full bg-gold-300 shadow-[0_0_20px_rgba(227,199,158,0.8)] animate-pulse" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[radial-gradient(ellipse_at_top,rgba(197,160,104,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Process */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-white tracking-tight">
              Inicie sua Jornada
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Fale com um especialista</h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">Converse com nosso especialista disponível no WhatsApp para entendermos o seu momento e iniciarmos o processo.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Agendamento Inteligente</h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">Vamos agendar a reunião já com as informações relevantes que servirão de guia para sermos assertivos.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Reunião Estratégica</h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">A Reunião Estratégica é online, personalizada e focada no crescimento do seu escritório.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp CTA */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-xl border border-white/10 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
              <MessageSquare className="w-10 h-10 text-green-500 relative z-10" />
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#0A0A0A] rounded-full z-20"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Especialista Online</h3>
            <p className="text-stone-400 text-sm mb-8 font-light relative z-10">Estamos prontos para analisar o seu cenário agora mesmo.</p>

            <a 
              href="https://wa.me/19981900118" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 relative z-10"
            >
              <MessageSquare className="w-5 h-5" />
              Iniciar Conversa no WhatsApp
            </a>
            
            <p className="mt-6 text-xs text-stone-500 font-light relative z-10">
              Resposta média em menos de 5 minutos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="quem-somos" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-white tracking-tight">Quem Somos</h2>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light mb-8">
          A <span className="text-white font-medium">Rowp Tech</span> existe para dar previsibilidade ao comercial do escritório no digital. Nós estruturamos o processo, ajustamos as peças e acompanhamos a execução. Tese. Anúncios. WhatsApp. Reunião. Tudo com sobriedade e controle.
        </p>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light">
          Nascida e sediada em <span className="text-white font-medium">Campinas-SP</span>, atuamos há mais de 5 anos exclusivamente no marketing jurídico. Ensinamos o que vivemos, com um time formado por especialistas em vendas, marketing e advogados ativos no mercado.
        </p>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    "Como funciona a metodologia da Rowp Tech?",
    "Em quanto tempo vejo resultados?",
    "O que está incluso nos serviços oferecidos?",
    "O que diferencia a metodologia da Rowp Law de outras agências de marketing?",
    "Meu escritório já investe em marketing, como vocês podem ajudar?",
    "Qual é o investimento necessário para começar?",
    "Vocês oferecem garantias de resultados?",
    "Como vocês escolhem as estratégias para o meu escritório?",
    "O marketing jurídico da Rowp. Tech & Sales segue as diretrizes da OAB?",
    "Posso contratar apenas um serviço específico?"
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-white tracking-tight">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((q, i) => (
            <details key={i} className="group border-b border-white/10">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-white hover:text-gold-300 transition-colors">
                <span className="text-lg">{q}</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-stone-400" />
                </span>
              </summary>
              <div className="text-stone-300 pb-6 pt-0 leading-relaxed text-sm font-light">
                Entre em contato conosco para saber mais detalhes sobre este tópico.
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
             <span className="font-sans font-extrabold text-5xl tracking-tight text-gold-100">ROWP.</span>
          </div>
          
          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-stone-300 text-sm font-medium">
             <a href="mailto:contato@rowp.online" className="hover:text-gold-300 transition-colors flex items-center gap-2">
               <MessageSquare className="w-5 h-5" /> contato@rowp.online
             </a>
             <a href="https://instagram.com/rowp.tech" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors flex items-center gap-2">
               <Instagram className="w-5 h-5" /> @rowp.tech
             </a>
             <a href="https://linkedin.com/company/rowp" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors flex items-center gap-2">
               <Linkedin className="w-5 h-5" /> @rowp
             </a>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-[400px] h-[200px] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gold-300/10 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rowp.%20Tech%20%26%20Sales%20Company%20Edif%C3%ADcio%20-%20Cruz%20Alta%20-%20Rua%20Bar%C3%A3o%20de%20Jaguara%2C%201481%20-%20Conjunto%20215%2F217%2C%20Sala%20114%2C%20Campinas%20-%20SP%2C%2013015-910&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              title="Google Maps Location"
            >
            </iframe>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-stone-500 text-xs">© Rowp 2025 | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-300/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Services />
        <Results />
        <About />
        <ProcessAndForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
