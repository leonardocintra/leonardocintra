import LampControl from "@/components/projects/automacao/LampControl";
import Link from "next/link";

export default function AcenderLampadaPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Link href={"/projetos"} className="underline text-2xl">Voltar para Projetos</Link>
        </div>
        <LampControl />
      </div>
    </main>
  );
}
