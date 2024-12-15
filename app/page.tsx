import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Ola, esse sou eu!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Pai de 4 filhos, desenvolvedor de sistemas há mais de 11 anos no
          Luizalabs (Magalu). Atuei maior parte em desenvolvimento backend com
          Java e Nodejs. Aqui posso mostrar meus projetos pessoais, ja que a
          familia esta sempre crescendo ... :P
        </p>
        <p>
          Meu foco agora é alem de ter meu proprio trabalho de desenvolvedor
          backend quero gerar automações com inteligencia artificial. Em{" "}
          <a href={socialLinks.github} target="_blank">
            Meus projetos
          </a>{" "}
          você consegue ver todos os projetos que desenvolvo e caso algum lhe
          interessa entre em contato de algum forma (redes sociais, emails, etc)
          que esta no final da pagina .
        </p>
      </div>
    </section>
  );
}
