"use client";

import { useState } from "react";

export default function LampControl() {
  const [lampStatus, setLampStatus] = useState<"on" | "off">("off");
  const [loading, setLoading] = useState(false);

  const toggleLamp = async (status: "on" | "off") => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://leonardo-api.ypg4r9.easypanel.host/lamp/toggle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setLampStatus(status);
        }
      }
    } catch (error) {
      console.error("Erro ao controlar lâmpada:", error);
      alert("Erro ao controlar lâmpada");
    } finally {
      setLoading(false);
    }
  };

  const getLampStatus = async () => {
    try {
      const response = await fetch(
        "https://leonardo-api.ypg4r9.easypanel.host/lamp/status"
      );
      if (response.ok) {
        const result = await response.json();
        setLampStatus(result.status);
      }
    } catch (error) {
      console.error("Erro ao buscar status:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        Controle da Lâmpada
      </h1>

      <div className="text-center mb-6">
        <div
          className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl transition-all duration-300 ${
            lampStatus === "on"
              ? "bg-yellow-400 text-yellow-800 shadow-lg"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          💡
        </div>
        <p className="mt-4 text-lg font-semibold">
          Status:{" "}
          <span
            className={lampStatus === "on" ? "text-green-600" : "text-red-600"}
          >
            {lampStatus === "on" ? "Ligada" : "Desligada"}
          </span>
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => toggleLamp("on")}
          disabled={loading || lampStatus === "on"}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
        >
          {loading ? "Aguarde..." : "Ligar"}
        </button>

        <button
          onClick={() => toggleLamp("off")}
          disabled={loading || lampStatus === "off"}
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
        >
          {loading ? "Aguarde..." : "Desligar"}
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={getLampStatus}
          className="px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
        >
          Atualizar Status
        </button>
      </div>
    </div>
  );
}
