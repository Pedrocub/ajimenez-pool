import { SERVICES } from "./constants";

export interface ServiceDetail {
  slug: string;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
  icon: string;
  longDescEn: string;
  longDescEs: string;
  benefitsEn: string[];
  benefitsEs: string[];
  processEn: string[];
  processEs: string[];
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    ...SERVICES[0],
    longDescEn:
      "Our professional pool cleaning service ensures your pool stays crystal clear year-round. Miami's intense sun, salt air, and tropical storms create the perfect conditions for algae growth and debris buildup. Our trained technicians use industry-leading equipment and techniques to thoroughly clean every inch of your pool — from skimming the surface to vacuuming the floor and brushing walls and tiles.",
    longDescEs:
      "Nuestro servicio profesional de limpieza de piscinas asegura que su piscina se mantenga cristalina todo el año. El sol intenso de Miami, el aire salino y las tormentas tropicales crean las condiciones perfectas para el crecimiento de algas y acumulación de residuos. Nuestros técnicos capacitados utilizan equipos y técnicas líderes en la industria para limpiar a fondo cada centímetro de su piscina.",
    benefitsEn: [
      "Crystal clear water safe for swimming",
      "Prevention of algae and bacteria growth",
      "Extended lifespan of pool equipment",
      "Improved aesthetic appeal of your property",
      "Regular professional inspection catches issues early",
    ],
    benefitsEs: [
      "Agua cristalina y segura para nadar",
      "Prevención del crecimiento de algas y bacterias",
      "Mayor vida útil del equipo de la piscina",
      "Mejora estética de su propiedad",
      "Inspección profesional regular detecta problemas temprano",
    ],
    processEn: [
      "Surface skimming and debris removal",
      "Brushing walls, steps, and tile line",
      "Vacuuming pool floor",
      "Emptying skimmer and pump baskets",
      "Water chemistry testing and balancing",
      "Filter pressure check",
    ],
    processEs: [
      "Limpieza de superficie y remoción de residuos",
      "Cepillado de paredes, escalones y línea de azulejos",
      "Aspirado del fondo de la piscina",
      "Vaciado de cestas del skimmer y la bomba",
      "Prueba y balanceo de la química del agua",
      "Verificación de presión del filtro",
    ],
  },
  {
    ...SERVICES[1],
    longDescEn:
      "Preventive maintenance is the key to avoiding costly repairs and keeping your pool in peak condition. Our weekly and monthly maintenance plans cover everything from chemical balancing to equipment inspections. In Miami's harsh climate, regular maintenance isn't a luxury — it's a necessity to protect your investment.",
    longDescEs:
      "El mantenimiento preventivo es la clave para evitar reparaciones costosas y mantener su piscina en condiciones óptimas. Nuestros planes de mantenimiento semanal y mensual cubren todo, desde el balanceo químico hasta las inspecciones de equipos. En el clima agresivo de Miami, el mantenimiento regular no es un lujo, es una necesidad.",
    benefitsEn: [
      "Prevents costly emergency repairs",
      "Keeps water safe and balanced at all times",
      "Extends the life of your pool surface and equipment",
      "Saves money long-term vs reactive repairs",
      "Peace of mind with professional oversight",
    ],
    benefitsEs: [
      "Previene reparaciones de emergencia costosas",
      "Mantiene el agua segura y balanceada en todo momento",
      "Extiende la vida de la superficie y equipos de la piscina",
      "Ahorra dinero a largo plazo vs reparaciones reactivas",
      "Tranquilidad con supervisión profesional",
    ],
    processEn: [
      "Complete water chemistry analysis",
      "Chemical adjustment and balancing",
      "Equipment inspection and performance check",
      "Filter cleaning or backwash as needed",
      "Surface and tile brushing",
      "Detailed maintenance report",
    ],
    processEs: [
      "Análisis completo de química del agua",
      "Ajuste y balanceo químico",
      "Inspección de equipos y verificación de rendimiento",
      "Limpieza o retrolavado de filtros según necesidad",
      "Cepillado de superficie y azulejos",
      "Informe detallado de mantenimiento",
    ],
  },
  {
    ...SERVICES[2],
    longDescEn:
      "Proper water chemistry is the foundation of a healthy pool. Our chemical balancing service ensures your pH, chlorine, alkalinity, calcium hardness, and stabilizer levels are perfectly calibrated. Imbalanced water can cause skin irritation, equipment corrosion, cloudy water, and even structural damage to your pool surface.",
    longDescEs:
      "La química adecuada del agua es la base de una piscina saludable. Nuestro servicio de balanceo químico asegura que sus niveles de pH, cloro, alcalinidad, dureza de calcio y estabilizador estén perfectamente calibrados. El agua desequilibrada puede causar irritación de la piel, corrosión de equipos, agua turbia e incluso daños estructurales.",
    benefitsEn: [
      "Safe, comfortable water for swimmers",
      "Prevention of equipment corrosion and scaling",
      "Crystal clear water appearance",
      "Extended pool surface lifespan",
      "Compliance with health standards",
    ],
    benefitsEs: [
      "Agua segura y cómoda para los nadadores",
      "Prevención de corrosión y acumulación de cal en equipos",
      "Apariencia de agua cristalina",
      "Mayor vida útil de la superficie de la piscina",
      "Cumplimiento con estándares de salud",
    ],
    processEn: [
      "Comprehensive water testing (7+ parameters)",
      "pH level adjustment",
      "Chlorine/sanitizer optimization",
      "Alkalinity and calcium hardness balancing",
      "Stabilizer (CYA) level management",
      "Post-treatment verification testing",
    ],
    processEs: [
      "Prueba completa del agua (7+ parámetros)",
      "Ajuste del nivel de pH",
      "Optimización de cloro/sanitizante",
      "Balanceo de alcalinidad y dureza de calcio",
      "Gestión del nivel de estabilizador (CYA)",
      "Prueba de verificación post-tratamiento",
    ],
  },
  {
    ...SERVICES[3],
    longDescEn:
      "Your pool filter is the heart of your circulation system. Over time, filters accumulate oils, minerals, and debris that reduce their efficiency. Our professional filter cleaning service restores your filter to peak performance, ensuring clean water and reducing strain on your pump.",
    longDescEs:
      "El filtro de su piscina es el corazón de su sistema de circulación. Con el tiempo, los filtros acumulan aceites, minerales y residuos que reducen su eficiencia. Nuestro servicio profesional de limpieza de filtros restaura su filtro a su máximo rendimiento.",
    benefitsEn: [
      "Improved water clarity and quality",
      "Reduced energy costs from pump efficiency",
      "Extended filter and pump lifespan",
      "Better water circulation",
      "Prevention of costly filter replacement",
    ],
    benefitsEs: [
      "Mejor claridad y calidad del agua",
      "Reducción de costos de energía por eficiencia de la bomba",
      "Mayor vida útil del filtro y la bomba",
      "Mejor circulación del agua",
      "Prevención de reemplazos costosos de filtros",
    ],
    processEn: [
      "Filter pressure reading and assessment",
      "Filter disassembly and inspection",
      "Deep chemical soak cleaning",
      "Grid or cartridge inspection for damage",
      "Reassembly and pressure verification",
      "System performance test",
    ],
    processEs: [
      "Lectura de presión del filtro y evaluación",
      "Desmontaje e inspección del filtro",
      "Limpieza profunda con solución química",
      "Inspección de rejillas o cartuchos por daños",
      "Reensamblaje y verificación de presión",
      "Prueba de rendimiento del sistema",
    ],
  },
  {
    ...SERVICES[4],
    longDescEn:
      "Pool resurfacing is one of the most impactful investments you can make for your pool. Miami's intense UV rays, salt air, and chemical exposure cause pool surfaces to deteriorate faster than in other climates. We offer professional resurfacing with premium materials including plaster, pebble, quartz, and tile finishes.",
    longDescEs:
      "La repavimentación de piscinas es una de las inversiones más impactantes que puede hacer. Los intensos rayos UV de Miami, el aire salino y la exposición química causan que las superficies se deterioren más rápido. Ofrecemos repavimentación profesional con materiales premium incluyendo yeso, piedra, cuarzo y acabados de azulejo.",
    benefitsEn: [
      "Completely renewed pool appearance",
      "Smoother, more comfortable surface",
      "Improved water retention (no leaks)",
      "Increased property value",
      "10-15 year surface lifespan with proper care",
    ],
    benefitsEs: [
      "Apariencia completamente renovada de la piscina",
      "Superficie más suave y cómoda",
      "Mejor retención de agua (sin fugas)",
      "Aumento del valor de la propiedad",
      "10-15 años de vida útil con cuidado adecuado",
    ],
    processEn: [
      "Pool draining and surface assessment",
      "Old surface removal and preparation",
      "Crack and structural repair",
      "New surface material application",
      "Curing period management",
      "Fill, chemical balance, and final inspection",
    ],
    processEs: [
      "Vaciado de la piscina y evaluación de superficie",
      "Remoción de superficie antigua y preparación",
      "Reparación de grietas y estructura",
      "Aplicación de nuevo material de superficie",
      "Gestión del período de curado",
      "Llenado, balance químico e inspección final",
    ],
  },
  {
    ...SERVICES[5],
    longDescEn:
      "Over time, calcium deposits, body oils, and environmental debris create unsightly buildup on your pool tiles and grout lines. Our specialized tile and grout cleaning service uses professional-grade tools and solutions to restore your tiles to their original beauty without damaging the surface.",
    longDescEs:
      "Con el tiempo, los depósitos de calcio, aceites corporales y residuos ambientales crean acumulación antiestética en los azulejos y juntas de su piscina. Nuestro servicio especializado utiliza herramientas y soluciones de grado profesional para restaurar sus azulejos a su belleza original.",
    benefitsEn: [
      "Restored tile appearance and shine",
      "Removal of calcium and mineral deposits",
      "Prevention of permanent staining",
      "Improved overall pool aesthetics",
      "Extended tile lifespan",
    ],
    benefitsEs: [
      "Apariencia y brillo restaurados de los azulejos",
      "Remoción de depósitos de calcio y minerales",
      "Prevención de manchas permanentes",
      "Mejora estética general de la piscina",
      "Mayor vida útil de los azulejos",
    ],
    processEn: [
      "Tile line assessment and stain identification",
      "Application of specialized cleaning solution",
      "Mechanical and manual scrubbing",
      "Grout line deep cleaning",
      "Rinse and inspection",
      "Sealant application if needed",
    ],
    processEs: [
      "Evaluación de línea de azulejos e identificación de manchas",
      "Aplicación de solución de limpieza especializada",
      "Fregado mecánico y manual",
      "Limpieza profunda de juntas",
      "Enjuague e inspección",
      "Aplicación de sellador si es necesario",
    ],
  },
  {
    ...SERVICES[6],
    longDescEn:
      "Salt chlorination systems are the modern, gentler alternative to traditional chlorine pools. They produce chlorine naturally from salt, resulting in softer water that's easier on skin, eyes, and swimwear. We handle complete installation, from the salt cell to the control system, ensuring optimal performance for Miami's climate.",
    longDescEs:
      "Los sistemas de cloración salina son la alternativa moderna y más suave a las piscinas de cloro tradicional. Producen cloro naturalmente a partir de sal, resultando en agua más suave para la piel, ojos y trajes de baño. Manejamos la instalación completa, desde la celda de sal hasta el sistema de control.",
    benefitsEn: [
      "Softer, more comfortable water",
      "Reduced chemical handling and storage",
      "Lower long-term maintenance costs",
      "No more red eyes or dry skin",
      "Consistent chlorine levels automatically",
    ],
    benefitsEs: [
      "Agua más suave y cómoda",
      "Reducción del manejo y almacenamiento de químicos",
      "Menores costos de mantenimiento a largo plazo",
      "No más ojos rojos o piel seca",
      "Niveles de cloro consistentes automáticamente",
    ],
    processEn: [
      "Pool assessment and system sizing",
      "Salt cell and control panel installation",
      "Plumbing integration",
      "Salt addition and initial calibration",
      "System testing and optimization",
      "Owner training and maintenance guide",
    ],
    processEs: [
      "Evaluación de la piscina y dimensionamiento del sistema",
      "Instalación de celda de sal y panel de control",
      "Integración de plomería",
      "Adición de sal y calibración inicial",
      "Prueba y optimización del sistema",
      "Capacitación del propietario y guía de mantenimiento",
    ],
  },
  {
    ...SERVICES[7],
    longDescEn:
      "A green pool is more than just ugly — it's a health hazard. Algae-infested water can harbor harmful bacteria and mosquitoes. Our green-to-clean service is one of the most requested in Miami due to the tropical climate that accelerates algae growth. We bring your pool back from green to crystal clear, typically within 3-5 days.",
    longDescEs:
      "Una piscina verde es más que fea — es un riesgo para la salud. El agua infestada de algas puede albergar bacterias dañinas y mosquitos. Nuestro servicio de verde a limpio es uno de los más solicitados en Miami debido al clima tropical. Restauramos su piscina de verde a cristalina, típicamente en 3-5 días.",
    benefitsEn: [
      "Rapid transformation from green to clean",
      "Elimination of harmful bacteria and algae",
      "Mosquito breeding prevention",
      "Avoid HOA fines and neighbor complaints",
      "Full chemical rebalancing included",
    ],
    benefitsEs: [
      "Transformación rápida de verde a limpia",
      "Eliminación de bacterias y algas dañinas",
      "Prevención de criaderos de mosquitos",
      "Evite multas de HOA y quejas de vecinos",
      "Rebalanceo químico completo incluido",
    ],
    processEn: [
      "Initial assessment and shock treatment",
      "Heavy-duty brushing and debris removal",
      "Multi-stage chemical treatment",
      "Continuous filtration monitoring",
      "Filter cleaning during recovery",
      "Final water testing and balancing",
    ],
    processEs: [
      "Evaluación inicial y tratamiento de choque",
      "Cepillado intensivo y remoción de residuos",
      "Tratamiento químico en múltiples etapas",
      "Monitoreo continuo de filtración",
      "Limpieza de filtro durante la recuperación",
      "Prueba final del agua y balanceo",
    ],
  },
  {
    ...SERVICES[8],
    longDescEn:
      "An acid wash is the deep cleaning reset your pool needs when regular cleaning isn't enough. This process removes stubborn stains, algae residue, and mineral buildup from the pool surface, revealing the clean plaster underneath. Recommended every 3-5 years or when heavy staining occurs.",
    longDescEs:
      "Un lavado ácido es la limpieza profunda que su piscina necesita cuando la limpieza regular no es suficiente. Este proceso elimina manchas difíciles, residuos de algas y acumulación de minerales de la superficie, revelando el yeso limpio debajo. Recomendado cada 3-5 años.",
    benefitsEn: [
      "Removal of deep-set stains and discoloration",
      "Restored bright, clean pool surface",
      "Elimination of embedded algae",
      "Fresh start for chemical treatment",
      "Improved overall pool appearance",
    ],
    benefitsEs: [
      "Remoción de manchas profundas y decoloración",
      "Superficie limpia y brillante restaurada",
      "Eliminación de algas incrustadas",
      "Nuevo inicio para tratamiento químico",
      "Mejora general de la apariencia de la piscina",
    ],
    processEn: [
      "Complete pool draining",
      "Surface pre-treatment and prep",
      "Acid wash application in sections",
      "Neutralization and rinse",
      "Pool refill",
      "Complete chemical startup and balancing",
    ],
    processEs: [
      "Vaciado completo de la piscina",
      "Pre-tratamiento y preparación de superficie",
      "Aplicación de lavado ácido por secciones",
      "Neutralización y enjuague",
      "Rellenado de la piscina",
      "Inicio químico completo y balanceo",
    ],
  },
  {
    ...SERVICES[9],
    longDescEn:
      "Sometimes a complete drain and refill is the best solution for your pool. Whether due to high TDS (Total Dissolved Solids), cyanuric acid buildup, or other water quality issues, we handle the entire process safely and efficiently, including proper disposal and fresh water chemical balancing.",
    longDescEs:
      "A veces un vaciado y rellenado completo es la mejor solución. Ya sea por alto TDS (Sólidos Disueltos Totales), acumulación de ácido cianúrico u otros problemas de calidad del agua, manejamos todo el proceso de forma segura y eficiente, incluyendo el balanceo químico del agua fresca.",
    benefitsEn: [
      "Fresh start with clean water",
      "Resolution of persistent water chemistry issues",
      "Opportunity for surface inspection and repair",
      "Reduced TDS and stabilizer levels",
      "Proper chemical baseline establishment",
    ],
    benefitsEs: [
      "Nuevo comienzo con agua limpia",
      "Resolución de problemas persistentes de química del agua",
      "Oportunidad para inspección y reparación de superficie",
      "Reducción de niveles de TDS y estabilizador",
      "Establecimiento de línea base química adecuada",
    ],
    processEn: [
      "Water quality assessment and drain decision",
      "Controlled pool draining",
      "Surface inspection while empty",
      "Minor repairs if needed",
      "Controlled refill",
      "Complete chemical startup treatment",
    ],
    processEs: [
      "Evaluación de calidad del agua y decisión de vaciado",
      "Vaciado controlado de la piscina",
      "Inspección de superficie mientras está vacía",
      "Reparaciones menores si es necesario",
      "Rellenado controlado",
      "Tratamiento de inicio químico completo",
    ],
  },
  {
    ...SERVICES[10],
    longDescEn:
      "Your pool deck is an extension of your pool area and deserves the same attention. Miami's humidity and rain create perfect conditions for mold, mildew, and algae growth on pool decks. Our high-pressure washing service restores your deck's appearance and eliminates slippery, dangerous surfaces.",
    longDescEs:
      "El deck de su piscina es una extensión del área de la piscina y merece la misma atención. La humedad y lluvia de Miami crean condiciones perfectas para moho y algas en el deck. Nuestro servicio de lavado a presión restaura la apariencia de su deck y elimina superficies resbaladizas y peligrosas.",
    benefitsEn: [
      "Restored deck appearance and color",
      "Elimination of slippery mold and algae",
      "Improved safety around the pool area",
      "Prevention of permanent staining",
      "Enhanced property curb appeal",
    ],
    benefitsEs: [
      "Apariencia y color del deck restaurados",
      "Eliminación de moho y algas resbaladizas",
      "Mejora de seguridad en el área de la piscina",
      "Prevención de manchas permanentes",
      "Mejora de la estética de la propiedad",
    ],
    processEn: [
      "Deck assessment and area preparation",
      "Pre-treatment of heavy stains",
      "High-pressure washing with proper PSI",
      "Attention to edges, cracks, and joints",
      "Final rinse and drainage",
      "Optional sealant application",
    ],
    processEs: [
      "Evaluación del deck y preparación del área",
      "Pre-tratamiento de manchas pesadas",
      "Lavado a alta presión con PSI adecuado",
      "Atención a bordes, grietas y juntas",
      "Enjuague final y drenaje",
      "Aplicación opcional de sellador",
    ],
  },
  {
    ...SERVICES[11],
    longDescEn:
      "For residential pools that need to meet Florida Health Department standards — whether for rental properties, Airbnb listings, or community requirements — we ensure full compliance. Our SPO certification means we know exactly what inspectors look for and how to keep your pool up to code.",
    longDescEs:
      "Para piscinas residenciales que necesitan cumplir con los estándares del Departamento de Salud de Florida — ya sea para propiedades de alquiler, Airbnb o requisitos comunitarios — aseguramos cumplimiento total. Nuestra certificación SPO significa que sabemos exactamente qué buscan los inspectores.",
    benefitsEn: [
      "Full compliance with Florida regulations",
      "Avoid fines and legal issues",
      "Safe water for renters and guests",
      "Professional documentation provided",
      "Ongoing compliance monitoring available",
    ],
    benefitsEs: [
      "Cumplimiento total con regulaciones de Florida",
      "Evite multas y problemas legales",
      "Agua segura para inquilinos e invitados",
      "Documentación profesional proporcionada",
      "Monitoreo continuo de cumplimiento disponible",
    ],
    processEn: [
      "Current compliance assessment",
      "Water quality testing per DOH standards",
      "Equipment safety inspection",
      "Required adjustments and corrections",
      "Documentation and record preparation",
      "Follow-up verification",
    ],
    processEs: [
      "Evaluación actual de cumplimiento",
      "Prueba de calidad del agua según estándares del DOH",
      "Inspección de seguridad de equipos",
      "Ajustes y correcciones requeridas",
      "Preparación de documentación y registros",
      "Verificación de seguimiento",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_DETAILS.map((s) => s.slug);
}
