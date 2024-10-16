export interface IMateria {
  id: number;
  nombre: string;
  horasSemanales: number;
  correlativaCon: number[]; //! id de las materias correlativas
  nota?: number;
  cursando?: boolean;
  enlaces?: {
    text: string,
    url: string
  }[];
}

export const materias: IMateria[] = [
  {
    id: -4,
    nombre: 'Introducción al Pensamiento Científico',
    correlativaCon: [],
    horasSemanales: 4,
    nota: 10
  },
  {
    id: -3,
    nombre: 'Introducción al Conocimiento de la Sociedad y el Estado',
    correlativaCon: [],
    horasSemanales: 4,
    nota: 9
  },
  {
    id: -2,
    nombre: 'Análisis Matemático A',
    correlativaCon: [],
    horasSemanales: 9,
    nota: 5
  },
  {
    id: -1,
    nombre: 'Física',
    correlativaCon: [],
    horasSemanales: 6,
    nota: 9
  },
  {
    id: 0,
    nombre: 'Química',
    correlativaCon: [],
    horasSemanales: 6,
    nota: 10
  },
  {
    id: 1,
    nombre: 'Álgebra',
    correlativaCon: [],
    horasSemanales: 9,
    nota: 8
  },
  {
    id: 2,
    nombre: 'Álgebra I',
    horasSemanales: 10,
    correlativaCon: [-4, -3, -2, -1, 0, 1],
    nota: 8,
    enlaces: [
      {
        text: 'Programa',
        url: 'programas/algebra_1.txt'
      },
    ]
  },
  {
    id: 3,
    nombre: 'Introducción a la Programación',
    horasSemanales: 10,
    correlativaCon: [-4, -3, -2, -1, 0, 1],
    nota: 9,
    enlaces: [
      {
        text: 'Programa',
        url: 'programas/introduccion_a_la_programacion.pdf'
      },
      {
        text: 'Material',
        url: 'https://github.com/Ale6100/introduccion-a-la-programacion.git'
      }
    ]
  },
  {
    id: 4,
    nombre: 'Análisis I',
    horasSemanales: 10,
    correlativaCon: [-4, -3, -2, -1, 0, 1],
    cursando: true,
    enlaces: [
      {
        text: 'Programa',
        url: 'programas/analisis_1.pdf'
      }
    ]
  },
  {
    id: 5,
    nombre: 'Algoritmos y Estructuras de Datos',
    horasSemanales: 15,
    correlativaCon: [2, 3],
  },
  {
    id: 6,
    nombre: 'Técnicas de Diseño de Algoritmos',
    horasSemanales: 10,
    correlativaCon: [5]
  },
  {
    id: 7,
    nombre: 'Sistemas Digitales',
    horasSemanales: 5,
    correlativaCon: [3]
  },
  {
    id: 8,
    nombre: 'Paradigmas de Programación',
    horasSemanales: 10,
    correlativaCon: [5]
  },
  {
    id: 9,
    nombre: 'Lenguajes Formales, Autómatas y Computabilidad',
    horasSemanales: 5,
    correlativaCon: [5]
  },
  {
    id: 10,
    nombre: 'Arquitectura y Organización de Computadores',
    horasSemanales: 10,
    correlativaCon: [7]
  },
  {
    id: 11,
    nombre: 'Ingeniería de Software',
    horasSemanales: 10,
    correlativaCon: [8]
  },
  {
    id: 12,
    nombre: 'Álgebra Lineal Computacional',
    horasSemanales: 10,
    correlativaCon: [5]
  },
  {
    id: 13,
    nombre: 'Complejidad Computacional',
    horasSemanales: 5,
    correlativaCon: [6, 9]
  },
  {
    id: 14,
    nombre: 'Sistemas Operativos',
    horasSemanales: 10,
    correlativaCon: [10]
  },
  {
    id: 15,
    nombre: 'Estadística Computacional',
    horasSemanales: 10,
    correlativaCon: [4, 12]
  },
  {
    id: 16,
    nombre: 'Materias optativas (80 horas)',
    horasSemanales: 5,
    correlativaCon: [],
  },
  {
    id: 17,
    nombre: 'Almacenamiento y recuperación de la información',
    horasSemanales: 10,
    correlativaCon: [11]
  },
  {
    id: 18,
    nombre: 'Materias optativas (80 horas)',
    horasSemanales: 5,
    correlativaCon: []
  },
  {
    id: 19,
    nombre: 'Redes de Comunicaciones y Cómputo Distribuido',
    horasSemanales: 10,
    correlativaCon: [6, 14, 15]
  },
  {
    id: 20,
    nombre: 'Programación Concurrente y Paralela',
    horasSemanales: 10,
    correlativaCon: [8, 14]
  },
  {
    id: 21,
    nombre: 'Seminario sobre Tecnología y Sociedad',
    horasSemanales: 3.5,
    correlativaCon: []
  },
  {
    id: 22,
    nombre: 'Materias optativas (160 horas)',
    horasSemanales: 10,
    correlativaCon: []
  },
  {
    id: 23,
    nombre: 'Trabajo Final - Tesis de Licenciatura',
    horasSemanales: 15,
    correlativaCon: [],
  }
]

export const puntosDeCorte = [
  {
    id: -4,
    texto: 'CBC - 1° C'
  },
  {
    id: -1,
    texto: 'CBC - 2° C'
  },
  {
    id: 2,
    texto: '1° año - 1° C'
  },
  {
    id: 4,
    texto: '1° año - 2° C'
  },
  {
    id: 6,
    texto: '2° año - 1° C'
  },
  {
    id: 9,
    texto: '2° año - 2° C'
  },
  {
    id: 12,
    texto: '3° año - 1° C'
  },
  {
    id: 15,
    texto: '3° año - 2° C'
  },
  {
    id: 18,
    texto: '4° año - 1° C'
  },
  {
    id: 21,
    texto: '4° año - 2° C'
  }
]
