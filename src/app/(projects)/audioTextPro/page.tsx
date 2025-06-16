"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const AudioTextProLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PricingCard = ({
    title,
    icon,
    price,
    description,
    features,
    isPopular = false,
    gradient,
  }: {
    title: string;
    icon: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    gradient: string;
  }) => (
    <div
      className={`${gradient} p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 relative hover:shadow-2xl ${
        isPopular ? "scale-105" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          🔥 MAIS POPULAR
        </div>
      )}

      <div className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold mb-4">{price}</div>
        <p className="mb-6 opacity-90">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-white text-black bg-opacity-20 backdrop-blur-sm py-3 rounded-xl font-bold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30">
        Começar Teste Grátis
      </button>
    </div>
  );

  const FeatureCard = ({
    icon,
    title,
    description,
    color,
  }: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }) => (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600">
      <div className={`${color} rounded-full p-3 text-2xl w-fit mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  const ProblemCard = ({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) => (
    <div className="bg-red-900 bg-opacity-30 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 border border-red-700 hover:border-red-600">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg"
            : "bg-white bg-opacity-10 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              🎧 AudioText Pro
            </div>
            <div className="hidden md:flex space-x-8 text-violet-900">
              <Link
                href={"/"}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href={"/contato"}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contato
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">
          💬
        </div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-20">
          🎵
        </div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce opacity-20">
          📱
        </div>
        <div className="absolute bottom-40 right-10 text-5xl animate-pulse opacity-20">
          ✨
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nunca mais perca um{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                áudio
              </span>{" "}
              importante! 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transforme todos os áudios do WhatsApp em texto instantaneamente!
              Perfeito para quem não gosta de áudios, tem dificuldades auditivas
              ou precisa de praticidade no dia a dia 📝
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                🎯 Teste Grátis por 15 Dias
              </button>
              <button className="bg-white text-black bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-full text-xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30">
                📞 Falar com Especialista
              </button>
            </div>

            <div className="text-sm text-gray-300">
              ✅ Seguro e Confidencial | ✅ Sem Compromisso | ✅ Ativação
              Instantânea
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-800 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cansado desses problemas? 😤
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProblemCard
              icon="🔇"
              title="Áudios Longos e Chatos"
              description="Quem tem tempo para ouvir áudios de 5 minutos? Seja mais produtivo e leia em segundos!"
            />
            <ProblemCard
              icon="👂"
              title="Dificuldades Auditivas"
              description="Pessoas com deficiência auditiva merecem inclusão total na comunicação digital!"
            />
            <ProblemCard
              icon="❌"
              title="Transcrição Nativa Falha"
              description="A transcrição do WhatsApp é imprecisa e não funciona direito. Nossa tecnologia é muito superior!"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Solução Perfeita Chegou! ✨
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Com o AudioText Pro, você recebe a transcrição precisa de todos os
              áudios automaticamente, logo abaixo de cada mensagem!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FeatureCard
                icon="⚡"
                title="Conversão Instantânea"
                description="Assim que o áudio chega, a transcrição aparece automaticamente. Sem espera, sem complicação!"
                color="bg-green-500"
              />
              <FeatureCard
                icon="🎯"
                title="Precisão Incrível"
                description="Nossa IA avançada entende sotaques, gírias e diferentes tipos de áudio com 95% de precisão!"
                color="bg-blue-500"
              />
              <FeatureCard
                icon="🔒"
                title="100% Seguro"
                description="Seus áudios são processados com criptografia total. Privacidade e segurança garantidas!"
                color="bg-purple-500"
              />
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-20">
              <div className="bg-green-600 text-white p-4 rounded-2xl mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                  <span className="font-semibold">João Silva</span>
                </div>
                <div className="bg-green-500 p-3 rounded-lg mb-2">
                  🎵 Áudio (0:45)
                </div>
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                  📝 <strong>AudioText Pro:</strong> &quot;Oi! Queria te contar
                  que consegui resolver aquele problema do projeto. A solução
                  foi mais simples do que imaginávamos...&quot;
                </div>
              </div>
              <div className="text-center text-green-400 font-semibold">
                ✨ Assim que funciona na prática!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Escolha Seu Plano 💎
            </h2>
            <p className="text-xl text-gray-400">
              Todos os planos incluem 15 dias de teste grátis!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Bronze"
              icon="🥉"
              price="R$ 4,90 / mês"
              description="Ideal para uso pessoal"
              features={[
                "Transcrições básicas",
                "Suporte por email",
                "Limite mensal definido",
              ]}
              gradient="bg-gradient-to-b from-amber-600 to-amber-800"
            />

            <PricingCard
              title="Prata"
              icon="🥈"
              price="R$ 7,90 / mês"
              description="Perfeito para profissionais"
              features={[
                "Transcrições premium",
                "Suporte prioritário",
                "Limite ampliado",
                "Recursos extras",
              ]}
              isPopular={true}
              gradient="bg-gradient-to-b from-gray-400 to-gray-600"
            />

            <PricingCard
              title="Ouro"
              icon="🥇"
              price="R$ 11,90 / mês"
              description="Para empresas e power users"
              features={[
                "Transcrições ilimitadas",
                "Suporte VIP 24/7",
                "Recursos exclusivos",
                "API personalizada",
              ]}
              gradient="bg-gradient-to-b from-yellow-400 to-yellow-600 text-gray-800"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pronto para Revolucionar seu WhatsApp? 🚀
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto">
            Junte-se a milhares de usuários que já transformaram a forma como se
            comunicam. Teste grátis por 15 dias, sem compromisso!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 px-12 py-5 rounded-full text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              🎯 Ativar Meu Teste Grátis Agora
            </button>
          </div>

          <div className="mt-8 text-lg text-gray-300">
            ⏰ Oferta limitada • 🔒 100% Seguro • ❌ Sem Compromisso
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Tem Dúvidas? Fale Conosco! 💬
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas e
            ajudar você a aproveitar ao máximo o AudioText Pro!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Email</h3>
              <p className="text-gray-300 mb-4">Resposta em até 2 horas</p>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Enviar Email
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">
                WhatsApp
              </h3>
              <p className="text-gray-300 mb-4">Atendimento instantâneo</p>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            🎧 AudioText Pro
          </div>
          <p className="text-gray-400 mb-6">
            Transformando áudios em texto com tecnologia de ponta
          </p>
          <div className="text-sm text-gray-500">
            © 2025 AudioText Pro. Todos os direitos reservados. 🔒 Seguro e
            Confidencial
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AudioTextProLanding;
