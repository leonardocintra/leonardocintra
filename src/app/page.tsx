"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Zap,
  GitBranch,
  Server,
  Mail,
  Linkedin,
  MapPin,
  Github,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Types
interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface Stats {
  years: string;
  projects: string;
  companies: string;
}

interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
  link?: string;
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Mouse tracking for interactive effects
  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 25, top: 45 },
    { left: 70, top: 35 },
    { left: 5, top: 60 },
    { left: 90, top: 50 },
    { left: 40, top: 70 },
    { left: 60, top: 80 },
    { left: 15, top: 85 },
    { left: 80, top: 90 },
    { left: 30, top: 10 },
    { left: 55, top: 25 },
    { left: 20, top: 95 },
    { left: 75, top: 5 },
    { left: 45, top: 55 },
    { left: 65, top: 65 },
    { left: 35, top: 30 },
    { left: 85, top: 75 },
    { left: 10, top: 40 },
    { left: 95, top: 85 },
    { left: 50, top: 15 },
    { left: 25, top: 85 },
    { left: 75, top: 20 },
    { left: 5, top: 75 },
    { left: 90, top: 30 },
    { left: 15, top: 50 },
    { left: 70, top: 60 },
    { left: 40, top: 25 },
    { left: 60, top: 90 },
    { left: 30, top: 35 },
    { left: 85, top: 45 },
    { left: 10, top: 70 },
    { left: 55, top: 80 },
    { left: 25, top: 60 },
    { left: 80, top: 10 },
    { left: 45, top: 95 },
    { left: 65, top: 40 },
    { left: 20, top: 75 },
    { left: 90, top: 55 },
    { left: 35, top: 85 },
    { left: 75, top: 30 },
    { left: 5, top: 90 },
    { left: 50, top: 65 },
    { left: 15, top: 25 },
    { left: 70, top: 85 },
    { left: 40, top: 50 },
    { left: 85, top: 70 },
    { left: 25, top: 35 },
    { left: 60, top: 15 },
    { left: 95, top: 60 },
  ];

  // Data
  const skills: Skill[] = [
    {
      name: "Java Development",
      icon: <Code className="w-6 h-6" />,
      category: "Backend",
    },
    {
      name: "NodeJS Development",
      icon: <Code className="w-6 h-6" />,
      category: "Backend",
    },
    {
      name: "Magalu Cloud / AWS",
      icon: <Server className="w-6 h-6" />,
      category: "Backend",
    },
    {
      name: "SQL e NoSQL Databases",
      icon: <Database className="w-6 h-6" />,
      category: "Architecture",
    },
    {
      name: "System Scaling",
      icon: <Zap className="w-6 h-6" />,
      category: "Performance",
    },
    {
      name: "Microservices",
      icon: <GitBranch className="w-6 h-6" />,
      category: "Architecture",
    },
  ];

  const stats: Stats = {
    years: "12+",
    projects: "4",
    companies: "8+",
  };

  const contactInfo: ContactInfo[] = [
    {
      type: "Email",
      value: "leonardo.ncintra@outlook.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:leonardo.ncintra@outlook.com",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/leonardo-nascimento-cintra-630b6049",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/leonardo-nascimento-cintra-630b6049/",
    },
    {
      type: "Localização",
      value: "Brasil | Franca - SP",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse" />
        {isMounted &&
          particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: isVisible ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Header Section */}
        <header className="container mx-auto px-6 py-12 text-center">
          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Leonardo Cintra
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Desenvolvedor • Backend • Java • Node.js
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-12">
            Olá! Sejam muitos bem vindos ao meu site! Aqui quero mostrar meus
            hobbies, minhas habilidades com tecnlogia, principalmente Java e
            Node.js. Tambem estou me aventurando em criar automações como
            agendamentos automaticos, conversão de audio para texto no whastapp,
            etc! Confira meus projetos!
          </p>

          {/* CTA Button */}
          <Link href={"/projetos"}>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Ver Projetos
            </button>
          </Link>
        </header>

        {/* Divider */}
        <div className="flex justify-center my-16">
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        {/* About Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl">
                    <Image
                      src="/profile.png"
                      width={800}
                      height={800}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-2xl blur-sm opacity-30 -z-10" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Com mais de{" "}
                    <span className="text-cyan-400 font-semibold">
                      12 anos de experiência
                    </span>{" "}
                    no Luizalabs (Magalu), sou especializado em{" "}
                    <span className="text-purple-400 font-semibold">
                      desenvolvimento backend
                    </span>{" "}
                    utilizando principalmente Java e Node.js.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Ola, sou o Leonardo Cintra! Tenho 35 anos, desenvolvedor de
                    sistemas há mais de 12 anos no Luizalabs (Magalu). Tenho dedicado
                    maior parte no desenvolvimento backend com Java e Node.js.
                    Aqui posso mostrar meus projetos pessoais, já que a família
                    está sempre crescendo... :p Além de pai de 4 filhos, sou
                    apaixonado por criar soluções robustas e escaláveis. Este
                    portfólio é meu espaço para compartilhar{" "}
                    <span className="text-green-400 font-semibold">
                      projetos pessoais{" "}
                    </span>
                    e experimentar novas tecnologias.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-cyan-400">{skill.icon}</div>
                        <div>
                          <div className="font-medium text-white">
                            {skill.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {skill.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">
                      {stats.years}
                    </div>
                    <div className="text-sm text-gray-400">Anos Luizalabs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">
                      {stats.projects}
                    </div>
                    <div className="text-sm text-gray-400">Filhos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">
                      {stats.companies}
                    </div>
                    <div className="text-sm text-gray-400">
                      Projetos Pessoais
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Vamos Conectar
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Interessado em trocar experiências sobre desenvolvimento backend,
              Java, Node.js ou projetos pessoais? Vamos conversar!
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  onClick={() =>
                    contact.link && window.open(contact.link, "_blank")
                  }
                >
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {contact.type}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/leonardocintra"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/leonardo-nascimento-cintra-630b6049"
                target="_blank"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/leonardoncintra/"
                target="_blank"
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Projetos & Colaborações
            </h2>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Estou à procura de novos projetos, sempre procuro tempo para
                projetos pessoais e novas tecnologias. Vamos criar algo
                incrível!
              </p>

              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Iniciar Conversa
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Leonardo Cintra | Todos os direitos
              reservados - Construído com ❤️ • Tecnologia
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
