/* ==========================================================================
   Relicario — contenido
   Cada día tiene tres reliquias. En cada una:
     expresion  la expresión hecha; la palabra fósil va entre corchetes
                (si aparece dos veces, se marcan las dos: «Mirar de [hito] en [hito]»)
     pregunta   lo que se pregunta sobre ella
     opciones   tres respuestas; LA PRIMERA ES LA CORRECTA (el juego las baraja)
     reliquia   la explicación que se revela al responder (1–2 frases)
   Para añadir un día, copia un bloque { reliquias: [...] } al final de «dias».
   ========================================================================== */
(function (raiz) {
  'use strict';

  var DATOS = {
    dias: [
      // Día 1
      { reliquias: [
        {
          expresion: 'Caer de [bruces]',
          pregunta: '¿Qué eran las «bruces»?',
          opciones: ['Los labios', 'Las rodillas', 'Las palmas de las manos'],
          reliquia: 'Viene del antiguo «buz», labio. Caer de bruces es caer de boca, dando con los labios en el suelo.'
        },
        {
          expresion: 'En un [santiamén]',
          pregunta: '¿De dónde sale «santiamén»?',
          opciones: ['Del final de una oración en latín', 'De un santo famoso por su rapidez', 'De una campanada corta'],
          reliquia: 'Es el «Spiritus Sancti, Amen» con que se remata la señal de la cruz, que se dice en un instante.'
        },
        {
          expresion: 'Sin [ton] ni son',
          pregunta: '¿Qué es el «ton»?',
          opciones: ['Tono', 'Tonel', 'Tonto'],
          reliquia: 'Es un apócope de «tono». Sin tono ni sonido quiere decir sin razón ni concierto.'
        }
      ] },

      // Día 2
      { reliquias: [
        {
          expresion: 'A [mansalva]',
          pregunta: '¿Qué era la «salva»?',
          opciones: ['Estar a salvo, sin riesgo', 'Un disparo de cortesía', 'Una bandeja de plata'],
          reliquia: 'De «a mano salva»: obrar sin peligro para uno mismo. Con el tiempo pasó a significar «en abundancia».'
        },
        {
          expresion: 'A la [postre]',
          pregunta: '¿Qué significaba «postre»?',
          opciones: ['Lo último', 'El dulce de la comida', 'La puerta trasera'],
          reliquia: '«Postre» quería decir «último», como «postrero». El dulce se llama así porque llega al final.'
        },
        {
          expresion: 'Mirar de [hito] en [hito]',
          pregunta: '¿Qué era el «hito»?',
          opciones: ['El blanco al que se apuntaba en un juego', 'Una mirada desafiante', 'Un cuento popular'],
          reliquia: 'En el juego del hito se tiraba a un clavo o blanco fijo. Mirar de hito en hito es mirar fijamente, como apuntando.'
        }
      ] },

      // Día 3
      { reliquias: [
        {
          expresion: 'Lanza en [ristre]',
          pregunta: '¿Qué era el «ristre»?',
          opciones: ['Un hierro de la armadura donde se apoyaba la lanza', 'Una ristra de ajos', 'El galope del caballo'],
          reliquia: 'El ristre iba fijado al peto. Con la lanza en ristre, el caballero estaba listo para embestir.'
        },
        {
          expresion: 'Creer a pie [juntillas]',
          pregunta: '¿Qué son las «juntillas»?',
          opciones: ['Los pies bien juntos', 'Unas sandalias de esparto', 'Las juntas de las baldosas'],
          reliquia: 'Estar con los pies juntos es estar firme. Creer a pie juntillas es creer sin dudar ni moverse.'
        },
        {
          expresion: 'De [pacotilla]',
          pregunta: '¿Qué era la «pacotilla»?',
          opciones: ['La carga que un marinero podía llevar por su cuenta', 'Una moneda de poco valor', 'Un juguete de trapo'],
          reliquia: 'Los marineros podían embarcar una pequeña mercancía propia sin pagar flete. Solía ser género barato.'
        }
      ] },

      // Día 4
      { reliquias: [
        {
          expresion: 'En [cuclillas]',
          pregunta: '¿De dónde viene «cuclillas»?',
          opciones: ['De la gallina clueca', 'Del cuco', 'De unas calzas de labrador'],
          reliquia: 'Antes se decía «en cluquillas», en la postura de la gallina clueca cuando incuba los huevos.'
        },
        {
          expresion: 'Sin [ambages]',
          pregunta: '¿Qué son los «ambages»?',
          opciones: ['Rodeos', 'Sobornos', 'Testigos'],
          reliquia: 'Del latín «ambages», rodeo o circunloquio. Hablar sin ambages es ir al grano.'
        },
        {
          expresion: 'A diestro y [siniestro]',
          pregunta: '¿Qué significa aquí «siniestro»?',
          opciones: ['Izquierdo', 'Funesto', 'Torcido'],
          reliquia: 'Diestro es derecho y siniestro, izquierdo. Repartir golpes a diestro y siniestro es darlos a un lado y a otro.'
        }
      ] },

      // Día 5
      { reliquias: [
        {
          expresion: 'El asunto de [marras]',
          pregunta: '¿Qué era «marras»?',
          opciones: ['Una palabra árabe que significa «una vez»', 'Unas piedras de molino', 'Un mal augurio'],
          reliquia: 'Viene del árabe hispánico «márra», una vez. Lo de marras es aquello de lo que ya se habló.'
        },
        {
          expresion: 'Defender a [ultranza]',
          pregunta: '¿Qué es la «ultranza»?',
          opciones: ['El extremo, hasta el final', 'Una ley de ultramar', 'Una lanza larga'],
          reliquia: 'Viene del francés «à outrance», luchar hasta el extremo, a muerte.'
        },
        {
          expresion: 'A la [sazón]',
          pregunta: '¿Qué es la «sazón»?',
          opciones: ['El momento oportuno', 'El punto de sal', 'Un adorno del vestido'],
          reliquia: 'La sazón es el punto justo, como el de la fruta madura. A la sazón significa «en aquel momento».'
        }
      ] },

      // Día 6
      { reliquias: [
        {
          expresion: 'Hacer [mutis] por el foro',
          pregunta: '¿Qué era el «mutis»?',
          opciones: ['La voz del teatro para indicar que un actor sale de escena', 'Un mimo', 'Un telón pequeño'],
          reliquia: 'Se usaba en el teatro para retirar a un actor, y el foro es el fondo del escenario. Hoy significa irse sin decir nada.'
        },
        {
          expresion: 'A ojo de buen [cubero]',
          pregunta: '¿Quién era el «cubero»?',
          opciones: ['El que fabricaba cubas', 'El vigilante de la bodega', 'Un jugador de dados'],
          reliquia: 'Los cuberos calculaban a simple vista cuánto cabía en un tonel.'
        },
        {
          expresion: 'En [lontananza]',
          pregunta: '¿Qué es la «lontananza»?',
          opciones: ['La lejanía', 'Una nana marinera', 'Un barco de vela'],
          reliquia: 'Del italiano «lontananza». En pintura es lo más alejado del cuadro.'
        }
      ] },

      // Día 7
      { reliquias: [
        {
          expresion: 'A la [zaga]',
          pregunta: '¿Qué era la «zaga»?',
          opciones: ['La retaguardia', 'Una saga familiar', 'Una bota de vino'],
          reliquia: 'Del árabe hispánico: la parte trasera de un ejército. Quedarse a la zaga es quedarse atrás.'
        },
        {
          expresion: 'A [granel]',
          pregunta: '¿De dónde viene «granel»?',
          opciones: ['De «granero»', 'De una medida de peso', 'De un tipo de saco'],
          reliquia: 'Del catalán «graner», granero. El grano se vendía suelto, sin envasar.'
        },
        {
          expresion: 'En [jarras]',
          pregunta: '¿Por qué «jarras»?',
          opciones: ['Los brazos imitan las asas de una jarra', 'Por unas tinajas de vino', 'Por un baile popular'],
          reliquia: 'Con las manos en la cintura y los codos hacia fuera, el cuerpo parece una jarra con dos asas.'
        }
      ] },

      // Día 8
      { reliquias: [
        {
          expresion: 'A [tenor] de',
          pregunta: '¿Qué es el «tenor»?',
          opciones: ['El contenido literal de un escrito', 'La voz del cantante', 'El tono de una conversación'],
          reliquia: 'Del latín «tenor», la letra y el sentido de un documento. A tenor de algo es según lo que dice.'
        },
        {
          expresion: 'A [fuer] de',
          pregunta: '¿Qué es el «fuer»?',
          opciones: ['Fuero, ley', 'Fuerza', 'Fuera'],
          reliquia: 'Es un apócope de «fuero». «A fuer de caballero» significa «según la ley del caballero», como corresponde a uno.'
        },
        {
          expresion: 'A [regañadientes]',
          pregunta: '¿Qué significaba en origen «regañar»?',
          opciones: ['Gruñir enseñando los dientes, como un perro', 'Rechinar los dientes de frío', 'Reñir a gritos'],
          reliquia: 'El perro regañaba mostrando los dientes. Hacer algo a regañadientes es hacerlo gruñendo por dentro.'
        }
      ] },

      // Día 9
      { reliquias: [
        {
          expresion: 'A [horcajadas]',
          pregunta: '¿De dónde viene «horcajadas»?',
          opciones: ['De la horca, el palo con dos puntas', 'De un caballo de carga', 'De un juego de niños'],
          reliquia: 'Las piernas abiertas forman una horca, como el apero de labranza con forma de Y.'
        },
        {
          expresion: 'A [quemarropa]',
          pregunta: '¿Por qué «quemarropa»?',
          opciones: ['El disparo era tan cercano que la pólvora quemaba la ropa', 'Se disparaba con la ropa en llamas', 'Se quemaba la ropa del enemigo'],
          reliquia: 'Era tan de cerca que el fogonazo chamuscaba la tela. Hoy también se usa para preguntas directas.'
        },
        {
          expresion: 'Trabajar a [destajo]',
          pregunta: '¿Qué era el «destajo»?',
          opciones: ['Un trabajo pagado por obra hecha, no por tiempo', 'Un tajo de madera', 'Un atajo'],
          reliquia: 'De «destajar», ajustar las condiciones de un trabajo. Cuanto más se hace, más se cobra, y de ahí el afán.'
        }
      ] },

      // Día 10
      { reliquias: [
        {
          expresion: 'A troche y [moche]',
          pregunta: '¿De dónde viene «moche»?',
          opciones: ['De «mochar», cortar las ramas', 'De un golpe de mochila', 'De un tipo de hacha'],
          reliquia: 'Probablemente viene de «tronchar» y «mochar», cortar ramas sin orden ni medida. De ahí, «a lo loco».'
        },
        {
          expresion: 'De [tapadillo]',
          pregunta: '¿Qué era el «tapadillo»?',
          opciones: ['El gesto de taparse la cara con el manto', 'Un tapón de corcho', 'Una tapa de bar'],
          reliquia: 'Las mujeres se cubrían la cara con el manto para no ser reconocidas. De ahí, «a escondidas».'
        },
        {
          expresion: 'A cal y [canto]',
          pregunta: '¿Qué es aquí el «canto»?',
          opciones: ['Una piedra', 'Una canción', 'Un borde'],
          reliquia: 'Cerrar a cal y canto es tapiar con argamasa y piedras: cerrar del todo.'
        }
      ] },

      // Día 11
      { reliquias: [
        {
          expresion: 'A [hurtadillas]',
          pregunta: '¿De dónde sale «hurtadillas»?',
          opciones: ['De «hurtar», robar a escondidas', 'De «hurta», una capa con capucha', 'De un juego de niños parecido al escondite'],
          reliquia: 'Se formó sobre «hurtar»: obrar como quien roba, sin que nadie lo vea.'
        },
        {
          expresion: 'Postrarse de [hinojos]',
          pregunta: '¿Qué son los «hinojos»?',
          opciones: ['Las rodillas', 'Unas hierbas aromáticas', 'Los tobillos'],
          reliquia: 'Del latín «genuculum», rodilla. Nada que ver con la planta, que viene de «fenuculum». Ponerse de hinojos es arrodillarse.'
        },
        {
          expresion: 'Pasar por las horcas [caudinas]',
          pregunta: '¿Qué eran las horcas caudinas?',
          opciones: ['Un desfiladero donde se humilló a un ejército romano', 'Unos patíbulos medievales', 'Unas herramientas de labranza'],
          reliquia: 'En el 321 a. C., los samnitas atraparon a un ejército romano en el paso de Caudio y obligaron a los soldados a desfilar bajo un yugo de lanzas. Es someterse a una humillación.'
        }
      ] },

      // Día 12
      { reliquias: [
        {
          expresion: 'Estar sin [blanca]',
          pregunta: '¿Qué era una «blanca»?',
          opciones: ['Una moneda de poco valor', 'Una sábana', 'Una hoja de papel'],
          reliquia: 'Era una moneda de vellón de Castilla; se llamó así por su color, por la plata que llevaba al principio. No tener ni una blanca es no tener nada.'
        },
        {
          expresion: 'Mondo y [lirondo]',
          pregunta: '¿Dónde se usa «lirondo» fuera de esta expresión?',
          opciones: ['En ningún sitio: solo vive aquí', 'En los romances, como «lirio»', 'En el habla de los pastores, como «limpio»'],
          reliquia: 'Es de origen incierto y no existe suelta: solo refuerza a «mondo», limpio, pelado. Mondo y lirondo: limpio y sin añadidos.'
        },
        {
          expresion: 'Echar el [bofe]',
          pregunta: '¿Qué es el «bofe»?',
          opciones: ['El pulmón', 'El aliento', 'La bilis'],
          reliquia: 'Es el pulmón, sobre todo el de las reses. Echar el bofe es trabajar o correr hasta quedarse sin aliento.'
        }
      ] },

      // Día 13
      { reliquias: [
        {
          expresion: 'Estar en [Babia]',
          pregunta: '¿Qué es Babia?',
          opciones: ['Una comarca de León', 'Un reino de cuento', 'Un monasterio de clausura'],
          reliquia: 'Es una comarca de montaña leonesa. Según la tradición, los reyes de León se retiraban allí a descansar, ajenos a los asuntos de la corte.'
        },
        {
          expresion: 'De [sopetón]',
          pregunta: '¿Qué era un «sopetón»?',
          opciones: ['Un golpe fuerte y repentino dado con la mano', 'Una sopa espesa que se tomaba deprisa', 'Un soplo de viento'],
          reliquia: 'El diccionario aún lo recoge como golpe fuerte dado con la mano. De ahí «de sopetón»: de golpe, sin avisar.'
        },
        {
          expresion: 'Dar en el [quid]',
          pregunta: '¿Qué es el «quid»?',
          opciones: ['El «qué», en latín', 'El centro de una diana', 'Una moneda romana'],
          reliquia: 'Es el pronombre latino «quid», «qué»: la esencia o el porqué de algo. Dar en el quid es acertar con lo esencial.'
        }
      ] },

      // Día 14
      { reliquias: [
        {
          expresion: 'En un [periquete]',
          pregunta: '¿Qué es un «periquete»?',
          opciones: ['Un espacio de tiempo brevísimo', 'Un loro pequeño', 'Un trago corto de vino'],
          reliquia: 'Así lo define el diccionario: un instante. Su origen no está del todo claro, pero la palabra apenas se usa fuera de «en un periquete».'
        },
        {
          expresion: 'No valer un [ardite]',
          pregunta: '¿Qué era un «ardite»?',
          opciones: ['Una moneda de muy poco valor', 'Una chispa de fuego', 'Un tipo de alfiler'],
          reliquia: 'Fue una moneda de escaso valor que circuló antiguamente en Castilla y en otros reinos. Lo que no vale un ardite no vale nada.'
        },
        {
          expresion: 'Al [socaire] de',
          pregunta: '¿Qué es el «socaire»?',
          opciones: ['El abrigo que da algo del lado contrario al viento', 'Un tipo de vela de barco', 'Un muelle de piedra'],
          reliquia: 'Es palabra marinera: el lado de un objeto resguardado del viento. Hacer algo al socaire de alguien es hacerlo a su amparo.'
        }
      ] },

      // Día 15
      { reliquias: [
        {
          expresion: 'A [tientas]',
          pregunta: '¿De dónde sale «tientas»?',
          opciones: ['De «tentar», tocar', 'De «tienda»', 'De «tinta»'],
          reliquia: '«Tentar» significaba tocar, palpar. Andar a tientas es avanzar palpando, como a oscuras.'
        },
        {
          expresion: 'Más feo que [Picio]',
          pregunta: '¿Quién era Picio?',
          opciones: ['Un zapatero granadino', 'Un bufón de la corte de Felipe IV', 'Un diablo de las pastorelas'],
          reliquia: 'Según la tradición, un zapatero de Granada del siglo XIX al que, condenado a muerte, le llegó el indulto: del susto se quedó calvo y la cara se le llenó de bultos.'
        },
        {
          expresion: 'Poner pies en [polvorosa]',
          pregunta: '¿Qué era la «polvorosa»?',
          opciones: ['La calle, en la jerga de los rufianes', 'La pólvora', 'Una mula rápida'],
          reliquia: 'En germanía, la jerga de los delincuentes del Siglo de Oro, «polvorosa» era la calle, por el polvo. Poner pies en polvorosa es salir huyendo.'
        }
      ] },

      // Día 16
      { reliquias: [
        {
          expresion: 'Ojo [avizor]',
          pregunta: '¿Qué significa «avizor»?',
          opciones: ['Que vigila', 'Que guiña', 'Que llora'],
          reliquia: 'Es el que avizora, es decir, el que acecha o vigila con atención. Ojo avizor: alerta.'
        },
        {
          expresion: 'Ojo a la [funerala]',
          pregunta: '¿Qué era ir «a la funerala»?',
          opciones: ['Llevar las armas boca abajo en señal de duelo', 'Pintarse la cara de negro', 'Ir vestido de luto riguroso'],
          reliquia: 'En los entierros militares, los soldados llevaban las armas con la boca hacia abajo, «a la funerala». Un ojo a la funerala es un ojo amoratado por un golpe.'
        },
        {
          expresion: 'Echar el [resto]',
          pregunta: '¿Qué era el «resto»?',
          opciones: ['La cantidad que se apostaba en el juego', 'Lo que sobraba de la comida', 'Un descanso'],
          reliquia: 'En los juegos de envite, el resto era el dinero que el jugador ponía en juego. Echar el resto es jugárselo todo, poner todo el esfuerzo.'
        }
      ] },

      // Día 17
      { reliquias: [
        {
          expresion: 'A ojos [vistas]',
          pregunta: '¿Qué quiere decir aquí «vistas»?',
          opciones: ['Visibles, que se ven', 'Paisajes', 'Ojos ya cansados'],
          reliquia: '«Visto» se usaba como «visible». A ojos vistas es de forma clara y patente, que cualquiera puede verlo.'
        },
        {
          expresion: 'Tomar las de [Villadiego]',
          pregunta: '¿Qué es Villadiego?',
          opciones: ['Un pueblo de Burgos', 'Un bandolero famoso', 'Un río de Andalucía'],
          reliquia: 'Es una villa burgalesa. La forma antigua era «tomar las calzas de Villadiego»; tomarlas era salir huyendo, aunque el origen exacto se discute.'
        },
        {
          expresion: 'De [bóbilis], [bóbilis]',
          pregunta: '¿Qué es «bóbilis»?',
          opciones: ['Un latín de broma', 'Una moneda', 'Un bobo de comedia'],
          reliquia: 'Es un falso latín de tono burlesco. De bóbilis, bóbilis es de balde, sin esfuerzo.'
        }
      ] },

      // Día 18
      { reliquias: [
        {
          expresion: 'De [cabo] a rabo',
          pregunta: '¿Qué es aquí el «cabo»?',
          opciones: ['El extremo, el principio de algo', 'Un militar de baja graduación', 'Una cuerda de barco'],
          reliquia: '«Cabo» es el extremo de algo (del latín «caput», cabeza). De cabo a rabo: de la cabeza a la cola, de principio a fin.'
        },
        {
          expresion: 'A la [rebatiña]',
          pregunta: '¿Qué era la «rebatiña»?',
          opciones: ['Recoger a empujones algo que se arroja', 'Una batalla naval', 'Una subasta pública'],
          reliquia: 'Como cuando se tiran caramelos o monedas y todos se lanzan a cogerlos. Andar a la rebatiña es disputarse algo sin orden.'
        },
        {
          expresion: 'Pagar a [escote]',
          pregunta: '¿Qué es el «escote»?',
          opciones: ['La parte que le toca pagar a cada uno', 'El cuello de un vestido', 'La cuota de un gremio'],
          reliquia: 'Viene del francés antiguo «escot», cuota. Nada que ver con el escote de un vestido, que viene de «escotar», cortar.'
        }
      ] },

      // Día 19
      { reliquias: [
        {
          expresion: 'En un [tris]',
          pregunta: '¿Qué es el «tris»?',
          opciones: ['El leve sonido de algo delicado al quebrarse', 'Una tercera parte de algo', 'Un pelo de la barba'],
          reliquia: 'Es una onomatopeya: el chasquido de un vidrio que se rompe. Estar en un tris es estar a un instante de que algo ocurra.'
        },
        {
          expresion: 'Traer al [retortero]',
          pregunta: '¿Qué es el «retortero»?',
          opciones: ['Una vuelta alrededor', 'Un torno de alfarero', 'Un retortijón de tripas'],
          reliquia: 'El diccionario lo define como «vuelta alrededor». Traer a alguien al retortero es tenerlo dando vueltas de acá para allá.'
        },
        {
          expresion: 'Hacer [hincapié]',
          pregunta: '¿De dónde viene «hincapié»?',
          opciones: ['De «hincar el pie»', 'De «hincar» una estaca', 'De un juego de pelota'],
          reliquia: 'Es literalmente hincar el pie en el suelo para afirmarse y hacer fuerza. Hacer hincapié es insistir en algo.'
        }
      ] },

      // Día 20
      { reliquias: [
        {
          expresion: 'A [tutiplén]',
          pregunta: '¿De dónde viene «tutiplén»?',
          opciones: ['Del catalán «tot i ple», todo y lleno', 'Del latín «totum plenum»', 'De un tutor muy generoso'],
          reliquia: 'Llegó del catalán «a tot i ple», a montones. A tutiplén es en abundancia.'
        },
        {
          expresion: 'Dejar en la [estacada]',
          pregunta: '¿Qué era la «estacada»?',
          opciones: ['El recinto cercado donde se libraba un combate', 'Una estaca puntiaguda', 'Un pozo seco'],
          reliquia: 'Era el campo cercado de estacas donde se celebraban duelos y torneos. Quien quedaba en la estacada quedaba vencido o muerto en el campo; dejar a alguien así es abandonarlo en apuros.'
        },
        {
          expresion: 'Sin [embargo]',
          pregunta: '¿Qué era el «embargo»?',
          opciones: ['Un impedimento, un estorbo', 'Un barco', 'Una promesa'],
          reliquia: '«Embargar» significaba impedir o estorbar. Sin embargo es «sin que esto lo impida», es decir, a pesar de ello.'
        }
      ] },

      // Día 21
      { reliquias: [
        {
          expresion: 'No saber ni [jota]',
          pregunta: '¿Qué es la «jota»?',
          opciones: ['Una letra', 'Un baile aragonés', 'Una moneda'],
          reliquia: 'Es la iota, la letra más pequeña del alfabeto griego. Ya el Evangelio dice que no pasará de la Ley ni una iota. No saber ni jota es no saber nada.'
        },
        {
          expresion: 'A la [vera] del camino',
          pregunta: '¿Qué es la «vera»?',
          opciones: ['La orilla', 'La verdad', 'La primavera'],
          reliquia: 'Es la orilla o el lado de algo. Estar a la vera de alguien es estar a su lado.'
        },
        {
          expresion: 'Andar de la [ceca] a la Meca',
          pregunta: '¿Qué era la «ceca»?',
          opciones: ['La casa donde se acuñaba la moneda', 'Una sequía', 'Un puerto del norte de África'],
          reliquia: 'Es la casa donde se fabrica la moneda, del árabe «sikka», cuño. Otra explicación la relaciona con la mezquita de Córdoba. Ir de la ceca a la Meca es ir de un sitio a otro sin parar.'
        }
      ] },

      // Día 22
      { reliquias: [
        {
          expresion: 'Irse a [pique]',
          pregunta: '¿Qué significa «a pique»?',
          opciones: ['En vertical, cortado a plomo', 'Con un agujero', 'Picado por las olas'],
          reliquia: 'En el lenguaje marinero, una costa a pique es la que cae en vertical. Un barco que se va a pique se hunde hasta el fondo.'
        },
        {
          expresion: 'De higos a [brevas]',
          pregunta: '¿Qué son las «brevas»?',
          opciones: ['Los primeros frutos de la higuera', 'Unos higos secos', 'Breves ratos de descanso'],
          reliquia: 'La higuera breval da dos cosechas: las brevas al principio del verano y los higos al final. De higos a brevas pasa casi un año: muy de tarde en tarde.'
        },
        {
          expresion: 'Tener en [vilo]',
          pregunta: '¿Qué significa «en vilo»?',
          opciones: ['Suspendido en el aire, sin apoyo', 'Atado con un hilo', 'Encerrado con llave'],
          reliquia: 'En vilo es en el aire, sin apoyo. Tener a alguien en vilo es tenerlo inquieto, sin saber qué pasará.'
        }
      ] },

      // Día 23
      { reliquias: [
        {
          expresion: 'Por [ende]',
          pregunta: '¿Qué significaba «ende»?',
          opciones: ['Allí, de allí', 'El final', 'Dentro'],
          reliquia: 'Del latín «inde», de allí. «Por ende» es por eso, por tanto. Suelta, «ende» desapareció hace siglos.'
        },
        {
          expresion: 'Pasar a pie [enjuto]',
          pregunta: '¿Qué significa «enjuto»?',
          opciones: ['Seco', 'Descalzo', 'Cojo'],
          reliquia: '«Enjuto» es seco, y aún se dice de una persona delgada. Pasar a pie enjuto es cruzar sin mojarse los pies.'
        },
        {
          expresion: 'Ser el [acabose]',
          pregunta: '¿Qué es el «acabose»?',
          opciones: ['«Se acabó», convertido en sustantivo', 'El final de una comedia', 'Una campana'],
          reliquia: 'Viene de «acabóse», «se acabó». Ser el acabose es ser el colmo, el no va más, casi siempre de algo malo.'
        }
      ] },

      // Día 24
      { reliquias: [
        {
          expresion: 'De [tomo] y lomo',
          pregunta: '¿Qué es aquí el «tomo»?',
          opciones: ['El bulto, la importancia', 'Un volumen de un libro', 'Un trago'],
          reliquia: 'Además de volumen de un libro, «tomo» significó bulto e importancia. De tomo y lomo es de mucha importancia o gravedad: un sinvergüenza de tomo y lomo.'
        },
        {
          expresion: 'Vivir a salto de [mata]',
          pregunta: '¿Qué es la «mata»?',
          opciones: ['Un arbusto', 'Un matadero', 'Una alfombra'],
          reliquia: 'Es la del que huye saltando de un matorral a otro para esconderse. Vivir a salto de mata es vivir sin orden ni previsión, aprovechando lo que surge.'
        },
        {
          expresion: 'Dar [pábulo]',
          pregunta: '¿Qué es el «pábulo»?',
          opciones: ['El alimento, el pasto', 'Un rumor', 'Una chispa'],
          reliquia: 'Del latín «pabulum», alimento o forraje. Dar pábulo a un rumor es alimentarlo.'
        }
      ] },

      // Día 25
      { reliquias: [
        {
          expresion: 'Meterse en camisa de once [varas]',
          pregunta: '¿Qué era la «vara»?',
          opciones: ['Una medida de longitud', 'Un palo de pastor', 'Una costura'],
          reliquia: 'La vara castellana medía unos 84 centímetros. Una camisa de once varas sería enorme: meterse en ella es complicarse en lo que no le toca a uno.'
        },
        {
          expresion: 'Plantar al [tresbolillo]',
          pregunta: '¿Qué es el «tresbolillo»?',
          opciones: ['Una disposición en filas alternas', 'Un juego de bolos', 'Un tipo de encaje'],
          reliquia: 'Las plantas se ponen en filas paralelas de modo que cada una queda frente al hueco de la fila vecina, formando triángulos, como los puntos del cinco en un dado.'
        },
        {
          expresion: 'No dar [abasto]',
          pregunta: '¿Qué era el «abasto»?',
          opciones: ['La provisión de lo necesario', 'Un instrumento de medida', 'Un caballo de carga'],
          reliquia: 'Es la provisión de víveres, como en «mercado de abastos». No dar abasto es no poder atender todo lo que se necesita.'
        }
      ] },

      // Día 26
      { reliquias: [
        {
          expresion: 'De [extranjis]',
          pregunta: '¿De dónde viene «extranjis»?',
          opciones: ['De «extranjero», con un final de broma', 'Del nombre de un contrabandista', 'De una palabra del caló'],
          reliquia: 'Es una deformación festiva de «extranjero»: lo que venía de extranjis venía de fuera, de contrabando. De ahí, a escondidas.'
        },
        {
          expresion: 'Salir por [peteneras]',
          pregunta: '¿Qué son las «peteneras»?',
          opciones: ['Un cante flamenco', 'Unas puertas traseras', 'Unas zapatillas de baile'],
          reliquia: 'La petenera es un cante flamenco. Salir por peteneras es decir algo que no viene al caso, como quien se arranca con otro cante.'
        },
        {
          expresion: 'Llover a [raudales]',
          pregunta: '¿Qué es un «raudal»?',
          opciones: ['Un caudal de agua que corre con fuerza', 'Un rayo', 'Un camino real'],
          reliquia: 'Es el caudal de agua que corre violentamente. A raudales es en abundancia.'
        }
      ] },

      // Día 27
      { reliquias: [
        {
          expresion: 'Echar su [cuarto] a espadas',
          pregunta: '¿Qué era aquí un «cuarto»?',
          opciones: ['Una moneda', 'Una habitación', 'La cuarta parte de una hora'],
          reliquia: 'El cuarto era una moneda de cobre. Se suele explicar como apostarla en el juego: echar su cuarto a espadas es meterse en una conversación ajena.'
        },
        {
          expresion: 'Andar a la [greña]',
          pregunta: '¿Qué es la «greña»?',
          opciones: ['El pelo revuelto', 'Una pelea de gatos', 'Una rama seca'],
          reliquia: 'Es la cabellera revuelta y mal peinada. Andar a la greña es reñir, como quien se tira de los pelos.'
        },
        {
          expresion: 'Irse al [garete]',
          pregunta: '¿Qué significa «al garete»?',
          opciones: ['A la deriva, sin gobierno', 'Al fondo del mar', 'A la garita del vigía'],
          reliquia: 'Es término marinero: un barco va al garete cuando, sin gobierno, lo arrastran el viento o la corriente. Se suele relacionar con el francés «égaré», extraviado.'
        }
      ] },

      // Día 28
      { reliquias: [
        {
          expresion: 'Hacer el [paripé]',
          pregunta: '¿De dónde viene «paripé»?',
          opciones: ['Del caló, la lengua de los gitanos españoles', 'Del francés', 'Del nombre de un actor famoso'],
          reliquia: 'Viene del caló, donde significaba «cambio, trueque». Hacer el paripé es fingir, aparentar.'
        },
        {
          expresion: 'Sacar de [quicio]',
          pregunta: '¿Qué es el «quicio»?',
          opciones: ['La parte de la puerta donde gira el gozne', 'El juicio', 'El umbral'],
          reliquia: 'Es la parte de la puerta o ventana en que encaja el eje sobre el que gira. Una puerta sacada de quicio no cierra: así queda quien pierde los nervios.'
        },
        {
          expresion: 'Riquezas sin [cuento]',
          pregunta: '¿Qué era aquí el «cuento»?',
          opciones: ['La cuenta, el cómputo', 'Una historia', 'Un engaño'],
          reliquia: '«Cuento» y «cuenta» tienen el mismo origen, «contar». Sin cuento es sin número, innumerable.'
        }
      ] },

      // Día 29
      { reliquias: [
        {
          expresion: 'Quedarse in [albis]',
          pregunta: '¿Qué significa «in albis»?',
          opciones: ['En blanco, en latín', 'En los Alpes', 'En pañales'],
          reliquia: 'Es latín: «en blanco». Quedarse in albis es quedarse sin entender nada o sin conseguir lo que se esperaba.'
        },
        {
          expresion: 'Armarse la de San [Quintín]',
          pregunta: '¿Qué fue San Quintín?',
          opciones: ['Una batalla', 'Un santo pendenciero', 'Una feria de ganado'],
          reliquia: 'En la batalla de San Quintín, en 1557, las tropas de Felipe II derrotaron a las francesas. Armarse la de San Quintín es organizarse un gran alboroto.'
        },
        {
          expresion: 'Darse [pisto]',
          pregunta: '¿Qué era el «pisto»?',
          opciones: ['Un jugo de carne de ave para los enfermos', 'Un perfume caro', 'Una pista de baile'],
          reliquia: 'Antes de nombrar el guiso de verduras, el pisto era el jugo que se sacaba machacando carne de ave, para dárselo a los enfermos. Darse pisto es darse importancia.'
        }
      ] },

      // Día 30
      { reliquias: [
        {
          expresion: 'Ponerse el mundo por [montera]',
          pregunta: '¿Qué es la «montera»?',
          opciones: ['Un gorro', 'Una silla de montar', 'Una manta de monte'],
          reliquia: 'Es la prenda para cubrir la cabeza, como la de los toreros. Ponerse el mundo por montera es hacer lo que uno quiere sin importarle lo que digan.'
        },
        {
          expresion: 'Quedarse a la luna de [Valencia]',
          pregunta: '¿Qué tiene que ver Valencia?',
          opciones: ['Quedarse fuera de sus murallas, de noche', 'Su famoso observatorio', 'Una canción de cuna valenciana'],
          reliquia: 'Se explica por quienes llegaban tarde y encontraban cerradas las puertas de la muralla de Valencia, y tenían que pasar la noche al raso. Es quedarse frustrado, sin lo que se esperaba.'
        },
        {
          expresion: 'Tanto [tirios] como troyanos',
          pregunta: '¿Quiénes eran los «tirios»?',
          opciones: ['Los habitantes de Tiro', 'Los habitantes del Tirol', 'Unos soldados de élite'],
          reliquia: 'En la «Eneida», los cartagineses, descendientes de los fenicios de Tiro, acaban enfrentados a los troyanos de Eneas. Tirios y troyanos son dos bandos contrarios.'
        }
      ] },

      // Día 31
      { reliquias: [
        {
          expresion: 'En el quinto [pino]',
          pregunta: '¿Qué era el «quinto pino»?',
          opciones: ['Uno de los pinos de las afueras de Madrid', 'Un pino de la Biblia', 'Un monte de Navarra'],
          reliquia: 'La explicación más extendida habla de cinco pinos plantados a lo largo del actual paseo de la Castellana, en Madrid, en el siglo XVIII: el quinto era el más alejado.'
        },
        {
          expresion: 'A la [remanguillé]',
          pregunta: '¿Qué es «remanguillé»?',
          opciones: ['Un falso francés hecho en España', 'Un plato francés', 'Una danza de corte'],
          reliquia: 'Suena a francés, pero es una invención española, probablemente sobre «remangar». A la remanguillé es en desorden, de cualquier manera.'
        },
        {
          expresion: 'Ir de punta en [blanco]',
          pregunta: '¿Qué era aquí el «blanco»?',
          opciones: ['La armadura de acero bruñido', 'Un traje de boda', 'La diana del tiro'],
          reliquia: 'Se decía del caballero armado con todas las piezas de su armadura, de acero pulido o «blanco». Ir de punta en blanco es ir muy arreglado.'
        }
      ] },

      // Día 32
      { reliquias: [
        {
          expresion: 'Estar al [pairo]',
          pregunta: '¿Qué es estar «al pairo»?',
          opciones: ['Un barco quieto con las velas tendidas', 'Un ave quieta en su nido', 'Un caballo en el establo'],
          reliquia: 'Es término náutico: la nave se queda quieta con las velas desplegadas. Estar al pairo es estar a la espera, sin hacer nada.'
        },
        {
          expresion: 'Ni [fu] ni [fa]',
          pregunta: '¿Qué son «fu» y «fa»?',
          opciones: ['Dos voces sin significado propio', 'Dos notas de una escala antigua', 'El soplo y el suspiro'],
          reliquia: 'Son voces expresivas que no significan nada por sí mismas, igual que la cosa a la que se aplican: ni fu ni fa es ni bueno ni malo, indiferente.'
        },
        {
          expresion: 'Poner en [solfa]',
          pregunta: '¿Qué es la «solfa»?',
          opciones: ['El arte de leer y entonar la música', 'Un sol de mediodía', 'Una silla de mano'],
          reliquia: 'Poner algo en solfa era escribirlo en notación musical. Hoy es presentarlo de forma ridícula.'
        }
      ] },

      // Día 33
      { reliquias: [
        {
          expresion: 'A la [trágala]',
          pregunta: '¿Qué fue «el trágala»?',
          opciones: ['Una canción política', 'Una medicina amarga', 'Un castigo militar'],
          reliquia: 'Era una canción con que los liberales del Trienio, hacia 1820, se burlaban de los absolutistas: «Trágala, perro». Hacer algo a la trágala es hacerlo a la fuerza.'
        },
        {
          expresion: 'Sembrar a [voleo]',
          pregunta: '¿Qué es sembrar «a voleo»?',
          opciones: ['Arrojar la semilla a puñados', 'Sembrar con un azadón', 'Sembrar en hileras'],
          reliquia: 'Sembrar a voleo es lanzar la semilla al aire con la mano, a puñados. De ahí, hacer algo de cualquier manera, sin método.'
        },
        {
          expresion: 'Por [ventura]',
          pregunta: '¿Qué es la «ventura»?',
          opciones: ['La suerte', 'Una aventura', 'El viento'],
          reliquia: '«Ventura» es fortuna o suerte. Por ventura significa quizá, por casualidad, y aparece a cada paso en el «Quijote».'
        }
      ] },

      // Día 34
      { reliquias: [
        {
          expresion: 'A [sabiendas]',
          pregunta: '¿De dónde sale «sabiendas»?',
          opciones: ['Del gerundio «sabiendo»', 'De «sabias», mujeres sabias', 'De un libro de leyes'],
          reliquia: 'Sale de «sabiendo». A sabiendas es sabiendo lo que se hace, de forma deliberada.'
        },
        {
          expresion: 'Llevar a [cuestas]',
          pregunta: '¿Qué eran las «cuestas»?',
          opciones: ['Las costillas, la espalda', 'Las pendientes del camino', 'Los cestos de carga'],
          reliquia: 'Viene del latín «costa», costilla. Llevar algo a cuestas es llevarlo sobre la espalda.'
        },
        {
          expresion: 'De [Pascuas] a Ramos',
          pregunta: '¿Cuánto hay de Pascuas a Ramos?',
          opciones: ['Casi un año', 'Una semana', 'Un mes'],
          reliquia: 'El Domingo de Ramos cae una semana antes que el de Pascua; contando desde una Pascua hasta los Ramos del año siguiente, pasa casi un año. Es muy de tarde en tarde.'
        }
      ] },

      // Día 35
      { reliquias: [
        {
          expresion: 'Mirar de [soslayo]',
          pregunta: '¿Qué significa «soslayo»?',
          opciones: ['Oblicuo, de lado', 'Bajo el sol', 'Con desprecio'],
          reliquia: 'De soslayo es oblicuamente, de lado. Mirar de soslayo es mirar de reojo, sin volver la cabeza.'
        },
        {
          expresion: 'A [espuertas]',
          pregunta: '¿Qué es una «espuerta»?',
          opciones: ['Una cesta de esparto con asas', 'Una puerta pequeña', 'Una pala'],
          reliquia: 'La espuerta es una cesta de esparto o palma con dos asas, para acarrear tierra o escombro. A espuertas es en abundancia, como si se sacara con ella.'
        },
        {
          expresion: 'Con [creces]',
          pregunta: '¿Qué eran las «creces»?',
          opciones: ['Aumentos', 'Cruces', 'Deudas'],
          reliquia: 'Viene de «crecer»: las creces eran el aumento de algo. Devolver algo con creces es devolverlo de sobra.'
        }
      ] },

      // Día 36
      { reliquias: [
        {
          expresion: 'Al [tuntún]',
          pregunta: '¿Qué es el «tuntún»?',
          opciones: ['Una voz que imita un ruido', 'Un tambor africano', 'Un tonto de pueblo'],
          reliquia: 'Es una voz onomatopéyica, como de golpes sin ritmo. Al tuntún, o al buen tuntún, es sin reflexión, a la buena de Dios.'
        },
        {
          expresion: 'A [trancas] y [barrancas]',
          pregunta: '¿Qué eran las «trancas» y las «barrancas»?',
          opciones: ['Obstáculos: palos y barrancos', 'Peleas y riñas', 'Puertas y ventanas'],
          reliquia: 'La tranca es el palo grueso que atranca una puerta; la barranca, el barranco. A trancas y barrancas es salvando obstáculos, con mucha dificultad.'
        },
        {
          expresion: 'En [aras] de',
          pregunta: '¿Qué es un «ara»?',
          opciones: ['Un altar', 'Un arado', 'Una medida de tierra'],
          reliquia: 'Es el altar donde se hacían los sacrificios. En aras de algo es en honor o en interés de ello, como quien se sacrifica en su altar.'
        }
      ] },

      // Día 37
      { reliquias: [
        {
          expresion: 'Llevar en [volandas]',
          pregunta: '¿Qué quiere decir «volandas»?',
          opciones: ['Por el aire, sin tocar el suelo', 'En una carreta', 'De mala gana'],
          reliquia: 'Viene de «volar». Llevar a alguien en volandas es llevarlo en alto, levantado del suelo.'
        },
        {
          expresion: 'No tener un [ochavo]',
          pregunta: '¿Qué era un «ochavo»?',
          opciones: ['Una moneda de cobre', 'La octava parte de una herencia', 'Una moneda de oro'],
          reliquia: 'Era una moneda española de cobre que pesaba un octavo de onza y valía dos maravedís.'
        },
        {
          expresion: 'De [consuno]',
          pregunta: '¿Qué es «consuno»?',
          opciones: ['La unión de «con» y «uno»', 'Un consejo', 'Un consuelo'],
          reliquia: 'Es «con uno», todos a una. De consuno es juntamente, de común acuerdo.'
        }
      ] },

      // Día 38
      { reliquias: [
        {
          expresion: 'Más viejo que [Matusalén]',
          pregunta: '¿Quién fue Matusalén?',
          opciones: ['Un patriarca bíblico', 'Un rey visigodo', 'Un ermitaño'],
          reliquia: 'Según el Génesis, vivió 969 años: es el personaje más longevo de la Biblia.'
        },
        {
          expresion: 'Poner a buen [recaudo]',
          pregunta: '¿Qué significaba «recaudo»?',
          opciones: ['Cuidado, custodia', 'La recaudación de impuestos', 'Un recado'],
          reliquia: 'Además de recaudación, «recaudo» significó precaución y custodia. Poner algo a buen recaudo es guardarlo en lugar seguro.'
        },
        {
          expresion: 'Poner en un [brete]',
          pregunta: '¿Qué era un «brete»?',
          opciones: ['Un cepo de hierro para los pies de los presos', 'Una pregunta capciosa', 'Un pozo'],
          reliquia: 'Era el cepo con que se sujetaban los pies de los reos. Poner a alguien en un brete es dejarlo en un aprieto del que no puede salir.'
        }
      ] },

      // Día 39
      { reliquias: [
        {
          expresion: 'A [bocajarro]',
          pregunta: '¿De qué está hecho «bocajarro»?',
          opciones: ['De «boca» y «jarro»', 'De «boca» y «carro»', 'De un apellido'],
          reliquia: 'Es «a boca de jarro»: como quien bebe directamente del jarro. Hoy es disparar desde muy cerca, o decir algo de sopetón.'
        },
        {
          expresion: 'Ni por [asomo]',
          pregunta: '¿Qué es un «asomo»?',
          opciones: ['Un indicio o señal', 'Un balcón', 'Un susto'],
          reliquia: 'Es el indicio o la señal de algo, lo que asoma. Ni por asomo es de ningún modo.'
        },
        {
          expresion: 'A [porfía]',
          pregunta: '¿Qué es la «porfía»?',
          opciones: ['La insistencia o competencia tenaz', 'Una mentira', 'Un premio'],
          reliquia: '«Porfía» es la insistencia obstinada o la competencia. Hacer algo a porfía es hacerlo compitiendo, cada uno más que el otro.'
        }
      ] },

      // Día 40
      { reliquias: [
        {
          expresion: 'Caer [chuzos] de punta',
          pregunta: '¿Qué son los «chuzos»?',
          opciones: ['Palos armados con un pincho', 'Granizos', 'Carámbanos'],
          reliquia: 'El chuzo es un palo con un pincho de hierro. Caer chuzos de punta es llover o granizar con muchísima fuerza.'
        },
        {
          expresion: 'De [chiripa]',
          pregunta: '¿De dónde viene «chiripa»?',
          opciones: ['Del billar: un tanto ganado por casualidad', 'De un pájaro que acierta siempre', 'De una moneda de la suerte'],
          reliquia: 'En el billar, una chiripa es una jugada que sale bien por pura casualidad. De chiripa es por suerte.'
        },
        {
          expresion: 'Poner en la [picota]',
          pregunta: '¿Qué era la «picota»?',
          opciones: ['Una columna donde se exponía a los reos', 'Una cereza', 'La cumbre de un monte'],
          reliquia: 'La picota era la columna donde se exponía a los condenados a la vergüenza pública. Poner en la picota es exponer a alguien a la crítica.'
        }
      ] },

      // Día 41
      { reliquias: [
        {
          expresion: 'Saber más que [Lepe]',
          pregunta: '¿Quién era «Lepe»?',
          opciones: ['Un obispo muy sabio del siglo XVII', 'Un pueblo de Huelva', 'Un bufón de la corte'],
          reliquia: 'Se refiere a Pedro de Lepe, obispo de Calahorra famoso por su sabiduría. No tiene que ver con los chistes de Lepe.'
        },
        {
          expresion: 'Sin decir [oxte] ni [moxte]',
          pregunta: '¿Qué son «oxte» y «moxte»?',
          opciones: ['Interjecciones sin significado propio', 'Dos santos', 'Dos monedas'],
          reliquia: '«Oxte» era una interjección para apartar a alguien, y «moxte» un eco suyo. Sin decir oxte ni moxte es sin decir nada.'
        },
        {
          expresion: 'Ni [pizca]',
          pregunta: '¿Qué es una «pizca»?',
          opciones: ['Una porción mínima', 'Un pellizco en la piel', 'Una piedra'],
          reliquia: 'Una pizca es lo que se coge con dos dedos. Ni pizca es nada en absoluto.'
        }
      ] },

      // Día 42
      { reliquias: [
        {
          expresion: 'Morir en [olor] de santidad',
          pregunta: '¿Qué es aquí el «olor»?',
          opciones: ['La fama o reputación', 'Un perfume de incienso', 'Un rezo'],
          reliquia: 'Se creía que los cuerpos de los santos desprendían buen olor, y de ahí pasó a significar fama. Morir en olor de santidad es morir con fama de santo.'
        },
        {
          expresion: 'Ni rey ni [roque]',
          pregunta: '¿Qué es el «roque»?',
          opciones: ['La torre del ajedrez', 'Un roquero', 'Un peñasco'],
          reliquia: 'El roque es el nombre antiguo de la torre del ajedrez. Ni rey ni roque es nadie, sin excepción.'
        },
        {
          expresion: 'Tener [arrestos]',
          pregunta: '¿Qué son los «arrestos»?',
          opciones: ['Arrojo y valor', 'Detenciones', 'Restos de comida'],
          reliquia: '«Arresto» es arrojo, determinación para emprender algo arriesgado. Tener arrestos es tener valor.'
        }
      ] },

      // Día 43
      { reliquias: [
        {
          expresion: 'Poner [coto]',
          pregunta: '¿Qué es un «coto»?',
          opciones: ['Un terreno acotado, con límites', 'Una codorniz', 'Un codo'],
          reliquia: 'El coto es un terreno con límites marcados, como el de caza. Poner coto a algo es ponerle límite.'
        },
        {
          expresion: 'A [matacaballo]',
          pregunta: '¿De qué está hecho «matacaballo»?',
          opciones: ['De «matar» y «caballo»', 'De «mata» y «cabello»', 'De un apellido'],
          reliquia: 'Es correr tanto que se revienta el caballo. A matacaballo es muy deprisa.'
        },
        {
          expresion: 'Hacerse [añicos]',
          pregunta: '¿Qué son los «añicos»?',
          opciones: ['Pedazos muy pequeños', 'Años de vida', 'Corderos'],
          reliquia: 'Los añicos son trozos menudos de algo que se rompe. Hacerse añicos es romperse en mil pedazos.'
        }
      ] },

      // Día 44
      { reliquias: [
        {
          expresion: 'Dar [calabazas]',
          pregunta: '¿Por qué «calabazas»?',
          opciones: ['Porque se creía que la calabaza quitaba el deseo', 'Porque era el regalo de los novios', 'Porque los estudiantes las cultivaban'],
          reliquia: 'Antiguamente se tenía la calabaza por remedio contra el apetito amoroso. Dar calabazas es rechazar a un pretendiente o suspender a un alumno.'
        },
        {
          expresion: 'De [rechupete]',
          pregunta: '¿De qué viene «rechupete»?',
          opciones: ['De «chupar»', 'De «chupete»', 'De «repetir»'],
          reliquia: 'Se forma sobre «chupar»: algo tan bueno que da para chuparse los dedos. De rechupete es buenísimo.'
        },
        {
          expresion: 'Irse por los cerros de [Úbeda]',
          pregunta: '¿Qué es «Úbeda»?',
          opciones: ['Una ciudad de Jaén', 'Un río de Castilla', 'Un monte de Granada'],
          reliquia: 'Según la leyenda, un caballero tardó en llegar a la conquista de Úbeda y se excusó con que se había perdido por sus cerros. Es divagar.'
        }
      ] },

      // Día 45
      { reliquias: [
        {
          expresion: 'Sin [cortapisas]',
          pregunta: '¿Qué era una «cortapisa»?',
          opciones: ['Una guarnición en el borde de una prenda', 'Un cuchillo de cocina', 'Una pisada corta'],
          reliquia: 'La cortapisa era la tela de otro color en el borde de una falda o capa. Hoy es una limitación: sin cortapisas es sin trabas.'
        },
        {
          expresion: 'Rasgarse las [vestiduras]',
          pregunta: '¿Qué son las «vestiduras»?',
          opciones: ['Las ropas', 'Las vendas', 'Las cortinas'],
          reliquia: 'Rasgarse la ropa era un gesto antiguo de dolor o escándalo. Hoy es escandalizarse, a menudo con exageración.'
        },
        {
          expresion: 'Por [carambola]',
          pregunta: '¿De dónde viene «carambola»?',
          opciones: ['Del billar', 'De una fruta tropical', 'De un juego de dados'],
          reliquia: 'En el billar, la carambola es la jugada en que una bola toca a las otras dos. Por carambola es por casualidad, de rebote.'
        }
      ] },

      // Día 46
      { reliquias: [
        {
          expresion: 'Esto es [Jauja]',
          pregunta: '¿Qué es «Jauja»?',
          opciones: ['Una ciudad de los Andes peruanos', 'Un país de cuento sin existencia real', 'Un banquete de bodas'],
          reliquia: 'Jauja es una ciudad de Perú, famosa por su riqueza en tiempos de la conquista. Acabó siendo el país imaginario de la abundancia.'
        },
        {
          expresion: 'Armarse la [marimorena]',
          pregunta: '¿De dónde viene «marimorena»?',
          opciones: ['De una tabernera llamada Mari Morena, según la tradición', 'De una tormenta de verano', 'De una batalla naval'],
          reliquia: 'Según la tradición, de una tabernera madrileña, Mari Morena, en cuya taberna hubo una pelea sonada. Es una riña con mucho alboroto.'
        },
        {
          expresion: 'De pura [cepa]',
          pregunta: '¿Qué es la «cepa»?',
          opciones: ['El tronco de la vid', 'Una semilla', 'Un pozo'],
          reliquia: 'La cepa es el tronco de la vid, de donde salen los sarmientos. De pura cepa es auténtico, de raíz.'
        }
      ] },

      // Día 47
      { reliquias: [
        {
          expresion: 'Mantenerse en sus [trece]',
          pregunta: '¿De dónde sale el «trece»?',
          opciones: ['Del papa Luna, Benedicto XIII', 'De las trece colonias', 'De un juego de naipes'],
          reliquia: 'Se suele atribuir al papa Luna, Benedicto XIII, que se negó hasta su muerte a renunciar. Es mantenerse firme en una opinión.'
        },
        {
          expresion: 'Hacer de su capa un [sayo]',
          pregunta: '¿Qué es un «sayo»?',
          opciones: ['Una prenda larga y holgada', 'Un saco de grano', 'Una espada'],
          reliquia: 'El sayo era una casaca holgada y sin botones. Hacer de su capa un sayo es hacer uno lo que quiere con lo suyo.'
        },
        {
          expresion: 'A la [chita] callando',
          pregunta: '¿Qué es la «chita»?',
          opciones: ['Un huesecillo del pie de las reses', 'Una gata pequeña', 'Una cotorra'],
          reliquia: 'La chita es el astrágalo, un hueso del pie de las reses con el que se jugaba. A la chita callando es con disimulo, sin hacer ruido.'
        }
      ] },

      // Día 48
      { reliquias: [
        {
          expresion: 'Un ojo a la [virulé]',
          pregunta: '¿Qué significa «virulé»?',
          opciones: ['Torcido o estropeado', 'Morado', 'Cerrado'],
          reliquia: 'A la virulé es en mal estado o torcido. Un ojo a la virulé es el que queda amoratado tras un golpe.'
        },
        {
          expresion: 'Ni [chicha] ni limonada',
          pregunta: '¿Qué es la «chicha»?',
          opciones: ['Una bebida de maíz fermentado', 'La carne de cerdo', 'Una muchacha'],
          reliquia: 'En América, la chicha es una bebida alcohólica de maíz. Ni chicha ni limonada es ni una cosa ni otra.'
        },
        {
          expresion: 'Tener más paciencia que el santo [Job]',
          pregunta: '¿Quién era «Job»?',
          opciones: ['Un personaje de la Biblia', 'Un fraile ermitaño', 'Un pastor de ovejas'],
          reliquia: 'En el libro de Job, Dios lo pone a prueba con todo tipo de desgracias y él lo soporta todo sin rebelarse.'
        }
      ] },

      // Día 49
      { reliquias: [
        {
          expresion: 'Más chulo que un [ocho]',
          pregunta: '¿Qué era el «ocho»?',
          opciones: ['Un tranvía de Madrid, según la explicación más extendida', 'Un naipe de la baraja', 'Un tipo de sombrero'],
          reliquia: 'Se suele explicar por el tranvía número 8 de Madrid, que llevaba a la romería de San Isidro, lleno de chulapos. Es ser muy presumido o descarado.'
        },
        {
          expresion: 'Ir de [bracete]',
          pregunta: '¿Qué es un «bracete»?',
          opciones: ['Un brazo, en diminutivo', 'Un brazalete', 'Una barandilla'],
          reliquia: 'Es el diminutivo de «brazo». Ir de bracete es ir cogido del brazo de otra persona.'
        },
        {
          expresion: 'Llevarse la [palma]',
          pregunta: '¿Qué es aquí la «palma»?',
          opciones: ['La hoja de palmera que se daba al vencedor', 'La de la mano', 'Un aplauso'],
          reliquia: 'La hoja de palmera era símbolo de victoria. Llevarse la palma es sobresalir.'
        }
      ] },

      // Día 50
      { reliquias: [
        {
          expresion: 'Tener más cuento que [Calleja]',
          pregunta: '¿Quién era «Calleja»?',
          opciones: ['Un editor de cuentos infantiles', 'Un actor de teatro', 'Un mentiroso famoso'],
          reliquia: 'Saturnino Calleja editó miles de cuentos para niños desde finales del siglo XIX. Tener más cuento que Calleja es exagerar o inventarse excusas.'
        },
        {
          expresion: 'Llevar la [batuta]',
          pregunta: '¿Qué es la «batuta»?',
          opciones: ['La varilla del director de orquesta', 'Una bata', 'Un bastón de mando militar'],
          reliquia: 'Con la batuta el director marca el compás a la orquesta. Llevar la batuta es mandar.'
        },
        {
          expresion: 'Hasta los [topes]',
          pregunta: '¿Qué son los «topes»?',
          opciones: ['Los extremos superiores de los palos del barco', 'Los parachoques', 'Unos topos'],
          reliquia: 'El tope es el punto más alto de los palos de un barco. Cargado hasta los topes es lleno del todo.'
        }
      ] },

      // Día 51
      { reliquias: [
        {
          expresion: 'Darse [ínfulas]',
          pregunta: '¿Qué eran las «ínfulas»?',
          opciones: ['Las cintas que cuelgan de la mitra del obispo', 'Unos bollos inflados', 'Unos humos de pipa'],
          reliquia: 'Las ínfulas son las dos cintas que cuelgan de la mitra, símbolo de dignidad. Darse ínfulas es presumir de importancia.'
        },
        {
          expresion: 'De [tejas] abajo',
          pregunta: '¿Qué son las «tejas»?',
          opciones: ['Las del tejado', 'Unas monedas', 'Unas faldas'],
          reliquia: 'De las tejas para abajo es lo que queda bajo el tejado: el mundo terrenal, no el cielo. Se dice para hablar de lo humano, sin contar con Dios.'
        },
        {
          expresion: 'Volver a las [andadas]',
          pregunta: '¿Qué son las «andadas»?',
          opciones: ['Los caminos ya recorridos', 'Unas cuentas pendientes', 'Unas cometas'],
          reliquia: 'Las andadas son las huellas o el camino ya andado. Volver a ellas es recaer en una mala costumbre.'
        }
      ] },

      // Día 52
      { reliquias: [
        {
          expresion: 'Meter [cizaña]',
          pregunta: '¿Qué es la «cizaña»?',
          opciones: ['Una mala hierba que crece entre el trigo', 'Un insecto', 'Una cuña de madera'],
          reliquia: 'La cizaña es una planta dañina que crece entre los cereales. Meter cizaña es sembrar discordia.'
        },
        {
          expresion: 'Estar en [ascuas]',
          pregunta: '¿Qué son las «ascuas»?',
          opciones: ['Brasas encendidas', 'Avispas', 'Agujas'],
          reliquia: 'Las ascuas son trozos de materia encendida, sin llama. Estar en ascuas es estar inquieto, como quien está sobre brasas.'
        },
        {
          expresion: 'Hacer su [agosto]',
          pregunta: '¿Por qué «agosto»?',
          opciones: ['Por la cosecha del verano', 'Por las vacaciones de los ricos', 'Por un emperador romano'],
          reliquia: 'Agosto era el mes de recoger la cosecha, y con ella el dinero del año. Hacer su agosto es sacar mucho provecho.'
        }
      ] },

      // Día 53
      { reliquias: [
        {
          expresion: 'En [ayunas]',
          pregunta: '¿Qué son las «ayunas»?',
          opciones: ['El estado de no haber comido', 'Unos rezos', 'Unas yuntas de bueyes'],
          reliquia: 'Viene de «ayuno». Estar en ayunas es no haber comido nada desde la noche, y también no enterarse de algo.'
        },
        {
          expresion: 'Pagar a [tocateja]',
          pregunta: '¿De dónde viene «tocateja»?',
          opciones: ['De «toca teja», por una moneda que se ponía en la mesa', 'De un tejado mal pagado', 'De un juego de niños'],
          reliquia: 'Se suele explicar por «toca teja»: la teja sería una moneda que se dejaba sobre la mesa. Pagar a tocateja es pagar al contado.'
        },
        {
          expresion: 'Estar en [capilla]',
          pregunta: '¿Qué era la «capilla»?',
          opciones: ['La celda donde el condenado pasaba sus últimas horas', 'La capucha de los frailes', 'Un coro de iglesia'],
          reliquia: 'El reo a muerte pasaba sus últimas horas en una capilla de la cárcel. Estar en capilla es estar a punto de pasar un trance.'
        }
      ] },

      // Día 54
      { reliquias: [
        {
          expresion: 'En [pos] de',
          pregunta: '¿Qué significa «pos»?',
          opciones: ['Detrás, del latín post', 'Paz', 'Pulso'],
          reliquia: 'Viene del latín post, \'después, detrás\'. Ir en pos de algo es ir tras ello.'
        },
        {
          expresion: 'Andar en dimes y [diretes]',
          pregunta: '¿Qué es un «direte»?',
          opciones: ['Un «te diré»', 'Un dedal', 'Un tipo de dardo'],
          reliquia: 'Es «diré te», \'te diré\'. Los dimes y diretes son las habladurías y discusiones.'
        },
        {
          expresion: 'Tomar el [portante]',
          pregunta: '¿Qué es el «portante»?',
          opciones: ['Un paso rápido de las caballerías', 'Un portero', 'Un baúl'],
          reliquia: 'El portante es un paso de las caballerías en que mueven a la vez la mano y el pie del mismo lado. Tomar el portante es irse.'
        }
      ] },

      // Día 55
      { reliquias: [
        {
          expresion: 'Sin [tapujos]',
          pregunta: '¿Qué es un «tapujo»?',
          opciones: ['Un embozo para taparse la cara', 'Una tapadera de olla', 'Un chal'],
          reliquia: 'El tapujo era el embozo con que alguien se tapaba para no ser reconocido. Sin tapujos es con franqueza.'
        },
        {
          expresion: 'Al [alimón]',
          pregunta: '¿De dónde viene «alimón»?',
          opciones: ['De un juego infantil, «al limón»', 'Del árabe, \'los dos\'', 'De una danza aragonesa'],
          reliquia: 'Se cree que viene de «al limón», un juego de niños que se cogían de las manos. Hacer algo al alimón es hacerlo entre dos, a la vez.'
        },
        {
          expresion: 'Salir de Guatemala y meterse en [Guatepeor]',
          pregunta: '¿Qué es «Guatepeor»?',
          opciones: ['Un juego de palabras con Guatemala', 'Una ciudad vecina', 'Un volcán'],
          reliquia: 'Es un chiste con «Guate-mala»: si aquello era malo, lo otro es peor. Es salir de un apuro para caer en otro mayor.'
        }
      ] },

      // Día 56
      { reliquias: [
        {
          expresion: 'Dormir la [mona]',
          pregunta: '¿Qué es aquí la «mona»?',
          opciones: ['La borrachera', 'Un mono pequeño', 'Una muñeca'],
          reliquia: '«Mona» es la borrachera. Dormir la mona es dormir para que se pase.'
        },
        {
          expresion: 'En el [ínterin]',
          pregunta: '¿Qué significa «ínterin»?',
          opciones: ['Entretanto, en latín', 'Por dentro', 'Un pasillo'],
          reliquia: 'Es el adverbio latino interim, \'entretanto\'. En el ínterin es mientras tanto.'
        },
        {
          expresion: 'Dar [coba]',
          pregunta: '¿Qué es la «coba»?',
          opciones: ['Un halago fingido', 'Un trago de vino', 'Un juego de cartas'],
          reliquia: 'La coba es la adulación para ganarse a alguien. Dar coba es hacer la pelota.'
        }
      ] },

      // Día 57
      { reliquias: [
        {
          expresion: 'Por [mor] de',
          pregunta: '¿Qué es «mor»?',
          opciones: ['Una forma acortada de «amor»', 'Una medida antigua', 'El nombre de un río'],
          reliquia: '«Mor» es «amor» sin su primera letra. Por mor de es por causa de, por culpa de.'
        },
        {
          expresion: 'No ser moco de [pavo]',
          pregunta: '¿Qué es el «moco de pavo»?',
          opciones: ['El apéndice carnoso del pico del pavo', 'Un dulce', 'Un resfriado'],
          reliquia: 'Es el apéndice rojo que cuelga sobre el pico del pavo, que no sirve para nada. No ser moco de pavo es ser algo importante.'
        },
        {
          expresion: 'Más tonto que [Abundio]',
          pregunta: '¿Quién es «Abundio»?',
          opciones: ['Un personaje de chistes populares', 'Un santo de Córdoba', 'Un rey godo'],
          reliquia: 'Abundio es el tonto de muchos chistes, como el que vendió el coche para comprar gasolina.'
        }
      ] },

      // Día 58
      { reliquias: [
        {
          expresion: 'En [ciernes]',
          pregunta: '¿Qué es el «cierne»?',
          opciones: ['La floración de la vid o el trigo', 'Una criba de harina', 'Un capullo de seda'],
          reliquia: 'El cierne es la floración y fecundación de la vid, el olivo o el trigo. Estar en ciernes es estar en sus comienzos.'
        },
        {
          expresion: 'A [bote] pronto',
          pregunta: '¿Qué es el «bote»?',
          opciones: ['El salto de una pelota', 'Una barca', 'Un tarro'],
          reliquia: 'Se toma del juego de pelota: golpearla nada más botar. A bote pronto es sin pensarlo, sobre la marcha.'
        },
        {
          expresion: 'Ir de [tiros] largos',
          pregunta: '¿Qué eran los «tiros»?',
          opciones: ['Las correas que tiran del carruaje', 'Unos disparos de salva', 'Unas cintas de un traje'],
          reliquia: 'Los tiros son las correas con que las caballerías tiran del coche; los de gala eran largos. Ir de tiros largos es ir muy elegante.'
        }
      ] },

      // Día 59
      { reliquias: [
        {
          expresion: 'De [buten]',
          pregunta: '¿De dónde viene «buten»?',
          opciones: ['Del caló, la lengua de los gitanos', 'Del alemán gut, \'bueno\'', 'Del latín bonum'],
          reliquia: 'Viene del caló. De buten es excelente, de primera.'
        },
        {
          expresion: 'Tener [agallas]',
          pregunta: '¿Qué son las «agallas»?',
          opciones: ['Las branquias de los peces', 'Unas almendras', 'Unas espuelas'],
          reliquia: 'Las agallas son las branquias de los peces. Tener agallas es tener valor.'
        },
        {
          expresion: 'No andarse con [chiquitas]',
          pregunta: '¿Qué son las «chiquitas»?',
          opciones: ['Rodeos, evasivas', 'Niñas pequeñas', 'Copas de vino'],
          reliquia: 'Las chiquitas son excusas o rodeos para no afrontar algo. No andarse con chiquitas es ir directo al grano.'
        }
      ] },

      // Día 60
      { reliquias: [
        {
          expresion: 'Dormir al [raso]',
          pregunta: '¿Qué es el «raso»?',
          opciones: ['El campo sin techo', 'Una tela brillante', 'Un rasguño'],
          reliquia: 'El raso es el espacio sin techo ni resguardo. Dormir al raso es dormir a la intemperie.'
        },
        {
          expresion: 'Echar los [tejos]',
          pregunta: '¿Qué es un «tejo»?',
          opciones: ['La pieza que se lanza en algunos juegos', 'Una teja pequeña', 'Un regalo de boda'],
          reliquia: 'El tejo es la pieza plana que se tira en juegos como la rayuela. Echar los tejos es insinuarse a alguien.'
        },
        {
          expresion: 'Acabar como el rosario de la [aurora]',
          pregunta: '¿Qué era la «aurora» aquí?',
          opciones: ['El amanecer, cuando se rezaba el rosario por las calles', 'Una cofradía de mujeres', 'Un barco hundido'],
          reliquia: 'Los rosarios de la aurora eran procesiones al alba que a veces acababan a farolazos con los juerguistas. Acabar así es acabar mal y a golpes.'
        }
      ] },

      // Día 61
      { reliquias: [
        {
          expresion: 'Cortar al [bies]',
          pregunta: '¿Qué es el «bies»?',
          opciones: ['El sesgo, en diagonal', 'Un tipo de tela', 'Una tijera'],
          reliquia: 'Viene del francés biais, \'oblicuo\'. Cortar al bies es cortar la tela en diagonal.'
        },
        {
          expresion: 'En [cueros]',
          pregunta: '¿Qué son los «cueros»?',
          opciones: ['La piel', 'Unos odres de vino', 'Unas sandalias'],
          reliquia: '«Cuero» es la piel, también la humana. Estar en cueros es estar desnudo, sin más vestido que la piel.'
        },
        {
          expresion: 'A [machamartillo]',
          pregunta: '¿De qué está hecho «machamartillo»?',
          opciones: ['De «machar», machacar, y «martillo»', 'De «macho» y «martillo»', 'De un apellido vasco'],
          reliquia: 'Es como clavar a martillazos. A machamartillo es con firmeza y sin ceder.'
        }
      ] },

      // Día 62
      { reliquias: [
        {
          expresion: '[Erre] que erre',
          pregunta: '¿Qué es la «erre»?',
          opciones: ['La letra r', 'Un error', 'Una mula terca'],
          reliquia: 'Es la letra r, repetida una y otra vez. Erre que erre es con obstinación.'
        },
        {
          expresion: 'Entrar de [rondón]',
          pregunta: '¿Qué es el «rondón»?',
          opciones: ['Una entrada de golpe, sin llamar', 'Una ronda de vigilancia', 'Un baile en corro'],
          reliquia: 'Viene de «ronda». Entrar de rondón es colarse de repente, sin llamar ni pedir permiso.'
        },
        {
          expresion: 'Estar en el [candelero]',
          pregunta: '¿Qué es un «candelero»?',
          opciones: ['Un utensilio para sostener una vela', 'Un escenario de teatro', 'Un faro'],
          reliquia: 'El candelero sostiene la vela en alto, donde todos la ven. Estar en el candelero es estar en el centro de la atención.'
        }
      ] },

      // Día 63
      { reliquias: [
        {
          expresion: 'Montar en [cólera]',
          pregunta: '¿Qué es la «cólera»?',
          opciones: ['La bilis, uno de los humores del cuerpo', 'Una enfermedad', 'Un caballo'],
          reliquia: 'Para la medicina antigua, la cólera o bilis era el humor de la ira. Montar en cólera es enfurecerse.'
        },
        {
          expresion: 'Tener mucha [labia]',
          pregunta: '¿De dónde viene «labia»?',
          opciones: ['De «labio»', 'De «laborar»', 'De «lavar»'],
          reliquia: 'Viene de «labio». Tener labia es tener gracia y facilidad para convencer hablando.'
        },
        {
          expresion: 'Ponerse hecho un [basilisco]',
          pregunta: '¿Qué es un «basilisco»?',
          opciones: ['Un animal fabuloso que mataba con la mirada', 'Un emperador de Bizancio', 'Un perro de presa'],
          reliquia: 'Era un reptil legendario que mataba con solo mirar. Ponerse hecho un basilisco es enfurecerse muchísimo.'
        }
      ] },

      // Día 64
      { reliquias: [
        {
          expresion: 'Andar de picos [pardos]',
          pregunta: '¿Qué eran los «picos pardos»?',
          opciones: ['Unas faldas de color pardo', 'Unos pájaros', 'Unas montañas'],
          reliquia: 'Se relaciona con los picos pardos, la falda que llevaban por obligación las mujeres de la mala vida. Andar de picos pardos es irse de juerga.'
        },
        {
          expresion: 'Hacer [mella]',
          pregunta: '¿Qué es una «mella»?',
          opciones: ['La rotura en el filo o el borde de algo', 'Una herida en la frente', 'Una moneda gastada'],
          reliquia: 'La mella es el desperfecto en el filo de un arma o en el borde de un objeto. Hacer mella es causar efecto o impresión.'
        },
        {
          expresion: 'Pasar la noche en [vela]',
          pregunta: '¿Qué es la «vela»?',
          opciones: ['La vigilia, el estar despierto', 'Un cirio', 'La de un barco'],
          reliquia: '«Vela» es la acción de velar, de estar despierto. Pasar la noche en vela es no pegar ojo.'
        }
      ] },

      // Día 65
      { reliquias: [
        {
          expresion: 'Estar en [mantillas]',
          pregunta: '¿Qué son las «mantillas»?',
          opciones: ['Las telas en que se envolvía a los bebés', 'Unos velos de encaje', 'Unas mantas de mula'],
          reliquia: 'Las mantillas eran las telas con que se fajaba a los recién nacidos. Estar en mantillas es estar en los inicios.'
        },
        {
          expresion: 'Estar al [quite]',
          pregunta: '¿Qué es el «quite»?',
          opciones: ['El lance para apartar al toro de alguien', 'Una despedida', 'Un descuento'],
          reliquia: 'En el toreo, el quite es el lance con que se aparta al toro de quien está en peligro. Estar al quite es estar listo para ayudar.'
        },
        {
          expresion: 'Hacer [pinitos]',
          pregunta: '¿De dónde vienen los «pinitos»?',
          opciones: ['De «pino», que significaba \'erguido, en pie\'', 'De los árboles de Navidad', 'De un juego de bolos'],
          reliquia: '«Pino» significaba \'derecho, en pie\'. Los pinitos son los primeros pasos de un niño y, por extensión, los primeros intentos en algo.'
        }
      ] },

      // Día 66
      { reliquias: [
        {
          expresion: 'Saber al [dedillo]',
          pregunta: '¿Qué es el «dedillo»?',
          opciones: ['Un dedo, en diminutivo', 'Un dedal', 'Un dado'],
          reliquia: 'Es el diminutivo de «dedo», como quien repasa algo contando con los dedos. Saber algo al dedillo es saberlo perfectamente.'
        },
        {
          expresion: 'No hay [tu tía]',
          pregunta: '¿Qué es «tu tía»?',
          opciones: ['La atutía, un ungüento', 'Un pariente', 'Una tienda'],
          reliquia: 'Viene de «atutía», un ungüento que se tenía por remedio para todo; cuando no funcionaba, no había atutía. Es que no hay remedio.'
        },
        {
          expresion: 'Ser harina de otro [costal]',
          pregunta: '¿Qué es un «costal»?',
          opciones: ['Un saco grande de tela', 'Un costado', 'Una costilla'],
          reliquia: 'El costal es el saco en que se guarda el grano o la harina. Ser harina de otro costal es ser un asunto distinto.'
        }
      ] },

      // Día 67
      { reliquias: [
        {
          expresion: 'Al baño [María]',
          pregunta: '¿Quién era «María»?',
          opciones: ['Una alquimista de la Antigüedad', 'La Virgen María', 'Una cocinera francesa'],
          reliquia: 'Se atribuye a María la Judía, alquimista de Alejandría. Al baño María es calentar algo dentro de otro recipiente con agua.'
        },
        {
          expresion: 'A la antigua [usanza]',
          pregunta: '¿Qué es la «usanza»?',
          opciones: ['El uso o la costumbre', 'Una prenda de vestir', 'La usura'],
          reliquia: '«Usanza» es el uso o la costumbre. A la antigua usanza es como se hacía antes.'
        },
        {
          expresion: 'Tumbarse a la [bartola]',
          pregunta: '¿De dónde viene la «bartola»?',
          opciones: ['De Bartolo, nombre del hombre despreocupado', 'De una hamaca de tela', 'De una siesta larga'],
          reliquia: 'Se forma sobre Bartolo, nombre que se daba al hombre despreocupado. Tumbarse a la bartola es descansar sin ningún cuidado.'
        }
      ] },

      // Día 68
      { reliquias: [
        {
          expresion: 'Matar el [gusanillo]',
          pregunta: '¿Qué es el «gusanillo»?',
          opciones: ['El hambre o el ansia, como un gusano dentro', 'Una lombriz de pesca', 'Un fideo'],
          reliquia: 'Se decía que una copa de aguardiente en ayunas mataba los gusanos del estómago. Matar el gusanillo es comer algo para calmar el hambre.'
        },
        {
          expresion: 'Cantar las [cuarenta]',
          pregunta: '¿Qué son las «cuarenta»?',
          opciones: ['Un tanto del juego del tute', 'Las cuarenta horas de rezo', 'La cuaresma'],
          reliquia: 'En el tute, quien reúne rey y caballo del palo de triunfo «canta las cuarenta». Cantárselas a alguien es decirle sus verdades.'
        },
        {
          expresion: 'En un quítame allá esas [pajas]',
          pregunta: '¿Qué son aquí las «pajas»?',
          opciones: ['Algo sin importancia', 'Unas camas de paja', 'Unas pajitas para beber'],
          reliquia: 'Las pajas son lo que no vale nada. En un quítame allá esas pajas es en un instante, sin ninguna dificultad.'
        }
      ] },

      // Día 69
      { reliquias: [
        {
          expresion: 'Quedarse en agua de [borrajas]',
          pregunta: '¿Qué es la «borraja»?',
          opciones: ['Una planta de huerta', 'Un borrador', 'Una borrachera'],
          reliquia: 'La borraja es una planta de huerta, y su agua, una infusión de poco efecto. Quedarse en agua de borrajas es quedarse en nada.'
        },
        {
          expresion: 'Ir de [Herodes] a Pilatos',
          pregunta: '¿Quién era «Herodes»?',
          opciones: ['El rey de Judea ante quien llevaron a Jesús', 'Un emperador romano', 'Un santo'],
          reliquia: 'En la Pasión, Jesús fue enviado de Pilatos a Herodes y de vuelta. Ir de Herodes a Pilatos es ir de un sitio a otro sin resolver nada.'
        },
        {
          expresion: 'Dorar la [píldora]',
          pregunta: '¿Qué es la «píldora»?',
          opciones: ['Una pastilla de medicina', 'Una moneda', 'Una bola de billar'],
          reliquia: 'Los boticarios recubrían algunas píldoras amargas para que fueran más fáciles de tragar. Dorar la píldora es suavizar una mala noticia.'
        }
      ] },

      // Día 70
      { reliquias: [
        {
          expresion: 'Hacerse el [sueco]',
          pregunta: '¿De dónde viene este «sueco»?',
          opciones: ['Del latín soccus, un calzado tosco', 'De los habitantes de Suecia', 'De un actor del Siglo de Oro'],
          reliquia: 'Viene del latín soccus, el zueco que calzaban los cómicos; el «sueco» era el tosco, el que no se entera. Hacerse el sueco es fingir que no se entiende.'
        },
        {
          expresion: 'Cruzar el [Rubicón]',
          pregunta: '¿Qué es el «Rubicón»?',
          opciones: ['Un río de Italia', 'Una muralla romana', 'Un puerto de montaña'],
          reliquia: 'Era el río que marcaba el límite de Italia, y ningún general podía cruzarlo con su ejército. Julio César lo hizo en el 49 a. C. Cruzar el Rubicón es tomar una decisión sin vuelta atrás.'
        },
        {
          expresion: 'Hacer buenas [migas]',
          pregunta: '¿Qué son las «migas»?',
          opciones: ['Un plato de pan desmenuzado y frito', 'Las amistades del colegio', 'Monedas pequeñas'],
          reliquia: 'Las migas de pastor se hacen con pan duro desmenuzado y frito, y salen bien cuando el pan liga con el agua y la grasa. Hacer buenas migas es llevarse bien.'
        }
      ] },

      // Día 71
      { reliquias: [
        {
          expresion: 'Estar a la [cuarta] pregunta',
          pregunta: '¿Qué era la «cuarta pregunta»?',
          opciones: ['La de los bienes y rentas, en los interrogatorios', 'La última del catecismo', 'La del examen de bachiller'],
          reliquia: 'En los antiguos interrogatorios, la cuarta pregunta era la de los bienes y rentas del declarante. Estar a la cuarta pregunta es no tener ni un duro.'
        },
        {
          expresion: 'El talón de [Aquiles]',
          pregunta: '¿Quién era «Aquiles»?',
          opciones: ['Un héroe griego invulnerable salvo en el talón', 'Un zapatero de Atenas', 'Un gladiador romano'],
          reliquia: 'Su madre lo sumergió en la laguna Estigia sujetándolo por el talón, el único punto que quedó vulnerable. Allí le alcanzó la flecha de Paris.'
        },
        {
          expresion: 'Cortarse la [coleta]',
          pregunta: '¿Qué es la «coleta»?',
          opciones: ['La trenza que llevaban los toreros', 'La cola de un vestido', 'Una tarjeta de visita'],
          reliquia: 'Los toreros llevaban una pequeña trenza, la coleta (hoy es un añadido postizo). Cortársela es retirarse de los toros y, por extensión, de cualquier oficio.'
        }
      ] },

      // Día 72
      { reliquias: [
        {
          expresion: 'Armarse la [gorda]',
          pregunta: '¿Qué fue «la Gorda»?',
          opciones: ['La revolución de 1868', 'Una campana de la catedral de Toledo', 'Una gran tormenta del siglo XVIII'],
          reliquia: 'Así se llamaba a la revolución que se esperaba durante años y que estalló en 1868, la Gloriosa, que destronó a Isabel II. Armarse la gorda es armarse un gran lío.'
        },
        {
          expresion: 'Echar [margaritas] a los cerdos',
          pregunta: '¿Qué eran las «margaritas»?',
          opciones: ['Perlas', 'Flores silvestres', 'Monedas de oro'],
          reliquia: 'Viene del Evangelio: «No echéis vuestras perlas a los cerdos». En latín, margarita significa perla. Es dar algo valioso a quien no sabe apreciarlo.'
        },
        {
          expresion: 'A [borbotones]',
          pregunta: '¿Qué es un «borbotón»?',
          opciones: ['El burbujeo del agua que hierve o brota', 'Un botón grande', 'Un trago de vino'],
          reliquia: 'Es el burbujeo del agua que hierve o brota con fuerza; la palabra imita su sonido. Salir a borbotones es salir de golpe y atropelladamente.'
        }
      ] },

      // Día 73
      { reliquias: [
        {
          expresion: 'Poner los puntos sobre las [íes]',
          pregunta: '¿Por qué las «íes» llevan punto?',
          opciones: ['Para no confundirlas con otros trazos', 'Por orden de Alfonso X', 'Para indicar que se pronuncian largas'],
          reliquia: 'En la letra medieval, la i era un palito que se confundía con los trazos de la u, la m o la n, y los copistas empezaron a marcarla por encima. Poner los puntos sobre las íes es aclarar algo con todo detalle.'
        },
        {
          expresion: 'Llamar a [capítulo]',
          pregunta: '¿Qué era el «capítulo»?',
          opciones: ['La reunión de los monjes de un monasterio', 'Una parte de un libro', 'Un juicio militar'],
          reliquia: 'Los monjes se reunían en la sala capitular, donde se leía un capítulo de la regla y se reprendía a quien había faltado. Llamar a capítulo es pedir cuentas.'
        },
        {
          expresion: 'Estar de [Rodríguez]',
          pregunta: '¿Quién es «Rodríguez»?',
          opciones: ['Un apellido cualquiera, el del marido que se queda solo en verano', 'Un actor famoso de los años veinte', 'Un santo de agosto'],
          reliquia: 'Es un apellido de los más corrientes: el del marido que se quedaba trabajando en la ciudad mientras la familia veraneaba. Una película de 1965 lo hizo popular.'
        }
      ] },

      // Día 74
      { reliquias: [
        {
          expresion: 'Estar en la [inopia]',
          pregunta: '¿Qué significa «inopia»?',
          opciones: ['Pobreza, escasez', 'Sueño profundo', 'Un país imaginario'],
          reliquia: 'Viene del latín inopia, «pobreza, escasez». Estar en la inopia es estar en blanco, sin enterarse de nada.'
        },
        {
          expresion: 'Una victoria [pírrica]',
          pregunta: '¿De dónde sale «pírrica»?',
          opciones: ['De Pirro, un rey de Epiro', 'Del fuego, en griego pyr', 'De una ciudad de Sicilia'],
          reliquia: 'Pirro venció a los romanos en Ásculo (279 a. C.) con tantas bajas que, según Plutarco, dijo: «Otra victoria así y estamos perdidos».'
        },
        {
          expresion: 'Echar un [capote]',
          pregunta: '¿Qué es el «capote»?',
          opciones: ['La capa con que el torero distrae al toro', 'Un abrigo militar', 'Una capucha de fraile'],
          reliquia: 'Cuando un torero está en apuros, otro le echa el capote para que el toro se vaya tras él. Echar un capote es ayudar a alguien en un aprieto.'
        }
      ] },

      // Día 75
      { reliquias: [
        {
          expresion: 'Pelar la [pava]',
          pregunta: '¿Qué era la «pava»?',
          opciones: ['La hembra del pavo', 'Una manta para el frío', 'Una pipa de fumar'],
          reliquia: 'Cuenta la tradición que una criada, mandada a pelar una pava, se entretenía en la reja charlando con su novio. Pelar la pava es estar de charla amorosa.'
        },
        {
          expresion: 'Traer a [colación]',
          pregunta: '¿Qué era la «colación»?',
          opciones: ['La plática de los monjes sobre sus lecturas', 'Un tipo de dulce', 'Un collar de cuentas'],
          reliquia: 'Viene del latín collatio, «comparación, conferencia»: en los conventos era la plática sobre lecturas piadosas, y también la comida ligera que la seguía. Traer a colación es sacar un tema en la conversación.'
        },
        {
          expresion: 'A [palo] seco',
          pregunta: '¿Qué es el «palo» de esta expresión?',
          opciones: ['El mástil de un barco', 'Un bastón de pastor', 'Un trago de aguardiente'],
          reliquia: 'Navegar a palo seco era hacerlo con las velas recogidas, solo con los mástiles, durante un temporal. A palo seco es sin añadidos.'
        }
      ] },

      // Día 76
      { reliquias: [
        {
          expresion: 'Hacer [novillos]',
          pregunta: '¿Qué son los «novillos»?',
          opciones: ['Toros jóvenes', 'Días de fiesta en el colegio', 'Novatos de la escuela'],
          reliquia: 'Los novillos son toros jóvenes, y se cree que los chicos faltaban a la escuela para torearlos en el campo. Hacer novillos es faltar a clase.'
        },
        {
          expresion: 'Abrir la caja de [Pandora]',
          pregunta: '¿Quién era «Pandora»?',
          opciones: ['La primera mujer, según los griegos', 'Una diosa del mar', 'Una reina de Troya'],
          reliquia: 'Zeus le dio una jarra (no una caja) que no debía abrir; al hacerlo, escaparon todos los males del mundo y dentro solo quedó la esperanza.'
        },
        {
          expresion: 'De [refilón]',
          pregunta: '¿Qué quiere decir «de refilón»?',
          opciones: ['De lado, de pasada', 'Con mucha fuerza', 'A escondidas'],
          reliquia: 'Viene de «filo»: es lo que roza de lado, como el borde de un cuchillo. Ver algo de refilón es verlo de pasada.'
        }
      ] },

      // Día 77
      { reliquias: [
        {
          expresion: 'Salir de [naja]',
          pregunta: '¿De dónde viene «naja»?',
          opciones: ['Del caló, de un verbo que significa «irse»', 'De la naja, una serpiente', 'De un barco muy veloz'],
          reliquia: 'Viene del caló najar, «irse, huir». Salir de naja es marcharse deprisa. Por casualidad, Naja es también el nombre científico de las cobras.'
        },
        {
          expresion: 'Ser el [benjamín]',
          pregunta: '¿Quién era «Benjamín»?',
          opciones: ['El hijo menor de Jacob', 'Un niño prodigio', 'Un paje de la corte'],
          reliquia: 'Según la Biblia, Benjamín fue el último de los doce hijos de Jacob y su preferido. El benjamín es el menor de una familia o de un grupo.'
        },
        {
          expresion: 'Quedar en [tablas]',
          pregunta: '¿De dónde vienen las «tablas»?',
          opciones: ['Del ajedrez, cuando nadie gana', 'Del teatro', 'Del parchís'],
          reliquia: 'En ajedrez, la partida queda en tablas cuando ninguno de los dos puede ganar. Quedar en tablas es empatar.'
        }
      ] },

      // Día 78
      { reliquias: [
        {
          expresion: 'Tomar el [olivo]',
          pregunta: '¿Qué es el «olivo» de esta expresión?',
          opciones: ['Un árbol tras el que se refugiaban los toreros', 'La rama que se daba al vencedor', 'Un aceite para curar heridas'],
          reliquia: 'Se dice que, cuando se toreaba en el campo, los toreros se ponían a salvo tras los olivos. Tomar el olivo es refugiarse tras la barrera y, por extensión, huir.'
        },
        {
          expresion: 'Ser más [papista] que el papa',
          pregunta: '¿Qué es un «papista»?',
          opciones: ['Un partidario del papa', 'Un fabricante de papel', 'Un pastelero'],
          reliquia: 'Papista es el partidario del papa. Ser más papista que el papa es defender algo con más celo que el propio interesado.'
        },
        {
          expresion: 'Ser un [cero] a la izquierda',
          pregunta: '¿Por qué un «cero» a la izquierda?',
          opciones: ['Porque a la izquierda de una cifra no vale nada', 'Porque el cero se escribía en rojo', 'Porque era la nota más baja'],
          reliquia: 'Un cero a la izquierda de un número no cambia su valor: 07 es 7. Ser un cero a la izquierda es no pintar nada.'
        }
      ] },

      // Día 79
      { reliquias: [
        {
          expresion: 'Dar en el [clavo]',
          pregunta: '¿Qué era el «clavo»?',
          opciones: ['El que sujetaba el centro de la diana', 'Un clavo de herradura', 'La especia'],
          reliquia: 'Las dianas antiguas se sujetaban con un clavo en el centro, y acertar en él era el mejor tiro. Dar en el clavo es acertar de lleno.'
        },
        {
          expresion: 'Llorar como una [Magdalena]',
          pregunta: '¿Quién era la «Magdalena»?',
          opciones: ['María Magdalena, que lloró en la Pasión', 'Una reina de Castilla', 'Una monja de Ávila'],
          reliquia: 'María Magdalena llora al pie de la cruz y ante el sepulcro vacío, y los pintores la retrataron casi siempre en lágrimas. Llorar como una Magdalena es llorar sin consuelo.'
        },
        {
          expresion: 'De rancio [abolengo]',
          pregunta: '¿Qué es el «abolengo»?',
          opciones: ['La ascendencia, los antepasados', 'Un título nobiliario de Aragón', 'Un vino añejo'],
          reliquia: 'Viene de «abuelo»: el abolengo es el linaje. Y «rancio», aquí, quiere decir antiguo.'
        }
      ] },

      // Día 80
      { reliquias: [
        {
          expresion: 'Vivir de la [sopa boba]',
          pregunta: '¿Qué era la «sopa boba»?',
          opciones: ['La comida que daban los conventos a los pobres', 'Una sopa sin sal', 'Un juego de naipes'],
          reliquia: 'Los conventos repartían a los pobres y a los estudiantes una sopa hecha con sobras. Vivir de la sopa boba es vivir a costa de otros.'
        },
        {
          expresion: 'Ser un [mecenas]',
          pregunta: '¿Quién fue «Mecenas»?',
          opciones: ['Un consejero de Augusto que protegió a los poetas', 'Un banquero florentino', 'Un rey de Lidia'],
          reliquia: 'Cayo Mecenas, amigo del emperador Augusto, protegió a poetas como Virgilio y Horacio. Un mecenas es quien patrocina las artes.'
        },
        {
          expresion: 'Hacer [aguas]',
          pregunta: '¿De dónde viene «hacer aguas»?',
          opciones: ['De un barco que tiene una vía de agua', 'De las fuentes de un jardín', 'De las crecidas del río'],
          reliquia: 'Un barco hace agua cuando le entra por alguna grieta y empieza a hundirse. Algo que hace aguas empieza a fallar.'
        }
      ] },

      // Día 81
      { reliquias: [
        {
          expresion: 'Hacer [San Lunes]',
          pregunta: '¿Qué era «San Lunes»?',
          opciones: ['Un santo inventado para no trabajar el lunes', 'El patrón de los zapateros', 'La fiesta de un gremio de Madrid'],
          reliquia: 'No hay tal santo: los artesanos llamaban así al lunes en que, tras el domingo de juerga, no iban a trabajar.'
        },
        {
          expresion: 'Guerra sin [cuartel]',
          pregunta: '¿Qué era el «cuartel»?',
          opciones: ['El perdón que se concedía al vencido', 'Un edificio militar', 'Una cuarta parte del botín'],
          reliquia: 'Dar cuartel era perdonar la vida al enemigo que se rendía. Una guerra sin cuartel es una lucha a muerte, sin piedad.'
        },
        {
          expresion: 'Hacer [chiribitas] los ojos',
          pregunta: '¿Qué son las «chiribitas»?',
          opciones: ['Chispas', 'Lágrimas', 'Pestañas'],
          reliquia: 'Las chiribitas son chispas, y también las motitas que parecen verse tras un golpe. A quien le hacen chiribitas los ojos mira algo con mucha ilusión.'
        }
      ] },

      // Día 82
      { reliquias: [
        {
          expresion: 'Mandar a hacer [puñetas]',
          pregunta: '¿Qué son las «puñetas»?',
          opciones: ['Los encajes de los puños de las togas', 'Golpes con el puño', 'Unas tijeras pequeñas'],
          reliquia: 'Las puñetas son las bocamangas de encaje de las togas de jueces y magistrados, una labor lenta y minuciosa. Mandar a hacer puñetas es mandar a alguien a paseo.'
        },
        {
          expresion: 'Ser un [narciso]',
          pregunta: '¿Quién era «Narciso»?',
          opciones: ['Un joven que se enamoró de su reflejo', 'Un jardinero de Babilonia', 'Un dios del vino'],
          reliquia: 'Según el mito griego, Narciso se enamoró de su propia imagen en el agua y murió contemplándola; en su lugar brotó la flor que lleva su nombre.'
        },
        {
          expresion: 'Pasar por el [aro]',
          pregunta: '¿Qué es el «aro»?',
          opciones: ['El que saltan los animales amaestrados', 'Un anillo de boda', 'La argolla de los presos'],
          reliquia: 'En el circo, los animales amaestrados saltan a través de un aro. Pasar por el aro es hacer, a disgusto, lo que otro manda.'
        }
      ] },

      // Día 83
      { reliquias: [
        {
          expresion: 'Montar un [pollo]',
          pregunta: '¿De dónde viene este «pollo»?',
          opciones: ['Del «poyo», el banco de piedra al que se subían los oradores', 'De un pollo que se escapó en un mercado', 'De un baile del siglo XIX'],
          reliquia: 'Según la explicación más extendida, el poyo era el banco de piedra al que se subía quien quería arengar a la gente. Montar un pollo es armar un escándalo.'
        },
        {
          expresion: 'Romper una [lanza]',
          pregunta: '¿Dónde se rompían las «lanzas»?',
          opciones: ['En los torneos de caballeros', 'En las procesiones', 'En las cacerías reales'],
          reliquia: 'En los torneos, los caballeros rompían sus lanzas contra el rival en honor de una dama. Romper una lanza por alguien es salir en su defensa.'
        },
        {
          expresion: 'Estar hasta la [coronilla]',
          pregunta: '¿Qué es la «coronilla»?',
          opciones: ['La parte más alta de la cabeza', 'Una corona pequeña', 'El borde de un vaso'],
          reliquia: 'Es la parte más alta y posterior de la cabeza, donde los clérigos se rapaban la tonsura. Estar hasta la coronilla es estar harto hasta arriba.'
        }
      ] },

      // Día 84
      { reliquias: [
        {
          expresion: 'Despedirse a la [francesa]',
          pregunta: '¿Por qué «a la francesa»?',
          opciones: ['Por una costumbre de irse de las fiestas sin despedirse', 'Porque los franceses se despedían con dos besos', 'Por la retirada de Napoleón de Rusia'],
          reliquia: 'En los salones del siglo XVIII se tenía por elegante marcharse sin despedirse del anfitrión, para no interrumpir. En francés, en cambio, se dice «a la inglesa».'
        },
        {
          expresion: 'Arrojar el [guante]',
          pregunta: '¿Qué significaba arrojar el «guante»?',
          opciones: ['Retar a un duelo', 'Rendirse en una batalla', 'Pedir la mano de una dama'],
          reliquia: 'El caballero medieval arrojaba su guante ante otro para desafiarlo; recogerlo era aceptar el duelo.'
        },
        {
          expresion: 'Dar el [callo]',
          pregunta: '¿Qué es el «callo»?',
          opciones: ['La dureza que sale en las manos de tanto trabajar', 'Un plato de tripas', 'Un clavo de herradura'],
          reliquia: 'El callo es la dureza que sale en la piel por el roce del trabajo. Dar el callo es trabajar duro.'
        }
      ] },

      // Día 85
      { reliquias: [
        {
          expresion: 'Pasar las de [Caín]',
          pregunta: '¿Quién era «Caín»?',
          opciones: ['El hijo de Adán que mató a su hermano', 'Un rey de Babilonia', 'Un profeta del desierto'],
          reliquia: 'Tras matar a Abel, Caín fue condenado a vagar errante por la tierra. Pasar las de Caín es sufrir grandes penalidades.'
        },
        {
          expresion: 'Defender a [capa] y espada',
          pregunta: '¿Por qué «capa y espada»?',
          opciones: ['Eran el atuendo de los caballeros del Siglo de Oro', 'Eran las armas de los toreros', 'Eran la insignia de los alguaciles'],
          reliquia: 'La capa y la espada eran el atuendo del caballero, que se defendía con la espada envolviéndose el brazo con la capa. Hubo incluso comedias «de capa y espada».'
        },
        {
          expresion: 'Más sordo que una [tapia]',
          pregunta: '¿Qué es una «tapia»?',
          opciones: ['Un muro de tierra apisonada', 'Una puerta de establo', 'Una campana sin badajo'],
          reliquia: 'La tapia es un muro de tierra amasada y apisonada en un molde. Como cualquier pared, no oye nada.'
        }
      ] },

      // Día 86
      { reliquias: [
        {
          expresion: 'Hablar en [cristiano]',
          pregunta: '¿Qué es «cristiano» aquí?',
          opciones: ['La lengua romance, frente al árabe o al hebreo', 'El latín de la misa', 'La lengua de los misioneros'],
          reliquia: 'En la Edad Media, frente a quienes hablaban árabe o hebreo, «cristiano» era la lengua romance. Hablar en cristiano es hablar claro.'
        },
        {
          expresion: 'Quemar las [naves]',
          pregunta: '¿Qué «naves» se perdieron?',
          opciones: ['Las de Hernán Cortés en Veracruz', 'Las de la Armada Invencible', 'Las de Colón en La Española'],
          reliquia: 'En 1519 Cortés hizo hundir (no quemar) sus naves para que sus hombres no pudieran volver a Cuba. Quemar las naves es tomar una decisión sin vuelta atrás.'
        },
        {
          expresion: 'Estar en el [limbo]',
          pregunta: '¿Qué era el «limbo»?',
          opciones: ['Un lugar del más allá para los niños sin bautizar', 'Un río del infierno', 'Una danza del Caribe'],
          reliquia: 'Según la teología medieval, al limbo iban las almas de los niños muertos sin bautizar: sin sufrir, pero sin ver a Dios. Estar en el limbo es estar distraído.'
        }
      ] },

      // Día 87
      { reliquias: [
        {
          expresion: 'Dormirse en los [laureles]',
          pregunta: '¿Qué eran los «laureles»?',
          opciones: ['Las coronas de los vencedores', 'Un jardín de un palacio', 'Una cama de hierba'],
          reliquia: 'Griegos y romanos coronaban con laurel a los vencedores. Dormirse en los laureles es confiarse tras un éxito.'
        },
        {
          expresion: 'Colgar el [sambenito]',
          pregunta: '¿Qué era el «sambenito»?',
          opciones: ['El capotillo de los penitentes de la Inquisición', 'Un hábito de los monjes benedictinos', 'Un dulce de convento'],
          reliquia: 'Era el capotillo con el nombre del condenado que la Inquisición imponía a los penitentes, y que después se colgaba en la iglesia. Colgarle a alguien el sambenito es cargarle una mala fama.'
        },
        {
          expresion: 'Dar la [puntilla]',
          pregunta: '¿Qué es la «puntilla»?',
          opciones: ['El puñal con que se remata al toro', 'Un encaje fino', 'La punta del pie'],
          reliquia: 'La puntilla es el puñal corto con que se remata al toro. Dar la puntilla es acabar con algo que ya estaba mal.'
        }
      ] },

      // Día 88
      { reliquias: [
        {
          expresion: 'Poner una [pica] en Flandes',
          pregunta: '¿Qué era la «pica»?',
          opciones: ['Una lanza larga de infantería', 'Una moneda flamenca', 'Una bandera'],
          reliquia: 'Llevar un piquero hasta Flandes costaba muchísimo dinero y esfuerzo en el siglo XVI. Poner una pica en Flandes es lograr algo muy difícil.'
        },
        {
          expresion: 'Ser un [adonis]',
          pregunta: '¿Quién era «Adonis»?',
          opciones: ['Un joven bellísimo amado por Afrodita', 'Un rey de Esparta', 'Un escultor de Atenas'],
          reliquia: 'En el mito griego, Adonis era tan hermoso que Afrodita se enamoró de él. Un adonis es un joven muy guapo.'
        },
        {
          expresion: 'Dar [carpetazo]',
          pregunta: '¿Qué es un «carpetazo»?',
          opciones: ['Cerrar la carpeta de un expediente', 'Un golpe con una carpeta', 'Un recorte de papel'],
          reliquia: 'Es la acción de cerrar la carpeta de un expediente para no seguir tramitándolo. Dar carpetazo a un asunto es darlo por terminado.'
        }
      ] },

      // Día 89
      { reliquias: [
        {
          expresion: 'De [órdago]',
          pregunta: '¿Qué es el «órdago»?',
          opciones: ['Un envite del mus en que se apuesta todo', 'Un río del País Vasco', 'Un baile popular'],
          reliquia: 'Viene del vasco hor dago, «ahí está». En el mus, el órdago es el envite de todo el juego. Algo de órdago es enorme, tremendo.'
        },
        {
          expresion: 'Echar [pestes]',
          pregunta: '¿Qué eran las «pestes»?',
          opciones: ['Epidemias, y de ahí, maldiciones', 'Malos olores de la calle', 'Plagas del campo'],
          reliquia: 'La peste era la peor de las calamidades. Echar pestes de alguien es hablar muy mal de él, como deseándole lo peor.'
        },
        {
          expresion: 'Dar [esquinazo]',
          pregunta: '¿Qué es un «esquinazo»?',
          opciones: ['Doblar una esquina para despistar a alguien', 'Un golpe con la esquina de una mesa', 'Un saque de esquina'],
          reliquia: 'Es doblar una esquina para quitarse de encima a quien te sigue. Dar esquinazo es evitar a alguien. En Chile, en cambio, un esquinazo es una serenata.'
        }
      ] },

      // Día 90
      { reliquias: [
        {
          expresion: 'Hacer las [Américas]',
          pregunta: '¿Qué eran «las Américas»?',
          opciones: ['El continente adonde emigraban los españoles a hacer fortuna', 'Una tienda de ultramarinos', 'Una compañía de barcos'],
          reliquia: 'Desde el siglo XIX, muchos españoles, los indianos, emigraron a América para hacer fortuna. Hacer las Américas es enriquecerse en poco tiempo.'
        },
        {
          expresion: 'A [ciencia] cierta',
          pregunta: '¿Qué significa «ciencia» aquí?',
          opciones: ['Conocimiento', 'Química', 'Adivinación'],
          reliquia: 'En latín, scientia es simplemente conocimiento. Saber algo a ciencia cierta es saberlo con seguridad.'
        },
        {
          expresion: 'A [trompicones]',
          pregunta: '¿Qué es un «trompicón»?',
          opciones: ['Un tropezón', 'Un toque de trompeta', 'Un golpe con una peonza'],
          reliquia: 'Es cada tropezón que da quien camina con torpeza. Hacer algo a trompicones es hacerlo a ratos y con dificultad.'
        }
      ] },

      // Día 91
      { reliquias: [
        {
          expresion: 'No llegar la sangre al [río]',
          pregunta: '¿Qué significa «no llegar la sangre al río»?',
          opciones: ['Que una pelea no llega a mayores', 'Que no hubo muertos en la guerra', 'Que el río no se desborda'],
          reliquia: 'Se dice cuando una disputa no tiene consecuencias graves.'
        },
        {
          expresion: 'Echar [leña] al fuego',
          pregunta: '¿Qué hace la «leña»?',
          opciones: ['Avivar el fuego', 'Apagarlo', 'Hacer humo'],
          reliquia: 'Echar leña al fuego es avivar un conflicto o una discusión.'
        },
        {
          expresion: 'A la [desbandada]',
          pregunta: '¿Qué es una «desbandada»?',
          opciones: ['Una huida en desorden, rompiendo la formación', 'Una banda de música', 'Un desfile'],
          reliquia: 'Viene de «banda», el grupo de soldados. Salir a la desbandada es huir en desorden.'
        }
      ] },

      // Día 92
      { reliquias: [
        {
          expresion: 'Estar hasta el [gorro]',
          pregunta: '¿Por qué el «gorro»?',
          opciones: ['Por estar lleno de algo hasta arriba, hasta la cabeza', 'Por el frío', 'Por un uniforme'],
          reliquia: 'Estar hasta el gorro es estar harto.'
        },
        {
          expresion: 'Entre la [espada] y la pared',
          pregunta: '¿Por qué la «espada» y la pared?',
          opciones: ['Por quien está acorralado, sin poder retroceder', 'Por un duelo entre caballeros', 'Por una prueba de esgrima'],
          reliquia: 'Es la situación del que tiene delante un arma y detrás un muro. Estar entre la espada y la pared es no tener salida.'
        },
        {
          expresion: 'Más terco que una [mula]',
          pregunta: '¿Por qué la «mula»?',
          opciones: ['Por su fama de testaruda', 'Por su fuerza', 'Por su lentitud'],
          reliquia: 'Las mulas tienen fama de no moverse cuando no quieren. Ser más terco que una mula es ser muy cabezota.'
        }
      ] },

      // Día 93
      { reliquias: [
        {
          expresion: 'De una [tacada]',
          pregunta: '¿Qué es una «tacada»?',
          opciones: ['Un golpe del taco de billar', 'Un trago', 'Un mordisco'],
          reliquia: 'En el billar, una tacada es una serie de carambolas sin fallar. Hacer algo de una tacada es hacerlo de una sola vez.'
        },
        {
          expresion: 'Ser un [donjuán]',
          pregunta: '¿Quién era don Juan?',
          opciones: ['Un seductor de mujeres de la literatura española', 'Un rey de Castilla', 'Un poeta'],
          reliquia: 'Don Juan Tenorio, de Tirso de Molina y de Zorrilla, es el gran conquistador de la literatura. Un donjuán es un seductor.'
        },
        {
          expresion: 'Hacer la [rosca]',
          pregunta: '¿Qué es aquí la «rosca»?',
          opciones: ['El gesto de dar vueltas alrededor de alguien para agradarle', 'Un dulce', 'Un tornillo'],
          reliquia: 'Hacer la rosca es adular a alguien para conseguir algo.'
        }
      ] },

      // Día 94
      { reliquias: [
        {
          expresion: 'Más pobre que una [rata]',
          pregunta: '¿Por qué la «rata»?',
          opciones: ['Por vivir en sitios miserables, sin nada', 'Por ser muy pequeña', 'Por comer poco'],
          reliquia: 'Ser más pobre que una rata es ser pobrísimo.'
        },
        {
          expresion: 'Más largo que la [Cuaresma]',
          pregunta: '¿Qué es la «Cuaresma»?',
          opciones: ['Los cuarenta días de ayuno antes de Pascua', 'Un sermón', 'Una procesión'],
          reliquia: 'Con sus ayunos y abstinencias, la Cuaresma se hacía eterna. Ser más largo que la Cuaresma es durar muchísimo.'
        },
        {
          expresion: 'Por arte de [birlibirloque]',
          pregunta: '¿Qué es el «birlibirloque»?',
          opciones: ['Una forma de decir magia, sin explicación', 'Un juego de cartas', 'Un truco de feria'],
          reliquia: 'Por arte de birlibirloque es por arte de magia, sin que se sepa cómo.'
        }
      ] },

      // Día 95
      { reliquias: [
        {
          expresion: 'En [fila] india',
          pregunta: '¿Por qué «india»?',
          opciones: ['Por los indígenas de América, que caminaban uno detrás de otro', 'Por un juego infantil', 'Por los soldados'],
          reliquia: 'Se cuenta que así caminaban los indígenas americanos, pisando las huellas del de delante. Es ir en fila de uno.'
        },
        {
          expresion: 'A rienda [suelta]',
          pregunta: '¿Qué es ir «a rienda suelta»?',
          opciones: ['Sin freno, con toda libertad, como el caballo sin sujetar', 'Despacio', 'Con miedo'],
          reliquia: 'Es la imagen del caballo al que no se sujeta. Hacer algo a rienda suelta es hacerlo sin control.'
        },
        {
          expresion: 'Hecho un [Cristo]',
          pregunta: '¿Por qué «un Cristo»?',
          opciones: ['Por las imágenes del crucificado, llenas de heridas', 'Por un traje de penitente', 'Por la corona de espinas en la cabeza'],
          reliquia: 'Las imágenes de la Pasión muestran a Cristo herido y maltrecho. Estar hecho un Cristo es estar lleno de heridas o muy desastrado.'
        }
      ] },

      // Día 96
      { reliquias: [
        {
          expresion: 'Una vida [espartana]',
          pregunta: '¿Cómo vivían los espartanos?',
          opciones: ['Con una disciplina austera y dura', 'Con muchos lujos', 'Dedicados a la poesía'],
          reliquia: 'En Esparta se educaba a los niños para la guerra, con frío, hambre y disciplina. Una vida espartana es una vida austera.'
        },
        {
          expresion: 'De tú a [tú]',
          pregunta: '¿Qué es hablar «de tú a tú»?',
          opciones: ['De igual a igual', 'Con confianza', 'Muy cerca'],
          reliquia: 'Es tratarse sin jerarquías, como iguales.'
        },
        {
          expresion: 'Poner como [chupa] de dómine',
          pregunta: '¿Qué era la «chupa»?',
          opciones: ['Una chaqueta', 'Un caramelo', 'Una pipa de fumar'],
          reliquia: 'La chupa era una chaqueta de faldones, y la de los dómines, los maestros de latín, solía estar sucia y ajada. Poner a alguien como chupa de dómine es criticarlo sin piedad.'
        }
      ] },

      // Día 97
      { reliquias: [
        {
          expresion: 'Tomar el [pelo]',
          pregunta: '¿De qué viene «tomar el pelo»?',
          opciones: ['De tirar del pelo o de la barba en son de burla', 'De una apuesta de barberos', 'De un juego de niños'],
          reliquia: 'Tirar de la barba era una gran ofensa en la Edad Media. Tomar el pelo es burlarse de alguien.'
        },
        {
          expresion: 'Dar la [campanada]',
          pregunta: '¿Qué es una «campanada»?',
          opciones: ['El toque de una campana, que todo el mundo oye', 'Un golpe en la cabeza', 'Una boda'],
          reliquia: 'La campana se oye en todo el pueblo. Dar la campanada es hacer algo que sorprende o escandaliza a todos.'
        },
        {
          expresion: 'Ser la [pera]',
          pregunta: '¿Por qué la «pera»?',
          opciones: ['Es una forma de decir que algo es el colmo, para bien o para mal', 'Por ser la fruta más rica', 'Por la forma de la cara'],
          reliquia: 'Ser la pera es ser extraordinario o el colmo.'
        }
      ] },

      // Día 98
      { reliquias: [
        {
          expresion: 'A la [tremenda]',
          pregunta: '¿Qué es tomarse algo «a la tremenda»?',
          opciones: ['Darle demasiada importancia', 'Ir muy rápido', 'Gritar mucho'],
          reliquia: 'Tomarse algo a la tremenda es exagerarlo y dramatizar.'
        },
        {
          expresion: 'Ni corto ni [perezoso]',
          pregunta: '¿Qué significa «ni corto ni perezoso»?',
          opciones: ['Sin timidez ni pereza, con decisión', 'Muy alto', 'Muy deprisa'],
          reliquia: 'Es lanzarse a hacer algo sin dudar.'
        },
        {
          expresion: 'Echar una [cana] al aire',
          pregunta: '¿Por qué una «cana»?',
          opciones: ['Por ser cosa de personas mayores que se permiten una diversión', 'Porque los viejos se tiraban del pelo', 'Porque las canas traen suerte'],
          reliquia: 'La cana es el pelo blanco de la edad. Echar una cana al aire es, para alguien serio o mayor, permitirse una juerga o una aventura.'
        }
      ] },

      // Día 99
      { reliquias: [
        {
          expresion: 'Ser un [camelo]',
          pregunta: '¿Qué es un «camelo»?',
          opciones: ['Una burla, un engaño', 'Un camello pequeño', 'Un caramelo'],
          reliquia: 'Viene del caló «camelar», \'querer, enamorar\'. Un camelo es un engaño o una noticia falsa.'
        },
        {
          expresion: 'Echar las campanas al [vuelo]',
          pregunta: '¿Qué es echar las campanas al «vuelo»?',
          opciones: ['Tocarlas dándoles la vuelta entera, en señal de fiesta', 'Soltarlas desde la torre', 'Tocarlas en un entierro'],
          reliquia: 'Las campanas se voltean en las grandes celebraciones. Echarlas al vuelo es dar por hecho un éxito, a veces antes de tiempo.'
        },
        {
          expresion: 'No importar un [comino]',
          pregunta: '¿Qué es un «comino»?',
          opciones: ['Una semilla diminuta, de muy poco valor', 'Un camino', 'Una moneda'],
          reliquia: 'La semilla del comino es pequeñísima. No importar un comino es no importar nada.'
        }
      ] },

      // Día 100
      { reliquias: [
        {
          expresion: 'Ir viento en [popa]',
          pregunta: '¿Qué es la «popa»?',
          opciones: ['La parte de atrás del barco', 'La vela mayor', 'El timón'],
          reliquia: 'Cuando el viento sopla por detrás, por la popa, el barco navega a toda velocidad. Ir viento en popa es ir muy bien.'
        },
        {
          expresion: 'Estar entre [Pinto] y Valdemoro',
          pregunta: '¿Qué tienen Pinto y Valdemoro?',
          opciones: ['Son dos pueblos vecinos de Madrid separados por un arroyo', 'Son dos ríos', 'Eran dos toreros'],
          reliquia: 'Se cuenta de un borracho que saltaba el arroyo que separa los dos pueblos diciendo «ahora estoy en Pinto, ahora en Valdemoro». Estar entre Pinto y Valdemoro es estar indeciso o algo bebido.'
        },
        {
          expresion: 'A [ras] de',
          pregunta: '¿Qué significa «ras»?',
          opciones: ['Al mismo nivel, casi tocando', 'Rápido', 'Debajo'],
          reliquia: 'A ras de suelo es casi tocándolo.'
        }
      ] },

      // Día 101
      { reliquias: [
        {
          expresion: 'En un [pispás]',
          pregunta: '¿Qué es un «pispás»?',
          opciones: ['Un instante', 'Un susurro', 'Un pellizco'],
          reliquia: 'Es una onomatopeya de algo muy rápido. En un pispás es en un momento.'
        },
        {
          expresion: 'No ser [manco]',
          pregunta: '¿Qué significa «no ser manco»?',
          opciones: ['Ser hábil, sobre todo con las manos', 'Tener dos brazos', 'Ser buen boxeador'],
          reliquia: 'No ser manco es ser diestro en algo.'
        },
        {
          expresion: 'Hacer la [pascua]',
          pregunta: '¿Por qué la «pascua»?',
          opciones: ['Por ironía: lo que debería ser una fiesta acaba siendo un fastidio', 'Porque en Pascua se trabajaba mucho', 'Porque la Pascua cambiaba de fecha'],
          reliquia: 'Hacer la pascua a alguien es fastidiarle o causarle un perjuicio.'
        }
      ] },

      // Día 102
      { reliquias: [
        {
          expresion: 'Más malo que la [quina]',
          pregunta: '¿Qué es la «quina»?',
          opciones: ['La corteza de un árbol, muy amarga, que se usaba como medicina', 'Una planta venenosa', 'Un vino'],
          reliquia: 'Con la quina se trataban las fiebres, y su sabor era amarguísimo. Ser más malo que la quina es ser malísimo.'
        },
        {
          expresion: 'Hacer el [ganso]',
          pregunta: '¿Por qué el «ganso»?',
          opciones: ['Por los andares torpes y ruidosos de esta ave', 'Por un juego de mesa', 'Por un payaso francés'],
          reliquia: 'El ganso se tenía por animal torpe y bobo. Hacer el ganso es hacer tonterías para divertir.'
        },
        {
          expresion: 'De [oídas]',
          pregunta: '¿Qué es saber algo «de oídas»?',
          opciones: ['Por haberlo oído a otros', 'Con buen oído', 'Escuchando música'],
          reliquia: 'Conocer algo de oídas es no haberlo visto uno mismo.'
        }
      ] },

      // Día 103
      { reliquias: [
        {
          expresion: 'Más listo que el [hambre]',
          pregunta: '¿Por qué el «hambre»?',
          opciones: ['Porque el hambre agudiza el ingenio', 'Porque el hambre corre mucho', 'Porque es muy antigua'],
          reliquia: 'Es la misma idea que «la necesidad aguza el ingenio». Más listo que el hambre es muy espabilado.'
        },
        {
          expresion: 'Ni [mu]',
          pregunta: '¿Qué es el «mu»?',
          opciones: ['El mugido de la vaca, el sonido mínimo', 'Una letra griega', 'Un insulto'],
          reliquia: 'No decir ni mu es no decir absolutamente nada.'
        },
        {
          expresion: 'Del [tirón]',
          pregunta: '¿Qué es hacer algo «del tirón»?',
          opciones: ['De una sola vez, sin parar', 'Tirando de algo', 'Con violencia'],
          reliquia: 'Leer un libro del tirón es leerlo sin interrupción.'
        }
      ] },

      // Día 104
      { reliquias: [
        {
          expresion: 'Un trabajo de [Sísifo]',
          pregunta: '¿Cuál era el castigo de Sísifo?',
          opciones: ['Subir una roca a una montaña que siempre volvía a caer', 'Llenar un tonel agujereado', 'Sostener el cielo'],
          reliquia: 'Los dioses lo condenaron a empujar eternamente una piedra cuesta arriba. Un trabajo de Sísifo es una tarea inútil y sin fin.'
        },
        {
          expresion: 'Ser [pan] comido',
          pregunta: '¿Por qué «pan» comido?',
          opciones: ['Porque el pan es lo más fácil de comer', 'Porque el pan se come el primero', 'Porque el pan es barato'],
          reliquia: 'Ser pan comido es ser algo muy fácil.'
        },
        {
          expresion: 'Hacer [pucheros]',
          pregunta: '¿Qué son aquí los «pucheros»?',
          opciones: ['Los gestos de la boca antes de llorar', 'Las ollas de barro', 'Los cocidos'],
          reliquia: 'El gesto de la boca del niño a punto de llorar recuerda a la boca de una olla. Hacer pucheros es poner cara de llanto.'
        }
      ] },

      // Día 105
      { reliquias: [
        {
          expresion: 'No tener dónde caerse [muerto]',
          pregunta: '¿Qué significa «no tener dónde caerse muerto»?',
          opciones: ['Ser muy pobre', 'Estar muy cansado', 'No tener casa en el pueblo'],
          reliquia: 'Quien no tiene dónde caerse muerto no tiene ni un trozo de tierra propia.'
        },
        {
          expresion: 'Tomar el [rábano] por las hojas',
          pregunta: '¿Por qué se habla del «rábano»?',
          opciones: ['Porque lo que se come es la raíz, no las hojas', 'Porque es la hortaliza más barata', 'Porque pica mucho'],
          reliquia: 'Del rábano se aprovecha la raíz. Tomarlo por las hojas es agarrarlo por la parte que no importa: interpretar algo al revés de como se dijo.'
        },
        {
          expresion: 'Poner en [jaque]',
          pregunta: '¿De qué juego viene?',
          opciones: ['Del ajedrez, cuando se amenaza al rey', 'De las damas', 'Del parchís'],
          reliquia: 'Viene del persa shah, \'rey\'. Poner en jaque es poner en un apuro.'
        }
      ] },

      // Día 106
      { reliquias: [
        {
          expresion: 'Más corto que las mangas de un [chaleco]',
          pregunta: '¿Por qué el «chaleco»?',
          opciones: ['Porque el chaleco no tiene mangas', 'Porque es muy corto', 'Porque es estrecho'],
          reliquia: 'Ser más corto que las mangas de un chaleco es ser muy tímido o muy torpe.'
        },
        {
          expresion: 'Hacer [puente]',
          pregunta: '¿Qué es hacer «puente»?',
          opciones: ['Unir dos festivos tomando libre el día de en medio', 'Construir un puente', 'Saltar un río'],
          reliquia: 'Como un puente une dos orillas, el día libre une dos festivos.'
        },
        {
          expresion: 'Bajarse del [burro]',
          pregunta: '¿Por qué el «burro»?',
          opciones: ['Por quien se apea de su terquedad, como de su montura', 'Por un juego de feria', 'Por un castigo escolar'],
          reliquia: 'Bajarse del burro es dar la razón al otro y abandonar la cabezonería.'
        }
      ] },

      // Día 107
      { reliquias: [
        {
          expresion: 'El canto del [cisne]',
          pregunta: '¿Qué se decía del «cisne»?',
          opciones: ['Que canta de forma bellísima justo antes de morir', 'Que no canta nunca', 'Que canta al amanecer'],
          reliquia: 'Era una creencia antigua, sin base real. El canto del cisne es la última obra o actuación de alguien.'
        },
        {
          expresion: 'Ir a [pachas]',
          pregunta: '¿Qué es ir «a pachas»?',
          opciones: ['Pagar a medias', 'Ir despacio', 'Ir en burro'],
          reliquia: 'Ir a pachas es pagar a partes iguales. El origen de la palabra es dudoso.'
        },
        {
          expresion: 'Ni harto de [vino]',
          pregunta: '¿Qué significa «ni harto de vino»?',
          opciones: ['Ni aunque estuviera borracho', 'Ni aunque pagaran', 'Ni aunque lloviera'],
          reliquia: 'Es decir que uno no haría algo ni en el peor de los estados.'
        }
      ] },

      // Día 108
      { reliquias: [
        {
          expresion: 'Hacer el [vacío]',
          pregunta: '¿Qué es el «vacío»?',
          opciones: ['El espacio sin nadie alrededor', 'Un agujero', 'El hambre'],
          reliquia: 'Hacerle el vacío a alguien es aislarlo y no hacerle caso.'
        },
        {
          expresion: 'Trabajo de [chinos]',
          pregunta: '¿Por qué de «chinos»?',
          opciones: ['Por la fama de trabajos minuciosos y pacientes de los artesanos chinos', 'Por los obreros chinos del ferrocarril', 'Por los dibujos en tinta china'],
          reliquia: 'Se refiere a un trabajo minucioso y que exige mucha paciencia, como los marfiles tallados que llegaban de China.'
        },
        {
          expresion: 'Ser [Perico] de los palotes',
          pregunta: '¿Quién era «Perico el de los palotes»?',
          opciones: ['Un personaje inventado para hablar de cualquiera', 'Un tamborilero famoso', 'Un rey de Navarra'],
          reliquia: 'Es un nombre de fantasía, como Fulano o Mengano. Se usa para hablar de una persona cualquiera, sin importancia.'
        }
      ] },

      // Día 109
      { reliquias: [
        {
          expresion: 'Dar [carta] blanca',
          pregunta: '¿Qué era la «carta blanca»?',
          opciones: ['Un papel firmado en blanco para que otro lo rellene', 'Una baraja nueva', 'Un salvoconducto'],
          reliquia: 'Era un documento firmado sin texto, para que el portador escribiera lo que quisiera. Dar carta blanca es dar libertad total.'
        },
        {
          expresion: 'Liarse la [manta] a la cabeza',
          pregunta: '¿Por qué la «manta»?',
          opciones: ['Por el que se tapaba la cabeza para lanzarse sin ver el peligro', 'Por un disfraz de carnaval', 'Por el frío del invierno'],
          reliquia: 'Es la imagen del que se lanza a algo arriesgado sin pensarlo, cubriéndose para no ver. Liarse la manta a la cabeza es decidirse a todo.'
        },
        {
          expresion: 'A [saco]',
          pregunta: '¿Qué es entrar «a saco»?',
          opciones: ['Entrar saqueando, sin miramientos', 'Entrar con un saco', 'Entrar de noche'],
          reliquia: 'Saquear una ciudad era entrar «a saco». Hoy, ir a saco es hacer algo sin contemplaciones.'
        }
      ] },

      // Día 110
      { reliquias: [
        {
          expresion: 'Poner en tela de [juicio]',
          pregunta: '¿Qué es la «tela de juicio»?',
          opciones: ['El proceso o la discusión de un tribunal', 'Una tela de toga', 'Un mantel'],
          reliquia: '«Tela» se decía también del asunto que se discutía. Poner algo en tela de juicio es ponerlo en duda.'
        },
        {
          expresion: 'Arrimar el [hombro]',
          pregunta: '¿Por qué el «hombro»?',
          opciones: ['Por el gesto de empujar una carga con él', 'Por apoyarse en alguien', 'Por llevar sacos a cuestas'],
          reliquia: 'Es lo que se hace para mover algo pesado entre varios. Arrimar el hombro es colaborar en un trabajo.'
        },
        {
          expresion: 'Hacer [mangas] y [capirotes]',
          pregunta: '¿Qué era un «capirote»?',
          opciones: ['Una capucha alta y puntiaguda', 'Un cuello de encaje', 'Una manga muy larga'],
          reliquia: 'El capirote era un gorro alto o una capucha, como la de los penitentes. Hacer mangas y capirotes es hacer lo que a uno le da la gana, sin orden ni concierto.'
        }
      ] },

      // Día 111
      { reliquias: [
        {
          expresion: 'Ser un [garbanzo] negro',
          pregunta: '¿Qué es un «garbanzo negro»?',
          opciones: ['El que es distinto y malo entre los demás', 'El garbanzo tostado', 'El más grande del cocido'],
          reliquia: 'Como el garbanzo que sale negro en el cocido, es quien desentona en un grupo por su mala conducta.'
        },
        {
          expresion: 'De [postín]',
          pregunta: '¿Qué es algo «de postín»?',
          opciones: ['De lujo, distinguido', 'Postizo', 'Antiguo'],
          reliquia: 'Es algo elegante o de categoría.'
        },
        {
          expresion: 'Hacer la [cama] a alguien',
          pregunta: '¿Por qué «la cama»?',
          opciones: ['Por preparar en secreto el sitio donde alguien va a caer', 'Por el servicio de las casas', 'Por un juego de niños'],
          reliquia: 'Es preparar en secreto la caída de alguien, como quien le prepara la cama para que se tumbe en ella.'
        }
      ] },

      // Día 112
      { reliquias: [
        {
          expresion: 'Hacer [época]',
          pregunta: '¿Qué significa aquí «época»?',
          opciones: ['Un periodo de la historia marcado por algo importante', 'Una estación del año', 'Una edad de la vida'],
          reliquia: 'Hacer época es dejar huella, ser recordado durante mucho tiempo.'
        },
        {
          expresion: 'Hacerse el [longuis]',
          pregunta: '¿Qué hace quien «se hace el longuis»?',
          opciones: ['Se hace el despistado', 'Alarga la conversación', 'Presume de alto'],
          reliquia: 'Hacerse el longuis es hacerse el distraído para no darse por enterado. La palabra viene de la jerga y su origen es dudoso.'
        },
        {
          expresion: 'Sin [rechistar]',
          pregunta: '¿Qué es «rechistar»?',
          opciones: ['Protestar o contestar', 'Silbar', 'Respirar'],
          reliquia: 'Viene de «chistar», hacer un ruido para hablar. Obedecer sin rechistar es hacerlo sin protestar.'
        }
      ] },

      // Día 113
      { reliquias: [
        {
          expresion: 'Echar [sapos] y culebras',
          pregunta: '¿Por qué «sapos» y culebras?',
          opciones: ['Por las palabras feas que salen de la boca, como bichos repugnantes', 'Por un hechizo de brujas', 'Por un plato antiguo'],
          reliquia: 'Las palabras malsonantes se comparan con bichos que salen de la boca. Echar sapos y culebras es soltar insultos y maldiciones.'
        },
        {
          expresion: 'Ser un [pez] gordo',
          pregunta: '¿Qué es un «pez gordo»?',
          opciones: ['Una persona importante', 'Un glotón', 'Un pescador'],
          reliquia: 'Como el pez grande que se lleva toda la atención del pescador. Un pez gordo es alguien influyente.'
        },
        {
          expresion: 'Como [alma] que lleva el diablo',
          pregunta: '¿Por qué el «alma»?',
          opciones: ['Por la rapidez con que se imagina al diablo llevándose un alma', 'Por un fantasma de leyenda', 'Por un difunto que corría'],
          reliquia: 'Se dice de quien sale corriendo a toda prisa.'
        }
      ] },

      // Día 114
      { reliquias: [
        {
          expresion: 'No importar un [bledo]',
          pregunta: '¿Qué es un «bledo»?',
          opciones: ['Una planta silvestre sin apenas valor', 'Un pájaro', 'Una moneda'],
          reliquia: 'El bledo es una hierba de poco provecho. No importar un bledo es no importar nada.'
        },
        {
          expresion: 'Más fresco que una [lechuga]',
          pregunta: '¿Por qué la «lechuga»?',
          opciones: ['Porque recién cogida está tersa y fresca', 'Porque es verde', 'Porque se come fría'],
          reliquia: 'Se dice de quien está descansado, o de quien tiene mucho descaro.'
        },
        {
          expresion: 'Irse al otro [barrio]',
          pregunta: '¿Qué es el «otro barrio»?',
          opciones: ['El cementerio, el más allá', 'Un barrio de las afueras', 'La cárcel'],
          reliquia: 'Irse al otro barrio es morirse.'
        }
      ] },

      // Día 115
      { reliquias: [
        {
          expresion: 'Salvarse por los [pelos]',
          pregunta: '¿Por qué por los «pelos»?',
          opciones: ['Por el náufrago al que agarran del pelo para sacarlo del agua', 'Por un corte de pelo a tiempo', 'Por la barba de un juez'],
          reliquia: 'Se cuenta del que se ahogaba y fue salvado agarrándolo por el cabello. Salvarse por los pelos es librarse por muy poco.'
        },
        {
          expresion: 'Ser de [armas] tomar',
          pregunta: '¿Qué quiere decir «de armas tomar»?',
          opciones: ['Que tiene carácter fuerte, como quien está listo para empuñar las armas', 'Que es soldado', 'Que colecciona espadas'],
          reliquia: 'Al principio se decía de quien tenía edad para empuñar las armas. Hoy, de quien tiene mucho carácter.'
        },
        {
          expresion: 'No comerse un [rosco]',
          pregunta: '¿Qué es aquí un «rosco»?',
          opciones: ['Un dulce, y por extensión un éxito amoroso', 'Un cero', 'Un bollo de pan'],
          reliquia: 'No comerse un rosco es no conseguir pareja o no lograr lo que se quiere.'
        }
      ] },

      // Día 116
      { reliquias: [
        {
          expresion: 'Criar [malvas]',
          pregunta: '¿Por qué las «malvas»?',
          opciones: ['Porque crecen en los cementerios', 'Porque eran la flor de los entierros', 'Porque son moradas, color de luto'],
          reliquia: 'Las malvas son plantas silvestres que brotan con facilidad sobre la tierra removida. Criar malvas es estar muerto y enterrado.'
        },
        {
          expresion: 'De [vicio]',
          pregunta: '¿Qué significa aquí «vicio»?',
          opciones: ['Muy bien, estupendamente', 'Por mala costumbre', 'Sin motivo'],
          reliquia: 'Pasarlo de vicio es pasarlo muy bien. Quejarse de vicio, en cambio, es quejarse sin motivo.'
        },
        {
          expresion: 'Ser un [lazarillo]',
          pregunta: '¿De dónde sale «lazarillo»?',
          opciones: ['Del protagonista de la novela que guiaba a un ciego', 'De un santo protector de los ciegos', 'De un perro famoso'],
          reliquia: 'El Lazarillo de Tormes, de 1554, cuenta las andanzas de un niño que sirve de guía a un ciego. Hoy un lazarillo es quien guía a otro.'
        }
      ] },

      // Día 117
      { reliquias: [
        {
          expresion: 'De [carrerilla]',
          pregunta: '¿Qué es decir algo «de carrerilla»?',
          opciones: ['De memoria y de corrido, sin pararse', 'Corriendo', 'Con prisas'],
          reliquia: 'Es repetir algo sin pensar, como quien toma impulso para correr.'
        },
        {
          expresion: 'No hay [moros] en la costa',
          pregunta: '¿Por qué se miraba si había «moros» en la costa?',
          opciones: ['Por el miedo a los piratas berberiscos', 'Porque eran comerciantes', 'Porque venían a pescar'],
          reliquia: 'Durante siglos, los piratas del norte de África asaltaban los pueblos del litoral, y desde las torres vigías se avisaba de su llegada. Hoy se dice cuando no hay nadie que pueda descubrirnos.'
        },
        {
          expresion: 'Subirse a la [parra]',
          pregunta: '¿Qué es la «parra»?',
          opciones: ['La vid trepadora, que sube muy alto', 'Una escalera', 'Un balcón'],
          reliquia: 'Subirse a la parra es enfadarse mucho o darse importancia.'
        }
      ] },

      // Día 118
      { reliquias: [
        {
          expresion: 'Ser una [bicoca]',
          pregunta: '¿Qué fue la Bicoca?',
          opciones: ['Un lugar de Italia donde se libró una batalla ganada con poco esfuerzo', 'Un dulce de almendra', 'Una moneda de oro'],
          reliquia: 'En la batalla de la Bicocca, en 1522, los españoles vencieron a los franceses con muy pocas bajas. Una bicoca es algo muy ventajoso que cuesta poco.'
        },
        {
          expresion: 'A [rajatabla]',
          pregunta: '¿Qué es «a rajatabla»?',
          opciones: ['Con todo rigor, sin excepciones', 'Rompiendo una mesa', 'Sin dinero'],
          reliquia: 'Es hacer algo con toda exactitud y severidad. Se cree que viene de «raja tabla», romper la tabla.'
        },
        {
          expresion: 'Ser un [sibarita]',
          pregunta: '¿Qué era Síbaris?',
          opciones: ['Una ciudad griega de Italia famosa por su lujo y sus placeres', 'Un vino de Grecia', 'Un filósofo'],
          reliquia: 'Los habitantes de Síbaris tenían fama de refinados y amantes del buen vivir. Un sibarita es quien busca el placer y el lujo.'
        }
      ] },

      // Día 119
      { reliquias: [
        {
          expresion: 'Estar en las [últimas]',
          pregunta: '¿Qué significa «estar en las últimas»?',
          opciones: ['A punto de morir o de acabarse', 'En la cola', 'Al final de la clase'],
          reliquia: 'Se dice de quien está muy enfermo o de algo que se agota.'
        },
        {
          expresion: 'A [gatas]',
          pregunta: '¿Qué es andar «a gatas»?',
          opciones: ['Apoyando manos y rodillas, como un gato', 'De puntillas', 'A la pata coja'],
          reliquia: 'Andar a gatas es avanzar con manos y rodillas, como los bebés.'
        },
        {
          expresion: 'Ir hecho un brazo de [mar]',
          pregunta: '¿Qué es un «brazo de mar»?',
          opciones: ['Una entrada del mar en la tierra, ancha y vistosa', 'Un marinero fuerte', 'Una ola grande'],
          reliquia: 'Un brazo de mar es una lengua de agua que se mete tierra adentro. Ir hecho un brazo de mar es ir muy arreglado y elegante.'
        }
      ] },

      // Día 120
      { reliquias: [
        {
          expresion: 'Hacer [gala] de algo',
          pregunta: '¿Qué era la «gala»?',
          opciones: ['La ropa de fiesta, lo que se luce', 'Una cena', 'Una medalla'],
          reliquia: 'Hacer gala de algo es presumir de ello, como quien luce su mejor traje.'
        },
        {
          expresion: 'De [gorra]',
          pregunta: '¿Qué es comer «de gorra»?',
          opciones: ['Gratis, a costa de otro', 'Con sombrero', 'De pie'],
          reliquia: 'Se cree que viene de quien se quitaba la gorra para saludar y colarse en un convite. Ir de gorra es aprovecharse sin pagar.'
        },
        {
          expresion: 'Poner toda la carne en el [asador]',
          pregunta: '¿Qué es el «asador»?',
          opciones: ['El fuego o el espetón donde se asa la carne', 'Una tienda', 'Un cocinero'],
          reliquia: 'Echarlo todo al fuego de una vez es arriesgar todo lo que se tiene. Poner toda la carne en el asador es emplear todos los recursos de golpe.'
        }
      ] },

      // Día 121
      { reliquias: [
        {
          expresion: 'La espada de [Damocles]',
          pregunta: '¿Quién era Damocles?',
          opciones: ['Un cortesano que se sentó bajo una espada colgada de un pelo de caballo', 'Un gladiador romano', 'Un rey espartano'],
          reliquia: 'El tirano Dionisio le dejó ocupar su trono con una espada sobre la cabeza, para que viera los peligros del poder. Es una amenaza constante.'
        },
        {
          expresion: 'En un abrir y cerrar de [ojos]',
          pregunta: '¿Qué dura abrir y cerrar los «ojos»?',
          opciones: ['Un instante', 'Una hora', 'Un día'],
          reliquia: 'Es el tiempo de un parpadeo. Hacer algo en un abrir y cerrar de ojos es hacerlo en un momento.'
        },
        {
          expresion: 'Dar [gato] por liebre',
          pregunta: '¿Por qué el «gato»?',
          opciones: ['Porque en las ventas se servía carne de gato como si fuera de liebre', 'Porque el gato caza liebres', 'Porque se parecen al correr'],
          reliquia: 'Era el engaño típico de los mesones: guisar gato y cobrarlo como liebre. Dar gato por liebre es engañar dando algo peor de lo prometido.'
        }
      ] },

      // Día 122
      { reliquias: [
        {
          expresion: 'Ser la [monda]',
          pregunta: '¿Qué es la «monda»?',
          opciones: ['Algo extraordinario o muy gracioso', 'La piel de la fruta', 'Una fiesta de los pueblos'],
          reliquia: '«Monda» es la cáscara que se quita al mondar la fruta, pero ser la monda es ser extraordinario, para bien o para mal.'
        },
        {
          expresion: 'De mala [muerte]',
          pregunta: '¿Qué es un lugar «de mala muerte»?',
          opciones: ['Pobre y miserable', 'Peligroso', 'Abandonado'],
          reliquia: 'Un sitio de mala muerte es de poca categoría.'
        },
        {
          expresion: 'Estar en la [higuera]',
          pregunta: '¿Por qué la «higuera»?',
          opciones: ['Porque quien se sube a coger higos se queda allí, distraído', 'Porque da sombra para la siesta', 'Porque es un árbol de mala suerte'],
          reliquia: 'Estar en la higuera es estar distraído, en las nubes, como quien se encarama al árbol y se olvida del mundo.'
        }
      ] },

      // Día 123
      { reliquias: [
        {
          expresion: 'Estar que [trina]',
          pregunta: '¿Qué es «trinar»?',
          opciones: ['Cantar como los pájaros, y aquí, estar furioso', 'Temblar', 'Llorar'],
          reliquia: 'Estar que trina es estar muy enfadado.'
        },
        {
          expresion: 'Por un [tubo]',
          pregunta: '¿Qué significa «por un tubo»?',
          opciones: ['En gran cantidad', 'Con dificultad', 'Por casualidad'],
          reliquia: 'Como lo que sale a chorro por un tubo. Tener algo por un tubo es tener muchísimo.'
        },
        {
          expresion: 'Írsele a uno el [santo] al cielo',
          pregunta: '¿Por qué el «santo»?',
          opciones: ['Por el predicador que olvidaba qué santo celebraba ese día', 'Por una imagen que se caía de su pedestal', 'Por un santo que subió a los cielos'],
          reliquia: 'Se cuenta del predicador que, en mitad del sermón, olvidaba de qué santo hablaba. Irse el santo al cielo es olvidar de repente lo que se iba a decir o hacer.'
        }
      ] },

      // Día 124
      { reliquias: [
        {
          expresion: 'Ser un [mentor]',
          pregunta: '¿Quién era Méntor?',
          opciones: ['El amigo de Ulises que aconsejó a su hijo Telémaco', 'Un médico griego', 'Un general romano'],
          reliquia: 'En la Odisea, la diosa Atenea toma la forma de Méntor para guiar a Telémaco. Un mentor es un consejero o guía.'
        },
        {
          expresion: 'Ver las [orejas] al lobo',
          pregunta: '¿Por qué las «orejas» del lobo?',
          opciones: ['Porque es lo primero que asoma cuando acecha', 'Porque son su punto débil', 'Porque los pastores las cortaban como trofeo'],
          reliquia: 'Cuando el lobo se esconde entre los matorrales, lo primero que se ve son sus orejas. Verle las orejas al lobo es darse cuenta del peligro antes de que llegue.'
        },
        {
          expresion: 'Tomar [cartas] en el asunto',
          pregunta: '¿De qué juego viene?',
          opciones: ['De los naipes: tomar cartas es entrar en la partida', 'De una carta oficial', 'De un mapa'],
          reliquia: 'Tomar cartas en el asunto es intervenir en él.'
        }
      ] },

      // Día 125
      { reliquias: [
        {
          expresion: 'No ver más allá de sus [narices]',
          pregunta: '¿Qué significa «no ver más allá de sus narices»?',
          opciones: ['Ser corto de miras', 'Ser miope', 'Ser muy curioso'],
          reliquia: 'Es no ver lo que no se tiene justo delante.'
        },
        {
          expresion: 'Más solo que la [una]',
          pregunta: '¿Qué es «la una»?',
          opciones: ['La hora, que es la única que suena con una sola campanada', 'Una carta', 'Una persona'],
          reliquia: 'A la una, el reloj da una sola campanada. Estar más solo que la una es estar completamente solo.'
        },
        {
          expresion: 'Ser el amo del [cotarro]',
          pregunta: '¿Qué era un «cotarro»?',
          opciones: ['Un albergue donde dormían los pobres y vagabundos', 'Un corral de gallinas', 'Un mercado de pueblo'],
          reliquia: 'En el cotarro se recogía de noche a los mendigos. Ser el amo del cotarro es mandar en un grupo.'
        }
      ] },

      // Día 126
      { reliquias: [
        {
          expresion: 'Más se perdió en [Cuba]',
          pregunta: '¿Qué se perdió en Cuba?',
          opciones: ['Las últimas colonias españolas en 1898', 'Una flota cargada de oro', 'Una cosecha de azúcar'],
          reliquia: 'En 1898 España perdió Cuba, Puerto Rico y Filipinas. La frase sirve para consolarse quitando importancia a una pérdida.'
        },
        {
          expresion: 'Poner el carro delante de los [bueyes]',
          pregunta: '¿Qué tiene de malo poner el carro delante de los «bueyes»?',
          opciones: ['Que así no se puede avanzar: se empieza por el final', 'Que se vuelca', 'Que los bueyes se asustan'],
          reliquia: 'Es hacer las cosas al revés del orden lógico.'
        },
        {
          expresion: 'Sacar las [castañas] del fuego',
          pregunta: '¿De qué fábula viene?',
          opciones: ['De la del mono que usa la pata del gato para sacar castañas de las brasas', 'De la de la cigarra y la hormiga', 'De la de la lechera'],
          reliquia: 'En la fábula de La Fontaine, el mono se come las castañas y el gato se quema. Sacarle a alguien las castañas del fuego es resolverle un problema arriesgándose uno.'
        }
      ] },

      // Día 127
      { reliquias: [
        {
          expresion: 'Hacerse el [harakiri]',
          pregunta: '¿Qué era el «harakiri»?',
          opciones: ['Un suicidio ritual de los samuráis japoneses', 'Un arte marcial', 'Un baile'],
          reliquia: 'Hacerse el harakiri es perjudicarse a uno mismo.'
        },
        {
          expresion: 'Andarse por las [ramas]',
          pregunta: '¿Por qué las «ramas»?',
          opciones: ['Porque se dejan de lado el tronco y lo importante', 'Por los pájaros', 'Por los monos'],
          reliquia: 'Quien se va por las ramas se aleja del tronco, de lo principal. Andarse por las ramas es dar rodeos sin ir al asunto.'
        },
        {
          expresion: 'No caer en saco [roto]',
          pregunta: '¿Qué pasa con lo que cae en un saco «roto»?',
          opciones: ['Se pierde', 'Se rompe', 'Se mancha'],
          reliquia: 'Lo que se echa en un saco roto se sale y se pierde. Algo que no cae en saco roto se tiene en cuenta.'
        }
      ] },

      // Día 128
      { reliquias: [
        {
          expresion: 'Morder el [polvo]',
          pregunta: '¿Por qué el «polvo»?',
          opciones: ['Por el guerrero que cae al suelo vencido', 'Por el polvo de los caminos', 'Por el polvo del molino'],
          reliquia: 'Es la imagen del caballero derribado, con la cara contra el suelo. Morder el polvo es ser derrotado.'
        },
        {
          expresion: 'Sin [comerlo] ni beberlo',
          pregunta: '¿Qué se quiere decir con «comerlo»?',
          opciones: ['Sin haber tenido parte en ello', 'Sin cobrar por ello', 'Sin hambre'],
          reliquia: 'Es verse afectado por algo sin haber participado, como pagar una comida que no se ha probado.'
        },
        {
          expresion: 'Pagar los [platos] rotos',
          pregunta: '¿Qué «platos» son estos?',
          opciones: ['Los que rompe otro y paga uno', 'Los de un banquete de boda', 'Los de la vajilla de un mesón'],
          reliquia: 'Pagar los platos rotos es cargar con la culpa o con las consecuencias de algo que no ha hecho uno.'
        }
      ] },

      // Día 129
      { reliquias: [
        {
          expresion: 'Partir la [pana]',
          pregunta: '¿Qué es la «pana»?',
          opciones: ['Un tejido grueso y resistente', 'Un pan grande', 'La espalda'],
          reliquia: 'La pana es un tejido fuerte y difícil de romper. Partir la pana es destacar o hacer algo con mucho éxito.'
        },
        {
          expresion: 'Dar el [do] de pecho',
          pregunta: '¿Qué es el «do de pecho»?',
          opciones: ['La nota más aguda que alcanza un tenor', 'Un golpe en el pecho', 'El primer verso de una canción'],
          reliquia: 'Es la nota más alta y difícil para un tenor. Dar el do de pecho es hacer el máximo esfuerzo.'
        },
        {
          expresion: 'Hacer el [primo]',
          pregunta: '¿Por qué «primo»?',
          opciones: ['Porque los reyes llamaban primos a los nobles a los que pedían favores', 'Porque los primos pagaban las bodas', 'Porque los primos eran los más jóvenes de la casa'],
          reliquia: 'Los reyes llamaban «primos» a los grandes de España, a menudo cuando necesitaban que les prestaran dinero. Hacer el primo es dejarse engañar.'
        }
      ] },

      // Día 130
      { reliquias: [
        {
          expresion: 'Quedarse a dos [velas]',
          pregunta: '¿Qué «velas» son estas?',
          opciones: ['Las de cera, cuando quedan dos al final de la misa', 'Las de un barco', 'Las noches sin dormir'],
          reliquia: 'Una explicación cuenta que, en las iglesias, cuando se acababa el dinero se dejaban encendidas solo dos velas. Quedarse a dos velas es quedarse sin dinero o sin enterarse de nada.'
        },
        {
          expresion: 'Cruzar el [charco]',
          pregunta: '¿Qué es el «charco»?',
          opciones: ['El océano Atlántico', 'El mar Mediterráneo', 'Un río de Madrid'],
          reliquia: 'Es una forma jocosa de llamar al Atlántico. Cruzar el charco es viajar entre Europa y América.'
        },
        {
          expresion: 'Dar el [brazo] a torcer',
          pregunta: '¿De qué viene?',
          opciones: ['De un pulso en el que se deja ganar al otro', 'De una lesión de guerra', 'De un saludo antiguo'],
          reliquia: 'En un pulso, ceder es dejar que el otro nos tuerza el brazo. Dar el brazo a torcer es rendirse y aceptar la opinión ajena.'
        }
      ] },

      // Día 131
      { reliquias: [
        {
          expresion: 'No tener [abuela]',
          pregunta: '¿Qué significa «no tener abuela»?',
          opciones: ['Que uno se alaba a sí mismo porque no hay una abuela que lo haga', 'Que uno es huérfano', 'Que uno es muy joven'],
          reliquia: 'Las abuelas suelen alabar a sus nietos. A quien presume de sí mismo se le dice que no tiene abuela.'
        },
        {
          expresion: 'Un efecto [Pigmalión]',
          pregunta: '¿Quién era Pigmalión?',
          opciones: ['Un escultor que se enamoró de su estatua, que cobró vida', 'Un rey avaro', 'Un pintor de retratos'],
          reliquia: 'Según el mito, Afrodita dio vida a Galatea, la estatua que esculpió Pigmalión. Hoy se habla de efecto Pigmalión cuando las expectativas sobre alguien influyen en lo que consigue.'
        },
        {
          expresion: 'Estar en la cuerda [floja]',
          pregunta: '¿Qué es la cuerda «floja»?',
          opciones: ['La del funambulista, en la que es fácil caerse', 'Una cuerda rota', 'La de una guitarra'],
          reliquia: 'Estar en la cuerda floja es estar en una situación inestable.'
        }
      ] },

      // Día 132
      { reliquias: [
        {
          expresion: 'Ponerse de [largo]',
          pregunta: '¿Qué es ponerse de «largo»?',
          opciones: ['Vestirse por primera vez de mujer adulta, con traje largo', 'Crecer', 'Viajar lejos'],
          reliquia: 'Era la puesta de largo, la presentación en sociedad de las jóvenes. Hoy se dice de cualquier estreno.'
        },
        {
          expresion: 'No caber un [alfiler]',
          pregunta: '¿Por qué un «alfiler»?',
          opciones: ['Porque es lo más pequeño que se puede imaginar meter en un sitio', 'Por las costureras', 'Por un juego de niños'],
          reliquia: 'Si no cabe ni un alfiler, el sitio está abarrotado.'
        },
        {
          expresion: 'Ponerse [moños]',
          pregunta: '¿Qué son los «moños»?',
          opciones: ['Los adornos del pelo, por darse importancia', 'Los lazos', 'Los sombreros'],
          reliquia: 'Ponerse moños es presumir o darse aires.'
        }
      ] },

      // Día 133
      { reliquias: [
        {
          expresion: 'De [cajón]',
          pregunta: '¿Qué es algo «de cajón»?',
          opciones: ['Evidente, de lo más normal', 'Viejo', 'Escondido'],
          reliquia: 'Ser de cajón es ser obvio, algo que no necesita explicación.'
        },
        {
          expresion: 'Sin pies ni [cabeza]',
          pregunta: '¿Qué es algo «sin pies ni cabeza»?',
          opciones: ['Sin sentido ni orden', 'Sin principio', 'Sin fin'],
          reliquia: 'Lo que no tiene ni pies ni cabeza no tiene lógica alguna.'
        },
        {
          expresion: 'Más rico que [Creso]',
          pregunta: '¿Quién era Creso?',
          opciones: ['Un rey de Lidia famoso por su enorme riqueza', 'Un banquero de Roma', 'Un pirata'],
          reliquia: 'Creso reinó en Lidia en el siglo VI antes de Cristo y su riqueza se hizo legendaria. Más rico que Creso es riquísimo.'
        }
      ] },

      // Día 134
      { reliquias: [
        {
          expresion: 'A pedir de [boca]',
          pregunta: '¿Qué es «a pedir de boca»?',
          opciones: ['Tal y como uno lo habría pedido', 'Con hambre', 'Gritando'],
          reliquia: 'Salir algo a pedir de boca es salir perfecto, como uno lo deseaba.'
        },
        {
          expresion: 'De [padre] y muy señor mío',
          pregunta: '¿Qué significa «de padre y muy señor mío»?',
          opciones: ['Enorme, de grandes proporciones', 'Muy educado', 'De buena familia'],
          reliquia: 'Se dice de algo muy grande o intenso: «un susto de padre y muy señor mío».'
        },
        {
          expresion: 'Más viejo que la [tos]',
          pregunta: '¿Por qué la «tos»?',
          opciones: ['Porque la tos existe desde siempre', 'Porque tosen los viejos', 'Por un remedio antiguo'],
          reliquia: 'Ser más viejo que la tos es ser antiquísimo.'
        }
      ] },

      // Día 135
      { reliquias: [
        {
          expresion: 'Hacerse [cruces]',
          pregunta: '¿Por qué «cruces»?',
          opciones: ['Por santiguarse de asombro o de miedo', 'Por un juego de mesa', 'Por marcar el calendario'],
          reliquia: 'Quien se santigua varias veces está muy sorprendido. Hacerse cruces es asombrarse mucho.'
        },
        {
          expresion: 'Estar de [morros]',
          pregunta: '¿Qué son los «morros»?',
          opciones: ['Los labios abultados, como los de un animal enfadado', 'Las narices', 'Los mofletes'],
          reliquia: 'El morro es la parte delantera de la cara de algunos animales. Estar de morros es estar enfadado, con los labios apretados.'
        },
        {
          expresion: 'No dar pie con [bola]',
          pregunta: '¿De qué juego viene?',
          opciones: ['De un juego en que se golpeaba la bola con el pie', 'Del billar', 'De los bolos'],
          reliquia: 'Quien no acierta a dar a la bola con el pie lo hace todo mal. No dar pie con bola es equivocarse una y otra vez.'
        }
      ] },

      // Día 136
      { reliquias: [
        {
          expresion: 'Ir a [Canosa]',
          pregunta: '¿Qué pasó en Canosa?',
          opciones: ['Un emperador esperó tres días en la nieve el perdón del papa', 'Se firmó una paz entre reinos', 'Se coronó a un rey'],
          reliquia: 'En 1077, el emperador Enrique IV acudió descalzo al castillo de Canossa para pedir perdón al papa Gregorio VII. Ir a Canosa es humillarse para pedir perdón.'
        },
        {
          expresion: 'Pegársele a uno las [sábanas]',
          pregunta: '¿Qué significa?',
          opciones: ['Quedarse dormido más de la cuenta', 'Tener calor', 'Dormir en la cama ajena'],
          reliquia: 'Como si las sábanas no le dejaran levantarse.'
        },
        {
          expresion: 'Poner el dedo en la [llaga]',
          pregunta: '¿Qué es la «llaga»?',
          opciones: ['Una herida abierta', 'Un error de cálculo', 'Una mancha'],
          reliquia: 'Tocar una herida es justo lo que más duele. Poner el dedo en la llaga es señalar el punto más delicado de un asunto.'
        }
      ] },

      // Día 137
      { reliquias: [
        {
          expresion: 'Ser un [vándalo]',
          pregunta: '¿Quiénes eran los vándalos?',
          opciones: ['Un pueblo germánico que saqueó Roma en el año 455', 'Unos piratas del norte', 'Una tribu de Asia'],
          reliquia: 'Los vándalos pasaron por Hispania antes de llegar al norte de África y saquear Roma. Un vándalo es quien destroza por gusto.'
        },
        {
          expresion: 'Hacerse la [mosquita] muerta',
          pregunta: '¿Qué hace una «mosquita muerta»?',
          opciones: ['Aparenta ser inofensiva sin serlo', 'Se esconde para no trabajar', 'Se desmaya a menudo'],
          reliquia: 'Hacerse la mosquita muerta es fingir ser inocente o débil para conseguir algo.'
        },
        {
          expresion: 'Estar en [Belén] con los pastores',
          pregunta: '¿Por qué en «Belén»?',
          opciones: ['Por los pastores del belén, que miran embobados al Niño', 'Por un pueblo de Toledo', 'Por un mesón famoso'],
          reliquia: 'Estar en Belén es estar distraído, ajeno a lo que pasa, como las figuritas del nacimiento.'
        }
      ] },

      // Día 138
      { reliquias: [
        {
          expresion: 'En paños [menores]',
          pregunta: '¿Qué son los «paños menores»?',
          opciones: ['La ropa interior', 'Los pañales', 'Las servilletas'],
          reliquia: 'Estar en paños menores es estar en ropa interior.'
        },
        {
          expresion: 'Tener [pájaros] en la cabeza',
          pregunta: '¿Qué significan los «pájaros»?',
          opciones: ['Ideas que vuelan sin sentido', 'Ruidos en los oídos', 'Canciones pegadizas'],
          reliquia: 'Como pájaros que revolotean, son ideas sin fundamento. Tener pájaros en la cabeza es ser poco sensato o soñador.'
        },
        {
          expresion: 'Renacer como el ave [fénix]',
          pregunta: '¿Qué hacía el ave «fénix»?',
          opciones: ['Renacía de sus propias cenizas', 'Volaba sin descansar nunca', 'Hablaba como las personas'],
          reliquia: 'En la mitología, el fénix ardía y renacía de sus cenizas. Renacer como el ave fénix es recuperarse cuando todo parecía perdido.'
        }
      ] },

      // Día 139
      { reliquias: [
        {
          expresion: 'Hablar en [plata]',
          pregunta: '¿Qué es hablar en «plata»?',
          opciones: ['Hablar claro, sin rodeos', 'Hablar de dinero', 'Hablar muy bien'],
          reliquia: 'Como la moneda de plata, que no engaña. Hablar en plata es decir las cosas con claridad.'
        },
        {
          expresion: 'Ser una [celestina]',
          pregunta: '¿Quién era Celestina?',
          opciones: ['Una alcahueta de una obra de teatro de 1499', 'Una santa de Toledo', 'Una reina de Castilla'],
          reliquia: 'Es la alcahueta de la tragicomedia de Calisto y Melibea, de Fernando de Rojas. Una celestina es quien concierta amores.'
        },
        {
          expresion: 'Echar el [cierre]',
          pregunta: '¿Qué es el «cierre»?',
          opciones: ['La persiana metálica de una tienda', 'Una cremallera', 'El final de un libro'],
          reliquia: 'Al acabar la jornada se baja el cierre del comercio. Echar el cierre es terminar algo.'
        }
      ] },

      // Día 140
      { reliquias: [
        {
          expresion: 'A la buena de [Dios]',
          pregunta: '¿Qué significa «a la buena de Dios»?',
          opciones: ['Sin preparación, confiando en la suerte', 'Con mucha fe', 'Con permiso de la Iglesia'],
          reliquia: 'Hacer algo a la buena de Dios es hacerlo sin preparación, dejándolo al azar.'
        },
        {
          expresion: 'No pintar [nada]',
          pregunta: '¿Qué es «pintar» aquí?',
          opciones: ['Tener importancia, contar para algo', 'Usar pinceles', 'Mentir'],
          reliquia: 'No pintar nada es no tener ningún papel en un asunto.'
        },
        {
          expresion: 'Al pie del [cañón]',
          pregunta: '¿Qué es estar «al pie del cañón»?',
          opciones: ['En el puesto, sin abandonarlo', 'En la guerra', 'En un barco'],
          reliquia: 'Es la imagen del artillero que no se aparta de su pieza. Estar al pie del cañón es no abandonar la tarea.'
        }
      ] },

      // Día 141
      { reliquias: [
        {
          expresion: 'Ser un [titán]',
          pregunta: '¿Quiénes eran los titanes?',
          opciones: ['Unos dioses gigantes de la mitología griega', 'Unos guerreros de Roma', 'Unos marineros'],
          reliquia: 'Los titanes gobernaron el mundo antes que los dioses del Olimpo. Un titán es alguien de una fuerza o una talla enormes.'
        },
        {
          expresion: 'Caerse del [guindo]',
          pregunta: '¿Qué es un «guindo»?',
          opciones: ['El árbol de las guindas', 'Un tejado alto', 'Un caballo'],
          reliquia: 'Caerse del guindo es darse cuenta de algo de lo que todos se habían dado cuenta antes, como quien baja de las alturas.'
        },
        {
          expresion: 'Hacer [castillos] en el aire',
          pregunta: '¿Qué son esos «castillos»?',
          opciones: ['Fantasías sin fundamento', 'Nubes con forma de torre', 'Castillos de fuegos artificiales'],
          reliquia: 'Un castillo sin cimientos no se sostiene. Hacer castillos en el aire es hacerse ilusiones sin base.'
        }
      ] },

      // Día 142
      { reliquias: [
        {
          expresion: 'Ser el último [mono]',
          pregunta: '¿Por qué el «mono»?',
          opciones: ['Por el mono de feria, que era lo menos importante del espectáculo', 'Por el mono de trabajo', 'Por un juego de cartas'],
          reliquia: 'Ser el último mono es ser el menos importante de un grupo.'
        },
        {
          expresion: 'Hacer [tilín]',
          pregunta: '¿Qué es el «tilín»?',
          opciones: ['El sonido de una campanilla', 'Un juego de cartas', 'Un pellizco'],
          reliquia: 'Es la onomatopeya de la campanilla. Hacer tilín es gustar o atraer a alguien.'
        },
        {
          expresion: 'A [vuelapluma]',
          pregunta: '¿Qué es escribir «a vuelapluma»?',
          opciones: ['Deprisa, sin pensar mucho', 'Con pluma de ave', 'En verso'],
          reliquia: 'Es escribir dejando volar la pluma, rápido y sin corregir.'
        }
      ] },

      // Día 143
      { reliquias: [
        {
          expresion: 'Más raro que un perro [verde]',
          pregunta: '¿Por qué un perro «verde»?',
          opciones: ['Porque no existen', 'Por un cuento infantil', 'Por un perro pintado en una feria'],
          reliquia: 'Un perro verde es algo que no se ha visto nunca. Ser más raro que un perro verde es ser rarísimo.'
        },
        {
          expresion: 'Ser [Juan Palomo]',
          pregunta: '¿Qué dice Juan Palomo?',
          opciones: ['«Yo me lo guiso, yo me lo como»', '«A quien madruga, Dios le ayuda»', '«Ande yo caliente»'],
          reliquia: 'Es un personaje popular que lo hace todo él solo y no comparte nada. Ser Juan Palomo es ser muy individualista.'
        },
        {
          expresion: 'Ser un don [Nadie]',
          pregunta: '¿Por qué «don Nadie»?',
          opciones: ['Por la ironía de dar tratamiento de don a quien no es nadie', 'Por un personaje de zarzuela', 'Por un noble arruinado'],
          reliquia: 'Un don Nadie es una persona sin importancia que, a veces, se da aires.'
        }
      ] },

      // Día 144
      { reliquias: [
        {
          expresion: 'Ser el [perejil] de todas las salsas',
          pregunta: '¿Por qué el «perejil»?',
          opciones: ['Porque se pone en casi todos los guisos', 'Porque es muy barato', 'Porque lo crían en todos los huertos'],
          reliquia: 'Quien es el perejil de todas las salsas está en todas partes y en todos los asuntos.'
        },
        {
          expresion: 'Ser un [fariseo]',
          pregunta: '¿Quiénes eran los fariseos?',
          opciones: ['Un grupo judío al que el Evangelio acusa de hipocresía', 'Unos soldados romanos', 'Unos sacerdotes egipcios'],
          reliquia: 'En el Evangelio, Jesús les reprocha cumplir la ley por fuera y no por dentro. Un fariseo es un hipócrita.'
        },
        {
          expresion: 'Ser un [quijote]',
          pregunta: '¿Por qué «quijote»?',
          opciones: ['Por don Quijote, el caballero que defendía causas perdidas', 'Por una armadura', 'Por un hidalgo pobre de Toledo'],
          reliquia: 'Un quijote es quien se lanza a defender causas nobles aunque no tenga posibilidades.'
        }
      ] },

      // Día 145
      { reliquias: [
        {
          expresion: 'Ser [uña] y carne',
          pregunta: '¿Por qué «uña» y carne?',
          opciones: ['Porque la uña está pegada a la carne y no se separa', 'Porque son los dos extremos del dedo', 'Porque se cortan a la vez'],
          reliquia: 'La uña está tan unida a la carne que separarlas duele. Ser uña y carne es ser inseparables.'
        },
        {
          expresion: 'Hacer [furor]',
          pregunta: '¿Qué es el «furor»?',
          opciones: ['Un entusiasmo arrollador', 'Un enfado', 'Una fiebre'],
          reliquia: 'Hacer furor es estar muy de moda.'
        },
        {
          expresion: 'Más contento que unas [castañuelas]',
          pregunta: '¿Por qué las «castañuelas»?',
          opciones: ['Porque suenan alegres en las fiestas', 'Porque son de madera', 'Porque se tocan de dos en dos'],
          reliquia: 'Estar más contento que unas castañuelas es estar muy alegre.'
        }
      ] },

      // Día 146
      { reliquias: [
        {
          expresion: 'Al [contado]',
          pregunta: '¿Qué es pagar «al contado»?',
          opciones: ['Pagar en el momento, contando el dinero', 'A plazos', 'Con tarjeta'],
          reliquia: 'Es pagar en el acto y en efectivo.'
        },
        {
          expresion: 'Tener vista de [lince]',
          pregunta: '¿Por qué el «lince»?',
          opciones: ['Por la fama de su vista agudísima', 'Por sus orejas', 'Por su rapidez'],
          reliquia: 'Se creía que el lince podía ver a través de las piedras. Tener vista de lince es ver muy bien.'
        },
        {
          expresion: 'En [bandeja]',
          pregunta: '¿Qué es dar algo «en bandeja»?',
          opciones: ['Darlo todo hecho, muy fácil', 'Servirlo en una fiesta', 'Regalarlo'],
          reliquia: 'Es poner algo tan fácil como servirlo en una bandeja.'
        }
      ] },

      // Día 147
      { reliquias: [
        {
          expresion: 'Coger el [tranquillo]',
          pregunta: '¿Qué es el «tranquillo»?',
          opciones: ['El paso o el modo de hacer algo', 'Un poco de tranquilidad', 'Una tranca pequeña'],
          reliquia: 'Viene de «tranco», el paso largo. Coger el tranquillo es pillarle el truco a algo a fuerza de repetirlo.'
        },
        {
          expresion: 'En carne [viva]',
          pregunta: '¿Qué es tener algo «en carne viva»?',
          opciones: ['Con la piel levantada, al descubierto', 'Muy rojo', 'Recién cortado'],
          reliquia: 'Es tener una herida abierta. También, sentir un dolor muy reciente.'
        },
        {
          expresion: 'Tener [enchufe]',
          pregunta: '¿Por qué «enchufe»?',
          opciones: ['Porque el enchufe da corriente, igual que un contacto da ventajas', 'Por un electricista famoso', 'Por un aparato de radio'],
          reliquia: 'Tener enchufe es tener un contacto que consigue favores o un puesto.'
        }
      ] },

      // Día 148
      { reliquias: [
        {
          expresion: 'Poner en [entredicho]',
          pregunta: '¿Qué era un «entredicho»?',
          opciones: ['Una prohibición de la Iglesia', 'Una frase dicha a medias', 'Un juicio entre dos testigos'],
          reliquia: 'Era una censura eclesiástica que prohibía ciertos oficios o sacramentos. Poner algo en entredicho es dudar de su verdad o de su valor.'
        },
        {
          expresion: 'Ser cabeza de [turco]',
          pregunta: '¿Por qué de «turco»?',
          opciones: ['Por los turcos, enemigos tradicionales a los que se culpaba de todo', 'Por un muñeco de feria contra el que se lanzaban pelotas', 'Por un sombrero'],
          reliquia: 'Una explicación lo relaciona con los muñecos con cabeza de turco que servían de diana en las ferias. Es quien carga con las culpas de otros.'
        },
        {
          expresion: 'Más negro que el [betún]',
          pregunta: '¿Qué es el «betún»?',
          opciones: ['La crema oscura para lustrar zapatos', 'El carbón', 'La tinta'],
          reliquia: 'Ser más negro que el betún es ser negrísimo.'
        }
      ] },

      // Día 149
      { reliquias: [
        {
          expresion: 'Andar con pies de [plomo]',
          pregunta: '¿Por qué el «plomo»?',
          opciones: ['Por ser muy pesado: se pisa con cuidado y despacio', 'Porque es un metal blando', 'Porque se usaba en las suelas'],
          reliquia: 'Con pies de plomo se camina despacio y asentando bien cada paso. Es actuar con mucha prudencia.'
        },
        {
          expresion: 'Estar hecho unos [zorros]',
          pregunta: '¿Qué son aquí los «zorros»?',
          opciones: ['Tiras de piel para sacudir el polvo', 'Animales', 'Pícaros'],
          reliquia: 'Los zorros eran tiras de piel o de tela atadas a un palo para quitar el polvo, y acababan destrozados. Estar hecho unos zorros es estar agotado.'
        },
        {
          expresion: 'Hablar por los [codos]',
          pregunta: '¿Por qué por los «codos»?',
          opciones: ['Por la costumbre de dar codazos al que escucha', 'Porque los codos se mueven al hablar', 'Porque se apoyaban en la mesa para charlar'],
          reliquia: 'Quien habla mucho va tocando con el codo a su interlocutor para que le atienda. Hablar por los codos es hablar sin parar.'
        }
      ] },

      // Día 150
      { reliquias: [
        {
          expresion: 'Al rojo [vivo]',
          pregunta: '¿Qué es estar «al rojo vivo»?',
          opciones: ['Tan caliente que brilla, como el hierro en la fragua', 'Enfadado', 'Colorado'],
          reliquia: 'Al rojo vivo es el hierro calentado hasta ponerse incandescente. Se dice de una situación muy tensa.'
        },
        {
          expresion: 'A mano [armada]',
          pregunta: '¿Qué significa «a mano armada»?',
          opciones: ['Con un arma en la mano', 'Con fuerza', 'Con guantes'],
          reliquia: 'Un robo a mano armada es el que se comete con armas.'
        },
        {
          expresion: 'Poner las [peras] a cuarto',
          pregunta: '¿Qué era aquí un «cuarto»?',
          opciones: ['Una moneda de poco valor', 'La cuarta parte de una pera', 'Una habitación'],
          reliquia: 'El cuarto era una moneda de cobre. Poner las peras a cuarto es apretar a alguien y obligarle a hacer algo, como al vendedor al que se le fija un precio bajo.'
        }
      ] },

      // Día 151
      { reliquias: [
        {
          expresion: 'Hacerse el [remolón]',
          pregunta: '¿Qué es un «remolón»?',
          opciones: ['Quien se resiste a hacer algo o se retrasa', 'Quien rema mal', 'Quien da vueltas'],
          reliquia: 'Un remolón es quien se resiste a hacer algo o lo va retrasando. Hacerse el remolón es hacerse de rogar.'
        },
        {
          expresion: 'Tener malas [pulgas]',
          pregunta: '¿Por qué las «pulgas»?',
          opciones: ['Porque pican y ponen de mal humor', 'Porque eran un castigo', 'Porque las tenían los mendigos'],
          reliquia: 'Quien tiene pulgas está siempre rascándose y de mal humor. Tener malas pulgas es tener mal genio.'
        },
        {
          expresion: 'De [mentirijillas]',
          pregunta: '¿Qué es algo «de mentirijillas»?',
          opciones: ['De broma, no de verdad', 'Muy mentiroso', 'Secreto'],
          reliquia: 'Es un diminutivo cariñoso de «mentira». Hacer algo de mentirijillas es hacerlo en broma.'
        }
      ] },

      // Día 152
      { reliquias: [
        {
          expresion: 'Dar la vuelta a la [tortilla]',
          pregunta: '¿Qué es dar la vuelta a la «tortilla»?',
          opciones: ['Cambiar por completo una situación', 'Cocinar', 'Engañar'],
          reliquia: 'Como al darle la vuelta a la tortilla en la sartén, lo de abajo pasa arriba.'
        },
        {
          expresion: 'Al [unísono]',
          pregunta: '¿Qué significa «unísono»?',
          opciones: ['Con un solo sonido, a la vez', 'Uno detrás de otro', 'Por turnos'],
          reliquia: 'Viene del latín unisonus. Hacer algo al unísono es hacerlo todos a la vez.'
        },
        {
          expresion: 'Estar hecho un [trapo]',
          pregunta: '¿Qué es estar «hecho un trapo»?',
          opciones: ['Estar agotado o muy abatido', 'Estar sucio', 'Estar en ropa vieja'],
          reliquia: 'Como un trapo gastado, sin fuerzas.'
        }
      ] },

      // Día 153
      { reliquias: [
        {
          expresion: 'Dar [cancha]',
          pregunta: '¿De dónde viene «cancha»?',
          opciones: ['Del quechua, \'recinto, lugar cercado\'', 'Del latín, \'cancela\'', 'Del inglés, \'oportunidad\''],
          reliquia: 'En América, la cancha es el campo de juego. Dar cancha a alguien es darle espacio y oportunidades.'
        },
        {
          expresion: 'Quedarse para vestir [santos]',
          pregunta: '¿Qué era vestir santos?',
          opciones: ['Arreglar y vestir las imágenes de la iglesia, tarea de las solteras', 'Coser hábitos de monja', 'Pintar retablos'],
          reliquia: 'Se encargaba a las mujeres solteras. Quedarse para vestir santos era, en el habla de antes, quedarse soltera.'
        },
        {
          expresion: 'Liar el [petate]',
          pregunta: '¿Qué es el «petate»?',
          opciones: ['El lío de ropa y la esterilla de dormir', 'Una maleta de cuero', 'Un pañuelo para el cuello'],
          reliquia: 'El petate era la esterilla con la que se envolvía la ropa de un soldado o un marinero. Liar el petate es marcharse... y también morirse.'
        }
      ] },

      // Día 154
      { reliquias: [
        {
          expresion: 'El suplicio de [Tántalo]',
          pregunta: '¿Cuál era el castigo de Tántalo?',
          opciones: ['Tener agua y fruta al alcance que se alejaban cuando quería tomarlas', 'Empujar una roca', 'Ser devorado por un águila'],
          reliquia: 'Es el tormento de desear algo que está cerca pero nunca se alcanza.'
        },
        {
          expresion: 'Hincar el [pico]',
          pregunta: '¿Qué es hincar el «pico»?',
          opciones: ['Morirse, como el ave que cae de pico', 'Picotear', 'Trabajar con un pico'],
          reliquia: 'Es otra forma coloquial de decir morir.'
        },
        {
          expresion: 'Ser la [repanocha]',
          pregunta: '¿Qué es la «repanocha»?',
          opciones: ['Una forma exagerada de decir que algo es el colmo', 'Una mazorca grande', 'Un plato típico'],
          reliquia: 'Viene de «panocha», la mazorca de maíz, con un prefijo intensivo. Ser la repanocha es ser el colmo.'
        }
      ] },

      // Día 155
      { reliquias: [
        {
          expresion: 'Ser un [cenizo]',
          pregunta: '¿Qué es un «cenizo»?',
          opciones: ['Una persona que trae mala suerte', 'Un cubo de ceniza', 'Un pájaro gris'],
          reliquia: 'El cenizo es una planta silvestre de color ceniciento, y la ceniza se asociaba a la desgracia. Ser un cenizo es ser gafe.'
        },
        {
          expresion: 'Un juicio [salomónico]',
          pregunta: '¿Qué hizo Salomón?',
          opciones: ['Propuso partir a un niño por la mitad para descubrir a la verdadera madre', 'Dictó las primeras leyes de Israel', 'Construyó el arca'],
          reliquia: 'La verdadera madre prefirió renunciar al niño antes que verlo morir. Un juicio salomónico es una decisión sabia, que reparte con justicia.'
        },
        {
          expresion: 'Ser el rey del [mambo]',
          pregunta: '¿Qué es el «mambo»?',
          opciones: ['Un baile cubano muy popular a mediados del siglo XX', 'Un juego de cartas', 'Un instrumento'],
          reliquia: 'El mambo fue un baile de moda gracias a Pérez Prado, al que llamaban el Rey del Mambo. Ser el rey del mambo es creerse el más importante.'
        }
      ] },

      // Día 156
      { reliquias: [
        {
          expresion: 'Ni [papa]',
          pregunta: '¿Qué es aquí «papa»?',
          opciones: ['Nada en absoluto', 'El pontífice', 'La patata'],
          reliquia: 'No saber ni papa es no saber nada. Viene quizá del latín pappa, la papilla de los niños.'
        },
        {
          expresion: 'A la [pata] la llana',
          pregunta: '¿Qué es «a la pata la llana»?',
          opciones: ['Con sencillez, sin ceremonias', 'Andando descalzo', 'Cojeando'],
          reliquia: 'Es como andar con el pie plano, sin afectación. Hacer algo a la pata la llana es hacerlo con naturalidad.'
        },
        {
          expresion: 'A [tontas] y a locas',
          pregunta: '¿Qué significa «a tontas y a locas»?',
          opciones: ['Sin pensar, sin orden', 'Bailando', 'Con mujeres'],
          reliquia: 'Es hacer las cosas sin reflexión ni concierto.'
        }
      ] },

      // Día 157
      { reliquias: [
        {
          expresion: 'Ser un buen [samaritano]',
          pregunta: '¿Qué hizo el samaritano?',
          opciones: ['Ayudó a un herido junto al camino cuando otros pasaban de largo', 'Construyó un pozo', 'Curó a un rey'],
          reliquia: 'En la parábola, un hombre de Samaria socorre al herido que un sacerdote y un levita ignoraron. Un buen samaritano es quien ayuda sin esperar nada.'
        },
        {
          expresion: 'Por si las [moscas]',
          pregunta: '¿Qué son aquí las «moscas»?',
          opciones: ['Una forma de decir «por si acaso»', 'Las monedas', 'Los insectos de la comida'],
          reliquia: 'Es una forma jocosa de decir «por si acaso», «por lo que pueda pasar». En la jerga de germanía, «mosca» era también el dinero.'
        },
        {
          expresion: 'Hacer [rabona]',
          pregunta: '¿Qué hace quien «hace rabona»?',
          opciones: ['Faltar a clase sin permiso', 'Hacer trampas en el juego', 'Ponerse un rabo de disfraz'],
          reliquia: 'Hacer rabona es faltar a clase sin permiso, igual que «hacer novillos» o «hacer pellas». El origen de la palabra no está claro.'
        }
      ] },

      // Día 158
      { reliquias: [
        {
          expresion: 'A [marchas] forzadas',
          pregunta: '¿Qué es una «marcha forzada»?',
          opciones: ['Una marcha militar más larga de lo normal', 'Un desfile', 'Un paso de baile'],
          reliquia: 'Las tropas hacían marchas forzadas cuando había prisa. Hacer algo a marchas forzadas es hacerlo con mucha prisa.'
        },
        {
          expresion: 'Echar [balones] fuera',
          pregunta: '¿De qué deporte viene?',
          opciones: ['Del fútbol, cuando se despeja el balón lejos de la portería', 'Del baloncesto', 'Del tenis'],
          reliquia: 'Mandar el balón fuera aleja el peligro. Echar balones fuera es eludir una responsabilidad o una pregunta.'
        },
        {
          expresion: 'Hacer el [canelo]',
          pregunta: '¿Qué es un «canelo»?',
          opciones: ['Un perro de color canela, tenido por tonto', 'Un dulce de canela', 'Un payaso'],
          reliquia: 'Se dice que viene de los perros de color canela, a los que se tenía por bobos. Hacer el canelo es hacer el tonto o dejarse engañar.'
        }
      ] },

      // Día 159
      { reliquias: [
        {
          expresion: 'No pegar [ojo]',
          pregunta: '¿Qué es no pegar «ojo»?',
          opciones: ['No poder dormir, no cerrar los párpados', 'No ver bien', 'No mirar a nadie'],
          reliquia: 'Pegar ojo es cerrar los párpados para dormir. No pegar ojo es pasar la noche en vela.'
        },
        {
          expresion: 'Tener mala [uva]',
          pregunta: '¿Qué es aquí la «uva»?',
          opciones: ['El vino, y con él el humor', 'La fruta podrida', 'La tierra de la viña'],
          reliquia: 'Se dice que la mala uva da mal vino, y el mal vino, mal humor. Tener mala uva es tener mal carácter o mala intención.'
        },
        {
          expresion: 'A [cántaros]',
          pregunta: '¿Qué es un «cántaro»?',
          opciones: ['Una vasija grande para el agua', 'Una nube', 'Un canalón'],
          reliquia: 'Llover a cántaros es llover mucho, como si se vaciaran vasijas desde el cielo.'
        }
      ] },

      // Día 160
      { reliquias: [
        {
          expresion: 'La manzana de la [discordia]',
          pregunta: '¿Qué fue la manzana de la «discordia»?',
          opciones: ['La que Eris lanzó «para la más bella» entre tres diosas', 'La que comieron Adán y Eva', 'La de Guillermo Tell'],
          reliquia: 'Paris tuvo que elegir entre Hera, Atenea y Afrodita, y su elección desencadenó la guerra de Troya. Es lo que provoca una disputa.'
        },
        {
          expresion: 'Tener el toque de [Midas]',
          pregunta: '¿Qué le pasaba al rey Midas?',
          opciones: ['Todo lo que tocaba se convertía en oro', 'Tenía orejas de burro y nada más', 'Nunca envejecía'],
          reliquia: 'Dioniso le concedió ese don y acabó siendo un castigo: hasta la comida se le volvía oro. Hoy se dice de quien hace prosperar todo lo que emprende.'
        },
        {
          expresion: 'No tener pelos en la [lengua]',
          pregunta: '¿Qué significa «no tener pelos en la lengua»?',
          opciones: ['Decir lo que se piensa sin rodeos', 'Hablar con dificultad', 'Ser muy joven'],
          reliquia: 'Nada estorba a la lengua de quien dice las cosas claras.'
        }
      ] },

      // Día 161
      { reliquias: [
        {
          expresion: 'Írsele a uno la [olla]',
          pregunta: '¿Qué es aquí la «olla»?',
          opciones: ['La cabeza', 'El estómago', 'La paciencia'],
          reliquia: '«Olla» es en el habla coloquial la cabeza. Írsele a uno la olla es perder el juicio o despistarse.'
        },
        {
          expresion: 'Dar [cuartelillo]',
          pregunta: '¿Qué era el «cuartelillo»?',
          opciones: ['El cuartel pequeño, donde se daba alojamiento y respiro', 'Un cuarto de hora', 'Una moneda de cuarto'],
          reliquia: 'Dar cuartel era perdonar la vida al enemigo vencido. Dar cuartelillo es dar algo de margen o de confianza a alguien.'
        },
        {
          expresion: 'Hacer el [oso]',
          pregunta: '¿Por qué el «oso»?',
          opciones: ['Por los osos de feria que bailaban y hacían gracias', 'Por un juego de niños', 'Por un torpe cazador'],
          reliquia: 'Hacer el oso es hacer tonterías o el ridículo.'
        }
      ] },

      // Día 162
      { reliquias: [
        {
          expresion: 'Tirar la [toalla]',
          pregunta: '¿De dónde viene «tirar la toalla»?',
          opciones: ['Del boxeo, cuando el entrenador la lanza al ring para rendirse', 'De los baños públicos', 'De una costumbre de los toreros'],
          reliquia: 'En el boxeo, el preparador arroja la toalla para detener el combate. Tirar la toalla es abandonar.'
        },
        {
          expresion: 'Ser de la [cáscara] amarga',
          pregunta: '¿Qué significa aquí la «cáscara» amarga?',
          opciones: ['Tener ideas avanzadas o ser poco convencional', 'Ser muy amargado', 'Ser difícil de pelar'],
          reliquia: 'Como las naranjas de cáscara amarga, que no son de las dulces. Se decía de quien tenía ideas avanzadas o no seguía las normas.'
        },
        {
          expresion: 'Poner el [grito] en el cielo',
          pregunta: '¿Por qué en el «cielo»?',
          opciones: ['Por gritar tan alto que llega hasta el cielo', 'Por una oración', 'Por un pájaro'],
          reliquia: 'Poner el grito en el cielo es protestar con mucha fuerza.'
        }
      ] },

      // Día 163
      { reliquias: [
        {
          expresion: 'A [bombo] y platillo',
          pregunta: '¿Qué son el «bombo» y el platillo?',
          opciones: ['Instrumentos de las bandas de música', 'Dos piezas de una balanza', 'Dos platos de cocina'],
          reliquia: 'Son los instrumentos más ruidosos de una banda. Anunciar algo a bombo y platillo es darle mucha publicidad.'
        },
        {
          expresion: 'No estar el [horno] para bollos',
          pregunta: '¿Por qué el «horno»?',
          opciones: ['Porque hay momentos en que el horno no está a la temperatura adecuada', 'Porque se rompía', 'Porque estaba lleno'],
          reliquia: 'No estar el horno para bollos es no ser el momento oportuno.'
        },
        {
          expresion: 'Irse de [rositas]',
          pregunta: '¿Qué le pasa a quien «se va de rositas»?',
          opciones: ['Sale de un apuro sin castigo ni consecuencias', 'Se marcha con flores', 'Se va colorado de vergüenza'],
          reliquia: 'Irse de rositas es salir de un apuro sin pagar por ello, como si nada.'
        }
      ] },

      // Día 164
      { reliquias: [
        {
          expresion: 'Estar con el agua al [cuello]',
          pregunta: '¿Qué es tener el agua al «cuello»?',
          opciones: ['Estar en una situación muy apurada', 'Estar nadando', 'Tener sed'],
          reliquia: 'Es la imagen del que está a punto de ahogarse.'
        },
        {
          expresion: 'No dar un palo al [agua]',
          pregunta: '¿Qué es no dar un palo al «agua»?',
          opciones: ['No trabajar nada, como el remero que no rema', 'No nadar', 'No pescar'],
          reliquia: 'Es la imagen del que va en la barca sin remar. No dar un palo al agua es no hacer nada.'
        },
        {
          expresion: 'Empinar el [codo]',
          pregunta: '¿Por qué el «codo»?',
          opciones: ['Porque se levanta al beber', 'Porque se apoya en la barra', 'Porque duele al día siguiente'],
          reliquia: 'Al llevarse el vaso a la boca, el codo sube. Empinar el codo es beber, sobre todo alcohol.'
        }
      ] },

      // Día 165
      { reliquias: [
        {
          expresion: 'Tener más fuerza que [Sansón]',
          pregunta: '¿De dónde le venía la fuerza a Sansón?',
          opciones: ['De su pelo, que nunca se cortaba', 'De una espada', 'De una pócima'],
          reliquia: 'Según la Biblia, perdió su fuerza cuando Dalila le cortó el pelo. Tener más fuerza que Sansón es ser fortísimo.'
        },
        {
          expresion: 'A tumba [abierta]',
          pregunta: '¿Qué es ir «a tumba abierta»?',
          opciones: ['A toda velocidad, sin miedo al peligro', 'Llorando', 'De luto'],
          reliquia: 'Es arriesgarse como si la tumba estuviera ya abierta. Se dice mucho en el ciclismo, en los descensos.'
        },
        {
          expresion: 'Coger el [toro] por los cuernos',
          pregunta: '¿Por qué por los «cuernos»?',
          opciones: ['Porque es la forma más arriesgada y directa de enfrentarse a él', 'Porque es por donde se le sujeta en el campo', 'Por un juego de los mozos de los pueblos'],
          reliquia: 'Agarrar al toro por los cuernos es enfrentarse de cara al peligro. Coger el toro por los cuernos es afrontar un problema con decisión.'
        }
      ] },

      // Día 166
      { reliquias: [
        {
          expresion: 'No tener vela en este [entierro]',
          pregunta: '¿Por qué la vela en el «entierro»?',
          opciones: ['Porque solo llevaban vela los que tenían parte en el cortejo', 'Porque los entierros eran de noche', 'Porque la vela se pagaba'],
          reliquia: 'En los entierros, cada uno llevaba su vela. Quien no tenía vela no pintaba nada. Hoy se dice a quien se mete donde no le llaman.'
        },
        {
          expresion: 'Sin pena ni [gloria]',
          pregunta: '¿Qué es pasar «sin pena ni gloria»?',
          opciones: ['Sin destacar para bien ni para mal', 'Sin sufrir', 'Sin morir'],
          reliquia: 'Es pasar desapercibido.'
        },
        {
          expresion: 'El hilo de [Ariadna]',
          pregunta: '¿Qué hizo Ariadna?',
          opciones: ['Dio a Teseo un ovillo para salir del laberinto del Minotauro', 'Tejió un tapiz para Ulises', 'Ató a un gigante'],
          reliquia: 'Gracias al hilo de Ariadna, Teseo encontró la salida del laberinto. Es lo que permite salir de un problema complicado.'
        }
      ] },

      // Día 167
      { reliquias: [
        {
          expresion: 'Ser un [hacha]',
          pregunta: '¿Por qué un «hacha»?',
          opciones: ['Por ser una herramienta que corta y resuelve con decisión', 'Por un hacha de guerra', 'Por una vela grande'],
          reliquia: 'Ser un hacha es ser muy hábil en algo.'
        },
        {
          expresion: 'No es nada del otro [jueves]',
          pregunta: '¿Qué pasaba aquel «jueves»?',
          opciones: ['Se cree que alude a un jueves memorable, quizá el Jueves Santo o el de Corpus', 'Había mercado', 'Se cobraba la paga'],
          reliquia: 'Se suele relacionar con las grandes fiestas que caían en jueves. No ser nada del otro jueves es no ser nada extraordinario.'
        },
        {
          expresion: 'Estar a partir un [piñón]',
          pregunta: '¿Qué es partir un «piñón»?',
          opciones: ['Compartir hasta algo tan pequeño como un piñón', 'Romper una piña', 'Abrir un candado'],
          reliquia: 'Dos que están a partir un piñón se llevan tan bien que lo comparten todo.'
        }
      ] },

      // Día 168
      { reliquias: [
        {
          expresion: 'Morder el [anzuelo]',
          pregunta: '¿Qué es el «anzuelo»?',
          opciones: ['El gancho con cebo para pescar', 'Una trampa para pájaros', 'Un cebo envenenado'],
          reliquia: 'El pez que muerde el anzuelo queda atrapado. Morder el anzuelo es caer en una trampa o un engaño.'
        },
        {
          expresion: 'Ser una [odisea]',
          pregunta: '¿Qué fue la «Odisea»?',
          opciones: ['El largo y accidentado viaje de vuelta a casa de Ulises', 'Una batalla naval', 'Un poema sobre los dioses'],
          reliquia: 'El poema de Homero cuenta los diez años que tardó Ulises en volver a Ítaca. Una odisea es un viaje o una empresa llena de dificultades.'
        },
        {
          expresion: 'Ser un [mirlo] blanco',
          pregunta: '¿Qué tiene de especial un mirlo «blanco»?',
          opciones: ['Que es rarísimo: los mirlos son negros', 'Que canta mejor', 'Que vive más'],
          reliquia: 'El mirlo es negro, así que uno blanco es casi imposible de encontrar. Un mirlo blanco es una persona o cosa excepcional.'
        }
      ] },

      // Día 169
      { reliquias: [
        {
          expresion: 'Ser un [anfitrión]',
          pregunta: '¿Quién era Anfitrión?',
          opciones: ['Un rey de Tebas de una comedia de Plauto', 'Un posadero griego', 'Un dios del vino'],
          reliquia: 'En la comedia, Júpiter toma su aspecto, y el verdadero Anfitrión acaba invitando a todos a comer. De ahí, quien recibe invitados.'
        },
        {
          expresion: 'Ser una [arpía]',
          pregunta: '¿Qué era una «arpía»?',
          opciones: ['Un monstruo mitológico con cara de mujer y cuerpo de ave', 'Una mujer que tocaba el arpa', 'Un ave de presa'],
          reliquia: 'En la mitología griega eran monstruos que robaban y ensuciaban. Una arpía es una persona malvada y codiciosa.'
        },
        {
          expresion: 'Ser el chocolate del [loro]',
          pregunta: '¿Por qué el «loro»?',
          opciones: ['Por el ahorro ridículo de quitarle el chocolate al loro para gastar menos', 'Porque los loros comen cacao', 'Por un loro que hablaba de chocolate'],
          reliquia: 'Se cuenta de una familia arruinada que, para ahorrar, dejó sin su chocolate al loro. Es un ahorro insignificante ante un gasto mucho mayor.'
        }
      ] },

      // Día 170
      { reliquias: [
        {
          expresion: 'Estar como una [sopa]',
          pregunta: '¿Qué es estar «como una sopa»?',
          opciones: ['Empapado', 'Muy caliente', 'Borracho'],
          reliquia: 'Es estar tan mojado como el pan en la sopa.'
        },
        {
          expresion: 'Poner el [cascabel] al gato',
          pregunta: '¿De qué fábula sale el «cascabel»?',
          opciones: ['De la de los ratones que querían ponérselo al gato para oírlo venir', 'De la del gato con botas', 'De la del perro y el lobo'],
          reliquia: 'Todos los ratones estaban de acuerdo en la idea, pero ninguno se atrevía a hacerlo. Poner el cascabel al gato es atreverse con lo difícil.'
        },
        {
          expresion: 'Estar con la mosca detrás de la [oreja]',
          pregunta: '¿Qué hace la mosca detrás de la «oreja»?',
          opciones: ['Molesta y no deja estar tranquilo', 'Pica', 'Zumba al dormir'],
          reliquia: 'Es estar receloso, con la sospecha de que algo no va bien.'
        }
      ] },

      // Día 171
      { reliquias: [
        {
          expresion: 'Sin [encomendarse] a Dios ni al diablo',
          pregunta: '¿Qué es «encomendarse»?',
          opciones: ['Confiarse a la protección de alguien', 'Comprar algo', 'Saludar'],
          reliquia: 'Hacer algo sin encomendarse a nadie es hacerlo de forma temeraria, sin pensarlo.'
        },
        {
          expresion: 'Ser un [filisteo]',
          pregunta: '¿Quiénes eran los filisteos?',
          opciones: ['Un pueblo enemigo de los israelitas, como el gigante Goliat', 'Unos filósofos griegos', 'Unos comerciantes fenicios'],
          reliquia: 'Se usa para llamar a quien no aprecia la cultura ni el arte, o a un hombre muy corpulento.'
        },
        {
          expresion: 'Ser un [Séneca]',
          pregunta: '¿Quién era Séneca?',
          opciones: ['Un filósofo romano nacido en Córdoba', 'Un general cartaginés', 'Un poeta del Siglo de Oro'],
          reliquia: 'Lucio Anneo Séneca fue un filósofo estoico del siglo I. Ser un Séneca es ser muy sabio.'
        }
      ] },

      // Día 172
      { reliquias: [
        {
          expresion: 'Ser una [perita] en dulce',
          pregunta: '¿Qué es una «perita en dulce»?',
          opciones: ['Una pera en almíbar, algo apetecible', 'Una persona muy dulce', 'Una pera pequeña'],
          reliquia: 'Una pera en almíbar es una golosina deseada. Ser una perita en dulce es ser algo o alguien muy atractivo o valioso.'
        },
        {
          expresion: 'Ser la [Cenicienta]',
          pregunta: '¿Por qué «Cenicienta»?',
          opciones: ['Por la joven del cuento que vivía entre las cenizas del hogar', 'Por una diosa del fuego', 'Por un ave de color gris'],
          reliquia: 'En el cuento, la protagonista hacía las tareas más bajas junto a la chimenea. Ser la Cenicienta es ser el más olvidado o despreciado de un grupo.'
        },
        {
          expresion: 'Tirarse los [trastos] a la cabeza',
          pregunta: '¿Qué son aquí los «trastos»?',
          opciones: ['Los utensilios y muebles de la casa', 'Las armas del torero', 'Los juguetes de los niños'],
          reliquia: 'Los trastos son los cacharros y muebles de una casa. Tirarse los trastos a la cabeza es discutir con violencia.'
        }
      ] },

      // Día 173
      { reliquias: [
        {
          expresion: 'Estar en su [salsa]',
          pregunta: '¿Qué es estar en su «salsa»?',
          opciones: ['Estar a gusto, en su ambiente', 'Estar cocinando', 'Estar sucio'],
          reliquia: 'Como el guiso en su salsa, es estar en el ambiente propio.'
        },
        {
          expresion: 'De [lance]',
          pregunta: '¿Qué es comprar algo «de lance»?',
          opciones: ['De segunda mano', 'A precio de oro', 'En una subasta'],
          reliquia: 'Un libro de lance es uno de segunda mano.'
        },
        {
          expresion: 'Más duro que el [pedernal]',
          pregunta: '¿Qué es el «pedernal»?',
          opciones: ['Una piedra muy dura que da chispas al golpearla', 'Un metal', 'Un árbol'],
          reliquia: 'Con el pedernal se encendía el fuego. Ser más duro que el pedernal es ser durísimo, o insensible.'
        }
      ] },

      // Día 174
      { reliquias: [
        {
          expresion: 'No quedar ni el [apuntador]',
          pregunta: '¿Quién era el «apuntador»?',
          opciones: ['El que en el teatro soplaba el texto a los actores desde la concha', 'El que llevaba las cuentas', 'El escribano'],
          reliquia: 'En las tragedias en que morían todos, solo quedaba vivo el apuntador. Cuando no queda ni el apuntador, no queda nadie.'
        },
        {
          expresion: 'Ni por el [forro]',
          pregunta: '¿Qué es el «forro»?',
          opciones: ['La tela interior de un libro o una prenda', 'La cubierta de un sillón', 'Una capa'],
          reliquia: 'No conocer un libro ni por el forro es no haberlo abierto nunca. Hoy se dice de cualquier cosa que no se conoce en absoluto.'
        },
        {
          expresion: 'Colgar los [hábitos]',
          pregunta: '¿Qué son los «hábitos»?',
          opciones: ['La ropa del fraile o del cura', 'Las costumbres', 'Los uniformes'],
          reliquia: 'Colgar los hábitos es dejar la vida religiosa y, por extensión, abandonar una profesión.'
        }
      ] },

      // Día 175
      { reliquias: [
        {
          expresion: 'Ponerse las [botas]',
          pregunta: '¿Por qué las «botas»?',
          opciones: ['Porque eran calzado de caballeros ricos, que comían bien', 'Porque se ponían para una boda', 'Porque las botas de vino se llenaban'],
          reliquia: 'Antes, solo los ricos llevaban botas de montar. Ponerse las botas es aprovecharse al máximo, sobre todo comiendo.'
        },
        {
          expresion: 'Estar en [dique] seco',
          pregunta: '¿Qué es un «dique seco»?',
          opciones: ['Un recinto del puerto que se vacía para reparar barcos', 'Un muro contra las inundaciones', 'Un río sin agua'],
          reliquia: 'Allí se sacan los barcos del agua para arreglarlos. Estar en dique seco es estar parado, sin poder actuar, a menudo por una lesión.'
        },
        {
          expresion: 'Ir de capa [caída]',
          pregunta: '¿Por qué «caída»?',
          opciones: ['Por la capa que cuelga sin vuelo cuando uno va abatido', 'Por el halcón que plegaba las alas', 'Por la capa de un torero herido'],
          reliquia: 'La capa que cuelga sin garbo es la del que va triste o arruinado. Ir de capa caída es ir a menos.'
        }
      ] },

      // Día 176
      { reliquias: [
        {
          expresion: 'De un [plumazo]',
          pregunta: '¿Qué es un «plumazo»?',
          opciones: ['Un trazo de la pluma, como el que tacha algo', 'Un golpe con una almohada', 'Una pluma grande'],
          reliquia: 'Con un trazo de pluma se anulaba un documento. Hacer algo de un plumazo es hacerlo de golpe y sin más.'
        },
        {
          expresion: 'Dar la [lata]',
          pregunta: '¿Qué tiene que ver la «lata»?',
          opciones: ['Se cuenta que los soldados guardaban en latas sus largos escritos de quejas', 'Por el ruido de una lata al golpearla', 'Por una lata de conservas caducada'],
          reliquia: 'Una explicación habla de los largos memoriales que se guardaban en tubos de lata; otra, del ruido que hacen las latas atadas. Dar la lata es molestar con insistencia.'
        },
        {
          expresion: 'A [hombros]',
          pregunta: '¿Por qué «a hombros»?',
          opciones: ['Por la costumbre de sacar así a los toreros triunfadores', 'Por los porteadores de antes', 'Por un juego de niños'],
          reliquia: 'Sacar a alguien a hombros es llevarlo en triunfo.'
        }
      ] },

      // Día 177
      { reliquias: [
        {
          expresion: 'Al [tran tran]',
          pregunta: '¿Qué es el «tran tran»?',
          opciones: ['Un ritmo lento y monótono', 'Un tren pequeño', 'Un tambor'],
          reliquia: 'Es una onomatopeya del paso cansino. Ir al tran tran es ir despacio y sin prisa.'
        },
        {
          expresion: 'Eso es otro [cantar]',
          pregunta: '¿Qué era un «cantar»?',
          opciones: ['Una composición poética, como los cantares de gesta', 'Un pájaro', 'Un juego de canciones'],
          reliquia: 'Los cantares eran poemas que se recitaban o cantaban. Decir que algo es otro cantar es decir que se trata de un asunto distinto.'
        },
        {
          expresion: 'En [batería]',
          pregunta: '¿Qué es aparcar «en batería»?',
          opciones: ['Uno al lado de otro, en paralelo', 'En fila', 'En doble fila'],
          reliquia: 'Como los cañones de una batería, colocados uno junto a otro.'
        }
      ] },

      // Día 178
      { reliquias: [
        {
          expresion: 'No ser de [recibo]',
          pregunta: '¿Qué es aquí «recibo»?',
          opciones: ['Lo que se puede aceptar o admitir', 'Un justificante de pago', 'Una visita'],
          reliquia: '«De recibo» es lo que reúne las condiciones para ser aceptado. Algo que no es de recibo es inadmisible.'
        },
        {
          expresion: 'No dejar [títere] con cabeza',
          pregunta: '¿Qué es un «títere»?',
          opciones: ['Un muñeco de guiñol', 'Un soldado', 'Un bufón'],
          reliquia: 'Viene de la escena del Quijote en que don Quijote destroza a espadazos el retablo de maese Pedro. No dejar títere con cabeza es destrozarlo todo.'
        },
        {
          expresion: 'Arda [Troya]',
          pregunta: '¿Qué pasó en Troya?',
          opciones: ['Fue incendiada por los griegos al final de la guerra', 'Fue fundada por los romanos', 'Fue arrasada por un terremoto'],
          reliquia: 'Según la Ilíada y la Eneida, Troya ardió tras el engaño del caballo. ¡Arda Troya! se dice cuando uno decide hacer algo pase lo que pase.'
        }
      ] },

      // Día 179
      { reliquias: [
        {
          expresion: 'No estar para [trotes]',
          pregunta: '¿Qué son los «trotes»?',
          opciones: ['Los ajetreos, como el trote de un caballo', 'Los bailes', 'Las carreras de caballos'],
          reliquia: 'No estar para trotes es no estar ya para esfuerzos, sobre todo por la edad.'
        },
        {
          expresion: 'De golpe y [porrazo]',
          pregunta: '¿Qué es un «porrazo»?',
          opciones: ['Un golpe fuerte, como el de una porra', 'Un portazo', 'Una caída de un caballo'],
          reliquia: 'De golpe y porrazo es de repente, sin aviso.'
        },
        {
          expresion: 'Pagar el [pato]',
          pregunta: '¿Qué hace quien «paga el pato»?',
          opciones: ['Carga con la culpa de otro', 'Invita a comer', 'Paga una deuda antigua'],
          reliquia: 'Pagar el pato es sufrir las consecuencias de lo que ha hecho otro. Su origen es discutido; una explicación lo relaciona con «pacto».'
        }
      ] },

      // Día 180
      { reliquias: [
        {
          expresion: 'Dar la [vara]',
          pregunta: '¿Qué es aquí la «vara»?',
          opciones: ['El palo con que se arreaba al ganado', 'Una medida de longitud', 'El bastón del alcalde'],
          reliquia: 'Con la vara se pinchaba a las bestias para que avanzaran. Dar la vara es molestar o insistir mucho.'
        },
        {
          expresion: 'Más tieso que un [ajo]',
          pregunta: '¿Por qué el «ajo»?',
          opciones: ['Por el tallo derecho y rígido de la planta', 'Por su olor fuerte', 'Porque se seca al sol'],
          reliquia: 'Se dice de quien va muy estirado o muy orgulloso.'
        },
        {
          expresion: 'Ser un [judas]',
          pregunta: '¿Por qué «judas»?',
          opciones: ['Por el apóstol que traicionó a Jesús', 'Por un rey de Israel', 'Por un mercader famoso'],
          reliquia: 'Judas Iscariote vendió a Jesús por treinta monedas. Un judas es un traidor.'
        }
      ] }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = DATOS;
  else raiz.RELICARIO_DATOS = DATOS;
})(this);
