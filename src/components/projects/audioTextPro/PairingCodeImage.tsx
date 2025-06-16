"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  instanceName: string;
}

export default function PairingCodeImage({ instanceName }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pairingCode, setPairingCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/pairing-code/${instanceName}`
        );

        if (!response.ok) {
          throw new Error(
            `Erro ao buscar imagem: ${response.status} ${response.statusText}`
          );
        }

        const contentType = response.headers.get("content-type");

        // Verifica se tem conteúdo e se é JSON
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Resposta da API não é JSON");
        }

        // Verifica se o corpo da resposta tem dados
        const text = await response.text();
        if (!text) {
          throw new Error("Corpo da resposta está vazio");
        }

        const json = JSON.parse(text); // agora com segurança

        if (!json?.base64) {
          throw new Error("Imagem não encontrada na resposta da API");
        }

        setPairingCode(json.pairingCode);
        setImageUrl(json.base64);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error("Erro ao carregar imagem:", errorMessage);
        // TODO: enviar email que deu erro
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [instanceName]);

  if (loading) {
    return <p>Carregando imagem...</p>;
  }

  if (!imageUrl) {
    return (
      <div className="text-center text-red-600 mt-8">
        <p className="text-xl font-semibold mb-2">😓 Opa! Algo deu errado.</p>
        <p className="text-md">
          Não conseguimos carregar o QR Code neste momento.
        </p>
        <p className="text-sm mt-2">
          Tente recarregar a página ou entre em contato comigo no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={imageUrl} alt="Pairing Code" width={290} height={290} />
      <div className="text-center mt-4">
        <div>Código para conexão manual</div>
        <div className="text-2xl my-3">{pairingCode}</div>
      </div>
    </div>
  );
}
