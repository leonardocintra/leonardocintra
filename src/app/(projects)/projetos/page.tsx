import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lexci - Laboratorio",
    description:
      "Simples site de laboratorio para consulta de exames desenvolvida com Next.js. E também tem configuração emails para os usuarios",
    technologies: ["Next.js", "TypeScript", "Vercel", "Zoho Mail"],
    image: "/projetos/lexci.jpg",
    demoUrl: "https://www.lexci.com.br/",
    githubUrl: "https://github.com/leonardocintra/lexci.com.br",
  },
  {
    id: 2,
    title: "Gobex Exames",
    description:
      "Simples site de laboratorio para consulta de exames desenvolvida com Next.js. E também tem configuração emails para os usuarios",
    technologies: ["Next.js", "TypeScript", "Vercel", "Zoho Mail"],
    image: "/projetos/gobex.jpg",
    demoUrl: "https://www.gobexexames.com.br/",
    githubUrl: "https://github.com/leonardocintra/gobexexames.com.br",
  },
  {
    id: 3,
    title: "AudioText Pro",
    description:
      "Odeia audio no Whastapp ? Essa ferramenta feita com inteligencia artificial, transcreve audio para texto no seu WhatsApp! Varios planos de assinatura mensal",
    technologies: ["N8N", "PostgreSQL", "Redis", "EvolutionAPI", "Portainer"],
    image: "/projetos/audiotextpro.jpg",
    demoUrl: "/audioTextPro",
    githubUrl: "",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes e projetos que
            demonstram minhas habilidades em desenvolvimento web e mobile.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Tecnologias
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                        >
                          Visitar
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                        >
                          GitHub
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
