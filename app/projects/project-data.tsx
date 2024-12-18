export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Tchau Audio!",
    year: 2024,
    description:
      "Uma automação que converte texto em audio para usuarios do whastapp (também para outras plataformas caso necessário). O Whatsapp já tem um recurso nativo que transcreve audio para texto, porem é bem limitado. Esse projeto é uma melhoria muito util para que é deficiente auditivo como eu",
    url: "https://tchauaudio.my.canva.site/",
  },
  {
    title: "Rex Helicoides",
    year: 2022,
    description:
      "Site desenvolvido em Nextjs que é responsavel por divulgar projetos de produçaõ de helicoides para várias industrias e agricultura.",
    url: "https://www.rexhelicoides.com.br",
  },
  {
    title: "Cria - Implementos Agricolas",
    year: 2022,
    description:
      "Site em Nextjs que é para vendas de maquinas agricolas e implementos para agricultura.",
    url: "https://cria-site.ypg4r9.easypanel.host/",
  },
  {
    title: "Lexci - Laboratorio",
    year: 2017,
    description:
      "Site em Nextjs que é para consulta de exames laboratoriais",
    url: "https://www.lexci.com.br/",
  },
  {
    title: "Gobex Exames - Laboratorio",
    year: 2017,
    description:
      "Site em Nextjs que é para consulta de exames laboratoriais",
    url: "https://www.gobexexames.com.br/",
  }
];
