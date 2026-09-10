const en = {
  navbar: {
    home: "Home",
    solo: "Solo",
    grupal: "Group",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "CV",
    translate: "Translate"
  },
  aboutme: {
    title: "ABOUT ME...",
    description: "Hello World! I’m Questers, a Full Stack Engineer with over 5 years of experience designing and developing solutions focused on clean code and scalable architecture. If you can imagine it, I can build it."
  },
  tecnologias: {
    title: "TECHNOLOGIES",
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
    title: "PROJECTS",
    viewProject: "View project",
    viewProduction: "View in Production",
    viewGitHub: "View on GitHub",
    inDevelopment: "Under development",
    categories: {
      personal: "Personal",
      grupal: "Group"
    },
    list: {
      stjohns: {
        name: "St. John's Gym",
        shortDesc: "Responsive landing page website for a gym.",
        modal: {
          title: "St. John's Gym",
          category: "Personal",
          desc1: "St. John's Website <br /> (All rights reserved)",
          desc2: "Responsive Landing Page developed to show public interest information of a gym.",
          desc3: "The website has 2 views, the home with detailed information and the contact page where contact information and location of the gym are presented."
        }
      },
      smatiz: {
        name: "Appointment Manager - Salon Matiz",
        shortDesc: "Web page to schedule appointments and manage a barber shop schedule",
        modal: {
          title: "Barber Shop Appointment Manager",
          category: "Personal",
          desc1: "Public web application for people to schedule appointments at a barber shop.",
          desc2: "The barber shop schedules will be automatically managed to avoid overlapping appointments, each service has a time value that is taken into account in the sum for the available schedule manager without interfering between another appointment for other users after they are scheduled.",
          desc3: "The Dashboard allows the administrator to see the appointments of the current day, filter them by dates, services and even names, also, they can create news for their clients and delete them from the same Dashboard."
        }
      },
      earthqa: {
        name: "Earthquake Alert Application",
        shortDesc: "Mobile app for Android to show earthquakes",
        modal: {
          title: "Earthquake Alert Application for Android",
          category: "Personal",
          desc1: "Public web application for people to schedule appointments at a barber shop."
        }
      },
      pixels: {
        name: "Pixels",
        shortDesc: "Social Network for Photographers",
        modal: {
          title: "Pixels",
          category: "Personal",
          desc1: "Social network for photographers, users will share their photographs and metadata will be shown, photographs cannot be stolen.",
          desc2: "The main objective of Pixels is to be a 100% photography-focused social network with the novelty of offering high security for its users, even allowing the sale of their art exclusively.",
          desc3: "Pixels is still under development so many features are yet to be implemented."
        }
      },
      noteapp: {
        name: "Notes App",
        shortDesc: "Notes app for iOS",
        modal: {
          title: "Notes APP",
          category: "Personal",
          desc1: "Notes app for iOS developed with SwiftUI",
          desc2: "A personal project to learn the basics of iOS development",
          desc3: "With Notes APP you can create, edit and delete a note:",
          desc4: "Try it with Xcode"
        }
      },
      carrecognition: {
        name: "Car Recognition",
        shortDesc: "Car recognition in videos with Python",
        modal: {
          title: "Car Recognition",
          category: "Personal",
          desc1: "Car recognition in videos with python using Yolov5",
          desc2: "Any car that appears detected in the video will be marked inside a red square with its label.<br />The program makes it easy to change the color from the code, also it is limited to only detect vehicles, although that can be easily removed by deleting the function from the code.<br /><br />It is necessary to install Yolov5 with pip"
        }
      },
      numberrecog: {
        name: "Number Recognition",
        shortDesc: "Program to recognize digits drawn by the user",
        modal: {
          title: "Number Recognition",
          category: "Personal",
          desc1: "Recognition of numbers drawn in the program",
          desc2: "Program with neural network training to recognize numbers drawn by the user, the program is developed with Python and Pygame, in addition to using the Tensorflow library for neural network training. The program has a canvas where the user can draw a number from 0 to 9 and the program will recognize it and display the result on screen."
        }
      },
      energyflow: {
        name: "Energy Flow",
        shortDesc: "Monitoring interface application for electrical consumption in buildings with IoT sensors.",
        modal: {
          title: "EnergyFlow",
          category: "Group",
          desc1: "Cross-platform Digital Twin (Web / iOS / Android) of an energy monitoring interface for university buildings integrated with Particle IoT sensors.",
          desc2: "EnergyFlow is a complete digital monitoring and analysis system for electrical consumption designed for a university faculty. The project implements a digital twin that integrates IoT hardware, cloud storage and an interactive web/mobile interface to visualize real-time energy data and store historical data for analysis and reports.",
          desc3: "MAIN OBJECTIVES: <br />  - Real-time monitoring of electrical variables such as voltage, current and power in each building.<br />  - Reliable data storage for subsequent analysis and trend detection.<br />  - Interactive dashboard to visualize real-time information.<br />  - Detection of irregular consumption patterns and early identification of anomalies (planned).<br />  - Historical analysis and reports with future projection capabilities.<br />  - User management and security with Supabase Auth for secure access.",
          desc4: "Login",
          desc5: "Configuration",
          desc6: "Main View - Interactive Map",
          desc7: "Building Information - Dashboard",
          desc8: "Historical TR - Dashboard",
          desc9: "Predictions",
          desc10: "The project is structured in several components that work in an integrated way:<br /><br />Particle Photon Sensors (IoT) <br />↓<br />MQTT Broker (Linux Server)<br />↓<br />Supabase PostgreSQL Database (Persistence)<br />↓<br />React Native Web App / Mobile App (Visualization)<br /><br />The Photon Sensors collect voltage, current and power data in real time and MQTT is used as a lightweight communication protocol to transmit the data to the PostgreSQL Database, which stores the historical data in a structured way and the web/mobile application built with React/Expo shows dashboards and dynamic graphs with that data."
        }
      },
      spike: {
        name: "Spike - Pet Care",
        shortDesc: "Mobile app for centralized management of veterinary appointments and services.",
        modal: {
          title: "Spike",
          category: "Group",
          desc1: "\"Spike\" is a Mobile application that acts as an integral manager of veterinary clinics and domestic animal care services. The problem it solves is the lack of a centralized and accessible system for pet owners to manage appointments, maintain a medical history, and hire additional services efficiently. This platform will also allow veterinarians and clinic staff to effectively manage their services, clients and the staff involved.",
          desc2: "MAIN SYSTEM FEATURES:<ul><li>MAIN ADMINISTRATOR: Management of the entire system with access to all functionalities.</li><li>CLIENT AND PET REGISTRATION: Secure storage and organized information about clients and their pets.</li><li>SERVICE MANAGEMENT: Creation, consultation, modification and deletion of services, clients and pets.</li><li>USER ROLES: Differentiation of accesses and functionalities according to the user role: user (administrator, veterinarian, support staff, client).</li><li>REPORT GENERATION: Creation of detailed reports on the use of services, pet health and internal management of staff and clients.</li></ul>",
          desc3: "IMPACT:<br />The development of this application will have a positive impact by facilitating communication between veterinarians and pet owners, as well as improving the internal management of veterinary clinics, contributing to better animal care and welfare."
        }
      },
      harmony: {
        name: "Harmony & Heaven",
        shortDesc: "Instrument store with CRUD - Inventory and Point of Sale.",
        modal: {
          title: "Harmony & Heaven",
          category: "Group",
          desc1: "Instrument store with CRUD - Inventory and Point of Sale.",
          desc2: "Harmony &amp; Heaven was developed as an inventory for an instrument store where products will be registered with \"units for sale\", \"product price\" and \"category\", in addition, the point of sale for the client was created where they can add any available product from the store to the cart.<br /><br />In the Seller section, Harmony &amp; Heaven has a search engine and data filtering to facilitate product collection, it also has an order manager to the Product Supplier where they will be recorded when requested and when received to be in stock, automatically adding the received quantities to the inventory, as well as a dashboard to see sales summaries, employees and other things.<br /><br />Products can be edited or deleted if necessary.<br /><br />In the client section \"Point of Sale\", the client can only view the products in stock and add them to the cart for purchase, the total price for the products to be purchased will always be shown until the purchase is made."
        }
      },
      pickeme: {
        name: "Pick Em' Everything",
        shortDesc: "Video game developed with Python's Pygame library",
        modal: {
          title: "Pick Em' Everything",
          category: "Group",
          desc1: "Video game developed 100% with Python using the Pygame library",
          desc2: "Pick Em' Everything is a video game dedicated to children with a focus on environmental care, Arthur \"the main character of the game\" will collect garbage along his adventure to take it to the garbage truck, referring to the responsibility of keeping a place clean.",
          desc3: "Pick Em' Everything features: <br />| MAIN MENU -- Spanish / English |<br />| LEVEL MENU -- 3 Levels |<br />| MUSIC INSIDE THE PROGRAM |<br />| CONFIGURATION -- Remove music, change language |",
          desc4: "All elements of the video game are original and completely created from scratch by the developers, from buttons to objects and even the character itself."
        }
      },
      buggblock: {
        name: "BuggBlock",
        shortDesc: "Technology blog focused on computers and tech, users can create new posts and admin can delete them",
        modal: {
          title: "BuggBlock",
          category: "Group",
          desc1: "A web blog for technology lovers.",
          desc2: "BuggBlock is a Blog-type web page focused on technological information where registered users can make posts with text and photos to later view them on the Main",
          desc3: "BuggBlock was developed with php for data management of users and posts on the Backend side, and the design was made with Bootstrap icons and pure CSS."
        }
      }
    }
  },
  contactme: {
    title: "CONTACT ME",
    email: "EMAIL:",
    copy: "Copy",
    copied: "Copied",
    phone: "PHONE"
  },
  creator: {
    rights: "Portfolio style with all rights reserved © 2026",
    tech: "Web portfolio made with NextJS",
    by: "100% made by /byQuesters"
  }
};

export default en;