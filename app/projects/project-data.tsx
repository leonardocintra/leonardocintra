export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Rex Helicoides",
    year: 2023,
    description:
      "Site desenvolvido em Nextjs que é responsavel por divulgar projetos de produçaõ de helicoides para várias industrias e agricultura.",
    url: "https://www.rexhelicoides.com.br",
  },
  {
    title: "Tchau Audio!",
    year: 2024,
    description:
      "Uma automação que converte texto em audio para usuarios do whastapp (também para outras plataformas caso necessário). O Whatsapp já tem um recurso nativo que transcreve audio para texto, porem é bem limitado. Esse projeto é uma melhoria muito util para que é deficiente auditivo como eu",
    url: "https://example.com/",
  },
];
