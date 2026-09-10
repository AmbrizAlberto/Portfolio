const es = {
  navbar: {
    home: "Inicio",
    solo: "Solo",
    grupal: "Grupal",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "CV",
    translate: "Traducir",
  },
  aboutme: {
    title: "SOBRE MI...",
    description: "Hola Mundo! Soy Questers, Ingeniero Full Stack con +5 años diseñando y desarrollando soluciones con enfoque clean code y arquitectura escalable. Si lo puedes imaginar, lo puedo construir."
  },
  tecnologias: {
    title: "TECNOLOGIAS",
    frontend: "Frontend",
    backend: "Backend",
    extra: "Extra",
    tools: "Tools",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    prisma: "Prisma",
    php: "PHP",
    nextjs: "NextJS",
    mysql: "MySQL",
    nodejs: "NodeJS",
    swift: "Swift",
    python: "Python",
    terminal: "Terminal",
    vscode: "VS Code",
    git: "Git",
    github: "GitHub",
    npm: "npm"
  },
  projects: {
    title: "PROYECTOS",
    viewProject: "Ver proyecto",
    viewProduction: "Ver en Produccion",
    viewGitHub: "Ver en GitHub",
    inDevelopment: "En desarrollo",
    categories: {
      personal: "Personal",
      grupal: "Grupal"
    },
    list: {
      stjohns: {
        name: "Gimnasio St. John's",
        shortDesc: "Pagina web landing page responsive para un gimnasio.",
        modal: {
          title: "St. John's Gym",
          category: "Personal",
          desc1: "Pagina Web St. John's <br /> (Todos los derechos reservados)",
          desc2: "Landing Page Responsive desarrollado para mostrar la informacion de interes publico de un gimnasio.",
          desc3: "La pagina web presenta 2 vistas, el home con informacion detallada y la pagina de contacto donde se presenta informacion de contacto y ubicacion del gimnasio"
        }
      },
      smatiz: {
        name: "Gestor de citas - Salon Matiz",
        shortDesc: "Pagina web para agendar citas y gestionar horario de una barberia",
        modal: {
          title: "Gestor de citas para Barberia",
          category: "Personal",
          desc1: "Aplicacion web publica para que las personas puedan agendar citas en una barberia.",
          desc2: "Automaticamente se gestionaran los horarios de la barberia para no solapar citas sobre otras, cada servicio tiene un valor de tiempo que se toma en cuenta en la suma para el gestor de horarios disponibles sin interponserse entre otra cita para otros usuarios despues de que se agenden.",
          desc3: "El Dashboard permite al administrador poder ver las citas del dia actual, filtrarlas entre fechas, servicios e inclusos nombres, ademas, este podra crear noticias para sus clientes y eliminarlas desde el mismo Dashboard"
        }
      },
      earthqa: {
        name: "Aplicacion de Alertas Sismicas",
        shortDesc: "Aplicacion movil para Android para mostrar terremotos",
        modal: {
          title: "Aplicacion de Alertas Sismicas para Android",
          category: "Personal",
          desc1: "Aplicacion web publica para que las personas puedan agendar citas en una barberia."
        }
      },
      pixels: {
        name: "Pixels",
        shortDesc: "Red Social para Fotografos",
        modal: {
          title: "Pixels",
          category: "Personal",
          desc1: "Red social para fotografos, los usuarios compartiran sus fotografias y se mostraran metadatos de estas, las fotografias no podran ser robadas.",
          desc2: "El principal objetivo de Pixels es ser una red social 100% enfocada en fotografia con las novedades de ofrecer alta seguridad para sus usuarios permitiendo incluso la venta de su arte exclusivamente.",
          desc3: "Pixels aun esta en desarrollo por lo que aun faltan muchas funciones por implementar."
        }
      },
      noteapp: {
        name: "Notes App",
        shortDesc: "Aplicacion de Notas para iOS",
        modal: {
          title: "Notes APP",
          category: "Personal",
          desc1: "Aplicacion de Notas para iOS desarrollada con SwiftUI",
          desc2: "Un proyecto personal para conocer y aprender las bases del desarrollo para iOS",
          desc3: "Con Notes APP se puede crear, editar y borrar una nota:",
          desc4: "Pruebala con Xcode"
        }
      },
      carrecognition: {
        name: "Reconocimiento de Carros",
        shortDesc: "Reconocimiento de carros en videos con Python",
        modal: {
          title: "Car Recognition",
          category: "Personal",
          desc1: "Reconocimiento de coches en videos con python utilizando Yolov5",
          desc2: "Cualquier coche que aparezca detectado en el video aparecera carcado dentro de un cuadrado rojo con su etiqueta<br />El programa facilita el cambio de color desde el codigo, ademas esta limitado a soloamente detectar los vehiculos, aunque realmente eso se puede quitar facilmente eliminando solo la duncion desde el codigo.<br /><br />Es necesario instalar Yolov5 con pip"
        }
      },
      numberrecog: {
        name: "Number Recognition",
        shortDesc: "Programa de reconocimiento de digitos dibujados por el usuario",
        modal: {
          title: "Number Recognition",
          category: "Personal",
          desc1: "Reconocimiento de numeros dibujados en el programa",
          desc2: "Programa con entrenamiento de red neuronal para reconocer numeros dibujados por el usuario, el programa esta desarrollado con Python y Pygame, ademas de utilizar la libreria Tensorflow para el entrenamiento de la red neuronal. El programa cuenta con un canvas donde el usuario puede dibujar un numero del 0 al 9 y el programa lo reconocera y mostrara el resultado en pantalla."},
      },
      energyflow: {
        name: "Energy Flow",
        shortDesc: "Aplicación de interfaz de monitoreo de consumo eléctrico para edificios con sensores IOT.",
        modal: {
          title: "EnergyFlow",
          category: "Grupal",
          desc1: "Gemelo Digital multiplataforma ( Web / iOS / Android ) de interfaz de monitoreo energetico para edificios de una universidad integrado con sensores IoT de Particle.",
          desc2: "EnergyFlow es un sistema digital completo de monitoreo y análisis de consumo eléctrico diseñado para una facultad universitaria. El proyecto implementa un gemelo digital que integra hardware IoT, almacenamiento en la nube y una interfaz web/móvil interactiva para visualizar datos energéticos en tiempo real y almacenar históricos para análisis y reportes.",
          desc3: "OBJETIVOS PRINCIPALES: <br />  - Monitoreo en tiempo real de variables eléctricas como voltaje, corriente y potencia en cada edificio.<br />  - Almacenamiento confiable de datos para análisis posteriores y detección de tendencias.<br />  - Dashboard interactivo para visualizar información en tiempo real.<br />  - Detección de patrones irregulares de consumo e identificación temprana de anomalías (planificado).<br />  - Análisis histórico y reportes con futuras capacidades de proyección.<br />  -  Gestión de usuarios y seguridad con Autenticación mediante Supabase Auth para acceso seguro.",
          desc4: "Login",
          desc5: "Configuración",
          desc6: "Vista Principal - Mapa Interactivo",
          desc7: "Informacion de Edificio - Dashboard",
          desc8: "Historico TR - Dashboard",
          desc9: "Predicciones",
          desc10: "El proyecto está estructurado en varios componentes que trabajan de forma integrada:<br /><br />Particle Photon Sensors (IoT) <br />↓<br />MQTT Broker (Linux Server)<br />↓<br />Supabase PostgreSQL Database (Persistencia)<br />↓<br />React Native Web App / Mobile App (Visualización)<br /><br />Los Sensores Photon recopilan datos de voltaje, corriente y potencia en tiempo real y MQTT se utiliza como protocolo de comunicación ligero para transmitir los datos a la Base de datos PostgreSQL, que guarda los datos históricos de forma estructurada y la Aplicación web/móvil construida con React/Expo muestra dashboards y gráficos dinámicos con esos datos."
        }
      },
      spike: {
        name: "Spike - Cuidado de Mascotas",
        shortDesc: "Aplicación movil para gestión de citas y servicios veterinarios de forma centralizada.",
        modal: {
          title: "Spike",
          category: "Grupal",
          desc1: "\"Spike\" es una aplicación Móvil que actúa como gestor integral de clínicas veterinarias y servicios asistenciales de animales domésticos. El problema que resuelve es la falta de un sistema centralizado y accesible para que los dueños de mascotas administren citas, mantengan un historial médico, y contratar servicios adicionales de manera eficiente. Esta plataforma también permitirá a los veterinarios y al personal de la clínica gestionar eficazmente su servicios, clientes y el personal involucrado.",
          desc2: "CARACTERISTICAS PRINCIPALES DEL SISTEMA:<ul><li>ADMINISTRADOR PRINCIPAL: Gestión de todo el sistema con acceso a todas las funcionalidades.</li><li>REGISTRO DE CLIENTE Y MASCOTAS: Almacenamiento seguro e información organizada sobre los clientes y sus mascotas.</li><li>GESTION DE SERVICIOS: Creación, consulta, modificación y Eliminación de servicios, clientes y mascotas.</li><li>ROLES DE USUARIOS: Diferenciación de accesos y funcionalidades según el rol del usuario: usuario (administrador, veterinario, personal de soporte, cliente).</li><li>GENERACION DE INFORMES: Creación de informes detallados sobre el uso de los servicios, la salud de las mascotas y la gestión interna del personal y los clientes.</li></ul>",
          desc3: "IMPACTO:<br />El desarrollo de esta aplicación tendrá un impacto positivo al facilitar la comunicación. veterinarios y propietarios de animales de compañía, así como mejorando la gestión interna de los clínicas veterinarias, contribuyendo a un mejor cuidado y bienestar animal."
        }
      },
      harmony: {
        name: "Harmony & Heaven",
        shortDesc: "Tienda de instrumentos con CRUD - Inventario y Punto de venta.",
        modal: {
          title: "Harmony & Heaven",
          category: "Grupal",
          desc1: "Tienda de instrumentos con CRUD - Inventario y Punto de venta.",
          desc2: "Harmony &amp; Heaven se desarrollo como un inventario para una tienda de instrumentos donde se registrarán los productos con \"unidades a la venta\", \"precio del producto\" y \"categoria\", ademas se creo el punto de venta para el cliente donde podra añadir al carrito cualquier producto disponible de la tienda.<br /><br />En el apartado de Vendedor, Harmony &amp; Heaven cuenta con un motor de busqueda y filtrado de los datos para facilitar la recoleccion de productos, tambien cuenta con un gestor de pedidos al Provedor de productos donde se registraran cuando se soliciten y cuando se reciban para estar en stock añadiendose automaticamente las cantidades recibidas en el inventario, asi como un dashboard para ver resumenes de ventas, empleados y demas cosas.<br /><br />Los productos se pueden editar o eliminar de ser necesario.<br /><br />En el apartado de cliente \"Punto de venta\", el cliente podra unicamente ver los productos en stock y añadirlos al carrito para su compra, el precio total por los productos a comprar se mostrara siempre hasta realizar la compra."
        }
      },
      pickeme: {
        name: "Pick Em' Everithing",
        shortDesc: "Videojuego desarrollado con la libreria Pygame de Python",
        modal: {
          title: "Pick Em' Everithing",
          category: "Grupal",
          desc1: "Videojuego desarrollado 100% con Python con la libreria Pygame",
          desc2: "Pick Em' Everithing es un videojuego dedicado para niños con el enfoque del cuidado del medio ambiente, Arthur \"el personaje principal del juego\" ira recogiendo basura a lo largo de su aventura para llevarla al camion recolector, haciendo referencia a la responsabilidad de mantener limpio un lugar.",
          desc3: "Pick Em' Everithing cuenta con: <br />| MENU PRINCIPAL -- Español / Ingles |<br />| MENU DE NIVELES -- 3 Niveles |<br />| MUSICA DENTRO DEL PROGRAMA |<br />| CONFIGURACION -- Quitar musica, cambiar idioma |",
          desc4: "Todos los elementos del videojuego son originales y completamente creados desde 0 por los desarroladores, desde botones hasta objetos incluso el mismo personaje."
        }
      },
      buggblock: {
        name: "BuggBlock",
        shortDesc: "Web Blog informatico enfocado a la tecnologia y computadoras, los usuarios pueden hacer nuevas publicaciones y el admin borrarlas",
        modal: {
          title: "BuggBlock",
          category: "Grupal",
          desc1: "Un web blog para amantes de la tecnologia.",
          desc2: "BuggBlock es una pagina web tipo Blog con enfoque a informacion tecnologica donde los usuarios registrados podran realizar publicaciones con texto y fotos para despues verlas en el Main",
          desc3: "BuggBlock fue desarrollado con php para el manejo de datos de usuarios y publicaciones por el lado del Backend, y el diseño realizado con iconos de Bootstrap y CSS puro."
        }
      }
    }
  },
  contactme: {
    title: "CONTACTAME",
    email: "CORREO:",
    copy: "Copiar",
    copied: "Copiado",
    phone: "TELEFONO"
  },
  creator: {
    rights: "Estilo de portafolio con derechos reservados © 2026",
    tech: "Portafolio web realizado con NextJS",
    by: "100% hecho por /byQuesters"
  }
};

export default es;