
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, MapPin, Phone, Clock, Star, ChefHat, Users, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { toast } = useToast();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const menuItems = [
    {
      category: "Entradas",
      items: [
        {
          name: "Bruschetta Artesanal",
          description: "Pão italiano tostado com tomate fresco, manjericão e azeite extra virgem",
          price: "€12"
        },
        {
          name: "Carpaccio de Salmão",
          description: "Fatias finas de salmão fresco com alcaparras, rúcula e molho de mostarda",
          price: "€16"
        },
        {
          name: "Tábua de Queijos Regionais",
          description: "Seleção de queijos portugueses com mel, nozes e pão artesanal",
          price: "€18"
        }
      ]
    },
    {
      category: "Pratos Principais",
      items: [
        {
          name: "Bacalhau à Brás Gourmet",
          description: "Bacalhau desfiado com batata palha, ovos e azeitonas, servido em cataplana",
          price: "€24"
        },
        {
          name: "Risotto de Cogumelos Selvagens",
          description: "Arroz arbório cremoso com mix de cogumelos e parmesão envelhecido",
          price: "€22"
        },
        {
          name: "Polvo à Lagareiro",
          description: "Polvo grelhado com batatas a murro, azeite e alho confitado",
          price: "€28"
        }
      ]
    },
    {
      category: "Sobremesas",
      items: [
        {
          name: "Pastel de Nata Premium",
          description: "Tradicional pastel de nata com canela do Ceilão e açúcar mascavado",
          price: "€6"
        },
        {
          name: "Tiramisu da Casa",
          description: "Sobremesa italiana com café expresso e mascarpone artesanal",
          price: "€8"
        },
        {
          name: "Mousse de Chocolate Negro",
          description: "Mousse sedosa com chocolate 70% cacau e frutos vermelhos",
          price: "€7"
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Uma experiência gastronômica inesquecível! O ambiente é acolhedor e a comida é simplesmente divina.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "O melhor restaurante da cidade! Atendimento impecável e pratos que são verdadeiras obras de arte.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Cada visita é uma nova descoberta. A criatividade do chef e a qualidade dos ingredientes são excepcionais.",
      rating: 5
    }
  ];

  const handleMenuClick = () => {
    toast({
      title: "🍽️ Menu Digital",
      description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleReservation = () => {
    toast({
      title: "📅 Sistema de Reservas",
      description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleContact = () => {
    toast({
      title: "📞 Formulário de Contato",
      description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Sabores & Tradição - Restaurante Gourmet Português</title>
        <meta name="description" content="Descubra uma experiência gastronômica única no coração de Portugal. Sabores autênticos, ambiente acolhedor e tradição culinária em cada prato." />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <motion.header 
          style={{ opacity: headerOpacity }}
          className="fixed top-0 w-full z-50 glass-effect"
        >
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl font-bold text-white"
            >
              Sabores & Tradição
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-orange-300 transition-colors">Início</a>
              <a href="#menu" className="text-white hover:text-orange-300 transition-colors">Menu</a>
              <a href="#galeria" className="text-white hover:text-orange-300 transition-colors">Galeria</a>
              <a href="#sobre" className="text-white hover:text-orange-300 transition-colors">Sobre</a>
              <a href="#contato" className="text-white hover:text-orange-300 transition-colors">Contato</a>
              <Button onClick={handleReservation} className="bg-orange-500 hover:bg-orange-600 text-white">
                Fazer Reserva
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a href="#inicio" className="block text-gray-800 hover:text-orange-500">Início</a>
                <a href="#menu" className="block text-gray-800 hover:text-orange-500">Menu</a>
                <a href="#galeria" className="block text-gray-800 hover:text-orange-500">Galeria</a>
                <a href="#sobre" className="block text-gray-800 hover:text-orange-500">Sobre</a>
                <a href="#contato" className="block text-gray-800 hover:text-orange-500">Contato</a>
                <Button onClick={handleReservation} className="w-full bg-orange-500 hover:bg-orange-600">
                  Fazer Reserva
                </Button>
              </div>
            </motion.div>
          )}
        </motion.header>

        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0 z-0"
          >
            <img  
              alt="Interior elegante do restaurante com mesas bem postas e iluminação acolhedora"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1654483949849-ed21ae4fb2c1" />
            <div className="absolute inset-0 hero-gradient"></div>
          </motion.div>

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 text-shadow"
            >
              Sabores & Tradição
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow"
            >
              Uma experiência gastronômica única onde a tradição portuguesa encontra a inovação culinária
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-x-4"
            >
              <Button 
                onClick={handleMenuClick}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Ver Menu
              </Button>
              <Button 
                onClick={handleReservation}
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg"
              >
                Fazer Reserva
              </Button>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Nossa Carta
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubra sabores autênticos preparados com ingredientes frescos e técnicas tradicionais
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {menuItems.map((category, categoryIndex) => (
                <motion.div 
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-display text-2xl font-semibold text-orange-600 text-center mb-8">
                    {category.category}
                  </h3>
                  
                  {category.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.name}
                      whileHover={{ scale: 1.02 }}
                      className="menu-item-card p-6 rounded-lg hover-lift"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                        <span className="font-bold text-orange-600 text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Galeria
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Momentos especiais e pratos únicos que fazem parte da nossa história
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg hover-lift cursor-pointer"
                >
                  <img  
                    alt={`Prato gourmet ${index} do restaurante`}
                    className="w-full h-48 object-cover"
                   src="https://images.unsplash.com/photo-1701540747569-46bf364bbbb0" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 hover:opacity-100 transition-opacity">
                      <Heart className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Nossa História
                </h2>
                <div className="section-divider mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Há mais de duas décadas, o <strong>Sabores & Tradição</strong> tem sido um marco na gastronomia portuguesa, 
                  combinando receitas tradicionais transmitidas através de gerações com técnicas culinárias contemporâneas.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nossa paixão pela excelência culinária e pelo atendimento personalizado faz de cada refeição 
                  uma experiência memorável, onde cada prato conta uma história e cada sabor desperta emoções.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChefHat className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="font-bold text-2xl text-gray-800">20+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="font-bold text-2xl text-gray-800">50k+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="font-bold text-2xl text-gray-800">15</div>
                    <div className="text-sm text-gray-600">Prêmios Recebidos</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img  
                  alt="Chef preparando pratos tradicionais portugueses na cozinha"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                 src="https://images.unsplash.com/photo-1695861390335-a4a3049152ad" />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="font-bold text-2xl">Chef António</div>
                    <div className="text-sm opacity-90">Mestre Culinário</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                O Que Dizem Nossos Clientes
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experiências autênticas que ficam na memória e no coração
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="testimonial-card p-6 rounded-lg shadow-lg hover-lift"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Visite-nos
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Estamos ansiosos para recebê-lo e proporcionar uma experiência gastronômica inesquecível
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Localização</h3>
                    <p className="text-gray-300">
                      Rua dos Sabores, 123<br />
                      1200-001 Lisboa, Portugal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contato</h3>
                    <p className="text-gray-300">
                      +351 21 123 4567<br />
                      reservas@saborestradicao.pt
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Segunda a Quinta: 12:00 - 15:00, 19:00 - 23:00</p>
                      <p>Sexta e Sábado: 12:00 - 15:00, 19:00 - 24:00</p>
                      <p>Domingo: 12:00 - 15:00, 19:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleContact}
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto"
                >
                  Entrar em Contato
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-4">Localização no Mapa</h3>
                <div className="bg-gray-600 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Mapa Interativo</p>
                    <p className="text-sm">Rua dos Sabores, 123, Lisboa</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="font-display text-2xl font-bold mb-4">Sabores & Tradição</div>
                <p className="text-gray-400 mb-4">
                  Tradição culinária portuguesa com um toque contemporâneo, 
                  criando experiências gastronômicas únicas há mais de 20 anos.
                </p>
              </div>

              <div>
                <span className="font-semibold text-lg mb-4 block">Links Rápidos</span>
                <div className="space-y-2">
                  <a href="#inicio" className="block text-gray-400 hover:text-orange-400 transition-colors">Início</a>
                  <a href="#menu" className="block text-gray-400 hover:text-orange-400 transition-colors">Menu</a>
                  <a href="#galeria" className="block text-gray-400 hover:text-orange-400 transition-colors">Galeria</a>
                  <a href="#sobre" className="block text-gray-400 hover:text-orange-400 transition-colors">Sobre</a>
                </div>
              </div>

              <div>
                <span className="font-semibold text-lg mb-4 block">Contato</span>
                <div className="space-y-2 text-gray-400">
                  <p>Rua dos Sabores, 123</p>
                  <p>1200-001 Lisboa</p>
                  <p>+351 21 123 4567</p>
                  <p>reservas@saborestradicao.pt</p>
                </div>
              </div>

              <div>
                <span className="font-semibold text-lg mb-4 block">Horários</span>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>Seg-Qui: 12:00-15:00, 19:00-23:00</p>
                  <p>Sex-Sáb: 12:00-15:00, 19:00-24:00</p>
                  <p>Domingo: 12:00-15:00, 19:00-22:00</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Sabores & Tradição. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
