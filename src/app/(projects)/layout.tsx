import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leonardo Cintra",
  description: "Minha página pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased bg-gray-50 text-gray-900">
      {/* Header fixo */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-green-700 hover:text-green-800 transition-colors"
          >
            ← Voltar para Home
          </Link>

          <div className="text-sm text-gray-500">
            Leonardo Cintra — Projetos
          </div>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

      {/* Rodapé opcional */}
      <footer className="mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Leonardo Cintra. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
