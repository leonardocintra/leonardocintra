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
  const [errorImage, setErrorImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/pairing-code/${instanceName}`
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar a imagem");
        }

        const json = await response.json();
        const imageBase64 = json.base64;

        if (!imageBase64) {
          throw new Error("Imagem não encontrada na resposta da API");
        }

        setPairingCode(json.pairingCode);
        setImageUrl(imageBase64);
      } catch (error) {
        setErrorImage(error);
        console.error("Erro ao carregar imagem:", error);
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
    return <p>Erro ao carregar imagem {errorImage}</p>;
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
