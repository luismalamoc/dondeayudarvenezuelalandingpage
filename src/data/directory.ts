export interface AccionRaw {
  title: string
  description: string
  href: string
  instagram?: string
}

export interface PortalRaw {
  tag: string
  title: string
  description: string
  href: string
  instagram?: string
  socials?: string[]
}

export interface PeriodistaRaw extends PortalRaw {
  x?: string
  youtube?: string
  website?: string
}

export type Categoria = 'Acción' | 'Ayuda' | 'Donar' | 'Info' | 'Evitar' | 'Prensa'

export interface DirectoryItem {
  title: string
  description: string
  href: string
  tag?: string
  instagram?: string
  categoria: Categoria
  domain: string
  letter: string
  search: string
}

export const acciones = [
  {
    title: 'Donar',
    description: 'Aporta con Pago Móvil, tarjeta internacional o cripto. Yummy y aliados igualan el 25%.',
    href: 'https://dona.yummyrides.com/',
    instagram: 'https://www.instagram.com/yummyridesvzla/',
  },
  {
    title: 'Reportar daños',
    description: 'Sube fotos y ubicación de estructuras dañadas para acelerar rescates.',
    href: 'https://sos.yummyrides.com/',
    instagram: 'https://www.instagram.com/yummyridesvzla/',
  },
  {
    title: 'Efecto Red',
    description:
      'Conéctate gratis por WhatsApp con profesionales voluntarios: salud mental, médicos, ingenieros, alojamiento temporal y apoyo a niños, dentro y fuera de Venezuela.',
    href: 'https://efecto-red.com/',
  },
  {
    title: 'Yummy Héroes',
    description:
      'Traslados gratis para quienes están en primera línea: médicos, bomberos, policías, rescatistas, Protección Civil, periodistas y más, con descuento automático de hasta $10.',
    href: 'https://heroes.yummyrides.com/',
    instagram: 'https://www.instagram.com/yummyridesvzla/',
  },
] satisfies AccionRaw[]

export const portales = [
  {
    tag: 'Personas',
    title: 'Red de Emergencia',
    description:
      'Busca personas desaparecidas, niños encontrados, hospitales y voluntarios. Incluye una guía rápida para la comunidad.',
    href: 'https://redayudavenezuela.com/',
  },
  {
    tag: 'Desaparecidos',
    title: 'Desaparecidos Terremoto Venezuela',
    description:
      'Plataforma ciudadana para buscar personas desaparecidas tras el terremoto. Reporta a alguien con su nombre y última ubicación, o usa el reconocimiento facial para confirmar que una persona está a salvo. No gestiona dinero ni donaciones.',
    href: 'https://desaparecidosterremotovenezuela.com/',
    instagram: 'https://www.instagram.com/terremotovenezuelaredes/',
  },
  {
    tag: 'Denuncias',
    title: 'Denuncia Venezuela',
    description:
      'Plataforma ciudadana, independiente y sin fines de lucro para documentar y difundir denuncias durante la emergencia: robos a víctimas, desvío y bloqueo de ayuda humanitaria y abusos de poder. Modera los testimonios y los hace públicos para su revisión.',
    href: 'https://denunciavenezuela.com/',
  },
  {
    tag: 'Salud mental',
    title: 'Psicólogos Sin Fronteras Venezuela',
    description:
      'PSF Venezuela ofrece asistencia psicosocial gratuita a personas y comunidades afectadas por el terremoto: intervención en crisis, duelo y primeros auxilios psicológicos, también para venezolanos en el exterior.',
    href: 'https://psfvenezuela.wordpress.com/',
    instagram: 'https://www.instagram.com/psfvenezuela/',
  },
  {
    tag: 'Cerca de ti',
    title: 'VZLA Ayuda',
    description: 'Pide o brinda ayuda cerca de ti, sin cuentas y al instante.',
    href: 'https://vzlayuda.com/',
  },
  {
    tag: 'Conectividad',
    title: 'Reconecta Venezuela',
    description:
      'Mapa de puntos de internet satelital gratuito y teléfonos de emergencia para coordinar la ayuda.',
    href: 'https://www.reconectavenezuela.com/',
    instagram: 'https://www.instagram.com/reconectavenezuela.wifi/',
  },
  {
    tag: 'Coordinación',
    title: 'Ayuda en Camino',
    description:
      'Plataforma donde centros de acopio, refugios y ONG publican sus necesidades en tiempo real. Filtra por zona o tipo de suministro, comprométete a llevar lo que puedas y entrégalo en la dirección exacta.',
    href: 'https://ayudaencamino.com/',
  },
  {
    tag: 'Centros de acopio',
    title: 'Te Ayudo Venezuela',
    description:
      'App social que reúne cientos de centros de acopio dentro y fuera de Venezuela y muestra en tiempo real qué insumos necesita cada uno. Busca por zona, mira el mapa, contáctalos directamente y accede a recursos de desaparecidos y emergencias. Iniciativa humanitaria que no administra los insumos.',
    href: 'https://teayudovenezuela.org/',
    instagram: 'https://www.instagram.com/sisnova.io/',
  },
  {
    tag: 'Donación física',
    title: 'Donamos Venezuela',
    description:
      'Conecta productos donados, personas que pueden trasladarlos y centros que los reciben. Publica lo que tienes o una necesidad, ofrece una ruta de transporte y coordina la entrega; cada donación se revisa y valida. No maneja dinero ni procesa pagos.',
    href: 'https://www.donamosvenezuela.com/',
    instagram: 'https://www.instagram.com/donamosvenezuela/',
  },
  {
    tag: 'Mapa de ayuda',
    title: 'Hazlo Hoy — Venezuela Ayuda',
    description:
      'Plataforma comunitaria con un mapa en vivo de la emergencia: busca o reporta desaparecidos, avisa que estás a salvo, reporta edificios dañados, pide ayuda u ofrece tu apoyo y encuentra centros de acopio. Iniciativa ciudadana independiente.',
    href: 'https://terremoto.hazlohoy.org/',
  },
  {
    tag: 'Donar seguro',
    title: 'Donar Seguro',
    description:
      'Directorio curado de organizaciones verificadas para donar tras el terremoto, con guías para evitar fraudes.',
    href: 'https://donarseguro.com/',
    instagram: 'https://www.instagram.com/ea_fuenmayor/',
  },
  {
    tag: 'Guía completa',
    title: 'Apoya Venezuela',
    description:
      'Directorio que recopila recursos verificados tras el terremoto: dónde donar, salud y telemedicina, apoyo psicológico, inspección de estructuras, búsqueda de personas, coordinación de ayuda, mascotas, envío de remesas y voluntariado. Incluye una guía para donar desde España con deducción fiscal.',
    href: 'https://apoyavenezuela.org/',
    instagram: 'https://www.instagram.com/apoyavenezuela.app/',
  },
  {
    tag: 'Mapa ciudadano',
    title: 'terremotoVE',
    description:
      'Mapa colaborativo de Acceso Libre que documenta edificios colapsados y personas desaparecidas tras el terremoto para coordinar a familias, rescatistas y organismos de respuesta. Cualquiera puede reportar en minutos y sin crear cuenta; incluye números de emergencia y un directorio de recursos. Publica nombres y cédulas solo cuando es indispensable y explica en su política de datos cómo protege esa información.',
    href: 'https://terremotove.com/',
    instagram: 'https://x.com/AccesoLibreRed',
  },
  {
    tag: 'Acopios y refugios',
    title: 'AcopioVE',
    description:
      'Mapa colaborativo con más de 600 centros de acopio y refugios temporales tras el terremoto. Ubica el punto más cercano, registra un nuevo centro u ofrece "techo solidario" para hospedar a familias damnificadas. Muestra además la intensidad sísmica sentida por zona.',
    href: 'https://acopiove.org/',
  },
  {
    tag: 'Desaparecidos',
    title: 'Venezuela Te Busca',
    description:
      'Registro ciudadano, voluntario y sin fines de lucro para localizar a personas desaparecidas tras el terremoto. Reúne miles de reportes de personas por localizar y ya localizadas, cruzando información de decenas de fuentes y hospitales. No vende ni comparte tus datos.',
    href: 'https://venezuelatebusca.com/',
  },
  {
    tag: 'Mascotas',
    title: 'HuellaScan — S.O.S. Terremoto',
    description:
      'Red de emergencia para reportar y buscar mascotas perdidas o en refugio tras el terremoto. Publica foto, zona y contacto, consulta la galería de casos y el mapa "Se busca". Del servicio de perfiles digitales QR HuellaScan.',
    href: 'https://www.huellascan.com/terremoto',
    instagram: 'https://instagram.com/huella_scan',
  },
  {
    tag: 'Mascotas',
    title: 'Mi Gente Ve — Patitas a Salvo',
    description:
      'Red comunitaria para reencontrar mascotas perdidas, encontradas o con necesidad médica tras el terremoto. Busca por zona en el mapa, reporta casos y accede a un directorio de clínicas veterinarias 24 h y fundaciones de rescate animal.',
    href: 'https://migenteve.com/',
  },
  {
    tag: 'Insumos',
    title: 'De Mano en Mano',
    description:
      'Herramienta humanitaria sin fines de lucro que muestra en tiempo real los insumos que necesitan hospitales, refugios y comunidades verificados tras el terremoto. Es de solo lectura: revisa qué hace falta en cada punto y, si puedes, llévalo directamente.',
    href: 'https://www.demanoenmanove.org/',
  },
] satisfies PortalRaw[]

export const otrasDonaciones = [
  {
    tag: 'GlobalGiving',
    title: 'Venezuela Earthquake Relief Fund',
    description:
      'Fondo de GlobalGiving (organización 501(c)(3) con calificación de cuatro estrellas de Charity Navigator) que entrega financiamiento rápido y flexible a organizaciones locales para atención médica de emergencia, búsqueda y rescate, refugio temporal, alimentos, agua potable e insumos de higiene en las comunidades afectadas.',
    href: 'https://www.globalgiving.org/projects/venezuela-earthquake-relief-fund/',
    instagram: 'https://www.instagram.com/globalgiving/',
  },
  {
    tag: 'Hogar Bambi',
    title: 'Cuidado integral para 120 niños',
    description:
      'Hogar Bambi Venezuela (Caracas) da hogar, educación, atención médica y alimentación a 120 niños y jóvenes huérfanos o en abandono. Con el terremoto agravando la crisis, su labor de protección a la niñez vulnerable es aún más urgente. Proyecto verificado y destacado en GlobalGiving.',
    href: 'https://www.globalgiving.org/projects/integral-support-program-for-children/',
    instagram: 'https://www.instagram.com/hogarbambi/',
  },
  {
    tag: 'UNICEF',
    title: 'Respuesta de emergencia para la niñez',
    description:
      'UNICEF escaló su respuesta tras los sismos del 24 de junio de 2026: estima 1,8 millones de personas afectadas, 680.000 de ellas niños. Lleva agua potable, salud, nutrición, protección infantil y educación a las familias damnificadas.',
    href: 'https://help.unicef.org/global/venezuela-earthquake',
    instagram: 'https://www.instagram.com/unicef/',
  },
  {
    tag: 'Save the Children',
    title: 'Ayuda para la niñez',
    description:
      'Save the Children liberó 1,5 millones de dólares de su Fondo de Emergencia para la Niñez y trabaja con socios locales en salud, refugio, alimentos y protección infantil. Tiene calificación de 4 estrellas en Charity Navigator y por ahora duplica cada donación que recibe.',
    href: 'https://www.savethechildren.org/us/where-we-work/venezuela',
    instagram: 'https://www.instagram.com/savethechildren/',
  },
  {
    tag: 'Gobierno de Canadá',
    title: 'Cruz Roja Canadiense — Fondo igualado',
    description:
      'Llamado de la Cruz Roja Canadiense por el terremoto: hasta el 14 de julio de 2026 el gobierno de Canadá iguala dólar por dólar cada donación individual, así que cada $1 se convierte en $2 para auxiliar a las personas afectadas. Es la Cruz Roja de Canadá, independiente de la venezolana.',
    href: 'https://www.redcross.ca/how-we-help/current-emergency-responses/venezuela-earthquakes',
    instagram: 'https://www.instagram.com/redcrosscanada/',
  },
  {
    tag: 'Topos',
    title: 'Brigada de Rescate Topos Tlaltelolco',
    description:
      'Brigada mexicana de voluntarios, reconocida internacionalmente por su labor de búsqueda y rescate en terremotos. Las donaciones financian capacitación, herramientas para estructuras colapsadas y unidades caninas; no reciben apoyo gubernamental ni hacen colectas en la calle.',
    href: 'https://topos.mx/donar',
    instagram: 'https://www.instagram.com/topos.mx/',
  },
  {
    tag: 'Internet libre',
    title: 'Internet para rescatistas y víctimas',
    description:
      'Campaña de la Asociación Conexión Segura y Libre (VE sin Filtro) para desplegar puntos de conexión a internet y recarga de celulares en Venezuela. Es clave porque el régimen bloquea sitios de internet libre, aislando a quienes coordinan rescates y buscan a sus familiares.',
    href: 'https://www.gofundme.com/f/internet-for-rescuers-and-earthquake-victims-in-venezuela',
    instagram: 'https://x.com/conexionsegura',
  },
  {
    tag: 'Bitcoin',
    title: 'Fondo de Emergencia Sismo VZLA 2026',
    description:
      'Fondo en Bitcoin de la Academia BTC de la UCAB (Universidad Católica Andrés Bello) para canalizar ayuda a los afectados por el terremoto, aprovechando una vía de donación rápida y sin intermediarios bancarios.',
    href: 'https://btc.academiasucab.com/fondo-emergencia-sismo-vzla-2026/',
    instagram: 'https://www.instagram.com/academiabtcucab/',
  },
  {
    tag: 'Jesuitas',
    title: 'Fundación Loyola — Atención a emergencias',
    description:
      'Campaña de la Fundación Loyola, obra de los Jesuitas de México, para apoyar a las familias afectadas por los sismos en Venezuela. Las donaciones se canalizan a través de la oficina Unidos en la Misión con el concepto "Emergencia 2026 MX".',
    href: 'https://www.fundacionloyola.mx/atenci%C3%B3n-a-emergencias',
    instagram: 'https://www.instagram.com/fundacionloyola/',
  },
  {
    tag: 'Prepara Familia',
    title: 'Nutrición y salud infantil',
    description:
      'ONG venezolana que acompaña a niños hospitalizados o con enfermedades crónicas y a sus madres cuidadoras. Ante la emergencia del terremoto está llevando insumos médicos, pañales, toallitas húmedas y artículos de higiene personal y menstrual a los hospitales. Recibe donaciones por PayPal, Pago Móvil y transferencia.',
    href: 'https://preparafamilia.org/como-apoyar/',
    instagram: 'https://www.instagram.com/preparafamilia/',
  },
  {
    tag: 'Fundana',
    title: 'Emergencia Venezuela',
    description:
      'Campaña de Fundana, fundación venezolana que protege y cuida a niños en situación de abandono o riesgo. Ante la emergencia del terremoto recauda fondos para atender a la niñez vulnerable bajo su resguardo.',
    href: 'https://www.gofundme.com/f/fundana-emergencia-venezuela',
    instagram: 'https://www.instagram.com/fundana_fundacion/',
  },
  {
    tag: 'Desde EE. UU.',
    title: 'Programa de Ayuda Humanitaria para Venezuela',
    description:
      'Organización con sede en Florida (PAHPV) que, en alianza con Locatel, equipa a Bomberos Universitarios y equipos de rescate con suministros médicos entregados directamente en Venezuela. Recibe donaciones desde EE. UU. por Zelle, PayPal y cheque.',
    href: 'https://www.ayudahumanitariavenezuela.org/donar/',
    instagram: 'https://www.instagram.com/ayudahumanitariavzla/',
  },
  {
    tag: 'Bomberos UCV',
    title: 'Equipos de rescate',
    description:
      'Campaña de Give Pan de Vida y la UCV Firefighters Foundation para comprar equipos de rescate de entrega inmediata en Caracas.',
    href: 'https://donorbox.org/emergency-relief-for-venezuela-s-earthquake-survivors',
    instagram: 'https://www.instagram.com/givepandevida/',
    socials: ['https://www.instagram.com/ucvfirefighters/'],
  },
  {
    tag: 'Iglesia Católica',
    title: 'Cáritas de Venezuela',
    description:
      'Ayuda humanitaria a las familias más vulnerables: alimentos, agua segura, salud y kits de higiene en todo el país.',
    href: 'https://caritasvenezuela.org/donaciones/',
    instagram: 'https://www.instagram.com/caritasdevzla/',
  },
  {
    tag: 'Red Xavier',
    title: 'Emergencias SJ',
    description:
      'Respuesta de Entreculturas, Alboan, Fe y Alegría y JRS: refugio, artículos esenciales, protección y apoyo psicosocial.',
    href: 'https://emergencias-sj.org/emergencia-venezuela/',
    instagram: 'https://www.instagram.com/alboanong/',
  },
  {
    tag: 'Avalada por EE. UU.',
    title: "Samaritan's Purse",
    description:
      'Organización autorizada por el Departamento de Estado de EE. UU. para responder a la emergencia por los terremotos en Venezuela.',
    href: 'https://www.samaritanspurse.org/article/samaritans-purse-responding-to-venezuela-quakes/',
    instagram: 'https://www.instagram.com/samaritanspurse/',
  },
  {
    tag: 'Avalada por EE. UU.',
    title: 'Catholic Relief Services',
    description:
      'Organización autorizada por el Departamento de Estado de EE. UU. para recibir donaciones destinadas a Venezuela.',
    href: 'https://www.crs.org/donate/venezuela-earthquake',
    instagram: 'https://www.instagram.com/catholicreliefservices/',
  },
  {
    tag: 'Farmacias',
    title: 'Unidos por Venezuela — Farmatodo',
    description:
      'Campaña de Farmatodo para canalizar medicinas e insumos de primera necesidad hacia las personas afectadas.',
    href: 'https://www.farmatodo.com.ve/marcas/unidosporvenezuela',
    instagram: 'https://www.instagram.com/farmatodovzla/',
  },
  {
    tag: 'United Way',
    title: 'United Way — Disaster Response',
    description:
      'Fondo de respuesta a desastres de United Way para llevar ayuda y recursos a las comunidades afectadas.',
    href: 'https://support.unitedway.org/page/disaster?Term=Graphic+%28static%29%2COrganic%2CDisaster%E2%80%8B%2C20%25+%28New%29%E2%80%8B%2CResponse+%28Community+Resiliency%29%2CSingular%2CCommunity+Resiliency%2CStock%2CDelivering+Help+and+Hope+to+Our+Neighbors%E2%80%8B%2CStrengthening+Communities+Through+Connection',
    instagram: 'https://www.instagram.com/unitedway/',
  },
  {
    tag: 'DVC',
    title: 'Dividendo Voluntario para la Comunidad',
    description:
      'Aportes para educación, salud y medios de vida en comunidades vulnerables, destinados a donde más se necesitan.',
    href: 'https://www.dividendovoluntario.org/dona/',
    instagram: 'https://www.instagram.com/dvc_ve/',
  },
  {
    tag: 'GoFundMe',
    title: 'I Love Venezuela Foundation — Ayuda de emergencia',
    description:
      'Campaña de I Love Venezuela Foundation (We Love Foundation Inc.) junto a Global Empowerment Mission: alimentos, agua potable, atención médica, kits de higiene, refugio temporal y apoyo a familias vulnerables.',
    href: 'https://www.gofundme.com/f/emergency-relief-for-venezuela-earthquake-victims',
    instagram: 'https://www.instagram.com/welove_foundation/',
  },
  {
    tag: 'Healing Venezuela',
    title: 'Emergency Appeal — Earthquake in Venezuela',
    description:
      'Campaña en JustGiving de Healing Venezuela, organización benéfica del Reino Unido, para apoyar hospitales, médicos residentes y servicios de rescate, y comprar insumos médicos.',
    href: 'https://www.justgiving.com/campaign/venezuelaearthquake2026',
    instagram: 'https://www.instagram.com/healingvenezuela/',
  },
  {
    tag: 'GEM',
    title: 'Global Empowerment Mission',
    description:
      'Organización 501(c)(3) que, junto a I Love Venezuela, destina una ayuda inicial de 35 millones de dólares: alimentos, agua, higiene, materiales para refugios e insumos médicos para hospitales de las zonas afectadas.',
    href: 'https://www.globalempowermentmission.org/es/mission/venezuela-earthquakes/',
    instagram: 'https://www.instagram.com/globalempowermentmission/',
  },
  {
    tag: 'World Central Kitchen',
    title: 'Comidas para sobrevivientes',
    description:
      'World Central Kitchen lleva comidas calientes a la primera línea de los desastres. Esta campaña cuenta con un aporte igualado por Endemol Shine Boomdog, que duplica cada donación.',
    href: 'https://donate.wck.org/team/835442',
    instagram: 'https://www.instagram.com/wckitchen/',
  },
  {
    tag: 'Fondo funerario',
    title: 'PANA Fondo Funerario',
    description:
      'Iniciativa del sector asegurador venezolano para acompañar a las familias en el proceso fúnebre, para que ningún venezolano se quede sin una despedida digna. Aporta en bolívares o dólares vía PagoDirecto.',
    href: 'https://dona.pagodirecto.com/en/donate/panafondofunerario',
    instagram: 'https://www.instagram.com/panatech/',
  },
  {
    tag: 'VACC Foundation',
    title: 'Venezuelan American Chamber of Commerce',
    description:
      'Las comunidades afectadas por el terremoto en Venezuela necesitan ayuda urgente. Tu donación apoyará operaciones de búsqueda y rescate, asistencia humanitaria, agua potable, insumos médicos, refugio temporal y otros recursos esenciales.',
    href: 'https://donate.stripe.com/eVq14m62u9BRdpm4Xw2sM02',
    instagram: 'https://www.instagram.com/venamcham_oficial/',
  },
  {
    tag: 'CADENA',
    title: 'Respuesta a emergencias',
    description:
      'ONG internacional de ayuda humanitaria con oficina en Venezuela y amplia experiencia en sismos y desastres. Ante el terremoto canaliza ayuda directa: rescate, agua segura, alimentos y atención a las familias afectadas.',
    href: 'https://donate.cadena.ngo/campaign/815508/donate',
    instagram: 'https://www.instagram.com/cadenainternational/',
  },
  {
    tag: 'Rescate USAR',
    title: 'Bomberos de Chile',
    description:
      'Los Bomberos de Chile son 100% voluntarios y su equipo USAR BoCH está desplegado en Venezuela: tras el terremoto localizaron con vida a personas atrapadas bajo los escombros. Equipar a un bombero es costoso y en buena parte lo financian ellos mismos; tu aporte ayuda a sostener esa labor.',
    href: 'https://donarabomberos.cl/',
    instagram: 'https://www.instagram.com/bomberoschileoficial/',
  },
  {
    tag: 'Colombia',
    title: 'Fundación TAAP',
    description:
      'Fundación colombiana (Bogotá) que desde el primer día coordinó la respuesta ciudadana al terremoto: reconectó a miles de familias con sus desaparecidos, envió misiones médicas a hospitales colapsados y despachó decenas de toneladas de ayuda a Caracas, La Guaira y Caraballeda. Dona en pesos colombianos.',
    href: 'https://donaronline.org/fundacion-taap/nuestra-amistaap',
    instagram: 'https://www.instagram.com/fundaciontaap',
  },
  {
    tag: 'Rescate aéreo',
    title: 'Patrulla Aérea Civil Colombiana',
    description:
      'Organización colombiana sin ánimo de lucro con 60 años llevando atención médica por vía aérea a zonas remotas y víctimas de catástrofes. Moviliza médicos, insumos y ayuda humanitaria a las comunidades afectadas por el terremoto; cada vuelo lleva personal de salud y rescatistas. Dona en pesos colombianos.',
    href: 'https://donaronline.org/patrulla-aerea-civil-colombiana/salvemos-vidas-en-venezuela',
    instagram: 'https://www.instagram.com/patrullaaereacivilcolombia/',
  },
  {
    tag: 'Naciones Unidas',
    title: 'ONU — Fondo Humanitario para Venezuela',
    description:
      'Campaña de UN Crisis Relief, gestionada por la Oficina de la ONU para la Coordinación de Asuntos Humanitarios (OCHA). Las donaciones van al Fondo Humanitario para Venezuela, que trabaja con decenas de ONG locales y equipos de respuesta para llevar salud, agua segura, alimentos, refugio y educación a las familias afectadas por el terremoto.',
    href: 'https://crisisrelief.un.org/en/donate-venezuela-crisis',
    instagram: 'https://www.instagram.com/ocha_venezuela/',
  },
] satisfies PortalRaw[]

export const advertencias = [
  {
    tag: 'Evitar',
    title: 'Cruz Roja Venezolana',
    description:
      'Desde agosto de 2023, el Tribunal Supremo de Justicia intervino la Cruz Roja Venezolana, cesó a su directiva y designó una junta reestructuradora. Al perder su independencia frente al régimen, dejó de ser un canal humanitario neutral: te recomendamos no donar a través de ella.',
    href: 'https://lapatilla.com/2023/08/10/ong-ven-intervencion-chavista-de-la-cruz-roja-venezolana-como-un-grave-precedente/',
  },
] satisfies PortalRaw[]

export const informacionAdicional = [
  {
    tag: 'U.S. Department of State',
    title: 'Responding to Venezuela Earthquakes',
    description:
      'Guía oficial del Departamento de Estado de EE. UU.: cómo donar de forma segura, evitar estafas, organizaciones aliadas y asistencia consular para estadounidenses.',
    href: 'https://www.state.gov/responding-to-venezuela-earthquakes',
    instagram: 'https://www.instagram.com/statedept/',
  },
  {
    tag: 'Periodismo',
    title: 'Armando.info — Viaje al epicentro del olvido',
    description:
      'Reportaje de Armando.info, medio de investigación venezolano premiado (Pulitzer y Maria Moors Cabot), sobre las zonas olvidadas del terremoto. El régimen bloquea su sitio, así que también tiene un espejo; puedes apoyar su trabajo independiente.',
    href: 'https://armando.info/viaje-al-epicentro-del-olvido/',
    instagram: 'https://www.instagram.com/armando.info/',
  },
  {
    tag: 'NASA',
    title: 'Mapas satelitales del terremoto',
    description:
      'Portal de Earthdata GIS de la NASA con imágenes y datos satelitales del terremoto. Con la misión NISAR mapean cómo los sismos desplazaron la superficie del terreno, información clave para los equipos de respuesta y científicos.',
    href: 'https://gis.earthdata.nasa.gov/portal/home/group.html?sortField=added&sortOrder=desc&id=4d46fcec8d7e459da094129317ab78dd#content',
    instagram: 'https://www.instagram.com/nasa/',
  },
  {
    tag: 'Cartografía',
    title: 'MapAction',
    description:
      'Organización benéfica de cartografía humanitaria. A petición de la ONU (UNDAC) envió cartógrafos hispanohablantes a Venezuela para producir mapas del terremoto —densidad de población, daños en edificios, hospitales activos e intensidad sísmica— que orientan a los equipos de búsqueda y rescate y la entrega de ayuda.',
    href: 'https://maps.mapaction.org/event/2026-ven-001',
    x: 'https://x.com/mapaction',
  },
  {
    tag: 'Internet libre',
    title: 'Conexión Segura y Libre',
    description:
      'Organización que documenta y combate la censura en internet en Venezuela. El régimen bloquea sitios de información independiente y herramientas de comunicación, lo que dificulta coordinar la ayuda tras el terremoto.',
    href: 'https://conexionsegura.org/',
    instagram: 'https://www.instagram.com/conexion_segura/',
  },
  {
    tag: 'Censura',
    title: 'VE sin Filtro',
    description:
      'Proyecto que monitorea en tiempo real los bloqueos a sitios web, redes sociales y servicios en Venezuela, evidenciando las restricciones del régimen al acceso libre a internet.',
    href: 'https://vesinfiltro.org/',
    instagram: 'https://x.com/vesinfiltro',
  },
  {
    tag: 'Derechos humanos',
    title: 'PROVEA — Informe 2025',
    description:
      'PROVEA, ONG venezolana de derechos humanos con más de 37 años, documenta con datos verificados la crisis previa al terremoto: salud, agua y alimentación colapsadas que hoy agravan la emergencia. Útil para exigir transparencia en las cifras de víctimas y en la ayuda.',
    href: 'https://provea.org/informe2025/',
    instagram: 'https://www.instagram.com/proveaong/',
  },
  {
    tag: 'Análisis',
    title: 'Caracas Chronicles',
    description:
      'Medio independiente que cubre en inglés la realidad venezolana y el terremoto, una fuente para entender el contexto y contrastar las cifras oficiales de daños y víctimas frente a la propaganda del régimen.',
    href: 'https://www.caracaschronicles.com/',
    instagram: 'https://www.instagram.com/caracaschron/',
  },
  {
    tag: 'Libertad de expresión',
    title: 'Espacio Público / Sin Mordaza',
    description:
      'Organización venezolana que defiende la libertad de expresión y el derecho a la información. Documenta la censura y los ataques a la prensa, clave para que las cifras y necesidades reales del terremoto no queden silenciadas por el régimen.',
    href: 'https://sinmordaza.org/',
    instagram: 'https://www.instagram.com/sinmordaza/',
  },
  {
    tag: 'Noticias',
    title: 'El Estímulo',
    description:
      'Medio venezolano con una sección dedicada al terremoto: balance de víctimas, labores de búsqueda y rescate, refugios, servicios que se reactivan, guías de salud y cómo donar de forma segura. Útil para seguir la emergencia con datos verificados.',
    href: 'https://elestimulo.com/',
    instagram: 'https://www.instagram.com/elestimulo/',
  },
  {
    tag: 'Rescate urbano',
    title: 'USAR Bomberos de Chile',
    description:
      'Página oficial del grupo de Búsqueda y Rescate Urbano (USAR) de Bomberos de Chile, acreditado bajo la metodología INSARAG. Su equipo se desplegó en Venezuela tras el terremoto para las labores de búsqueda y rescate; aquí puedes seguir su trabajo y noticias.',
    href: 'https://www.bomberos.cl/usar',
    instagram: 'https://www.instagram.com/bomberoschileoficial/',
  },
  {
    tag: 'Rescate urbano',
    title: 'Bomberos GIRECAN',
    description:
      'Grupo Internacional de Rescate ante Catástrofes Naturales (España): equipo USAR ligero con guías caninos K9, médicos y bomberos, acreditado bajo la metodología INSARAG. Se desplegó en Venezuela para las labores de búsqueda y rescate tras el terremoto.',
    href: 'https://bomberosgirecan.es/featured-content/equipo-usar-bomberos-girecan/',
    x: 'https://x.com/BomberosGIRECAN',
  },
  {
    tag: 'Rescate urbano',
    title: 'Bomberos y Rescate de Chequia (HZS ČR)',
    description:
      'Cuerpo de Bomberos y Rescate de la República Checa. Su equipo USAR se desplegó en Venezuela tras el terremoto y rescató a víctimas atrapadas entre los escombros, con apoyo psicológico a los familiares en el lugar.',
    href: 'https://hzscr.gov.cz/',
    x: 'https://x.com/hasici_cr',
  },
  {
    tag: 'Noticias',
    title: 'Araguaney News',
    description:
      'Medio digital venezolano de actualidad, análisis y opinión que cubre la emergencia del terremoto y la crisis del país con la verdad por delante, frente al silencio de los medios oficiales.',
    href: 'https://araguaneynews.com/',
    instagram: 'https://www.instagram.com/araguaneynews/',
  },
  {
    tag: 'Noticias',
    title: 'Válvula Política',
    description:
      'Medio venezolano que sigue de cerca el terremoto: cifras de fallecidos en Tucacas, listados de pacientes en hospitales de Caracas y la exigencia de luto nacional y transparencia informativa al gobierno.',
    href: 'https://valvulapolitica.com/home/',
    instagram: 'https://www.instagram.com/valvulapolitica/',
  },
  {
    tag: 'Verificación',
    title: 'Cazadores de Fake News',
    description:
      'ONG venezolana de verificación e investigación digital (OSINT). Desmiente la desinformación sobre el terremoto —como las cifras infladas de fallecidos o el “doblete sísmico”— para que decidas y dones con datos reales, no con rumores ni mentiras.',
    href: 'https://www.cazadores.info/',
    instagram: 'https://www.instagram.com/cazamosfakenews/',
  },
  {
    tag: 'Educación',
    title: 'INEE — Foco de crisis: Venezuela',
    description:
      'Página de la INEE (Red Interagencial para la Educación en Emergencias) sobre el terremoto: antecedentes con datos verificados de daños en escuelas, organizaciones aliadas y recursos de educación, apoyo psicosocial y protección de la niñez para estudiantes y docentes afectados.',
    href: 'https://inee.org/es/foco-de-crisis-venezuela',
    instagram: 'https://twitter.com/ineetweets',
  },
  {
    tag: 'Derechos digitales',
    title: 'Acceso Libre',
    description:
      'Organización venezolana que defiende la libertad de expresión, la privacidad y el acceso a la información en internet frente a la vigilancia y la censura del régimen. Investiga bloqueos, forma a las comunidades en seguridad digital y está detrás del mapa ciudadano terremotoVE, con una política de datos que detalla cómo protege la información de las personas afectadas.',
    href: 'https://acceso-libre.org/',
    instagram: 'https://x.com/AccesoLibreRed',
  },
  {
    tag: 'Enciclopedia',
    title: 'Wikipedia — Terremotos de Venezuela de 2026',
    description:
      'Artículo enciclopédico que documenta los terremotos del 24 de junio de 2026 en Venezuela: magnitud, epicentro, daños, víctimas y respuesta. Reúne datos de múltiples fuentes con referencias verificables para entender el contexto de la emergencia.',
    href: 'https://es.wikipedia.org/wiki/Terremotos_de_Venezuela_de_2026',
  },
] satisfies PortalRaw[]

export const prensa = [
  {
    tag: 'Periodista',
    title: 'David Alandete',
    description:
      'Periodista y analista que sigue de cerca la actualidad venezolana y la emergencia del terremoto; comparte reportería y análisis en sus redes.',
    href: 'https://x.com/alandete',
    x: 'https://x.com/alandete',
    instagram: 'https://www.instagram.com/alandete/',
  },
  {
    tag: 'Periodista',
    title: 'Germania Rodríguez Poleo',
    description:
      'Periodista que cubre la crisis de Venezuela y el terremoto; publica información y entrevistas en X, Instagram y YouTube.',
    href: 'https://x.com/iamGermania',
    x: 'https://x.com/iamGermania',
    instagram: 'https://www.instagram.com/iamgermania',
    youtube: 'https://www.youtube.com/@iamgermania',
  },
  {
    tag: 'Periodista',
    title: 'Noelia Belén Izarza',
    description:
      'Periodista que reporta sobre la emergencia y la actualidad de Venezuela a través de su cuenta de X.',
    href: 'https://x.com/noeliaizarza',
    x: 'https://x.com/noeliaizarza',
  },
  {
    tag: 'Periodista',
    title: 'Melanio Escobar',
    description:
      'Periodista y comunicador enfocado en libertad de expresión; cubre el terremoto y la situación de Venezuela en X y su canal de YouTube.',
    href: 'https://x.com/MelanioBar',
    x: 'https://x.com/MelanioBar',
    youtube: 'https://www.youtube.com/@melaniobar',
  },
  {
    tag: 'Periodista',
    title: 'David Placer',
    description:
      'Periodista que analiza la actualidad de Venezuela y la emergencia del terremoto; publica en X, Instagram y su canal de YouTube.',
    href: 'https://x.com/dplacer',
    x: 'https://x.com/dplacer',
    instagram: 'https://www.instagram.com/davidplacer/',
    youtube: 'https://www.youtube.com/@DavidPlacer',
  },
  {
    tag: 'Periodista',
    title: 'Goizeder Azúa',
    description:
      'Periodista que informa sobre Venezuela y la emergencia del terremoto; comparte coberturas y análisis en X, Instagram y YouTube.',
    href: 'https://x.com/goiazua',
    x: 'https://x.com/goiazua',
    instagram: 'https://www.instagram.com/goiazua/',
    youtube: 'https://www.youtube.com/@goiazua',
  },
  {
    tag: 'Periodista',
    title: 'Sergio Novelli',
    description:
      'Periodista y presentador que sigue la actualidad de Venezuela y el terremoto en sus redes y su canal de YouTube.',
    href: 'https://x.com/SergioNovelliE',
    x: 'https://x.com/SergioNovelliE',
    instagram: 'https://www.instagram.com/sergionovelli/',
    youtube: 'https://www.youtube.com/@SergioNovelliOficial',
  },
  {
    tag: 'Cobertura en vivo',
    title: 'Venezuela EN VIVO (Santiago Rafael)',
    description:
      'Canal de Santiago Rafael, politólogo que transmite en vivo durante horas la cobertura del terremoto y la actualidad venezolana en YouTube.',
    href: 'https://www.youtube.com/@VenezuelaENVIVO11',
    youtube: 'https://www.youtube.com/@VenezuelaENVIVO11',
    x: 'https://x.com/SantiagoRafa11',
  },
  {
    tag: 'Periodista',
    title: 'Carla Angola',
    description:
      'Periodista y presentadora que cubre la actualidad de Venezuela y la emergencia del terremoto; activa en X e Instagram.',
    href: 'https://x.com/carlaangola',
    x: 'https://x.com/carlaangola',
    instagram: 'https://www.instagram.com/carlaangola/',
  },
  {
    tag: 'Periodista',
    title: 'Gladys Rodríguez',
    description:
      'Periodista que informa sobre la crisis de Venezuela y el terremoto; publica en X, Instagram y su canal de YouTube.',
    href: 'https://x.com/rodriguezgladys',
    x: 'https://x.com/rodriguezgladys',
    instagram: 'https://www.instagram.com/rodriguez_gladys/',
    youtube: 'https://www.youtube.com/@gladysrodriguezoficial',
  },
  {
    tag: 'Periodista',
    title: 'Maryorin Méndez',
    description:
      'Periodista que reporta sobre la emergencia y la actualidad de Venezuela en X e Instagram.',
    href: 'https://x.com/maryorinmendez',
    x: 'https://x.com/maryorinmendez',
    instagram: 'https://www.instagram.com/maryorin_mendez/',
  },
  {
    tag: 'Periodista',
    title: 'Michel Baljet',
    description:
      'Periodista que cubre la actualidad de Venezuela y la emergencia del terremoto; comparte información en su cuenta de X.',
    href: 'https://x.com/MichelBaljet',
    x: 'https://x.com/MichelBaljet',
  },
  {
    tag: 'Periodista',
    title: 'María Valentina',
    description:
      'Periodista que informa sobre la emergencia del terremoto y la actualidad de Venezuela en Instagram.',
    href: 'https://www.instagram.com/marivalecomunica/',
    socials: ['https://www.instagram.com/marivalecomunica/'],
  },
  {
    tag: 'Cobertura en vivo',
    title: 'Bowery Newsroom - Guarimba Digital',
    description:
      'Proyecto de streaming de Gaston Levar (BoweryTV), autor de "El Poder del Streaming", que transmite en vivo durante horas la cobertura del terremoto y la actualidad de Venezuela en YouTube.',
    href: 'https://www.youtube.com/@bowerytv',
    youtube: 'https://www.youtube.com/@bowerytv',
    x: 'https://x.com/GastonLevar',
  },
  {
    tag: 'Periodista',
    title: 'Maibort Petit',
    description:
      'Investigadora y periodista que cubre la corrupción y la actualidad de Venezuela, incluida la emergencia del terremoto; publica en X, YouTube e Instagram.',
    href: 'https://x.com/maibortpetit',
    x: 'https://x.com/maibortpetit',
    youtube: 'https://www.youtube.com/channel/UCUC9reOFgPwTagT4L5tpTyg',
    instagram: 'https://www.instagram.com/maibortpetit/',
  },
  {
    tag: 'Opinión',
    title: 'Claret Sandoval',
    description:
      'Comparte opiniones y análisis sobre la emergencia del terremoto y la actualidad de Venezuela en Instagram.',
    href: 'https://www.instagram.com/claret_sandoval1/',
    socials: ['https://www.instagram.com/claret_sandoval1/'],
  },
  {
    tag: 'Opinión',
    title: 'Johanna Peña',
    description:
      'Publica opiniones sobre la emergencia del terremoto y la actualidad de Venezuela en Instagram.',
    href: 'https://www.instagram.com/joalesstoks/',
    socials: ['https://www.instagram.com/joalesstoks/'],
  },
  {
    tag: 'Análisis en inglés',
    title: 'Alex_TVzla',
    description:
      'Abogado e historiador (Harvard Law | Stanford) que explica Venezuela y el terremoto en inglés, sin propaganda, en su podcast y redes.',
    href: 'https://x.com/at_tvzla',
    x: 'https://x.com/at_tvzla',
    youtube: 'https://www.youtube.com/@at_tvzla',
    instagram: 'https://www.instagram.com/at_tvzla/',
  },
  {
    tag: 'Derechos humanos',
    title: 'Tamara Suju',
    description:
      'Abogada defensora de derechos humanos y directora ejecutiva del Casla Institute; documenta la situación de Venezuela y da seguimiento a la emergencia del terremoto en X e Instagram.',
    href: 'https://x.com/TAMARA_SUJU',
    x: 'https://x.com/TAMARA_SUJU',
    instagram: 'https://www.instagram.com/tamysur/',
  },
  {
    tag: 'Periodista',
    title: 'Alejandra Oraa',
    description:
      'Periodista y presentadora que cubre la actualidad de Venezuela y la emergencia del terremoto; activa en X, Instagram y su sitio web.',
    href: 'https://x.com/alejandraoraa',
    x: 'https://x.com/alejandraoraa',
    instagram: 'https://www.instagram.com/alejandraoraa',
    website: 'https://alejandraoraa.net/',
  },
  {
    tag: 'Periodista',
    title: 'Luis Carlos Díaz',
    description:
      'Periodista y activista de derechos digitales que sigue la actualidad de Venezuela y la emergencia del terremoto, con foco en tecnología, redes y libertad de información.',
    href: 'https://x.com/LuisCarlos',
    x: 'https://x.com/LuisCarlos',
  },
  {
    tag: 'Corresponsal',
    title: 'Marcos G Morin Aguirre',
    description:
      'Corresponsal en Caracas de La FM (RCN, Colombia), reportero gráfico y locutor; cubre la actualidad de Venezuela y la emergencia del terremoto en X.',
    href: 'https://x.com/Mmorin_informa',
    x: 'https://x.com/Mmorin_informa',
  },
  {
    tag: 'Corresponsal',
    title: 'Catherine Ellis',
    description:
      'Periodista británica que cubre Colombia y Venezuela; actualmente en el país informando sobre la emergencia del terremoto en X.',
    href: 'https://x.com/Cat_lucy1',
    x: 'https://x.com/Cat_lucy1',
  },
] satisfies PeriodistaRaw[]

function domainFromHref(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function handleFor(instagram?: string): string {
  if (!instagram) return ''
  try {
    return new URL(instagram).pathname.replace(/\/+/g, ' ').trim()
  } catch {
    return ''
  }
}

function socialsFor(item: AccionRaw | PortalRaw): string[] {
  const p = item as Partial<PeriodistaRaw>
  return [p.x, p.instagram, p.youtube, p.website, ...(p.socials ?? [])].filter(
    (url): url is string => Boolean(url),
  )
}

function letterFor(title: string): string {
  const first = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .charAt(0)
    .toUpperCase()
  return /[A-Z]/.test(first) ? first : '#'
}

export function buildDirectory(): DirectoryItem[] {
  const groups: Array<{ categoria: Categoria; items: readonly (AccionRaw | PortalRaw)[] }> = [
    { categoria: 'Acción', items: acciones },
    { categoria: 'Ayuda', items: portales },
    { categoria: 'Donar', items: otrasDonaciones },
    { categoria: 'Evitar', items: advertencias },
    { categoria: 'Info', items: informacionAdicional },
    { categoria: 'Prensa', items: prensa },
  ]

  return groups
    .flatMap(({ categoria, items }) =>
      items.map((item): DirectoryItem => {
        const socials = socialsFor(item)
        return {
          title: item.title,
          description: item.description,
          href: item.href,
          tag: 'tag' in item ? item.tag : undefined,
          instagram: socials[0],
          categoria,
          domain: domainFromHref(item.href),
          letter: letterFor(item.title),
          search: normalizeText(`${item.title} ${socials.map(handleFor).join(' ')}`),
        }
      }),
    )
    .sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }))
}
