import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  chems,
  cakefit,
  threejs,
  certus,
  ibgroup,
  halo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca de Mi',
  },
  {
    id: 'work',
    title: 'Trabajos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Desarrollador Web',
    icon: web,
  },
  {
    title: 'Desarrollador React',
    icon: mobile,
  },
  {
    title: 'Desarrollador Frontend',
    icon: backend,
  },
  {
    title: 'Desarrollador Backend',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Desarrollador Movil',
    company_name: 'Certus',
    icon: certus,
    iconBg: '#E6DEDD',
    date: 'Marzo 2022 - Julio 2022',
    points: [
      'Uso de componentes en Flutter fue la herramienta primordial para el desarrollo de esta aplicacion.',
      'De esta manera logramos crear una aplicacion mejor estructurada ya que es hibrida.',
      'Aplicacion compatible con cualquier tipo de dispositivo Android y IOS.',
      'Una interfaz muy agradable con microservicios integrados para el manejo de datos del usuario.',
    ],
  },

  {
    title: 'Desarrollador Web',
    company_name: 'Certus',
    icon: certus,
    iconBg: '#383E56',
    date: 'Agosto 2022 - Jan 2023',
    points: [
      'Desarrollo de una veterinaria con ventas de productos y todo tipo de accesorios para diferentes mascotas.',
      'Implementacion de servicios externos.',
      'Interfaz agradable al usuario y una mayor usabilidad para que sea mas facil de usarlo.',
      'Adapatabilidad con cualquier tipo de dispositivos.',
    ],
  },

  {
    title: 'Desarrollador React',
    company_name: 'Certus',
    icon: certus,
    iconBg: '#E6DEDD',
    date: 'Abril 2023 - Julio 2022',
    points: [
      'Este proyecto fue una pasteleria - Cake Fit.',
      'Consumo de microservicios de google, Amazon web Services, mongodb y stripe que es un metodo de pago.',
      'Manejo de estados y componentes, creacion de arquitectura de software y modelo de base de datos.',
      'Agregar un carrito de compras que nos permita realizar metodos de pago en este caso una API stripe.',
    ],
  },

  {
    title: 'Desarrollador Web',
    company_name: 'IBGROUP',
    icon: ibgroup,
    iconBg: '#383E56',
    date: 'Marzo 2023 - Actualmente',
    points: [
      'Reviso proyectos existentes para optimizar su rendimiento. Colaboro con otros profesionales en equipos multidisciplinarios para lograr los objetivos del proyecto.',
      'Realizo pruebas y control de versiones para garantizar la calidad del software.',
      ' Además, diseño arquitecturas de software que cumplan con los requisitos del proyecto.',
      'Estas actividades son fundamentales para ofrecer soluciones de calidad y contribuir al éxito de los proyectos en los que participo.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Tu proyecto de autos muestra una excelente visión y enfoque innovador en el campo automotriz y seria muy destacado para la empresa.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Tu proyecto en el campo de la veterinaria es digno de elogio. La pasión y el compromiso que muestras hacia el bienestar de los animales es admirable.',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Tu proyecto de pastelería saludable es impresionante. Has logrado fusionar la pasión por la repostería con un enfoque de la salud de tus clientes.',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Halo Infinity',
    description:
      'Un proyecto propio de halo Infinity uno de los mejores videojuegos del mundo, desarrollado con las tecnologias mas conocidas en programacion, es responsive y integrado con modo oscuro y claro.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: halo,
    source_code_link: 'https://github.com/Miguel05HB/halo-infinite',
  },
  {
    name: 'Chems Pet - App',
    description:
      'Una aplicacion de un proyecto final como parte de temas academicos, sobresaliente por las buenas practicas y eficiencia de la app, con buenos comentarios del profesor a cargo de aprobar este proyecto.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'dart',
        color: 'green-text-gradient',
      },
      {
        name: 'c++',
        color: 'pink-text-gradient',
      },
    ],
    image: chems,
    source_code_link: 'https://github.com/Miguel05HB/Chems-Pet-App',
  },
  {
    name: 'Cake Fit - Ecommerce',
    description:
      'Proyecto propio desarrollado para un proyecto final de mi carrera donde se implento nuevas tecnologias mas eficientes para este ecommerce que requiere de buenas practicas y efeciencia.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cakefit,
    source_code_link: 'https://github.com/Miguel05HB/Cake-fit-front-end',
  },
];

export { services, technologies, experiences, testimonials, projects };
