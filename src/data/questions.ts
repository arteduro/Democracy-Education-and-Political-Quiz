
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
  {
    id: 3,
    text: "La educación y la salud deberían ser servicios públicos gratuitos.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 4,
    text: "El matrimonio entre personas del mismo sexo debería ser legal.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 5,
    text: "La inmigración enriquece cultural y económicamente al país.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 6,
    text: "El cambio climático debería ser una prioridad política.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 7,
    text: "La legalización de las drogas reduciría problemas sociales.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 8,
    text: "El aborto debería ser legal y accesible.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 9,
    text: "La religión debería influir en las políticas públicas.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  },
  {
    id: 10,
    text: "Las grandes empresas deberían pagar más impuestos.",
    options: [
      { text: "Totalmente de acuerdo", value: 2 },
      { text: "De acuerdo", value: 1 },
      { text: "En desacuerdo", value: -1 },
      { text: "Totalmente en desacuerdo", value: -2 },
    ],
  }
];
