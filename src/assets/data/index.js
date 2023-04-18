/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from '../images/logo.png';
/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from '../images/key_feature/asesoria.png';
import keyFeature2 from '../images/key_feature/duplicate.png';
import keyFeature3 from '../images/key_feature/consulta.png';
import keyFeature4 from '../images/key_feature/guia.png';
/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import chooseThumb from '../images/chooseThumb.png';
/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */
import expIcon1 from '../images/experience/1.png';
import expIcon2 from '../images/experience/2.png';
import expIcon3 from '../images/experience/3.png';
import expIcon4 from '../images/experience/4.png';
import videoTheme from '../images/experienceVideo.png';

// Client Logo
import geekwire from '../images/client_logo/1.png';
import slack from '../images/client_logo/2.png';
import envato from '../images/client_logo/3.png';
import usaToday from '../images/client_logo/4.png';
import forbes from '../images/client_logo/5.png';
import evernote from '../images/client_logo/6.png';
/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import Image1 from '../images/feature/slide1.png';
import Image2 from '../images/feature/slide2.png';
import Image3 from '../images/feature/slide3.png';
import Image4 from '../images/feature/slide4.png';

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
import reviewer1 from '../images/client/client-avatar-1.jpg';
import reviewer2 from '../images/client/client-avatar-2.jpg';
import reviewer3 from '../images/client/client-avatar-3.jpg';
/* ------------------------------------ */
// Available Store data section
/* ------------------------------------ */
import availableThumb from '../images/availableThumb.png';
/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import {ic_library_add_outline} from 'react-icons-kit/md/ic_library_add_outline'
import {search} from 'react-icons-kit/icomoon/search'
import footerLogo from '../images/logo.png';
import {users} from 'react-icons-kit/icomoon/users'


export const navbar = {
  logoImage: logo,
  navBtn: 'Iniciar Sesion',
  navMenu: [
    {
      id: 1,
      label: 'Inicio',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Servicios',
      path: '#keyFeatures',
      offset: '73',
    },
    {
      id: 3,
      label: 'Historia',
      path: '#history',
      offset: '73',
    },
    {
      id: 4,
      label: 'FAQ',
      path: '#faq',
      offset: '73',
    },
    {
      id: 5,
      label: 'Contacto',
      path: '#contact',
      offset: '73',
    },
  ],
};

export const keyFeatures = {
  title: 'Servicios del archivo de la Catedral',
  slogan:
    'En el archivo de la catedral estamos a la orden del conocimiento, es por ello que te brindamos: ',
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: 'Consulta de Material',
      description:
        'El archivo ofrece servicio de consulta en sala de los materiales de los diferentes acervos.',
    },
    {
      id: 2,
      icon: keyFeature2,
      title: 'Reproducción Digital',
      description:
        'Se cuenta con el servicio de reproducción digital de los materiales, ya que por la antigüedad de estos, el fotocopiado o escaneado no es lo ideal.',
    },
    {
      id: 3,
      icon: keyFeature3,
      title: 'Asesoría con tu Búsqueda',
      description:
        'Se brinda el servicio de referencia, asesoría y apoyo en la búsqueda de información útil para la investigación del usuario.',
    },
    {
      id: 4,
      icon: keyFeature4,
      title: 'Visitas Guiadas',
      description:
        'Con previa solicitud, se brinda el servicio de visitas guiadas en el archivo, la biblioteca y la librería de cantorales.',
    },
  ],
};

export const chooseUs = {
  title: 'Why you choose Custom app for your daily use?',
  thumb: chooseThumb,
  features: [
    {
      id: 1,
      title: 'Front-end Development',
      description:
        'We’re driven beyond just finishing the projects. We want to find solutions.',
    },
    {
      id: 2,
      title: 'Front-end Development',
      description:
        'We’re driven beyond just finishing the projects. We want to find solutions.',
    },
    {
      id: 3,
      title: 'Front-end Development',
      description:
        'We’re driven beyond just finishing the projects. We want to find solutions.',
    },
  ],
};

export const experiences = {
  title: 'Listen our user experience stories',
  slogan:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: expIcon1,
      title: 'Professional Environment',
      description:
        'We enjoy office retreats and visit famous places of our country and abroad also! We have planned to extend our business.',
    },
    {
      id: 2,
      icon: expIcon2,
      title: 'Worked with experienced team',
      description:
        'With more than 100,000 users, we are is growing fast. Currently, we are a team of 65+ people',
    },
    {
      id: 3,
      icon: expIcon3,
      title: 'Ultimate skill development',
      description:
        'Life is what happens when you’re busy working. We make sure you enjoy it with ultimate experience.',
    },
    {
      id: 4,
      icon: expIcon4,
      title: 'Professional Environment',
      description:
        'We build amazing things that work with awesome people who are WordPress enthusiasts, talented, eager to learn and team players.',
    },
  ],
  clients: [
    {
      id: 1,
      logo: geekwire,
      name: 'geekwire',
      link: '#1',
    },
    {
      id: 2,
      logo: slack,
      name: 'slack',
      link: '#2',
    },
    {
      id: 3,
      logo: envato,
      name: 'envato',
      link: '#3',
    },
    {
      id: 4,
      logo: usaToday,
      name: 'usa today',
      link: '#4',
    },
    {
      id: 5,
      logo: forbes,
      name: 'forbes',
      link: '#5',
    },
    {
      id: 6,
      logo: evernote,
      name: 'evernote',
      link: '#6',
    },
  ],
};

export const features = {
  title: 'Nuestra historia',
  slogan:
    'Conoce un poco más sobre el la historia del archivo de la catedral.',
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: 'El obispado de México',
      description:
        'El obispado de México fue erigido en 1530, con la bula "Sacris Apostolatus Misterio", documento donde se especifica la obligación de la catedral de crear su archivo para conservar la documentación generada.',
    },
    {
      id: 2,
      thumbnail: Image2,
      title: 'Nuestra Catedral',
      description:
        'La catedral metropolitana de México fue erigida en 1536. Con el inicio de actividades la nueva catedral comenzó a generar documentación, y en ese mismo año de 1536 se creó el primer archivo.',
    },
    {
      id: 3,
      thumbnail: Image3,
      title: 'El archivo',
      description:
        'El Archivo del Cabildo Catedral Metropolitano de México resguarda 1431 libros, 140 legajos y 203 cajas con papeles sueltos organizados en 3019 expedientes.',
    },
    {
      id: 4,
      thumbnail: Image4,
      title: 'El archivo más importante de Hispanoamérica',
      description:
        'Se trata del archivo de la iglesia catedral más importante de Hispanoamérica, y es uno de los archivos eclesiásticos más importantes del mundo hispánico.',
    }
  ],
};

export const pricing = {
  title: 'Meet our exciting Pricing Plan',
  slogan: 'We designed our pricing plan with affordable price for users',
  pricingFeature: [
    {
      id: 1,
      name: 'Full Access Library',
    },
    {
      id: 2,
      name: 'Multiple user',
    },
    {
      id: 3,
      name: 'Refund Policy',
    },
    {
      id: 4,
      name: 'Google Analytics',
    },
    {
      id: 5,
      name: '24/7 support',
    },
  ],
  pricingItems: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Ultimate Pack',
      price: '35',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What our clients say about us',
  slogan: 'Some inspirational feedback from our customers on twitter',
  reviews: [
    {
      id: 1,
      description:
        'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 2,
      description:
        '@redqteam is great for creating with landing pages within minutes! It then actually takes less time…',
      avatar: reviewer2,
      name: 'Gavin Park',
      designation: 'CEO at Orbital',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 3,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },

    {
      id: 4,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it. profitable and make it cool with fast loading experience & it make the site more customizable & fluent.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 5,
      description:
        'We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 6,
      description:
        'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. ',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
  ],
};

export const availableStore = {
  title: '¿ Por qué digitalizar el archivo de la Catedral ? ✌️',
  description:
    'El proceso de digitalización de los materiales del archivo, en particular de la colección de Microfilms, tiene dos objetivos:',
  thumb: availableThumb,
  reason1: "Transformar la información en un formato más fácil de manejar y consultar.",
  reason2: "Si bien se puede consultar en el archivo en físico, en general, es desconocido por la mayoría de los investigadores ",
  numberPrefix: [
    {
      label: '+13',
      value: '13',
    },
    {
      label: '+14',
      value: '14',
    },
    {
      label: '+15',
      value: '15',
    },
    {
      label: '+16',
      value: '16',
    },
    {
      label: '+17',
      value: '17',
    },
    {
      label: '+18',
      value: '18',
    },
  ],
};

export const faq = {
  title: 'Preguntas Frecuentes',
  slogan: 'Archivo del Cabildo Catedral Metropolitano de México',
  faqs: [
    {
      id: 1,
      question: '¿Qué tipo de información se conserva el archivo? ',
      answer:
        "Los materiales del acervo documental, contienen la información económica administrativa de la gestión del Cabildo de la Catedral, órgano rector de la Catedral de México.",
    },
    {
      id: 2,
      question: '¿De qué temporalidad son los materiales conservados?',
      answer:
        'ocumento más antiguo data de 1536, y llega hasta 1978.',
    },
    {
      id: 3,
      question: '¿Cuál es el acervo documental?',
      answer:
        'contiene los documentos de la gestión del cabildo, así como la información de las cuentas, el personal, los reglamentos, y demás documentos relacionados con la administración de la Catedral de México.',
    },
    {
      id: 4,
      question: '¿Cuál es el acervo bibliográfico?',
      answer:
        'Conformado por materiales que datan de 1600 hasta la actualidad, principalmente con temáticas de liturgia, historia de la iglesia, historia de la Catedral, arte religioso, entre otros.',
    },
    {
      id: 5,
      question: '¿ Qué materiales resguarda la colección de libros y papeles de música ?',
      answer:
        'Resguarda la música compuesta por los maestros de capilla de la catedral, así como música profana que se encontraba en el archivo desde 1600 hasta la actualidad.',
    },
    {
      id: 6,
      question: '¿ Qué materiales resguarda la colección de mapas y planos ?',
      answer:
        'Consta de proyecciones y dibujos de arquitectos que trabajaron en la catedral desde mediados del siglo XIX hasta finales del XX.',
    },
    {
      id: 7,
      question: '¿Qué información puedo encontrar en la colección de microfilms?',
      answer:
        'Conserva 549 rollos de los diferentes acervos documentales, realizados desde 1960 hasta 1998 por diferentes instituciones e investigadores, y aunque no contiene todos los materiales existentes en el archivo, son una fuente histórica de consulta, pues por el proceso de adecuación de espacios, muchos se han extraviado a lo largo del tiempo.',
    },
    {
      id: 8,
      question: '¿ Qué materiales resguarda la Librería de cantorales?',
      answer:
        'Conserva 134 libros de coro de la Catedral de México, algunos traídos de España en el Siglo XVI, y otros confeccionados en la Nueva España en el Siglo XVIII y XIX.',
    },
  ],
};

export const footerWidget = {
  logo: footerLogo,
  siteName: 'RedQ, Inc',
  siteUrl: '#',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: 'https://www.facebook.com/people/Archivo-del-Cabildo-Catedral-Metropolitano-de-M%C3%A9xico-Biblioteca-Turriana/100064791276806/',
    }
  ],
  aboutUs: {
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
      {
        id: 3,
        url: '#',
        text: 'About Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
      },
    ],
  },
  ourInformation: {
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '#',
        text: 'Site Map',
      },
    ],
  },
  myAccount: {
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media',
      },
      {
        id: 3,
        url: '#',
        text: 'Directories',
      },
      {
        id: 4,
        url: '#',
        text: 'Permissions',
      },
    ],
  },
};

export const appMenuItems = {
  menuItems : [
    {
      id: 1,
      icon: <div style={{ color: '#6d6c6f' }}>
              <Icon icon={search} />
            </div>,
      name: 'Buscador',
      link: '/app',
      rol: ['COMMON', 'ADMIN']
    },
    {
      id: 2,
      icon: <div style={{ color: '#6d6c6f' }}>
              <Icon icon={users} />
            </div>,
      name: 'Usuarios',
      link: '/users',
      rol: ['ADMIN']
    },
    {
      id: 3,
      icon: <div style={{ color: '#6d6c6f' }}>
              <Icon icon={ic_library_add_outline} />
            </div>,
      name: 'Agregar Items',
      link: '/items/create',
      rol: ['ADMIN']
    },
  ]
}