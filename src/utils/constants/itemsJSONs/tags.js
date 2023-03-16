module.exports = [
	{
		number: "020",
		name: "ISBN",
		value: "isbn",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a ISBN", value: "a" },
			{ label: "$q Nombres relacionados", value: "q" }
		]
	},
	{
		number: "028",
		name: "Número del Editor Musical",
		value: "publisherNumber",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Número del editor", value: "a" },
			{ label: "$b Fuente", value: " b" },
			{ label: "$6 Enlace", value: "six" },
			{ label: "$8 Campo enlazado y núm. de secuencia", value: "eight" }
		]
	},
	{
		number: "040",
		name: "Fuente De Catalogación",
		value: "catalogSrc",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Agencia de catalogación original", value: "a" },
			{ label: "$b Idioma de catalogación", value: "b" },
			{ label: "$c Agencia que realiza la trascripción", value: "c" },
			{ label: "$e Convenciones de la descripción", value: "e" }
		]
	},
	{
		number: "041",
		name: "Código de Idioma",
		value: "languageCode",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Código de idioma para texto o pista ...", value: "a" },
			{ label: "$b Código de idioma del sumario, resumen o ...", value: "b" },
			{ label: "$d Código de idioma del texto cantado o ...", value: "d" },
			{ label: "$h Código de idioma de la versión original ...", value: "h" }
		]
	},
	{
		number: "043",
		name: "Código de Área Geográfica",
		value: "geoCode",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Código de área geográfica", value: "a" }
		]
	},
	{
		number: "045",
		name: "Periodo Cronológico",
		value: "cronoPeriod",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Código de periodo de tiempo", value: "a" }
		]
	},
	{
		number: "082",
		name: "Número de Clasificación Decimal Dewey",
		value: "deweyNumber",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Número de clasificación", value: "a" },
			{ label: "$b Número de ítem", value: "b" },
			{ label: "$2 Número de edición", value: "two" }
		]
	},
	{
		number: "100",
		name: "Asiento Principal - Nombre Personal",
		value: "primaryName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre personal", value: "a" },
			{ label: "$b Numeración", value: "b" },
			{ label: "$c Títulos u otras palabras asociadas ...", value: "c" },
			{ label: "$d Fechas asociadas con el nombre", value: "d" },
			{ label: "$e Mención de responsabilidad", value: "e" }
		]
	},
	{
		number: "110",
		name: "Asiento Principal - Nombre Corporativo",
		value: "primaryCorpoName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre corporativo o de jurisdicción", value: "a" },
			{ label: "$b Unidad subordinada", value: "b" }
		]
	},
	{
		number: "111",
		name: "Asiento Principal - Nombre De Reunión o Conferencia",
		value: "primaryConffName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre de reunión o jurisdicción ...", value: "a" },
			{ label: "$c Lugar de la reunión ...", value: "c" },
			{ label: "$d Fecha de la reunión", value: "d" },
			{ label: "$e Unidad subordinada", value: "e" }
		]
	},
	{
		number: "130",
		name: "Asiento Principal - Título Uniforme",
		value: "mainUniformTitle",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título uniforme", value: "a" },
			{ label: "$d Fecha de la firma del tratado", value: "d" },
			{ label: "$f Fecha de una obra", value: "f" },
			{ label: "$g Información miscelánea", value: "g" },
			{ label: "$h Medio", value: "h" },
			{ label: "$k Subencabezamiento de forma", value: "k" },
			{ label: "$l Idioma de una obra", value: "l" },
			{ label: "$s Versión", value: "s" }
		]
	},
	{
		number: "240",
		name: "Título Uniforme",
		value: "uniformTitle",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título uniforme", value: "a" },
			{ label: "$d Fecha de la firma del tratado", value: "d" },
			{ label: "$f Fecha de una obra", value: "f" },
			{ label: "$g Información miscelánea", value: "g" },
			{ label: "$h Medio", value: "h" },
			{ label: "$k Subencabezamiento de forma", value: "k" },
			{ label: "$l Idioma de una obra", value: "l" },
			{ label: "$s Versión", value: "s" }
		]
	},
	{
		number: "245",
		name: "Mención de Título",
		value: "title",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título", value: "a" },
			{ label: "$b Subtítulo", value: "b" },
			{ label: "$c Mención de responsabilidad", value: "c" },
			{ label: "$h Medio", value: "h" }
		]
	},
	{
		number: "246",
		name: "Variación del Título",
		value: "titleVariation",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título", value: "a" },
			{ label: "$b Subtítulo", value: "b" },
			{ label: "$f Fecha o designación secuencial", value: "f" },
			{ label: "$i Despliegue de texto", value: "i" },
			{ label: "$n Número de la sección de una obra", value: "n" },
			{ label: "$p Nombre de la sección de una obra", value: "p" }
		]
	},
	{
		number: "250",
		name: "Mención de Edición",
		value: "edition",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Mención de edición", value: "a" },
			{ label: "$b Mención de responsabilidad relacionada ...", value: "b" }
		]
	},
	{
		number: "255",
		name: "Datos Matemáticos Cartográficos",
		value: "mathData",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Mención de escala", value: "a" },
			{ label: "$b Mención de proyección", value: "b" },
			{ label: "$c Mención de cordenadas", value: "c" },
			{ label: "$d Mención de zona", value: "d" },
			{ label: "$e Mención de equinoccio", value: "e" },
			{ label: "$f Outer G-ring coordinate pairs", value: "f" },
			{ label: "$g Exclusion G-ring coordinate pairs", value: "g" }
		]
	},
	{
		number: "256",
		name: "Archivos de Computadora: Características",
		value: "pcFiles",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Características del archivo de computadora", value: "a" }
		]
	},
	{
		number: "264",
		name: "Publicación, Distribución, etc.",
		value: "release",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Lugar de publicación, distribución", value: "a" },
			{ label: "$b Nombre del editor, distribuidor", value: "b" },
			{ label: "$c Fecha de publicación, distribución", value: "c" },
			{ label: "$e Lugar de impresión", value: "e" },
			{ label: "$f Impresor", value: "f" }
		]
	},
	{
		number: "300",
		name: "Descripción Física",
		value: "physicalDesc",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Extensión", value: "a" },
			{ label: "$b Otros detalles físicos", value: "b" },
			{ label: "$c Dimensiones", value: "c" },
			{ label: "$e Material complementario", value: "e" },
			{ label: "$f Tipo de la unidad", value: "f" },
			{ label: "$g Medida de la unidad", value: "g" }
		]
	},
	{
		number: "336",
		name: "Tipo de Contenido",
		value: "contentType",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Término del tipo de contenido", value: "a" },
			{ label: "$b Código del tipo de contenido", value: "b" },
			{ label: "$2 Fuente del término", value: "two" },
			{ label: "$3 Especificación de los materiales", value: "three" }
		]
	},
	{
		number: "337",
		name: "Tipo de Medio",
		value: "mediaType",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Término del tipo de medio", value: "a" },
			{ label: "$b Código del tipo de medio", value: "b" },
			{ label: "$2 Fuente", value: "two" },
			{ label: "$3 Especificación de los materiales", value: "three" }
		]
	},
	{
		number: "338",
		name: "Tipo de Soporte",
		value: "supportType",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Término del tipo de contenido", value: "a" },
			{ label: "$b Código del tipo de contenido", value: "b" },
			{ label: "$2 Fuente del término", value: "two" },
			{ label: "$3 Especificación de los materiales", value: "three" }
		]
	},
	{
		number: "351",
		name: "Organización y Arreglo del Material",
		value: "materialOrg",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Organización", value: "a" },
			{ label: "$b Adaptación", value: "b" },
			{ label: "$c Nivel jerárquico", value: "c" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "490",
		name: "Mención De Serie / Entrada Secundaria",
		value: "series",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Mención de serie", value: "a" },
			{ label: "$v Designación secuencial del volumen", value: "v" }
		]
	},
	{
		number: "500",
		name: "Nota General",
		value: "generalNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota general", value: "a" }
		]
	},
	{
		number: "501",
		name: "Nota de 'Publicado o Encuadernado Con:'",
		value: "releaseNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de publicado o encuadernado con", value: "a" }
		]
	},
	{
		number: "504",
		name: "Nota de Bibliografía",
		value: "bibliographicNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de bibliografía", value: "a" },
			{ label: "$b Número de referencias", value: "b" }
		]
	},
	{
		number: "505",
		name: "Nota de Contenido",
		value: "contentNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Texto normalizado de contenido", value: "a" }
		]
	},
	{
		number: "506",
		name: "Nota de Restricciones de Acceso",
		value: "restrictionNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Términos que rigen el acceso", value: "a" }
		]
	},
	{
		number: "508",
		name: "Nota De Creditos De Creacion / Produccion ",
		value: "creationNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de créditos de creación ...", value: "a" }
		]
	},
	{
		number: "510",
		name: "Nota de Cita o Referencias",
		value: "refNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre de la fuente", value: "a" },
			{ label: "$b Fechas de cobertura de la fuente", value: "b" },
			{ label: "$x Núm. Int. Normalizado para Publ. Seriadas", value: "x" },
			{ label: "$3 Especificación de los materiales", value: "three" }
		]
	},
	{
		number: "511",
		name: "Nota de Participante o Interprete",
		value: "performerNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de participante o intérprete", value: "a" }
		]
	},
	{
		number: "516",
		name: "Nota Sobre el Tipo o Datos del Archivo de Computadora",
		value: "pcFileNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Tipo de archivo o notas de los datos", value: "a" }
		]
	},
	{
		number: "520",
		name: "Nota de Resumen",
		value: "summaryNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de resumen", value: "a" },
			{ label: "$b Ampliación del resumen", value: "b" },
			{ label: "$u URL", value: "u" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "521",
		name: "Nota de Audiencia",
		value: "audienceNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de audiencia", value: "a" },
			{ label: "$b Fuente", value: "b" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "522",
		name: "Nota de la Cobertura Geográfica",
		value: "geoNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de la cobertura geográfica", value: "a" }
		]
	},
	{
		number: "524",
		name: "Nota de Cita Predeterminada",
		value: "defaultCitationNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de cita predeterminada", value: "a" },
			{ label: "$2 Fuente del esquema usado", value: "two" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "530",
		name: "Nota Sobre Otro Formato Físico Disponible",
		value: "otherPhysicalFormat",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota sobre otro formato físico disponible", value: "a" },
			{ label: "$b Fuente de disponibilidad", value: "b" },
			{ label: "$c Condiciones de disponibilidad", value: "c" },
			{ label: "$d Número de pedido", value: "d" },
			{ label: "$u URL", value: "u" }
		]
	},
	{
		number: "533",
		name: "Nota de Reproducción",
		value: "playingNOte",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Tipo de producción", value: "a" },
			{ label: "$b Lugar de reproducción", value: "b" },
			{ label: "$c Agencia responsable de la reproducción", value: "c" },
			{ label: "$d Fecha de reproducción", value: "d" },
			{ label: "$e Descripción física de la reproducción", value: "e" },
			{ label: "$n Nota acerca de la reproducción", value: "n" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "534",
		name: "Nota de Versión Original",
		value: "versionNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Asiento principal del original", value: "a" },
			{ label: "$n Nota acerca del original", value: "n" },
			{ label: "$p Frase introductoria", value: "p" },
			{ label: "$t Mención de título del original", value: "t" }
		]
	},
	{
		number: "535",
		name: "Nota de Localización de Originales / Duplicados",
		value: "locationNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Custodio", value: "a" },
			{ label: "$b Dirección postal", value: "b" },
			{ label: "$c País", value: "c" },
			{ label: "$d Dirección de telecomunicación", value: "d" },
			{ label: "$g Código de localización del repositorio", value: "g" }
		]
	},
	{
		number: "536",
		name: "Nota de Información Sobre Financiamiento",
		value: "financialNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Texto de la nota", value: "a" },
			{ label: "$b Número de contrato", value: "b" },
			{ label: "$c Número de subvención", value: "c" },
			{ label: "$d Número no diferenciado", value: "d" },
			{ label: "$e Número de elemento de programa", value: "e" },
			{ label: "$f Número de proyecto", value: "f" },
			{ label: "$g Número de tarea", value: "g" },
			{ label: "$h Número de unidad de trabajo", value: "h" }
		]
	},
	{
		number: "538",
		name: "Nota de Detalles del Sistema",
		value: "systemNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de detalles del sistema", value: "a" }
		]
	},
	{
		number: "540",
		name: "Nota de Términos de Uso y Producción",
		value: "productionTermsNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de términos de uso y producción", value: "a" },
			{ label: "$b Jurisdicción", value: "b" },
			{ label: "$c Autorización", value: "c" },
			{ label: "$d Usuarios autorizados", value: "d" },
			{ label: "$u Identificador uniforme del recurso", value: "u" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "541",
		name: "Nota de Fuente Inmediata de Adquisición",
		value: "acquisitionNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Fuente de adquisición", value: "a" },
			{ label: "$b Dirección", value: "b" },
			{ label: "$c Método de adquisición", value: "c" },
			{ label: "$d Fecha de adquisición", value: "d" },
			{ label: "$e Número de acceso", value: "e" },
			{ label: "$f Propietario", value: "f" },
			{ label: "$h Precio de compra", value: "h" },
			{ label: "$n Extensión", value: "n" },
			{ label: "$o Tipo de unidad", value: "o" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "544",
		name: "Nota de Ubicación de Otros Materiales de Archivo",
		value: "otherGeoNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Custodio", value: "a" },
			{ label: "$b Dirección postal", value: "b" },
			{ label: "$c País", value: "c" },
			{ label: "$d Procedencia", value: "d" },
			{ label: "$n Nota", value: "n" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "545",
		name: "Nota Biográfica o Histórica",
		value: "biographicalNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota biográfica o histórica", value: "a" },
			{ label: "$b Extensión de la nota biográfica o histórica", value: "b" },
			{ label: "$u URL", value: "u" }
		]
	},
	{
		number: "546",
		name: "Nota de Idioma",
		value: "languageNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de idioma", value: "a" },
			{ label: "$b Información del código o alfabeto", value: "b" }
		]
	},
	{
		number: "555",
		name: "Nota de Índice Acumulatico",
		value: "indexNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de índices acumulativos", value: "a" },
			{ label: "$b Fuente de disponibilidad", value: "b" },
			{ label: "$c Grado de control", value: "c" },
			{ label: "$d Referencia bibliográfica", value: "d" },
			{ label: "$u URL", value: "u" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "556",
		name: "Nota de Información Sobre la Documentación",
		value: "docsNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de información sobre la documen...", value: "a" }
		]
	},
	{
		number: "561",
		name: "Historia de la Propiedad y Custodia",
		value: "custodyHistory",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Historia", value: "a" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "562",
		name: "Nota de Indentificación Ejemplar y Visión",
		value: "idNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Marcas de identificación", value: "a" },
			{ label: "$b Identificación del ejemplar", value: "b" },
			{ label: "$c Identificación de la versión", value: "c" },
			{ label: "$d Formato de presentación", value: "d" },
			{ label: "$e Número de ejemplares", value: "e" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "581",
		name: "Nota de Publicaciones Sobre los Materiales Descritos",
		value: "materialNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de publ. sobre los materiales desc..", value: "a" },
			{ label: "$z ISBN", value: "z" }
		]
	},
	{
		number: "585",
		name: "Nota de Exposiciones",
		value: "expoNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de exposiciones", value: "a" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "586",
		name: "Nota de Premios",
		value: "awardsNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de premios", value: "a" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "590",
		name: "Nota de Registro de Datos Ambientales",
		value: "envNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Temperatura", value: "a" },
			{ label: "$b Humedad", value: "b" },
			{ label: "$c Luxes", value: "c" },
			{ label: "$d Ubicación de la obra", value: "d" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "591",
		name: "Nota de Estado de Conservación",
		value: "conservationNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nota de estado de conservación", value: "a" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "592",
		name: "Nota de Descripción Física",
		value: "physicalDescNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Tipo de soporte", value: "a" },
			{ label: "$b Daños en el soporte", value: "b" },
			{ label: "$c Daños en el elemento del soporte", value: "c" },
			{ label: "$d Restauraciones anteriores", value: "d" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "594",
		name: "Nota de Movimiento Interno de la Obra",
		value: "moveInNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Lugar original de la obra", value: "a" },
			{ label: "$b Lugar de movimiento de la obra", value: "b" },
			{ label: "$c Fecha del movimiento", value: "c" },
			{ label: "$d Responsable del movimiento", value: "d" },
			{ label: "$e Señalización del movimiento", value: "e" },
			{ label: "$f Autorización del movimiento", value: "f" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "595",
		name: "Nota de Movimiento Externo de la Obra",
		value: "moveOutNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Lugar original de la obra", value: "a" },
			{ label: "$b Lugar de movimiento de la obra", value: "b" },
			{ label: "$c Fecha de inicio del movimiento", value: "c" },
			{ label: "$d Responsable del movimiento", value: "d" },
			{ label: "$e Número de contrato/convenio", value: "e" },
			{ label: "$f Autorización del movimiento", value: "f" },
			{ label: "$3 Materiales especificados", value: "three" },
			{ label: "$5 Institución en la cual se aplica el campo", value: "five" }
		]
	},
	{
		number: "600",
		name: "Encabezamiento de Materia - Nombre Personal",
		value: "headerName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre personal", value: "a" },
			{ label: "$b Numeración", value: "b" },
			{ label: "$c Títulos u otras palabras asociadas con ...", value: "c" },
			{ label: "$d Fechas asociadas con el nombre", value: "d" },
			{ label: "$v Subdivisión de forma", value: "v" },
			{ label: "$x Subdivisión temática general", value: "x" },
			{ label: "$y Subdivisión cronológica", value: "y" },
			{ label: "$z Subdivisión geográfica", value: "z" }
		]
	},
	{
		number: "610",
		name: "Encabezamiento de Materia - Nombre Corporativo",
		value: "headerCorpoName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre corporativo o de jurisdicción", value: "a" },
			{ label: "$b Unidad subordinada", value: "b" },
			{ label: "$v Subdivisión de forma", value: "v" },
			{ label: "$x Subdivisión temática general", value: "x" },
			{ label: "$y Subdivisión cronológica", value: "y" },
			{ label: "$z Subdivisión geográfica", value: "z" }
		]
	},
	{
		number: "650",
		name: "Encabezamiento de Materia - Temático",
		value: "subjectHeader",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Término temático o nombre geográfico ...", value: "a" },
			{ label: "$v Subdivisión de forma", value: "v" },
			{ label: "$x Subdivisión temática general", value: "x" },
			{ label: "$y Subdivisión cronológica", value: "y" },
			{ label: "$z Subdivisión geográfica", value: "z" }
		]
	},
	{
		number: "651",
		name: "Encabezamiento de Materia - Geográfico",
		value: "geographicHeader",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre geográfico", value: "a" },
			{ label: "$v Subdivisión de forma", value: "v" },
			{ label: "$x Subdivisión temática general", value: "x" },
			{ label: "$y Subdivisión cronológica", value: "y" },
			{ label: "$z Subdivisión geográfica", value: "z" }
		]
	},
	{
		number: "655",
		name: "Término del Índice - Género / Forma / Características Físicas",
		value: "indexTerm",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Datos de género / formulario o término ...", value: "a" },
			{ label: "$b Término sin foco", value: "b" },
			{ label: "$c Faceta / designación de jerarquía", value: "c" },
			{ label: "$v Subdivisión de forma", value: "v" },
			{ label: "$x Subdivisión temática general", value: "x" },
			{ label: "$y Subdivisión cronológica", value: "y" },
			{ label: "$z Subdivisión geográfica", value: "z" },
			{ label: "$2 Fuente del término", value: "two" },
			{ label: "$3 Materiales especificados", value: "three" }
		]
	},
	{
		number: "700",
		name: "Asiento Secundario - Nombre Personal",
		value: "secName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre personal", value: "a" },
			{ label: "$b Numeración", value: "b" },
			{ label: "$c Títulos u otras palabras asociadas ...", value: "c" },
			{ label: "$d Fechas asociadas con el nombre", value: "d" },
			{ label: "$e Término relacionador", value: "e" }
		]
	},
	{
		number: "710",
		name: "Asiento Secundario - Nombre Corporativo",
		value: "secCorpoName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre personal", value: "a" },
			{ label: "$b Numeración", value: "b" },
			{ label: "$c Títulos u otras palabras asociadas ...", value: "c" },
			{ label: "$d Fechas asociadas con el nombre", value: "d" },
			{ label: "$e Término relacionador", value: "e" }
		]
	},
	{
		number: "711",
		name: "Asiento Secundario - Nombre De Reunión",
		value: "secConffName",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre de reunión o jurisdicción ...", value: "a" },
			{ label: "$c Lugar de la reunión ...", value: "c" },
			{ label: "$d Fecha de la reunión", value: "d" },
			{ label: "$e Unidad subordinada", value: "e" }
		]
	},
	{
		number: "730",
		name: "Asiento Secundario - Título Uniforme",
		value: "secTittle",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título uniforme", value: "a" },
			{ label: "$d Fecha de la firma del tratado", value: "d" },
			{ label: "$f Fecha de una obra", value: "f" }
		]
	},
	{
		number: "740",
		name: "Asiento Secundario - Título Relacionado o Analítico no Controlado",
		value: "secRelatedTittle",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Título relacionado o analítico no contro...", value: "a" }
		]
	},
	{
		number: "753",
		name: "Detalles de Acceso al Sistema Para Archivos de Computador",
		value: "systemAccessNote",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Marca y modelo de la máquina", value: "a" },
			{ label: "$b Lenguaje de programación", value: "b" },
			{ label: "$c Sistema operativo", value: "c" }
		]
	},
	{
		number: "856",
		name: "Localización y Acceso Electrónicos",
		value: "localization",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Nombre del servidor", value: "a" },
			{ label: "$b Número de acceso", value: "b" },
			{ label: "$c Información sobre la compresión", value: "c" },
			{ label: "$d Ruta de acceso", value: "d" },
			{ label: "$f Nombre electrónico", value: "f" },
			{ label: "$q Tipo de formato electrónico", value: "q" },
			{ label: "$u Identificador del recurso uniforme", value: "u" }
		]
	},
	{
		number: "905",
		name: "Colección",
		value: "collection",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Siglas de la colección", value: "a" },
			{ label: "$b Siglas de la subcolección", value: "b" }
		]
	},
	{
		number: "950",
		name: "Números de ADQ",
		value: "adqNumbers",
		indexes: [
			{ label: "Índice 1", value: "ind1" },
			{ label: "Índice 2", value: "ind2" }
		],
		subfields: [
			{ label: "$a Número de adquisición", value: "a" }
		]
	}
]
