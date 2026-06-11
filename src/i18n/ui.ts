export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV',
    'hero.availability': 'Disponible',
    'hero.cta.primary': 'Ver proyectos',
    'hero.cta.secondary': 'Contáctame',
    'contact.title': '¿Construimos algo juntos?',
    'contact.description':
      'Estoy abierto a nuevas oportunidades — ya sea un proyecto freelance, una posición en un equipo, o una conversación sobre arquitectura y consultoría. Si tienes algo en mente, escríbeme.',
    'contact.availability.fulltime': 'Empleo full-time',
    'contact.availability.freelance': 'Proyectos freelance',
    'contact.availability.consulting': 'Consultoría técnica',
    'stack.note':
      'Como parte de mi trabajo he revisado, propuesto mejoras y corregido código en tecnologías fuera de mi stack principal — Angular, Vue y otros. No las domino, pero tampoco me detengo cuando las encuentro.',
    'hero.scroll': 'Ir abajo',
    'projects.status.inprogress': 'En desarrollo',
    'projects.readmore': 'Ver caso de estudio',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'hero.availability': 'Available',
    'hero.cta.primary': 'View projects',
    'hero.cta.secondary': 'Contact me',
    'contact.title': 'Shall we build something together?',
    'contact.description':
      "I'm open to new opportunities — whether it's a freelance project, a position on a team, or a conversation about architecture and consulting. If you have something in mind, write to me.",
    'contact.availability.fulltime': 'Full-time employment',
    'contact.availability.freelance': 'Freelance projects',
    'contact.availability.consulting': 'Technical consulting',
    'stack.note':
      "As part of my work I've reviewed, proposed improvements, and fixed code in technologies outside my main stack — Angular, Vue, and others. I don't master them, but I don't stop when I find them either.",
    'hero.scroll': 'Scroll down',
    'projects.status.inprogress': 'In progress',
    'projects.readmore': 'Read case study',
  },
} as const;
