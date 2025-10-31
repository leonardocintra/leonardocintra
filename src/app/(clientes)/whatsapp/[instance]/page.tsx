"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface QRCodeData {
  pairingCode: string;
  base64: string;
}

export default function WhatsAppQRCodePage() {
  const timeoutDuration = 60;
  const params = useParams();
  const instance = params.instance as string;

  const [qrData, setQrData] = useState<QRCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeoutDuration);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        setLoading(true);
        setError(null);

        // Substitua pela URL da sua API
        const response = await fetch(`/api/n8n/whatsapp/qrcode/${instance}`);

        if (!response.ok) {
          throw new Error("Erro ao carregar QR Code");
        }

        const data: QRCodeData = await response.json();
        setQrData(data);
        setTimeLeft(timeoutDuration);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchQRCode();
  }, [instance]);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando QR Code...</p>
        </div>
      </div>
    );
  }

  console.log(qrData?.base64);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Erro ao carregar
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Conectar WhatsApp
            </h1>
            <p className="text-gray-600">
              Instância: <span className="font-semibold">{instance}</span>
            </p>
          </div>

          {/* Timer */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-gray-600 mb-1">QR Code válido por:</p>
            <div className="text-4xl font-bold text-green-600">{timeLeft}s</div>
            {timeLeft === 0 && (
              <button
                onClick={handleRefresh}
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
              >
                Gerar Novo QR Code
              </button>
            )}
          </div>

          {/* QR Code */}
          {qrData && timeLeft > 0 && (
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg border-4 border-gray-200 flex items-center justify-center">
                <Image
                  src={qrData.base64}
                  alt="QR Code WhatsApp"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "300px" }}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          )}

          {/* Instruções */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              📱 Como escanear:
            </h3>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Abra o WhatsApp no seu celular</li>
              <li>
                Toque em <strong>Mais opções</strong> (⋮) ou{" "}
                <strong>Configurações</strong>
              </li>
              <li>
                Toque em <strong>Aparelhos conectados</strong>
              </li>
              <li>
                Toque em <strong>Conectar um aparelho</strong>
              </li>
              <li>Aponte seu celular para esta tela para escanear o QR Code</li>
            </ol>
          </div>

          {/* Pairing Code */}
          {qrData && (
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Ou conecte usando o código de pareamento:
              </p>
              <div className="bg-white border-2 border-gray-300 rounded-lg py-3 px-4 inline-block">
                <code className="text-2xl font-mono font-bold text-gray-800 tracking-wider">
                  {qrData.pairingCode}
                </code>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Digite este código no WhatsApp em Conectar com código de
                telefone
              </p>
            </div>
          )}

          {/* QR Code Expirado */}
          {timeLeft === 0 && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-semibold text-lg mb-2">
                ⏱️ QR Code Expirado
              </p>
              <p className="text-gray-600 text-sm">
                O QR Code expirou. Clique no botão acima para gerar um novo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
