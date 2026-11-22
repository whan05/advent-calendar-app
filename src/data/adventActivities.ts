import { AdventActivity } from '../types/advent';

/**
 * Las 24 cartas personalizadas del Calendario de Adviento.
 * Combina las tradiciones, películas, manualidades y recetas elegidas
 * con momentos cálidos diseñados para disfrutar diciembre sin prisas.
 */
export const ADVENT_ACTIVITIES: AdventActivity[] = [
  {
    day: 1,
    title: 'Enciende la primera luz de diciembre',
    category: 'Calidez',
    greeting: 'Bienvenido sea diciembre,',
    description:
      'Hoy arranca nuestra cuenta regresiva más bonita del año. Antes de que el mes se llene de planes y carreras, regálate un instante pausado para encender una vela o las luces navideñas, poner música suave y darle la bienvenida a 24 días pensados para crear recuerdos inolvidables.',
    dailyChallenge:
      'Enciende las primeras luces o una vela aromática al caer la tarde y comparte en voz alta qué es lo que más te ilusiona de esta Navidad.',
    quote: 'La magia de diciembre comienza en el instante en que decides vivirlo con el corazón abierto.',
    estimatedTime: '15 min',
    accent: 'crimson',
    icon: 'flame',
  },
  {
    day: 2,
    title: 'Hacer coronas navideñas desde cero',
    category: 'Creatividad',
    greeting: 'Manos a la obra con corazón navideño,',
    description:
      'Nada le da tanta vida y personalidad a un hogar en diciembre como una corona hecha con tus propias manos. Hoy toca sacar ramas, listones, esferas, piñas, pegamento y toda tu imaginación para crear desde cero una corona única que dé la bienvenida a cada visita con calidez.',
    dailyChallenge:
      'Reúne tus materiales, pon villancicos de fondo y arma tu propia corona navideña desde cero para colgarla en la puerta o en tu rincón favorito.',
    quote: 'Lo que se construye con paciencia y cariño guarda un brillo que ninguna tienda puede vender.',
    estimatedTime: '1h 30m',
    accent: 'pine',
    icon: 'tree',
  },
  {
    day: 3,
    title: 'Noche de cine: El Grinch',
    category: 'Calidez',
    greeting: 'A preparar las palomitas,',
    description:
      'Comenzamos el ciclo de películas del adviento con un clásico que nos recuerda entre risas que la Navidad no viene envuelta en papel de regalo, sino en la unión y el cariño. Hoy el plan es acurrucarse, reírse con las ocurrencias de Villa Quién y dejar que el corazón crezca tres tallas.',
    dailyChallenge:
      'Prepara una manta suave, botana rica o chocolate caliente y disfruta “El Grinch” sin mirar el celular.',
    quote: 'Tal vez la Navidad no viene de una tienda… tal vez la Navidad significa un poquito más.',
    estimatedTime: '1h 45m',
    accent: 'gold',
    icon: 'film',
  },
  {
    day: 4,
    title: 'Una bebida caliente y música de invierno',
    category: 'Paz',
    greeting: 'Un respiro tibio entre la rutina,',
    description:
      'Entre el trabajo y los pendientes diarios, a veces olvidamos simplemente disfrutar el ambiente de la temporada. Hoy convierte quince minutos ordinarios en un pequeño refugio acogedor: una taza humeante entre tus manos y esa lista de canciones que hacen que todo se sienta en paz.',
    dailyChallenge:
      'Prepara tu té, café con canela o chocolate favorito, reproduce música navideña cálida y disfruta la bebida sin prisas.',
    quote: 'Bajar el ritmo también es una forma hermosa de celebrar la vida.',
    estimatedTime: '20 min',
    accent: 'cinnamon',
    icon: 'coffee',
  },
  {
    day: 5,
    title: 'Hornear algo navideño',
    category: 'Creatividad',
    greeting: 'Que la cocina huela a magia,',
    description:
      'El aroma a mantequilla, vainilla, canela y azúcar horneándose tiene el poder instantáneo de llenar la casa de alegría. Hoy el horno es protagonista: elige esa receta navideña que tanto se te antoja —galletas de jengibre, un panqué especiado o roles de canela— y disfruta el proceso tanto como el primer bocado.',
    dailyChallenge:
      'Ponte el delantal, hornea un postre navideño especial y compártelo todavía tibio con quienes estén cerca.',
    quote: 'Hornear es la manera más dulce de convertir ingredientes sencillos en recuerdos felices.',
    estimatedTime: '1h 30m',
    accent: 'crimson',
    icon: 'cookie',
  },
  {
    day: 6,
    title: 'Un mensaje que abrace a la distancia',
    category: 'Conexión',
    greeting: 'Porque recordar a alguien es un regalo,',
    description:
      'Siempre hay alguien querido en quien pensamos con cariño pero a quien la rutina nos impide escribirle tan seguido como quisiéramos. Hoy puedes sorprender a esa persona con un mensaje sincero que llegue sin motivo y le alegre por completo la semana.',
    dailyChallenge:
      'Envía una nota de voz o un mensaje lleno de cariño a alguien especial, diciéndole algo bonito que agradeces de su presencia en tu vida.',
    quote: 'Nunca subestimes cuánto puede abrigar un “me acordé de ti y deseo que estés muy bien”.',
    estimatedTime: '10 min',
    accent: 'pine',
    icon: 'mail',
  },
  {
    day: 7,
    title: 'Noche de cine: Love Hard',
    category: 'Calidez',
    greeting: 'Comedia, risas y chispa navideña,',
    description:
      'Para nuestra segunda noche de cine del adviento toca una historia ligera, divertida y llena de enredos románticos con sabor a diciembre. “Love Hard” es perfecta para soltar el estrés de la semana, reírte con ganas y recordar que la autenticidad siempre conquista el corazón.',
    dailyChallenge:
      'Atenúa las luces, prepara algo rico para picar y disfruta “Love Hard” en modo descanso total.',
    quote: 'Las mejores historias —como las mejores personas— brillan cuando se muestran tal y como son.',
    estimatedTime: '1h 45m',
    accent: 'crimson',
    icon: 'film',
  },
  {
    day: 8,
    title: 'Caminata para mirar las luces',
    category: 'Paz',
    greeting: 'Sal a descubrir los destellos,',
    description:
      'En diciembre las calles se visten distinto al caer la tarde: ventanas iluminadas, árboles brillando y el aire fresco invitando a abrigarse bien. Regálate un paseo tranquilo mirando alrededor con asombro, dejando que la mente se despeje.',
    dailyChallenge:
      'Sal a dar una caminata al anochecer para admirar las luces y decoraciones navideñas de tu ciudad o barrio.',
    quote: 'A veces solo hace falta levantar la mirada para recordar cuánta belleza sigue brillando.',
    estimatedTime: '30 min',
    accent: 'gold',
    icon: 'star',
  },
  {
    day: 9,
    title: 'Fotos navideñas en familia',
    category: 'Conexión',
    greeting: '¡Sonrisas que se guardan para siempre!',
    description:
      'Los años pasan rápido, pero las fotografías tienen la magia de congelar las risas, los abrazos y el cariño de cada diciembre. Hoy toca ponerse suéteres acogedores, pijamas a juego o ese detalle festivo, armar un rinconcito bonito con luces y capturar recuerdos que en el futuro nos sacarán lágrimas de felicidad.',
    dailyChallenge:
      'Organiza una sesión divertida de fotos navideñas en familia (incluyendo fotos espontáneas y chistosas) y elige tu favorita para enmarcar o compartir.',
    quote: 'El mejor adorno de cualquier Navidad siempre será la sonrisa de las personas que amamos.',
    estimatedTime: '45 min',
    accent: 'pine',
    icon: 'camera',
  },
  {
    day: 10,
    title: 'Hacer rompope desde cero y tomarlo con calidez',
    category: 'Calidez',
    greeting: 'Tradición cocinada a fuego lento,',
    description:
      'Estamos en la segunda semana de diciembre y nada abraza el alma como preparar rompope artesanal desde cero. Remover despacio la leche con canela, vainilla y especias mientras el aroma llena la cocina es un ritual hermoso que se disfruta todavía más al servirlo en vasitos y brindar con calma.',
    dailyChallenge:
      'Prepara rompope casero desde cero siguiendo la receta con paciencia, sírvelo con una pizca de canela y disfrútalo en un momento acogedor.',
    quote: 'Las cosas más ricas de la vida —como el rompope y los buenos momentos— se preparan a fuego lento.',
    estimatedTime: '1h 15m',
    accent: 'cinnamon',
    icon: 'coffee',
  },
  {
    day: 11,
    title: 'Un gesto amable en secreto',
    category: 'Generosidad',
    greeting: 'Magia silenciosa de diciembre,',
    description:
      'Hay una alegría muy especial en alegrarle el día a alguien sin esperar aplausos ni explicaciones. Un café pagado por sorpresa, una nota bonita escondida en un bolso o ayudar sin que te lo pidan multiplican el espíritu navideño de forma invisible pero poderosa.',
    dailyChallenge:
      'Realiza hoy un pequeño acto de bondad inesperado por alguien en casa, el trabajo o la calle, solo por el gusto de regalar una sonrisa.',
    quote: 'La bondad silenciosa es el idioma favorito de la Navidad.',
    estimatedTime: '15 min',
    accent: 'gold',
    icon: 'sparkles',
  },
  {
    day: 12,
    title: 'Noche de cine: Forrest Gump',
    category: 'Gratitud',
    greeting: 'Una historia para el alma,',
    description:
      'Nuestra tercera noche de cine es una obra maestra que conmueve cada vez que se ve. “Forrest Gump” nos recuerda el valor de la inocencia, la lealtad, el amor incondicional y la belleza de seguir caminando con buen corazón pase lo que pase en la vida.',
    dailyChallenge:
      'Ponte súper cómodo, ten pañuelos a la mano por si se escapa una lágrima bonita y disfruta “Forrest Gump” de principio a fin.',
    quote: 'La vida es como una caja de chocolates: cada capítulo trae una sorpresa que nos transforma.',
    estimatedTime: '2h 20m',
    accent: 'pine',
    icon: 'film',
  },
  {
    day: 13,
    title: 'Libera espacio y comparte abrigo',
    category: 'Generosidad',
    greeting: 'Dar también aligera el corazón,',
    description:
      'Antes de cerrar el año, revisar lo que tenemos con gratitud nos ayuda a notar cuántas prendas, libros o detalles en buen estado pueden traer muchísima alegría a otra persona. Compartir lo que ya cumplió su ciclo contigo abre espacio para nuevas bendiciones.',
    dailyChallenge:
      'Elige al menos tres prendas abrigadoras, libros o juguetes en excelente estado y prepáralos para donarlos esta semana.',
    quote: 'Cuando abres tus manos para compartir, el invierno se vuelve más tibio para alguien más.',
    estimatedTime: '25 min',
    accent: 'crimson',
    icon: 'gift',
  },
  {
    day: 14,
    title: 'Escribir una carta para el año que pasó',
    category: 'Gratitud',
    greeting: 'Gracias por todo lo vivido,',
    description:
      'Cada año trae días luminosos, retos que nos hicieron más fuertes, personas que llegaron para quedarse y aprendizajes que hoy entendemos mejor. Hoy date un momento íntimo y sincero para escribirle una carta a este año que se despide: agradécele lo bueno, abraza lo difícil y celebra haber llegado hasta aquí.',
    dailyChallenge:
      'Toma papel y pluma, pon música tranquila y escribe una carta honesta de agradecimiento y despedida al año que pasó.',
    quote: 'Mirar atrás con gratitud convierte cada experiencia en sabiduría y paz.',
    estimatedTime: '30 min',
    accent: 'cinnamon',
    icon: 'pen',
  },
  {
    day: 15,
    title: 'Pausa de lectura y calma invernal',
    category: 'Paz',
    greeting: 'Un refugio entre páginas,',
    description:
      'A mitad de diciembre el mundo suele acelerarse, pero tú puedes elegir hacer una pausa deliberada. Regálale a tu mente veinte minutos de silencio suave, una luz cálida y un buen libro, revista o cuento que te transporte lejos de las prisas.',
    dailyChallenge:
      'Desconéctate de notificaciones por 20 minutos y dedícalos a leer algo que disfrutes profundamente.',
    quote: 'Un momento de quietud es el mejor regalo que puedes darte en medio del ruido.',
    estimatedTime: '20 min',
    accent: 'pine',
    icon: 'book',
  },
  {
    day: 16,
    title: 'Noche de estreno: Give Me Some Sugah',
    category: 'Calidez',
    greeting: '¡Llegó el día del gran estreno!',
    description:
      'Hoy es 16 de diciembre y la espera terminó: toca disfrutar el estreno de “Give Me Some Sugah”. Hay algo muy especial en apartar la noche para ver una película recién salida, preparar tu snack favorito y vivir la emoción de descubrir una historia nueva en pleno corazón del adviento.',
    dailyChallenge:
      'Arma tu sala de cine en casa con luces tenues, algo dulce y rico para acompañar, y celebra el estreno viendo “Give Me Some Sugah”.',
    quote: 'Guardar ilusión por las pequeñas citas del calendario llena de brillo los días ordinarios.',
    estimatedTime: '1h 45m',
    accent: 'gold',
    icon: 'film',
  },
  {
    day: 17,
    title: 'Escribir una carta sobre el año que queremos',
    category: 'Gratitud',
    greeting: 'Soñando con intención y esperanza,',
    description:
      'Ahora que ya te despediste con cariño del año que pasa, hoy toca abrir las ventanas al futuro. Imagina cómo quieres sentirte el próximo año: qué sueños deseas perseguir, qué hábitos te harán bien, qué lugares quieres conocer y qué tipo de amor y paz quieres cultivar.',
    dailyChallenge:
      'Escribe una carta describiendo el año que deseas vivir, como si ya estuviera floreciendo, y guárdala en un sobre especial para abrirla el próximo diciembre.',
    quote: 'El futuro comienza a tomar forma en el instante en que te atreves a escribirlo con esperanza.',
    estimatedTime: '30 min',
    accent: 'crimson',
    icon: 'mail',
  },
  {
    day: 18,
    title: 'Crear nuestro Vision Board',
    category: 'Creatividad',
    greeting: 'Dando forma visual a los sueños,',
    description:
      'Después de escribir sobre el año que deseas, hoy toca darle color, imágenes y vida. Crear un Vision Board es un ejercicio poderoso y divertidísimo: recortar, elegir fotos, frases y metas que te inspiren hace que tus sueños se sientan cercanos y reales cada vez que los mires.',
    dailyChallenge:
      'Reúne revistas, imágenes impresas o crea tu tablero digital/físico y diseña un Vision Board lleno de metas, lugares, emociones y sueños para el nuevo año.',
    quote: 'Cuando puedes ver tus sueños con claridad, cada paso del camino cobra un nuevo sentido.',
    estimatedTime: '1h 30m',
    accent: 'cinnamon',
    icon: 'palette',
  },
  {
    day: 19,
    title: 'Una llamada para escuchar de verdad',
    category: 'Conexión',
    greeting: 'Regalar presencia plena,',
    description:
      'Escuchar sin prisas y con atención genuina es uno de los gestos más amorosos que existen. Hoy llama a un familiar o amigo querido simplemente para preguntarle cómo está su corazón, reír un rato y hacerle sentir lo importante que es para ti.',
    dailyChallenge:
      'Haz una llamada o videollamada a alguien especial y regálale tu atención completa durante la charla.',
    quote: 'Escuchar con el corazón abierto es una de las formas más puras de querer.',
    estimatedTime: '20 min',
    accent: 'pine',
    icon: 'bell',
  },
  {
    day: 20,
    title: 'Noche de cine: Klaus',
    category: 'Generosidad',
    greeting: 'Un verdadero acto de bondad siempre inspira otro,',
    description:
      'Cerramos nuestras noches de película con una de las historias navideñas más hermosas y emotivas jamás hechas. “Klaus” es pura calidez visual y emocional: un recordatorio luminoso de cómo la amistad y la generosidad pueden transformar incluso el lugar más frío en un hogar lleno de luz.',
    dailyChallenge:
      'Prepara una bebida calientita (¡o un vasito de rompope!), enciende las luces del árbol y disfruta la magia de “Klaus”.',
    quote: 'Un verdadero acto de bondad siempre despierta otro.',
    estimatedTime: '1h 40m',
    accent: 'gold',
    icon: 'film',
  },
  {
    day: 21,
    title: 'Hornear quequitos navideños para regalar',
    category: 'Generosidad',
    greeting: 'Dulzura envuelta con cariño,',
    description:
      'A solo días de Navidad, no hay detalle más tierno y memorable que un obsequio hecho en tu propia cocina. Hoy hornearemos quequitos navideños llenos de aroma y sabor, decorados con amor y listos para convertirse en pequeños regalos que sacarán enormes sonrisas.',
    dailyChallenge:
      'Hornea y decora una tanda de quequitos navideños, empácalos con listones o tarjetitas escritas a mano y prepáralos para regalar.',
    quote: 'Regalar algo hecho con tus manos es entregar un pedacito de tu tiempo y tu cariño.',
    estimatedTime: '1h 45m',
    accent: 'crimson',
    icon: 'cookie',
  },
  {
    day: 22,
    title: 'Compartir recuerdos y tradiciones favoritas',
    category: 'Conexión',
    greeting: 'Historias alrededor del corazón,',
    description:
      'Cada familia y cada persona guarda anécdotas navideñas que siempre provocan risas o nostalgia bonita. Hoy tómate un rato para conversar y revivir esas historias que nos unen y mantienen vivos los momentos más especiales de otros diciembres.',
    dailyChallenge:
      'Comparte tu recuerdo navideño favorito de la infancia con alguien querido y pregúntale cuál es el suyo.',
    quote: 'Las historias que contamos juntos son el verdadero tesoro que pasa de una Navidad a otra.',
    estimatedTime: '20 min',
    accent: 'cinnamon',
    icon: 'heart',
  },
  {
    day: 23,
    title: 'Rellenar las botas de Navidad',
    category: 'Generosidad',
    greeting: 'La emoción de la víspera,',
    description:
      '¡Mañana es Nochebuena y la ilusión está en el aire! Hoy es el momento mágico de rellenar las botas de Navidad con dulces, detallitos sorpresa, notas bonitas y pequeños tesoros pensados especialmente para cada persona. Cada cosa que pongas dentro guarda una sonrisa esperando ser descubierta.',
    dailyChallenge:
      'Prepara y rellena las botas de Navidad con dulces, pequeños obsequios y una notita personalizada de cariño en cada una.',
    quote: 'Los detalles pequeños pensados con amor son los que más emocionan el corazón.',
    estimatedTime: '40 min',
    accent: 'pine',
    icon: 'gift',
  },
  {
    day: 24,
    title: 'Hamburguesas a la parrilla para cerrar el Adviento',
    category: 'Calidez',
    greeting: '¡Feliz Nochebuena y gran cierre!',
    description:
      'Llegamos al día 24 después de recorrer un adviento lleno de películas, risas, manualidades, cartas, sueños y dulzura. Hoy celebramos a lo grande y con el mejor sabor: encendiendo la parrilla para preparar unas hamburguesas deliciosas, disfrutando el aroma del fuego, la buena compañía y la alegría inmensa de estar juntos.',
    dailyChallenge:
      'Enciende la parrilla, prepara unas hamburguesas espectaculares con todos tus ingredientes favoritos y brinda por todo lo bonito vivido en estos 24 días.',
    quote: 'Que el fuego de la parrilla, las risas en la mesa y el amor de los tuyos hagan de esta Nochebuena un recuerdo inolvidable.',
    estimatedTime: 'Toda la tarde y noche',
    accent: 'gold',
    icon: 'utensils',
  },
];
