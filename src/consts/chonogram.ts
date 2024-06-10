export interface ChonogramI {
  id: 1 | 2 | 3;
  hostImg: string;
  date: string;
  to: string;
  to2?: string;
  isOpen: boolean;
  morningDescription: {
    title: string;
    coursesHours: string[];
  };
  afternoonDescription?: {
    title: string;
    coursesHours: string[];
  };
}

export const chonogram: ChonogramI[] = [
  {
    id: 1,
    hostImg: "/assets/chonogram/catherine.webp",
    date: "Viernes 30 de agosto",
    to: "De 8:00 a 13:30hs",
    to2: "De 15:15 a 20hs",
    isOpen: false,
    morningDescription: {
      title: "Mañana",
      coursesHours: [
        "8:00 Acreditación",
        "8:30 Apertura y presentación",
        "9:00 Dr. Carlos Torrendell",
        "9:30 Dr. Horacio Ferreyra",
        "10:00 Dra. Catherine L'Ecuyer",
        "10:45 Preguntas",
        "11:00 Pausa",
        "11:30 Dra. Paola Scarinci de Delbosco",
        "12:15 Preguntas",
        "12:30 Santa Misa",
        "13:30 Almuerzo/Pausa",
      ],
    },
    afternoonDescription: {
      title: "Tarde",
      coursesHours: [
        "15:15 Talleres",
        "16:00 Talleres",
        "16:45 Pausa",
        "17:00 Dra. Catherine L'Ecuyer",
        "17:45 Preguntas",
        "18:15 Mesa redonda",
        "19:00 Mesa Redonda",
        "20:00 Cierre",
      ],
    },
  },
  {
    id: 2,
    hostImg: "/assets/chonogram/carlos-torrendell.webp",
    date: "Sábado 31 de agosto",
    to: "De 8:30 a 13:30hs",
    to2: "De 15:15 a 20hs",
    isOpen: false,
    morningDescription: {
      title: "Mañana",
      coursesHours: [
        "8:30 Recepción y oración",
        "8:45 Dr. Daniel Lasa",
        "9:30 Preguntas",
        "9:45 P. Marcelo Benítez Sch.P",
        "10:30 Pausa",
        "10:45 Conversatorio sobre la Paideia Griega y la Educación en los Padres de la Iglesia (Dr. Cornavaca, Dr. Pedro Villagra y Dr.Caballero)",
        "11:45 Dra. Graciela Hernandez",
        "12:30 Santa Misa",
        "13:30 Almuerzo/Pausa",
      ],
    },
    afternoonDescription: {
      title: "Tarde",
      coursesHours: [
        "15:15 Talleres",
        "16:15 Talleres",
        "17:30 Talleres",
        "18:30 Actividad Artística",
        "20:00 Cierre",
      ],
    },
  },
  {
    id: 3,
    hostImg: "/assets/chonogram/paola-delbosco.webp",
    date: "Domingo 1 de septiembre",
    to: "De 8:30 a 12:30hs",
    isOpen: false,
    morningDescription: {
      title: "Mañana",
      coursesHours: [
        "8:30 Recepción y oración",
        "8:45 Conversatorio Acerca de la Amistad y las Artes Liberales (Dr. Peretó Rivas)",
        "9:30 Preguntas",
        "9:45 P. Andrés Rodríguez de Cristo Sch.P",
        "10:15 Lic. Virginia Montini",
        "10:45 Pausa",
        "11:00 Seminario socrático",
        "11:45 Palabras de cierre",
        "12:15 Ensamble Coral",
        "12:30 Santa Misa",
      ],
    },
    afternoonDescription: undefined,
  },
];
