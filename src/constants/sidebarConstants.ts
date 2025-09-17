type category = {
    id: string;
    label: string;
    active:boolean;
}

const categories: category[] = [
  { id: "ratos", label: "Ratos e Camundongos", active: true },
  { id: "primatas", label: "Primatas", active: false },
  { id: "coelhos", label: "Coelhos e Cobaias", active: false },
  { id: "aves", label: "Aves", active: false },
];

export { categories };    export type { category };