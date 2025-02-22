
export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "El Estado debería tener un rol activo en la economía.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 2,
    text: "La libertad económica es más importante que la igualdad social.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  // ... Add more questions
];
