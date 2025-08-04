// src/data.js

export const categories = [
  "Todos",
  "Proyectos React",
  "Notas y Apuntes"
];

// Datos del glosario estructurados como un array de objetos
const glosarioData = [
  { term: "ADSL", definition: "Asymmetric Digital Subscriber Line. Tecnología de acceso dedicado fijo surgida en el siglo XXI, durante la etapa de la Web 2.0, que amplió el ancho de banda, permitiendo conexiones más potentes y asequibles a Internet." },
  { term: "AJAX", definition: "Asynchronous JavaScript and XML. Tecnología utilizada por las aplicaciones Web 2.0 para generar de manera dinámica una serie de páginas que el cliente interpretará y representará." },
  { term: "AMF", definition: "Action Message Format. Estándar utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA), aparecido en la era de la Web 2.0." },
  { term: "ASP", definition: "Active Server Pages. Lenguaje de programación interpretado en la parte del servidor que permite el desarrollo de páginas web totalmente dinámicas e interactivas con acceso a Sistemas de Gestión de Bases de Datos (SGBD)." },
  { term: "ATOM", definition: "Atom Syndication Format. Estándar utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA), aparecido en la era de la Web 2.0." },
  { term: "C/P", definition: "Consumidor/Productor (Prosumidor). Término que describe al usuario de la Web 2.0 en adelante, quien no solo consume sino que también produce contenido." },
  { term: "CERN", definition: "Organización Europea para la Investigación Nuclear (European Organization for Nuclear Research). Laboratorio donde Tim Berners-Lee y Robert Cailiau desarrollaron un sistema basado en hipertextos (HTTP+HTML=WEB) en 1989." },
  { term: "CGI", definition: "Common Gateway Interface. Aplicaciones escritas en algún lenguaje de programación que se ejecutaban en el servidor y que podían recibir parámetros de los clientes, aunque tendían a sobrecargar el servidor." },
  { term: "CSS", definition: "Cascading Style Sheets. Estándar de lenguaje web publicado por el W3C, que indica cómo deben presentarse los datos en HTML. Los navegadores actuales lo interpretan." },
  { term: "DHCP", definition: "Dynamic Host Configuration Protocol. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF)." },
  { term: "DNS", definition: "Domain Name System. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF), que permite conocer la dirección IP de una URL." },
  { term: "ECMA", definition: "European Computer Manufacturers Association. Organismo que establece estándares, como ECMA-262 para el lenguaje de programación ECMAScript." },
  { term: "FTP", definition: "File Transfer Protocol. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF)." },
  { term: "GPRS", definition: "General Packet Radio Service. Tecnología de conexión de acceso conmutado que apareció durante la etapa de la Web 1.0." },
  { term: "GSM", definition: "Global System for Mobile Communications. Tecnología de conexión de acceso conmutado que apareció durante la etapa de la Web 1.0." },
  { term: "HTML", definition: "Lenguaje de Marcado de HiperTexto (HyperText Markup Language). Utilizado para desarrollar un sistema basado en hipertextos junto con HTTP. Es el código en el que están escritas las páginas web, interpretado por los navegadores." },
  { term: "HTTP", definition: "Protocolo de Transferencia de HiperTexto (HyperText Transfer Protocol). Creado en 1989 en el CERN para compartir datos científicos. Es el método más común de intercambio de información en la World Wide Web, transfiriendo páginas web o HTML a un ordenador." },
  { term: "IANA", definition: "Internet Assigned Numbers Authority. Mantiene nombres y números de registro, incluyendo la asignación de direcciones IP (tanto versión 4 como 6) y la gestión de los nombres de dominios web." },
  { term: "IE", definition: "Internet Explorer. Navegador web desarrollado por Microsoft, integrado en Windows. Fue el más utilizado desde 1999, aunque ha perdido usuarios." },
  { term: "IETF", definition: "Internet Engineering Task Force. Organismo que establece estándares de Internet (STD) y Request for Comments (RFC)." },
  { term: "IMAP", definition: "Internet Message Access Protocol. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF)." },
  { term: "IP", definition: "Internet Protocol. Mencionada en el contexto de la asignación de direcciones por IANA y la resolución de URL por DNS." },
  { term: "ISO", definition: "Organización Internacional para la Estandarización (International Organization for Standardization). Organismo que establece estándares, como ISO 8601 para la representación del tiempo y la fecha." },
  { term: "JSON", definition: "JavaScript Object Notation. Estándar utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA), aparecido en la era de la Web 2.0." },
  { term: "JSP", definition: "JavaServer Pages. Lenguaje de programación interpretado en la parte del servidor que permite el desarrollo de páginas web totalmente dinámicas e interactivas con acceso a Sistemas de Gestión de Bases de Datos (SGBD)." },
  { term: "LTE/4G", definition: "Long-Term Evolution / 4th Generation. Tecnología de acceso móvil surgida en el siglo XXI, durante la etapa de la Web 2.0, que amplió el ancho de banda, permitiendo conexiones más potentes y asequibles a Internet." },
  { term: "MPL", definition: "Mozilla Public License. Licencia bajo la cual se distribuye Mozilla Firefox, siendo de código abierto y libre." },
  { term: "PHP", definition: "Hypertext Preprocessor. Lenguaje de programación interpretado en la parte del servidor que permite el desarrollo de páginas web totalmente dinámicas e interactivas con acceso a Sistemas de Gestión de Bases de Datos (SGBD)." },
  { term: "POP", definition: "Post Office Protocol. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF)." },
  { term: "RDSI", definition: "Red Digital de Servicios Integrados (Integrated Services Digital Network). Tecnología de conexión de acceso conmutado que apareció durante la etapa de la Web 1.0." },
  { term: "RFC", definition: "Request for Comments. Documentos publicados por el Internet Engineering Task Force (IETF) que describen protocolos de Internet y temas relacionados." },
  { term: "RIA", definition: "Rich Internet Application. Aplicaciones interactivas de Internet enriquecidas, creadas a partir del siglo XXI en la etapa de la Web 2.0, con tecnologías como XML, JSON, SOAP, UDDI, WSDL, RSS, ATOM o AMF." },
  { term: "RSS", definition: "Really Simple Syndication / Rich Site Summary. Tecnología de la Web 2.0 que permite el consumo 'push', donde los nuevos contenidos llegan al usuario sin tener que buscarlos, haciendo que la actualización del contenido sea bidireccional." },
  { term: "RTC", definition: "Red Telefónica Conmutada (Switched Telephone Network). Tecnología de conexión de acceso conmutado que apareció durante la etapa de la Web 1.0." },
  { term: "SGBD", definition: "Sistema de Gestión de Bases de Datos (Database Management System). Sistemas a los que lenguajes de programación del servidor como PHP, ASP o JSP pueden acceder para el desarrollo de páginas web dinámicas." },
  { term: "SMTP", definition: "Simple Mail Transfer Protocol. Protocolo asociado a los servicios web, gestionado por el Internet Engineering Task Force (IETF)." },
  { term: "SOAP", definition: "Simple Object Access Protocol. Protocolo utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA) y los servicios web, recomendado por el W3C." },
  { term: "STD", definition: "Standards. Estándares de Internet establecidos por el Internet Engineering Task Force (IETF)." },
  { term: "UDDI", definition: "Universal Description, Discovery, and Integration. Estándar utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA) y los servicios web, recomendado por el W3C. Funciona como un listín público de servicios web." },
  { term: "URL", definition: "Uniform Resource Locator. Recomendación del W3C, utilizada para identificar recursos en la web." },
  { term: "UMTS/3G", definition: "Universal Mobile Telecommunications System / 3rd Generation. Tecnología de acceso móvil surgida en el siglo XXI, durante la etapa de la Web 2.0, que amplió el ancho de banda, permitiendo conexiones más potentes y asequibles a Internet." },
  { term: "UTC", definition: "Coordinated Universal Time. Utilizado en el estándar Date and Time Formats de W3C, que se basa en ISO 8601." },
  { term: "UTR", definition: "Unicode Technical Reports. Informes técnicos y estándares publicados por el Consorcio Unicode." },
  { term: "W3C", definition: "World Wide Web Consortium. Asociación internacional de empresas cuya misión es guiar la Web hacia su máximo potencial a través del desarrollo de protocolos y pautas. Publica recomendaciones para URL, HTTP, HTML, XHTML, CSS, SOAP, XML, UDDI, y WSDL." },
  { term: "WEB", definition: "World Wide Web. Un sistema basado en hipertextos desarrollado en 1989 por Tim Berners-Lee y Robert Cailiau." },
  { term: "WSDL", definition: "Web Services Description Language. Estándar utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA) y los servicios web, recomendado por el W3C." },
  { term: "XHTML", definition: "Extensible HyperText Markup Language. Estándar de lenguaje web publicado por el W3C." },
  { term: "XML", definition: "Extensible Markup Language. Lenguaje de marcado utilizado para las Aplicaciones Interactivas de Internet Enriquecidas (RIA) y los servicios web, recomendado por el W3C." },
];

export const tasks = [
  {
    id: 1,
    title: "Glosario",
    category: "Notas y Apuntes",
    date: "2025-07-18",
    description: "Creación de un glosario de términos técnicos relacionados con el desarrollo web. Este documento incluye definiciones clave y conceptos fundamentales para consulta rápida.",
    links: [], // No hay enlaces, ya que la funcionalidad es interactiva
    glosarioData: glosarioData // NUEVA PROPIEDAD: Los datos del glosario
  },
  {
    id: 2,
    title: "Página Web - Hoja de Vida",
    category: "Proyectos React",
    date: "2025-07-27",
    description: "Desarrollo de una página web personal para mostrar mi hoja de vida profesional. Incluye secciones de experiencia laboral, educación, habilidades y proyectos destacados.",
    links: [
      { name: "Ver en GitHub", url: "https://github.com/Aljulio/curriculum-vitae-react" },
      { name: "Ver Hoja de vida", url: "https://aljulio.github.io/curriculum-vitae-react/" }
    ]
  },
  {
    id: 3,
    title: "Formulario e Informe",
    category: ["Proyectos React", "Notas y Apuntes"],
    date: "2025-08-01",
    description: "Elaboracion de un formulario para recolectar datos e investigacion de los elementos utilizados para formularios en HTML y sobre CSS, frameworks de estilo, media querys.",
    links: [
      { name: "Ver Proyecto", url: "https://aljulio.github.io/Formulario-/" },
      { name: "Ver en GitHub", url: "https://github.com/Aljulio/Formulario-" },
      { name: "Ver en GitHub 2", url: "https://github.com/Aljulio/Formulario-Server-Firebase" },
      { name: "Ver Investigacion", url: "https://drive.google.com/file/d/14gNim5x2NbNOkUUZIg8mfOeyQFMCnNd6/view?usp=sharing" },
    ]
  },
  {
    id: 4,
    title: "Validación de formularios JS",
    category: "Todos",
    date: "2025-08-01",
    description: "Implementación de validación de formularios del lado del cliente usando JavaScript puro.",
    links: [
      { name: "Ver Código", url: "https://github.com/tu-usuario/validacion-js" }
    ]
  },
  {
    id: 5,
    title: "Consumo de API REST con Fetch",
    category: "Proyectos React",
    date: "2025-08-05",
    description: "Ejemplo de cómo consumir datos de una API REST pública usando la API Fetch en React.",
    links: [
      { name: "Ver Proyecto", url: "https://github.com/tu-usuario/api-fetch-react" }
    ]
  }
];
