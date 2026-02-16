export const personalInfo = {
  name: "Daniel Mamani",
  role: "Desarrollador Full-Stack & Backend",
  bio: "Estudiante de Ingeniería en Informática (UBA). Aplico lógica de ingeniería para construir sistemas eficientes y transformar problemas complejos en herramientas que las personas realmente usan.",
  github: "https://github.com/daniel1002-jpg",
  linkedin: "https://www.linkedin.com/in/daniel-mamani",
};

export const featuredProjects = [
  {
    id: "image-to-pattern",
    title: "Image-to-Pattern",
    description: "MVP Full-Stack que utiliza K-Means clustering para procesar y convertir imágenes en patrones de tejido. Validado y destacado públicamente por la comunidad 'ID for Ideas'.",
    techStack: ["React", "Python", "FastAPI", "Machine Learning", "Vite", "TypeScript"],
    liveUrl: "https://image-to-pattern.vercel.app",
    repoUrl: "https://github.com/daniel1002-jpg/image-to-pattern",
  },
  {
    id: "fiuba-calendar",
    title: "Calendario FIUBA",
    description: "Plataforma web interactiva diseñada para resolver el problema de visualización y organización del calendario académico para los estudiantes de la facultad.",
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google Gemini AI", "pdf-parse", "UX/UI"],
    liveUrl: "https://fiuba-calendar.vercel.app",
    repoUrl: "https://github.com/daniel1002-jpg/fiuba-calendar",
  }
];

export const backendArchitecture = [
  {
    id: "tp2-taller-rusteze",
    title: "TP2 Taller de Programación I (25C1-Rusteze)",
    description: `Suite colaborativa tipo Google Docs desarrollada en Rust, con arquitectura de microservicios, Redis cluster propio, Dockerización y GUI nativa multiplataforma. Permite edición colaborativa de texto y hojas de cálculo en tiempo real, integración de servicios, concurrencia avanzada y despliegue automatizado.\n\n**Contribución:** Participación en automatización de scripts, refactors, documentación, gestión de archivos y mejoras de integración. Aportes en commits relacionados a scripts de automatización, documentación y soporte técnico.`,
    techStack: ["Rust", "Microservicios", "Redis", "Docker", "Concurrencia", "GUI Nativa", "Cluster"],
    repoUrl: "https://github.com/taller-1-fiuba-rust/25C1-Rusteze",
  },
  {
    id: "rust-the-forth",
    title: "Rust-the-Forth (TP Académico FIUBA)",
    description: "Intérprete de Forth en Rust desarrollado como TP individual para Taller de Programación I (FIUBA, cátedra Deymonnaz). El proyecto implementa parsing, ejecución de instrucciones, manipulación de pila, definición de palabras, operaciones aritméticas y lógicas, y manejo de memoria. Destaca el diseño modular, la integración de pruebas unitarias, y la capacidad de definir y ejecutar palabras complejas en múltiples líneas. Representa un desafío de bajo nivel, orientado a la arquitectura de lenguajes y sistemas, alineado con la formación académica en programación y estructuras de datos.",
    techStack: ["Rust", "Forth", "Parser", "Stack Operations", "Unit Testing", "Modular Design"],
    repoUrl: "https://github.com/daniel1002-jpg/Rust-the-Forth",
  },
  {
    id: "api-gestion-pacientes",
    title: "APIs de Gestión: Pacientes y Medicamentos",
    description: "Sistema de gestión diseñado con foco en la arquitectura de datos y la escalabilidad. Incluye endpoints documentados para la administración integral de pacientes y medicación.",
    techStack: ["Node.js", "Express", "API REST", "PostgreSQL", "Jest", "Supertest"],
    repoUrl: "https://github.com/daniel1002-jpg/medication-management-api",
  },
  {
    id: "tp-modelacion-numerica",
    title: "TP Modelación Numérica (FIUBA)",
    description: "Simulación y análisis de sistemas oscilatorios amortiguados aplicados a la suspensión de vehículos. Implementación de métodos numéricos (Euler explícito/implícito, método ponderado implícito) para resolver ecuaciones diferenciales, ajuste de parámetros y comparación con soluciones analíticas. Incluye visualización de resultados, análisis de errores y validación de modelos físicos. Proyecto orientado a modelación matemática, simulación y aplicación de algoritmos en ingeniería.",
    techStack: ["Python", "Jupyter Notebook", "Numpy", "Matplotlib", "Scipy", "Métodos Numéricos", "Simulación"],
    repoUrl: "https://github.com/daniel1002-jpg/TP-Modelacion-numerica",
  },
  {
    id: "tda-nextfit-subseq",
    title: "Algoritmos Next Fit y Subsequencia de Suma Máxima (TPs FIUBA)",
    description: "Colaboración grupal en la resolución de dos problemas clásicos de optimización: Next Fit para Bin Packing y Subsequencia de Suma Máxima. En ambos casos participé en el diseño, implementación y experimentación de los algoritmos, automatizando benchmarks y análisis de eficiencia. El trabajo incluyó generación de datasets, pruebas automatizadas, visualización de resultados y validación empírica de cotas teóricas. La colaboración fue parcial, en duplas para TP1 y por problema asignado en TP2. Los demás problemas del TP fueron tratados por otros integrantes del grupo.",
    techStack: ["Python", "Algoritmos de Optimización", "Benchmarking", "Pytest", "Matplotlib"],
    repoUrl: "https://github.com/MaxiOtero6/TDA-Echevarria",
  },
  {
    id: "tp0-amigos",
    title: "TP0: Detección de Números Amigos (FIUBA)",
    description: "Trabajo individual orientado a la optimización algorítmica y análisis de eficiencia. Implementé algoritmos para la detección de números amigos, enfocándome en la reducción de complejidad y optimización de recursos. Incluye medición de tiempos de ejecución y comparación de estrategias para grandes volúmenes de datos. Documentación técnica y análisis crítico de resultados.",
    techStack: ["Python", "Algoritmos Numéricos", "Optimización", "Benchmarking"],
    repoUrl: "https://github.com/daniel1002-jpg/tp0/tree/feat/tp0-optimization",
  },
  {
    id: "tp2-algohoot-oop",
    title: "TP2 Algoritmos y Programación III (algohoot_OOP)",
    description: `Juego tipo Kahoot multiusuario desarrollado en Java con JavaFX y arquitectura orientada a objetos avanzada. Incluye lógica de preguntas (multiple choice, verdadero/falso, ordenamiento), modos de puntaje (clásico, parcial, penalidad), gestión de usuarios, parser de preguntas desde JSON, integración de recursos multimedia y una interfaz gráfica robusta. Testing exhaustivo con JUnit.\n\n**Contribución:** Participación en automatización de diagramas, refactors, mejoras de arquitectura, documentación y tareas de integración. Aportes en issues y commits relacionados a diagramas, refactorización y mejoras técnicas.`,
    techStack: ["Java", "JavaFX", "JUnit", "OOP", "Arquitectura Modular", "JSON", "Testing"],
    repoUrl: "https://github.com/agpelliciari/algohoot_OOP",
  },
];

export const experienceAndCommunity = {
  education: "3er año - Ingeniería en Informática (Universidad de Buenos Aires)",
  hackathons: [
    "Google Chrome AI Hackathon",
    "Web3 / Starknet Bootcamp"
  ]
};