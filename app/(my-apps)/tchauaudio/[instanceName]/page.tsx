import PairingCodeImage from "app/components/pairingCodeImage";

interface PageProps {
  params: {
    instanceName: string;
  };
}

export default function AppTchauAudioPage({ params }: PageProps) {
  const { instanceName } = params;

  return (
    <div>
      <h1 className="text-center text-6xl font-serif">
        Seja muito bem-vindo(a)!
      </h1>

      <div className="mt-3 text-center font-thin">
        <h2 className="text-2xl">
          🚀 Agora falta pouco! Siga o passo a passo abaixo para conectar sua
          transcrição automática ao WhatsApp.
        </h2>

        <h3 className="text-orange-600 text-xl mt-2">
          💡 Qualquer dúvida, é só me chamar. Estou aqui para te ajudar!
        </h3>
      </div>

      <hr className="my-6" />

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-2xl ml-3 font-semibold">🛠️ Instruções rápidas</h3>
          <div className="space-y-3 mt-2 font-light text-lg">
            <p>
              Para começar, você precisa conectar seu WhatsApp à nossa
              plataforma.
            </p>
            <p>É simples! Basta escanear o QR Code abaixo com seu celular.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            🔗 Conecte-se ao Tchau Audio! Olá Texto!
          </h1>

          <div className="flex justify-center mb-4">
            <PairingCodeImage instanceName={instanceName} />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">📱 No Android:</h2>
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
              <h2 className="text-lg font-medium mb-2">🍎 No iPhone (iOS):</h2>
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
      </div>
    </div>
  );
}
