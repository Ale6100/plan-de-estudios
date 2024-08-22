export interface IMateria {
  id: number;
  nombre: string;
  horasSemanales: number;
  conectadoCon: number[]; //! Por ahora no le doy uso. id de materias conectadas. Sólo cuenta si la flecha sale de la materia actual (para que no se dupliquen las conexiones)
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
    conectadoCon: [],
    horasSemanales: 4,
    nota: 10
  },
  {
    id: -3,
    nombre: 'Introducción al Conocimiento de la Sociedad y el Estado',
    conectadoCon: [],
    horasSemanales: 4,
    nota: 9
  },
  {
    id: -2,
    nombre: 'Análisis Matemático A',
    conectadoCon: [],
    horasSemanales: 9,
    nota: 5
  },
  {
    id: -1,
    nombre: 'Física',
    conectadoCon: [],
    horasSemanales: 6,
    nota: 9
  },
  {
    id: 0,
    nombre: 'Química',
    conectadoCon: [],
    horasSemanales: 6,
    nota: 10
  },
  {
    id: 1,
    nombre: 'Álgebra',
    conectadoCon: [],
    horasSemanales: 9,
    nota: 8
  },
  {
    id: 2,
    nombre: 'Introducción a la Programación',
    horasSemanales: 10,
    conectadoCon: [4],
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
    id: 3,
    nombre: 'Álgebra I',
    horasSemanales: 10,
    conectadoCon: [4],
    nota: 8,
    enlaces: [
      {
        text: 'Programa',
        url: 'programas/algebra_1.txt'
      },
    ]
  },
  {
    id: 4,
    nombre: 'Algoritmos y Estructuras de Datos',
    horasSemanales: 15,
    conectadoCon: [],
  },
  {
    id: 5,
    nombre: 'Análisis I',
    horasSemanales: 10,
    conectadoCon: [],
    cursando: true
  },
  {
    id: 6,
    nombre: 'Paradigmas de Programación',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 7,
    nombre: 'Técnicas de Diseño de Algoritmos',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 8,
    nombre: 'Sistemas Digitales',
    horasSemanales: 5,
    conectadoCon: []
  },
  {
    id: 9,
    nombre: 'Ingeniería de Software',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 10,
    nombre: 'Lenguajes Formales, Autómatas y Computabilidad',
    horasSemanales: 5,
    conectadoCon: []
  },
  {
    id: 11,
    nombre: 'Arquitectura y Organización de Computadores',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 12,
    nombre: 'Álgebra Lineal Computacional',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 13,
    nombre: 'Complejidad Computacional',
    horasSemanales: 5,
    conectadoCon: []
  },
  {
    id: 14,
    nombre: 'Sistemas Operativos',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 15,
    nombre: 'Estadística Computacional',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 16,
    nombre: 'Almacenamiento y recuperación de la información',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 17,
    nombre: 'Materias optativas (80 horas)',
    horasSemanales: 5,
    conectadoCon: [],
  },
  {
    id: 18,
    nombre: 'Programación Concurrente y Paralela',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 19,
    nombre: 'Redes de Comunicaciones y Cómputo Distribuido',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 20,
    nombre: 'Materias optativas (80 horas)',
    horasSemanales: 5,
    conectadoCon: []
  },
  {
    id: 21,
    nombre: 'Materias optativas (160 horas)',
    horasSemanales: 10,
    conectadoCon: []
  },
  {
    id: 22,
    nombre: 'Seminario sobre Tecnología y Sociedad',
    horasSemanales: 3,
    conectadoCon: []
  },
  {
    id: 23,
    nombre: 'Trabajo Final - Tesis de Licenciatura',
    horasSemanales: 15,
    conectadoCon: [],
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
