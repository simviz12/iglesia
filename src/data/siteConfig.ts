export interface ServiceTime {
  time: string;
  title: string;
  description?: string;
  badge?: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  items: ServiceTime[];
  footerNote: string;
  footerStatus: string;
  accentColor: 'primary' | 'secondary' | 'gold' | 'charcoal';
}

export interface LiturgicalEvent {
  id: string;
  category: 'patronales' | 'liturgia' | 'jovenes' | 'sacramentos';
  month: string;
  day: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  dateFull: string;
  time: string;
  location: string;
  celebrant: string;
  notes: string;
  description: string;
  image: string;
}

export interface Sacrament {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  requirementsTitle: string;
  requirements: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  diocese: string;
  motto: string;
  description: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    metroInfo: string;
    parkingInfo: string;
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappNumber: string;
    whatsappMessage: string;
    emergencyPhone: string;
    email: string;
  };
  officeHours: {
    weekdays: string;
    weekdaysAfternoon: string;
    saturdays: string;
    confessions: string;
  };
  bankAccount: {
    iban: string;
    bank: string;
    bizumCode: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Parroquia Santa Mónica",
  shortName: "Santa Mónica",
  diocese: "Diócesis Metropolitana • Comunidad Parroquial",
  motto: "Una comunidad viva de fe, perseverancia en la oración y amor maternal en Cristo.",
  description: "Una comunidad viva de fe, perseverancia en la oración, caridad fraterna y servicio en el corazón de nuestro barrio.",
  address: {
    street: "Av. de la Esperanza 1420, Plaza San Juan",
    neighborhood: "Casco Histórico",
    city: "Ciudad Central",
    metroInfo: "Fácil acceso en metro (Estación Catedral) y autobús (Líneas 4, 12 y 25).",
    parkingInfo: "Aparcamiento parroquial gratuito por calle Los Olivos durante los oficios.",
    googleMapsUrl: "https://maps.google.com/?q=Parroquia+Santa+Monica"
  },
  contact: {
    phone: "+34 912 345 678",
    whatsapp: "+34 600 123 456",
    whatsappNumber: "34600123456",
    whatsappMessage: "Hola, quisiera consultar información sobre la Parroquia Santa Mónica...",
    emergencyPhone: "+34 600 123 456",
    email: "secretaria@parroquiasantamonica.org"
  },
  officeHours: {
    weekdays: "09:30 a 13:00 h",
    weekdaysAfternoon: "17:00 a 20:00 h",
    saturdays: "10:00 a 13:00 h",
    confessions: "Martes a Sábado 30 min antes de cada Misa y Domingos continuo"
  },
  bankAccount: {
    iban: "ES45 2100 0418 4502 0005 8912",
    bank: "Banco Santander",
    bizumCode: "02451"
  },
  socialLinks: {
    facebook: "#",
    instagram: "#",
    youtube: "#"
  }
};

export const serviceSchedules: ServiceCategory[] = [
  {
    id: "domingos",
    title: "Misas de Domingo",
    subtitle: "Día del Señor",
    description: "Celebración central del misterio pascual junto a toda la comunidad y familias.",
    badge: "Total 5 Misas",
    icon: "Sun",
    accentColor: "primary",
    footerNote: "Asistencia Libre",
    footerStatus: "Domingos",
    items: [
      { time: "08:00 h", title: "Misa Silenciosa", description: "Para madrugadores y oración recogida" },
      { time: "10:30 h", title: "Misa de Familias y Niños", badge: "Con Niños" },
      { time: "12:30 h", title: "Misa Mayor Solemnizada", description: "Coro Parroquial y Órgano", highlight: true },
      { time: "19:00 h", title: "Comunidad Parroquial" },
      { time: "20:30 h", title: "Misa de Jóvenes y Cierre" }
    ]
  },
  {
    id: "cotidianas",
    title: "Misas Cotidianas",
    subtitle: "Lunes a Sábado",
    description: "Encuentro y alimento de la Palabra para comenzar y culminar la jornada.",
    badge: "Capilla del Sagrario",
    icon: "Calendar",
    accentColor: "charcoal",
    footerNote: "Sábados 19:30 h Liturgia Anticipada",
    footerStatus: "Diario",
    items: [
      { time: "08:30 h", title: "Misa de la Mañana", description: "Seguida de rezo solemne de Laudes" },
      { time: "19:30 h", title: "Misa Vespertina", description: "Precedida por Santo Rosario a las 19:00 h" }
    ]
  },
  {
    id: "confesiones",
    title: "Sacramento del Perdón",
    subtitle: "Misericordia de Dios",
    description: "El abrazo del Padre a través de la reconciliación y dirección espiritual.",
    badge: "Confesionarios Abiertos",
    icon: "HeartHandshake",
    accentColor: "secondary",
    footerNote: "Siempre disponible previa cita pastoral",
    footerStatus: "Continuo",
    items: [
      { time: "18:00 - 19:30 h", title: "Martes a Viernes", description: "Capillas laterales de reconciliación" },
      { time: "17:00 - 19:00 h", title: "Sábados", description: "Previa a la Misa Vespertina" },
      { time: "Continuo", title: "Domingos", description: "Durante todas las Misas según disponibilidad" }
    ]
  },
  {
    id: "adoracion",
    title: "Adoración Eucarística",
    subtitle: "Presencia Real",
    description: "Silencio sagrado, alabanza y bendición ante Jesús en el Santísimo Sacramento.",
    badge: "Capilla de Adoración",
    icon: "Sparkles",
    accentColor: "gold",
    footerNote: "Turnos de vela y custodia abierta",
    footerStatus: "Jueves",
    items: [
      { time: "09:00 - 20:00 h", title: "Jueves Eucarísticos", description: "Exposición ininterrumpida durante toda la jornada", highlight: true },
      { time: "19:00 h", title: "Hora Santa Comunitaria", description: "Meditación, cantos litúrgicos y bendición solemne" }
    ]
  }
];

export const liturgicalEventsData: LiturgicalEvent[] = [
  {
    id: "1",
    category: "patronales",
    month: "AGO",
    day: "27",
    tag: "Solemnidad Patronal",
    title: "Fiesta Patronal de Santa Mónica",
    subtitle: "Misa Mayor, Novena de Madres y Convivencia Parroquial",
    badge: "Fiesta Patronal Principal",
    dateFull: "Miércoles 27 de Agosto",
    time: "12:00 h y 19:30 h (Misa Solemne)",
    location: "Templo Mayor y Atrio",
    celebrant: "Mons. Obispo Auxiliar y Párroco",
    notes: "Bendición especial de madres y familias",
    description: "Celebramos con gozo la fiesta de nuestra santa patrona Santa Mónica, modelo de paciencia, fe inquebrantable y perseverancia en la oración por la conversión de los hijos y de las familias. Habrá Misa Solemne, veneración de su imagen y ágape comunitario fraterno.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm9FqBI-fdlvWlP-wgiSth6zyZbXYO0s2Z0lMhAbHwlSWSFNDhUwBCFm3XolZXjIZ06XDQc4hCiylB238CY9XUDY53b8cl6vSaXuj9kNsQtHO4ijQC44iPxLoPr4UxeLX1dABgxr9p7fSsMcZVbpopY_1uVoVQLjIFFY-dm7iZvffVdeOExjTPNIvGWDq02hKMyrrUPSb1845oIRAR7_2hs8tCyjBiSb_Xdm6P9pp9gBpZ4AYKVHE"
  },
  {
    id: "2",
    category: "liturgia",
    month: "MAR",
    day: "22",
    tag: "Retiro Parroquial",
    title: "Gran Retiro de Cuaresma: 'Sed de Dios'",
    subtitle: "Tres días de silencio, catequesis y reconciliación",
    badge: "Cuaresma y Conversión",
    dateFull: "Viernes 22 al Domingo 24 de Marzo",
    time: "Inicia Viernes a las 18:00 h",
    location: "Casa de Espiritualidad & Claustro",
    celebrant: "Pbro. Dr. Ignacio de Loyola",
    notes: "Confesiones continuas toda la jornada",
    description: "Tres jornadas de silencio interior, meditación de las Sagradas Escrituras y reconciliación para purificar el corazón en preparación para la Semana Santa. Incluye dirección espiritual personal, charlas sobre el desierto interior, Vía Crucis claustral y almuerzo sobrio compartido.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm94EBglumxlL6xoQelT78STKqyb9VIGVYAiW-c0UY5ihgnj0F3BTRQV1WwffkibinD0AqnfqfJp8dsuduGK9B07o0-2QzT5QM6rbG7nMB1zF3FguLvEnysYY3l2RJI1qaQdkuMGF4ws35aI3yAda7x8NIlsQX62p5gtKXKwlAuAN2NxAEj6PV1f2BJKWQJO4Lan6MbN-lOmkQ2pO2rpPWbmmnnEw77dsfQ0R3aT45JsEk2b-TGIM"
  },
  {
    id: "3",
    category: "liturgia",
    month: "ABR",
    day: "19",
    tag: "Noche Santa",
    title: "Solemne Vigilia Pascual en la Noche Santa",
    subtitle: "Lucernario del Fuego Nuevo, Pregón y Bautismos",
    badge: "Cumbre del Año Litúrgico",
    dateFull: "Sábado Santo 19 de Abril",
    time: "22:00 h (Lucernario Exterior)",
    location: "Atrio y Templo Mayor",
    celebrant: "Párroco Pbro. Fernando Ruiz",
    notes: "Bendición del Agua y Fuego Nuevo",
    description: "La madre de todas las santas vigilias. Comienza en el atrio con la bendición de las brasas y el encendido del Cirio Pascual. Proclamación del emotivo Pregón Pascual, siete lecturas del Antiguo Testamento, canto gozoso del Gloria con repique solemne de campanas, bautismo de adultos y recepción comunitaria con chocolate caliente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm9FqBI-fdlvWlP-wgiSth6zyZbXYO0s2Z0lMhAbHwlSWSFNDhUwBCFm3XolZXjIZ06XDQc4hCiylB238CY9XUDY53b8cl6vSaXuj9kNsQtHO4ijQC44iPxLoPr4UxeLX1dABgxr9p7fSsMcZVbpopY_1uVoVQLjIFFY-dm7iZvffVdeOExjTPNIvGWDq02hKMyrrUPSb1845oIRAR7_2hs8tCyjBiSb_Xdm6P9pp9gBpZ4AYKVHE"
  },
  {
    id: "4",
    category: "sacramentos",
    month: "MEN",
    day: "1º S",
    tag: "Vida Sacramental",
    title: "Bautismos Comunitarios & Formación",
    subtitle: "Primer sábado de cada mes a las 11:30 h",
    badge: "Iniciación Cristiana",
    dateFull: "Primer Sábado de Cada Mes",
    time: "11:30 h (Templo Mayor)",
    location: "Pila Bautismal Histórica",
    celebrant: "Vicario Parroquial",
    notes: "Charla previa el jueves anterior 20:00 h",
    description: "Celebración gozosa comunitaria donde acogemos a nuevos hijos de Dios e integrantes de la Iglesia. La ceremonia incluye la unción con el óleo de los catecúmenos, el rito del agua bautismal en la pila marmórea histórica y la entrega de la vestidura blanca y la luz encendida.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm94EBglumxlL6xoQelT78STKqyb9VIGVYAiW-c0UY5ihgnj0F3BTRQV1WwffkibinD0AqnfqfJp8dsuduGK9B07o0-2QzT5QM6rbG7nMB1zF3FguLvEnysYY3l2RJI1qaQdkuMGF4ws35aI3yAda7x8NIlsQX62p5gtKXKwlAuAN2NxAEj6PV1f2BJKWQJO4Lan6MbN-lOmkQ2pO2rpPWbmmnnEw77dsfQ0R3aT45JsEk2b-TGIM"
  },
  {
    id: "5",
    category: "jovenes",
    month: "VIE",
    day: "30",
    tag: "Pastoral Juvenil",
    title: "Adoración Nocturna: 'Caritas Christi'",
    subtitle: "Música sacra contemporánea, alabanza y vigilia",
    badge: "Jóvenes y Universitarios",
    dateFull: "Último Viernes de cada Mes",
    time: "21:30 a 01:00 h",
    location: "Capilla del Santísimo",
    celebrant: "Equipo de Pastoral Juvenil",
    notes: "Espacio de fraternidad y café final",
    description: "Encuentro abierto para jóvenes, universitarios y profesionales. Una noche consagrada a la contemplación ante la custodia del Santísimo, ambientada con cantos litúrgicos y acústicos, testimonios de conversión, adoración guiada y confesiones disponibles toda la noche.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm9FqBI-fdlvWlP-wgiSth6zyZbXYO0s2Z0lMhAbHwlSWSFNDhUwBCFm3XolZXjIZ06XDQc4hCiylB238CY9XUDY53b8cl6vSaXuj9kNsQtHO4ijQC44iPxLoPr4UxeLX1dABgxr9p7fSsMcZVbpopY_1uVoVQLjIFFY-dm7iZvffVdeOExjTPNIvGWDq02hKMyrrUPSb1845oIRAR7_2hs8tCyjBiSb_Xdm6P9pp9gBpZ4AYKVHE"
  }
];

export const sacramentsData: Sacrament[] = [
  {
    id: "bautismo",
    title: "Santo Bautismo",
    subtitle: "Puerta de la vida en el Espíritu",
    description: "Celebraciones comunitarias para recién nacidos, niños pequeños y catecumenado de adultos.",
    requirementsTitle: "Requisitos Principales:",
    requirements: "Partida de nacimiento civil, constancia de confirmación de padrinos y asistencia a la charla pre-bautismal.",
    ctaText: "Inscripción y Guía Pre-bautismal",
    ctaLink: "#contacto",
    icon: "Droplets"
  },
  {
    id: "comunion",
    title: "Primera Comunión",
    subtitle: "Iniciación Eucarística y Catequesis Familiar",
    description: "Programa pedagógico de dos años con catequistas dedicados, convivencias y talleres de oración.",
    requirementsTitle: "Edad y Sesiones:",
    requirements: "A partir de los 8 años. Sesiones semanales los sábados por la mañana (10:00 a 11:30 h).",
    ctaText: "Matrículas del Ciclo Catequético",
    ctaLink: "#contacto",
    icon: "Utensils"
  },
  {
    id: "confirmacion",
    title: "Sacramento de la Confirmación",
    subtitle: "Don del Espíritu Santo para ser apóstoles",
    description: "Comunidad de jóvenes y adultos, grupos de discernimiento, retiros en la naturaleza y apostolado solidario.",
    requirementsTitle: "Comunidad Juvenil:",
    requirements: "Jóvenes de 14 a 18 años y grupo especial acelerado para adultos profesionales.",
    ctaText: "Unirme al Grupo de Jóvenes",
    ctaLink: "#contacto",
    icon: "Flame"
  },
  {
    id: "matrimonio",
    title: "Matrimonio Cristiano",
    subtitle: "La santificación del amor de los esposos",
    description: "Acompañamiento en el expediente matrimonial, encuentros prematrimoniales y preparación de la liturgia.",
    requirementsTitle: "Anticipación Requerida:",
    requirements: "Solicitar fecha en secretaría al menos 6 meses antes de la fecha proyectada de celebración.",
    ctaText: "Consultar Fechas y Requisitos",
    ctaLink: "#contacto",
    icon: "Heart"
  },
  {
    id: "uncion",
    title: "Unción y Comunión a Enfermos",
    subtitle: "Consuelo, paz y fortaleza en la prueba",
    description: "Ministros extraordinarios y sacerdotes visitan hogares, residencias y hospitales del distrito.",
    requirementsTitle: "Atención Urgente:",
    requirements: "Teléfono pastoral de emergencias sacramentales disponible las 24 horas del día.",
    ctaText: "Solicitar Visita Sacerdotal",
    ctaLink: "#contacto",
    icon: "ShieldAlert"
  },
  {
    id: "despacho",
    title: "Despacho y Certificados",
    subtitle: "Archivo Histórico y Trámites",
    description: "Emisión de certificados eclesiásticos de bautismo, matrimonio y confirmación para trámites.",
    requirementsTitle: "Atención Presencial y Online:",
    requirements: "Lunes a Viernes de 09:30 a 13:00 h y 17:00 a 20:00 h.",
    ctaText: "Solicitar Certificado en Línea",
    ctaLink: "#contacto",
    icon: "FileText"
  }
];

export const socialImpactStats = {
  families: "185+",
  foodTons: "14.2 t",
  volunteers: "62",
  childrenTutored: "48",
  campaignProgress: 82,
  campaignTitle: "Campaña Solidaria de Invierno",
  campaignGoal: "Meta: 500 mantas y kits térmicos para personas en situación de calle."
};
