"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SmartGateProject() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-16 px-4 rounded-2xl shadow mb-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Coluna de texto */}
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Automação de Portão via Celular 🚪📱
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Abra e feche o portão da sua casa direto pelo celular com segurança
            e praticidade. A autenticação é feita via{" "}
            <strong>Google + Clerk</strong>, e basta um clique no botão para
            acionar o portão.
          </p>

          {/* Tags de tecnologias */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["ESP32", "n8n", "MQTT (HiveMQ)", "Clerk Auth"].map((tech) => (
              <span
                key={tech}
                className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botão animado */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m12 0l-4-4m4 4l-4 4"
              />
            </svg>
            Abrir / Fechar Portão
          </motion.button>

          <p className="text-sm text-gray-600 mt-4">
            A solução combina <strong>ESP32</strong> com sensores físicos,{" "}
            <strong>n8n</strong> para orquestrar a lógica e uma fila{" "}
            <strong>MQTT</strong> hospedada no <strong>HiveMQ</strong> para
            garantir respostas rápidas e confiáveis.
          </p>
        </div>

        {/* Coluna da imagem */}
        <div className="relative w-full h-80 bg-white rounded-xl shadow-inner flex items-center justify-center">
          {/* Substitua esta imagem pelo print real do app */}
          <Image
            src="/projetos/gate.jpeg"
            alt="Print do app controlando o portão"
            width={300}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
