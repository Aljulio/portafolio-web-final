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

const investigacionData = [
  {
    title: "Introducción",
    content: `
El presente informe tiene como objetivo principal proporcionar una guía exhaustiva y detallada sobre los componentes fundamentales del desarrollo web front-end, centrándose específicamente en los elementos de formulario HTML, los principios esenciales de CSS, la aplicación estratégica de los frameworks de estilo y la implementación del diseño responsivo mediante Media Queries.

Los formularios web constituyen una de las interfaces más críticas para la interacción entre el usuario y una aplicación o sitio web. Permiten la recopilación de información vital, facilitan procesos como la autenticación de usuarios, la realización de transacciones comerciales en línea y la recolección de retroalimentación. La correcta concepción e implementación de un formulario es, por tanto, un factor determinante para la usabilidad general y la experiencia del usuario. Un formulario bien diseñado no solo simplifica el proceso de entrada de datos para el usuario, sino que también ofrece una guía clara, valida la información en tiempo real y, fundamentalmente, garantiza la accesibilidad para todos los usuarios, incluyendo aquellos con diversas capacidades.
    `,
  },
  {
    title: "El Rol Crucial del Estilo y el Diseño Responsivo",
    content: `
Más allá de la mera funcionalidad de la recopilación de datos, la estética y la capacidad de adaptación de una interfaz son elementos indispensables en el desarrollo web moderno. CSS (Cascading Style Sheets) es el lenguaje que permite transformar la estructura básica proporcionada por HTML en interfaces visualmente atractivas, coherentes y profesionalmente presentadas. Complementariamente, el diseño responsivo, una práctica esencial habilitada principalmente por las Media Queries, asegura que la experiencia del usuario sea óptima y consistente en una amplia gama de dispositivos. Esto incluye desde pequeños teléfonos móviles hasta grandes monitores de escritorio, adaptando dinámicamente el diseño y la disposición de los elementos a las características específicas del viewport del dispositivo. La sinergia entre HTML, CSS y las Media Queries es lo que permite crear experiencias web verdaderamente universales y de alta calidad.
    `,
  },
  {
    title: "Elementos Fundamentales de Formularios HTML",
    content: `
Los formularios HTML son componentes esenciales para la interacción del usuario en la web, permitiendo la recopilación de información. La correcta elección y configuración de sus elementos son cruciales para la usabilidad y la accesibilidad.
<br><br>
 El Elemento input: Versatilidad en la Recopilación de Datos
El elemento input se distingue por su extraordinaria versatilidad en la recopilación de datos del usuario, con su comportamiento y apariencia definidos principalmente por el atributo type.
<br><br>
 Exploración de los Tipos de Input
HTML ofrece una amplia gama de tipos de input diseñados para satisfacer diversas necesidades de entrada de datos, lo que permite a los navegadores proporcionar interfaces de usuario optimizadas y validación nativa, esta diversidad de tipos no es meramente una lista de opciones; representa una herramienta fundamental para mejorar la usabilidad y la validación de datos directamente desde el navegador. La especificación de un tipo como email o number activa comportamientos específicos del navegador, como la visualización de teclados optimizados en dispositivos móviles o la aplicación de validaciones de formato básicas sin necesidad de JavaScript. Esto reduce la carga de trabajo del desarrollador para implementar validaciones comunes y mejora la experiencia del usuario al guiarlo hacia el formato de entrada esperado. La implicación es que el uso semántico de los tipos de input es una práctica recomendada que va más allá de la simple recolección de datos, impactando directamente en la calidad de los datos y la facilidad de uso.
<br><br>
Entre los tipos más comunes se encuentran:
<ul>
<li><b>text</b>: Ideal para cadenas de texto cortas de una sola línea.</li>
<li><b>password</b>: Utilizado para contraseñas, ocultando el texto ingresado por seguridad.</li>
<li><b>email</b>: Diseñado para direcciones de correo electrónico, ofreciendo validación de formato básica y un teclado optimizado en dispositivos móviles.</li>
<li><b>number</b>: Para valores numéricos, a menudo incluye controles de incremento/decremento y un teclado numérico en móviles.</li>
<li><b>tel</b>: Específico para números de teléfono.</li>
<li><b>url</b>: Para URLs, con validación de formato.</li>
<li><b>search</b>: Destinado a campos de búsqueda.</li>
<li><b>checkbox</b>: Permite selecciones de verdadero/falso o múltiples opciones en un grupo.</li>
<li><b>radio</b>: Para seleccionar una única opción de un grupo predefinido.</li>
<li><b>date, time, datetime-local, month, week</b>: Facilitan la selección de fechas y horas, a menudo con selectores de calendario nativos.</li>
<li><b>color</b>: Permite la selección de un color, mostrando un selector de color.</li>
<li><b>file</b>: Para cargar archivos desde el dispositivo del usuario.</li>
<li><b>range</b>: Implementa un control deslizante para seleccionar un valor dentro de un rango.</li>
<li><b>submit</b>: Un botón que, al ser activado, envía el formulario.</li>
<li><b>button</b>: Un botón genérico sin un comportamiento predeterminado de envío.</li>
<li><b>hidden</b>: Utilizado para datos que deben enviarse con el formulario, pero no son visibles para el usuario.</li>
</ul>
<br>
Atributos Comunes y su Impacto en la Usabilidad y Validación
Los atributos son fundamentales para controlar el comportamiento, la apariencia y la interactividad de los elementos input. La combinación de los atributos id en input y for en label es crítica para la accesibilidad, no solo una convención de codificación. Los lectores de pantalla utilizan esta asociación explícita para vocalizar el propósito de un campo de formulario a los usuarios con discapacidad visual. Sin un <label> correctamente asociado, un campo de input carece de contexto semántico para estas tecnologías. El placeholder es un indicio visual, pero no proporciona la misma información semántica a los lectores de pantalla. Esto subraya que la estructura HTML tiene implicaciones directas en la accesibilidad y que un diseño verdaderamente "bueno" es inclusivo por defecto.
<br><br>
Entre los atributos más relevantes se incluyen:
<ul>
<li><b>id</b>: Un identificador único que permite asociar el input con un elemento <label> y manipularlo con JavaScript.</li>
<li><b>name</b>: Define el nombre del campo de datos que se enviará al servidor junto con su valor cuando el formulario sea enviado.</li>
<li><b>placeholder</b>: Proporciona un texto de sugerencia que aparece en el campo antes de que el usuario ingrese cualquier dato.</li>
<li><b>value</b>: Representa el valor inicial o el valor actual del campo.</li>
<li><b>minlength, maxlength</b>: Establecen la longitud mínima y máxima de caracteres permitidos para la entrada del usuario.</li>
<li><b>required</b>: Un atributo booleano que indica que el campo debe ser llenado obligatoriamente antes de que el formulario pueda ser enviado.</li>
<li><b>readonly</b>: Hace que el campo sea de solo lectura, lo que significa que el usuario no puede modificar su valor, pero este valor sí se envía con el formulario.</li>
<li><b>disabled</b>: Deshabilita el campo por completo, impidiendo la interacción del usuario y excluyendo su valor del envío del formulario.</li>
<li><b>autocomplete</b>: Sugiere al navegador si debe ofrecer opciones de autocompletado basadas en entradas previas del usuario.</li>
<li><b>list</b>: Asocia el input con un elemento <datalist>, proporcionando sugerencias predefinidas al usuario.</li>
<li><b>pattern</b>: Permite especificar una expresión regular para validar el formato de la entrada del usuario.</li>
<li><b>size</b>: Define el ancho visible del campo en términos de caracteres.</li>
<li><b>autofocus</b>: Un atributo booleano que otorga automáticamente el foco al campo cuando la página carga.</li>
<li><b>spellcheck</b>: Controla si el campo está sujeto a revisión ortográfica y gramatical por parte del navegador.</li>
</ul>
<br>
Los atributos de validación HTML5 como minlength, maxlength, required y pattern establecen una base de validación del lado del cliente que es independiente de JavaScript. Esto permite que los formularios sean funcionales y ofrezcan una validación básica incluso si JavaScript está deshabilitado o falla. Aunque la validación del lado del servidor es indispensable para la seguridad y la integridad de los datos, la validación HTML5 proporciona una primera capa de retroalimentación instantánea al usuario, mejorando la experiencia y reduciendo la necesidad de un viaje de ida y vuelta al servidor para errores simples. Esta es una aplicación práctica del principio de "mejora progresiva" en el desarrollo web, donde la funcionalidad básica se asegura incluso en entornos limitados, y se mejora con capas adicionales de tecnología.
    `,
  },
  {
    title: "El Elemento <textarea>: Entradas de Texto Multilínea",
    content: `
El elemento textarea está diseñado específicamente para permitir a los usuarios introducir grandes cantidades de texto de forma libre, como comentarios, mensajes largos o descripciones detalladas.
<br><br>
Función y Casos de Uso Típicos
A diferencia del input type="text", que está limitado a una sola línea de texto, el textarea es ideal cuando se necesita un campo de entrada que pueda abarcar múltiples líneas. Sus casos de uso comunes incluyen campos para comentarios en blogs, formularios de retroalimentación, áreas para escribir reseñas o editores de texto simples dentro de una aplicación web.
<br><br>
Atributos Específicos para Control de Tamaño y Comportamiento
El textarea posee atributos específicos para controlar su tamaño y cómo maneja el texto, además de compartir muchos atributos comunes con input:
<ul>
<li><b>rows</b>: Define la altura visible del control en un número específico de líneas de texto.</li>
<li><b>cols</b>: Define el ancho visible del control en un número promedio de caracteres.</li>
<li><b>wrap</b>: Controla cómo el texto se ajusta dentro del área de texto para el envío del formulario. Los valores posibles son hard (inserta saltos de línea basados en cols), soft (asegura pares CR+LF, sin saltos de línea adicionales) y off (no estándar, similar a soft pero previene el ajuste de línea y habilita el desplazamiento horizontal).</li>
<li><b>spellcheck</b>: Indica si el campo debe estar sujeto a revisión ortográfica y gramatical, con valores true, default o false.</li>
</ul>
<br>
Además de estos, comparte atributos con input como id, name, placeholder, autofocus, disabled, readonly, required y autocomplete. La duplicidad de atributos como autocomplete, autofocus, disabled, placeholder, readonly y required entre input> y textarea es un patrón de diseño intencional en HTML. Esta consistencia simplifica el aprendizaje para los desarrolladores, ya que el comportamiento de estos atributos es predecible en diferentes tipos de controles de formulario. Para los usuarios, significa una experiencia de formulario más coherente, donde las reglas de validación y las interacciones son uniformes, independientemente de si están escribiendo una línea o un párrafo. Esto refuerza la idea de que HTML busca proporcionar un conjunto de herramientas unificadas para la construcción de formularios.
    `,
  },
  {
    title: "El Elemento <select>: Menús Desplegables y Listas de Opciones",
    content: `
El elemento select proporciona un control fundamental para presentar un menú de opciones, permitiendo al usuario elegir una o varias de ellas de una lista predefinida.
<br><br>
Estructura y Relación con option y optgroup
La funcionalidad del select se basa en su relación con otros elementos anidados:
<ul>
<li><b>option</b>: Cada opción individual dentro de un menú select se define mediante un elemento option anidado. El atributo value de option contiene el dato que se enviará al servidor cuando esa opción sea seleccionada. Si este atributo se omite, el valor predeterminado será el contenido de texto visible del option. Para establecer una opción como predeterminada al cargar la página, se utiliza el atributo selected en el option correspondiente; si no se especifica, la primera opción de la lista será la seleccionada por defecto.</li>
<li><b>optgroup</b>: Los elementos optgroup permiten agrupar visualmente opciones relacionadas dentro del menú desplegable. Esta agrupación mejora la organización y la usabilidad, especialmente en listas extensas, al categorizar las opciones de manera lógica.</li>
</ul>
<br>
Atributos para Control de Selección y Apariencia
El elemento select cuenta con atributos específicos que controlan su comportamiento de selección y su presentación:
<ul>
<li><b>multiple</b>: Este atributo booleano permite la selección de múltiples opciones en la lista. Cuando se especifica, la mayoría de los navegadores representan el select como una lista desplazable en lugar de un menú desplegable de una sola línea. Las opciones múltiples seleccionadas se envían al servidor utilizando la convención de array URLSearchParams.</li>
<li><b>size</b>:Si el control se presenta como una lista desplazable, este atributo define el número de filas visibles a la vez.</li>
<li><b>required</b>: Un atributo booleano que indica que el usuario debe seleccionar una opción con un valor no vacío antes de enviar el formulario.</li>
</ul>
<br>
Además, el select comparte atributos comunes con otros elementos de formulario, como id, name, autofocus, disabled, form y autocomplete. La capacidad de un select> para ser presentado como una lista desplazable (size, multiple) o un menú desplegable tradicional permite adaptar la interfaz a la complejidad de la elección del usuario. Para listas cortas o donde solo se permite una selección, un menú desplegable es compacto y eficiente. Sin embargo, para listas largas o cuando se requiere selección múltiple, una lista desplazable mejora la visibilidad de las opciones y la facilidad de interacción, reduciendo la necesidad de múltiples clics para ver todas las opciones disponibles. Esta flexibilidad en la presentación es clave para una experiencia de usuario optimizada en diferentes escenarios de formularios.
    `,
  },
  {
    title: "Fundamentos de CSS: Estilo y Presentación",
    content: `
CSS (Cascading Style Sheets) es un lenguaje declarativo fundamental para la apariencia y el diseño de las páginas web. Permite a los desarrolladores controlar aspectos visuales como la tipografía, los colores, el tamaño, el espaciado y la disposición de los elementos HTML.
<br><br>
Definición y Función de CSS
CSS define un conjunto de reglas de formato que el navegador aplica al renderizar una página HTML. Su función principal es separar la presentación del contenido, lo que facilita la gestión y el mantenimiento del estilo de un sitio web. Con CSS, se puede especificar el tipo de letra, el color de un párrafo, o incluso una imagen de fondo para toda la página.
<br><br>
Métodos de Aplicación de CSS en Documentos HTML
Existen tres métodos principales para aplicar CSS a un documento HTML, cada uno con sus propias ventajas y casos de uso:
<ul>
<li><b>Hojas de Estilo Externas</b>: Este es el método más recomendado y común. Implica un archivo .css separado que contiene todas las reglas de estilo. Se vincula al documento HTML mediante el elemento link dentro de la sección head.</li>
<li><b>Hojas de Estilo Internas</b>: Las reglas CSS se incrustan directamente en el documento HTML, dentro de un elemento style ubicado en la sección head. Aunque útil para estilos específicos de una sola página, es menos eficiente para sitios multipágina debido a la duplicación de código.</li>
<li><b>Estilos en Línea</b>: Las declaraciones CSS se aplican directamente a un elemento HTML utilizando el atributo style. Este método es generalmente considerado una mala práctica porque mezcla el contenido HTML con la presentación, dificultando la lectura y el mantenimiento del código.</li>
</ul>
<br>
Tipos de Selectores CSS
Los selectores son patrones utilizados para seleccionar los elementos HTML a los que se aplicarán las reglas de estilo. Los tipos fundamentales incluyen:
<ul>
<li><b>Selectores de Tipo</b>: Apuntan a elementos por su nombre de etiqueta.</li>
<li><b>Selectores de Clase</b>: Seleccionan elementos que tienen un atributo class específico.</li>
<li><b>Selectores de ID</b>: Seleccionan un único elemento con un atributo id único.</li>
<li><b>Selectores de Atributo</b>: Permiten seleccionar elementos basándose en la presencia o el valor de sus atributos.</li>
<li><b>Pseudo-clases y Pseudo-elementos</b>: Permiten estilizar elementos en estados específicos o partes específicas de un elemento.</li>
<li><b>Combinadores</b>: Se utilizan para combinar otros selectores, permitiendo seleccionar elementos basándose en su relación en el DOM.</li>
</ul>
<br>
Propiedades y Valores CSS Comunes
<ul>
<li><b>color</b>: Define el color del texto.</li>
<li><b>font-size</b>: Establece el tamaño de la fuente.</li>
<li><b>background-color</b>: Define el color de fondo de un elemento.</li>
<li><b>margin y padding</b>: Controlan el espacio exterior e interior de un elemento, respectivamente.</li>
<li><b>display</b>: Determina cómo se muestra un elemento en el diseño.</li>
<li><b>width y height</b>: Establecen las dimensiones de un elemento.</li>
</ul>
    `,
  },
  {
    title: "Frameworks de Estilo CSS",
    content: `
Los frameworks de estilo CSS son colecciones de archivos CSS (y a menudo JavaScript) preescritos que proporcionan componentes, utilidades y sistemas de cuadrícula listos para usar. Su objetivo es acelerar el proceso de desarrollo web, promover la consistencia del diseño y facilitar la creación de interfaces responsivas.
<br><br>
¿Qué son los Frameworks CSS?
Son conjuntos de herramientas y convenciones que ayudan a construir interfaces de usuario de manera más eficiente. Ofrecen soluciones predefinidas para elementos comunes como botones, formularios, barras de navegación, tipografía y sistemas de cuadrícula.
<br><br>
Beneficios Clave para el Desarrollo Web
El uso de frameworks CSS ofrece varias ventajas significativas:
<ul>
<li><b>Aceleración del Desarrollo</b>: Al proporcionar componentes y estilos pre-construidos, los frameworks reducen drásticamente el tiempo necesario para prototipar y desarrollar interfaces.</li>
<li><b>Consistencia del Diseño</b>: Ayudan a mantener una apariencia uniforme en todo un proyecto, ya que todos los desarrolladores utilizan los mismos estilos y componentes predefinidos.</li>
<li><b>Diseño Responsivo Integrado</b>: La mayoría de los frameworks modernos están construidos con un enfoque "mobile-first" e incluyen sistemas de cuadrícula y utilidades que facilitan la creación de diseños que se adaptan a diferentes tamaños de pantalla.</li>
<li><b>Mantenibilidad Mejorada</b>: Al estandarizar el código CSS, los frameworks pueden hacer que el código sea más fácil de entender y mantener para equipos de desarrollo.</li>
<li><b>Compatibilidad entre Navegadores</b>: Los frameworks suelen encargarse de las diferencias de renderizado entre navegadores, asegurando una experiencia consistente para el usuario.</li>
<li><b>Comunidad y Documentación</b>: Los frameworks populares cuentan con amplias comunidades y documentación detallada, lo que facilita encontrar soluciones a problemas y aprender a utilizarlos eficazmente.</li>
</ul>
<br>
Comparación de Frameworks Populares
La elección del framework CSS adecuado depende de las necesidades específicas del proyecto y las preferencias del desarrollador. A continuación, se comparan algunos de los frameworks más populares: Bootstrap, Tailwind CSS y Bulma.
<br><br>
1. Bootstrap
<ul>
<li><b>Enfoque</b>: Componente-basado, "mobile-first".</li>
<li><b>Características</b>: Biblioteca extensa de componentes pre-construidos (botones, formularios, navbars, modales), sistema de cuadrícula intuitivo, gran ecosistema, JavaScript integrado para interactividad, excelente documentación.</li>
<li><b>Ventajas</b>: Fácil para principiantes, prototipado rápido, diseño consistente, amplia comunidad y soporte, compatibilidad entre navegadores.</li>
<li><b>Desventajas</b>: Puede llevar a sitios web de aspecto genérico si no se personaliza significativamente, tamaño de archivo grande si no se optimiza, la anulación de estilos por defecto puede ser compleja.</li>
<li><b>Casos de Uso Típicos</b>: Ideal para principiantes, prototipado rápido, sitios corporativos y proyectos donde la consistencia y el tiempo de comercialización son críticos.</li>
</ul>
<br>
2. Tailwind CSS
<ul>
<li><b>Enfoque</b>: "Utility-first" (primero las utilidades).</li>
<li><b>Características</b>: Proporciona clases de utilidad de bajo nivel que se aplican directamente en el HTML para construir diseños personalizados, minimiza la necesidad de CSS personalizado, compilación Just-In-Time (JIT) para optimización del tamaño del archivo, CSS-only (no incluye JavaScript para componentes interactivos).</li>
<li><b>Ventajas</b>: Control granular y flexibilidad, rendimiento optimizado (archivos CSS más pequeños), reduce el cambio de contexto entre HTML y CSS, excelente para diseños responsivos y personalizados.</li>
<li><b>Desventajas</b>: Puede resultar en HTML "hinchado" con muchas clases de utilidad, curva de aprendizaje más pronunciada para principiantes, depuración desafiante en grandes bases de código, riesgo de archivos más grandes si las clases no utilizadas no se purgan correctamente.</li>
<li><b>Casos de Uso Típicos</b>: Proyectos que requieren alta personalización o branding específico, sitios con mucho contenido como blogs.</li>
</ul>
<br>
 3. Bulma
<ul>
<li><b>Enfoque</b>: Componente-basado, Flexbox-basado.</li>
<li><b>Características</b>: Construido completamente con Flexbox (100% responsivo), modular (permite importar solo los componentes necesarios), construido con Sass para personalización, biblioteca rica de componentes, CSS-only (no incluye JavaScript).</li>
<li><b>Ventajas</b>: Ligero y rápido, código CSS mínimo, fácil de usar, personalización sencilla con variables Sass, compatibilidad con cualquier framework JS.</li>
<li><b>Desventajas</b>: Al ser solo CSS, requiere que los desarrolladores manejen su propio JavaScript para la interactividad, carece de componentes interactivos incorporados.</li>
<li><b>Casos de Uso Típicos</b>: Proyectos simples y ligeros, ideal para principiantes que prefieren un framework centrado en CSS.</li>
</ul>
    `,
  },
  {
    title: "Diseño Responsivo con Media Queries",
    content: `
El diseño responsivo es una aproximación al diseño web que busca crear sitios que se adapten fluidamente a diferentes tamaños de pantalla y dispositivos, garantizando una experiencia de usuario consistente y óptima. Las Media Queries son una característica fundamental de CSS que permite aplicar estilos condicionalmente basándose en las características del dispositivo o el entorno del navegador.
<br><br>
¿Qué son las Media Queries y su Rol en el Diseño Responsivo?
Las Media Queries son reglas CSS que permiten aplicar un conjunto de estilos solo cuando el entorno del navegador y del dispositivo coincide con una condición específica. Son un componente clave del diseño web responsivo, ya que permiten crear diferentes diseños y presentaciones según el tamaño del viewport, la resolución, la orientación, y otras características del dispositivo. Por ejemplo, se puede mostrar un diseño de tres columnas en una pantalla ancha y una sola columna en una pantalla estrecha. Además de la adaptación del diseño, las Media Queries se utilizan para mejorar la accesibilidad, como aumentar el tamaño de la fuente para impresión o agrandar los botones para pantallas táctiles.
<br><br>
Sintaxis Básica y Componentes
La sintaxis básica de una Media Query es la siguiente:
<pre><code>@media media-type and (media-feature-rule) {
  /* Reglas CSS aquí */
}</code></pre>
Esta estructura se compone de:
<ul>
<li><b>Tipo de Medio (media-type)</b>: Indica para qué tipo de medio está destinado el código CSS (ej., screen para pantallas, print para impresión, all para todos los tipos). Si se omite, la Media Query se aplica por defecto a todos los tipos de medio.</li>
<li><b>Expresión de Medio (media-feature-rule)</b>: Una regla o prueba que debe cumplirse para que el CSS contenido se aplique.</li>
<li><b>Conjunto de Reglas CSS</b>: Las reglas de estilo que se aplicarán si la prueba de la expresión de medio pasa y el tipo de medio es correcta.</li>
</ul>
    `,
  },
  {
    title: "Conclusiones",
    content: `
La construcción de interfaces web modernas, robustas y accesibles requiere una comprensión profunda y una aplicación estratégica de los elementos de formulario HTML, los principios de CSS, los frameworks de estilo y las Media Queries. Cada uno de estos pilares desempeña un papel interconectado y fundamental en la creación de experiencias de usuario excepcionales. Los elementos de formulario HTML, como input, textarea y select, son la base de la interacción del usuario, permitiendo la recopilación de datos de diversas formas.
    `,
  },
];


export const tasks = [
  {
    id: 1,
    title: "Glosario",
    category: "Notas y Apuntes",
    date: "2025-07-18",
    description: "Creación de un glosario de términos técnicos relacionados con el desarrollo web. Este documento incluye definiciones clave y conceptos fundamentales para consulta rápida.",
    links: [],
    glosarioData: glosarioData
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
    ],
    investigacionData: investigacionData
  },
  {
    id: 4,
    title: "Diseño responsivo",
    category: "Proyectos React",
    date: "2025-08-11",
    description: "Elaboración de un diseño de página web que se adapta a diferentes tamaños de pantalla, implementando técnicas de diseño responsivo con HTML y CSS.",
    links: [
      { name: "Ver en GitHub", url: "https://github.com/Aljulio/Resposibo" },
      { name: "Ver Página", url: "https://aljulio.github.io/Resposibo/" }
    ]
  },
  {
    id: 5,
    title: "API",
    category: "Todos",
    date: "2025-08-22",
    description: "Desarrollar una API REST en TypeScript + Express que implemente CRUD y flujo básico de aprobación para Expedientes e Indicios.",
    links: [
      { name: "Ver Proyecto", url: "https://github.com/Aljulio/API-de-Gesti-n-de-Expedientes-e-Indicios.git" }
    ]
  },
  {
    id: 6,
    title: "Frontend del API",
    category: "Proyectos React",
    date: "2025-08-29",
    description: "Construir una SPA en React (Vite + TypeScript) para técnicos y coordinadores que permita autenticarse con JWT, gestionar Expedientes e Indicios, y realizar aprobación/rechazo según rol.",
    links: [
      { name: "Ver Proyecto", url: "https://github.com/Aljulio/frontend-expedientes" }
    ]
  }
];