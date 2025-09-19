export type products = {
  id: number;
  type: string;
  title: string;
  description: string;
  features: string[];
  species: string;
  file: string;
};

export const Products: products[] = [
  {
    id: 1,
    type: "ratos",
    title: "NUVILAB CR-1",
    description: "Ração pronta para uso, formulada para camundongos e ratos de laboratório.",
    features: ["Possui um prazo de validade (06 meses)"],
    species: "Ratos e Camundongos",
    file: "/pdfs/nuvilab_cr1.PDF",
  },
  {
    id: 2,
    type: "ratos",
    title: "NUVILAB CR-1 AUTOCLAVÁVEL",
    description:
      "Ração autoclavável, ideal para ambientes de laboratório que exigem esterilização rigorosa.",
    features: ["Possui um prazo de validade (06 meses)"],
    species: "Ratos e Camundongos",
    file: "/pdfs/nuvilab_cr1_autoclav.PDF",
  },
  {
    id: 3,
    type: "ratos",
    title: "NUVILAB CR-1 IRRADIADA",
    description:
      "Ração irradiada pronta para uso com 10 kGy, ideal para ambientes que exigem biossegurança e esterilização.",
    features: ["Possui um prazo de validade estendido (12 meses)"],
    species: "Ratos e Camundongos",
    file: "/pdfs/nuvilab_cr1_irradiada.PDF",
  },
  {
    id: 4,
    type: "ratos",
    title: "NUVILAB CR-1 CRESCIMENTO E REPRODUÇÃO IRRADIADA",
    description:
      "Ração irradiada pronta para uso com formulação específica para reprodução, com foco em fêmeas em gestação e lactação, e animais jovens.",
    features: ["Possui um prazo de validade estendido (12 meses)",
      "Fêmeas em gestação, lactação e animais jovens (até 80% do peso adulto)",],
    species: "Ratos e Camundongos",
    file: "/pdfs/nuvilab_cr1_cresc_repro.PDF",
  },
  {
    id: 1,
    type: "primatas",
    title: "NUVILAB PRIMATAS",
    description: "Ração peletizada, destinada a alimentação de primatas não humanos.",
    features: ["Possui um prazo de validade (06 meses)", "Alimentação de primatas não humanos."],
    species: "Primatas",
    file: "/pdfs/nuvilab_primatas.PDF",
  },
  {
    id: 2,
    type: "primatas",
    title: "NUVILAB PRIMATAS NEOTROPICAIS",
    description: "Ração extrusada para primatas não humanos.",
    features: ["Possui um prazo de validade (06 meses)", "Alimentação de primatas não humanos."],
    species: "Primatas",
    file: "/pdfs/nuvilab_primatas_neotropicais.PDF",
  },
  {
    id: 3,
    type: "primatas",
    title: "NUVILAB PRIMATAS VELHO MUNDO",
    description: "Ração extrusada para primatas não humanos.",
    features: ["Possui um prazo de validade (06 meses)", "Alimentação de primatas não humanos."],
    species: "Primatas",
    file: "/pdfs/nuvilab_primatas_velho_mundo.PDF",
  },
  {
    id: 1,
    type: "coelhos",
    title: "NUVILAB COELHOS",
    description: "Ração equilibrada para coelhos de laboratório.",
    features: ["Possui um prazo de validade (06 meses)", "Alimentação de coelhos de laboratório."],
    species: "Coelhos",
    file: "/pdfs/nuvilab_coelhos.PDF",
  },
  {
    id: 2,
    type: "coelhos",
    title: "NUVILAB COBAIAS",
    description: "Ração destinada ao uso de animais de laboratório.",
    features: ["Possui um prazo de validade (06 meses)", "Alimentação para cobaias de laboratório."],
    species: "Coelhos",
    file: "/pdfs/nuvilab_cobaias.PDF",
  },
  {
    id: 1,
    type: "aves",
    title: "NUVILAB POSTURA INICIAL IRRADIADA",
    description: "Ração equilibrada para aves de postura.",
    features: ["Possui um prazo de validade estendido (12 meses)", "Alimentação para aves de postura na fase inicial de desenvolvimento."],
    species: "Aves",
    file: "/pdfs/nuvilab_postura.PDF",
  },
];
