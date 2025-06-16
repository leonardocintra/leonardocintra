"use client";

import Header from "@/components/Header";
import PairingCodeImage from "@/components/projects/audioTextPro/PairingCodeImage";
import Link from "next/link";
import { use } from "react";

interface PageProps {
  params: Promise<{
    instanceName: string;
  }>;
}

export default function AppTchauAudioPageConnect({ params }: PageProps) {
  const { instanceName } = use(params);

  return (
    <div>
      <Header />
      <div className="bg-green-50 min-h-screen font-sans text-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-5xl font-bold text-[#128C7E] mb-4">
            👋 Seja muito bem-vindo(a)!
          </h1>

          <div className="text-center text-lg font-light text-gray-700 mb-8">
            <h2 className="text-2xl">
              🚀 Agora falta pouco! Siga o passo a passo abaixo para conectar
              sua transcrição automática ao WhatsApp.
            </h2>
            <h3 className="text-[#FF8800] text-xl mt-4">
              💡 Qualquer dúvida, é só me chamar. Estou aqui para te ajudar!
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center text-[#128C7E] mb-6">
              🔗 Conecte-se ao{" "}
              <span className="font-bold">Tchau Áudio! Olá Texto!</span>
            </h2>

            <div className="flex justify-center mb-6">
              {instanceName && <PairingCodeImage instanceName={instanceName} />}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#128C7E]">
                  📱 No Android:
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Abra o WhatsApp no seu celular.</li>
                  <li>
                    Toque no botão de <strong>três pontinhos</strong> no canto
                    superior direito.
                  </li>
                  <li>
                    Selecione <strong>Dispositivos conectados</strong>.
                  </li>
                  <li>
                    Toque em <strong>Conectar um dispositivo</strong>.
                  </li>
                  <li>Aponte a câmera para o QR Code acima.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#128C7E]">
                  🍎 No iPhone (iOS):
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Abra o WhatsApp no seu iPhone.</li>
                  <li>
                    Toque em <strong>Configurações</strong> no canto inferior
                    direito.
                  </li>
                  <li>
                    Selecione <strong>Dispositivos conectados</strong>.
                  </li>
                  <li>
                    Toque em <strong>Conectar um dispositivo</strong>.
                  </li>
                  <li>Aponte a câmera para o QR Code acima.</li>
                </ol>
              </div>
            </div>
          </div>

          <footer className="text-center text-sm text-gray-500 mt-10">
            © {new Date().getFullYear()} AudioText Pro • Feito com 💚 por{" "}
            <Link href={"/"}> Leonardo Cintra </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
