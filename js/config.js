/* =========================================================================
   CONFIG.JS — Todo lo que vas a personalizar vive aquí.
   No necesitas tocar ningún otro archivo para cambiar textos, fechas,
   fotos, la canción o los mensajes secretos.

   Cuando el comentario dice [REEMPLAZA], es texto que debes escribir tú:
   son cosas personales de su relación y prefiero dejarlas en blanco
   para ti en vez de inventarlas.
   ========================================================================= */

const CONFIG = {

  // ---------------------------------------------------------------------
  // 1. DATOS BÁSICOS
  // ---------------------------------------------------------------------
  NOMBRE: "Chiki",                    // [Chiki] su nombre
  MI_NOMBRE: "Mariano",            // [Mariano] tu nombre
  FECHA_CUMPLEANOS: "27 de agosto",  // [12 de Septiembre] fecha de cumpleaños
  FECHA_RELACION: "21/12/2025",      // [21/12/2025] fecha en que empezaron
  EDAD: 22,

  // ---------------------------------------------------------------------
  // 2. PANTALLA DE INICIO
  // ---------------------------------------------------------------------
  FRASE_INICIAL: "Happy B-Dayyyy mi increible Chiki te deseo lo mejor en este dia tan especial, espero sacarte una sonrisa con esta sorprecita.", // [Happy B-Dayyyy mi increible Chiki te deseo lo mejor en este dia tan especial, espero sacarte una sonrisa con esta sorprecita]

  // ---------------------------------------------------------------------
  // 3. SECCIÓN 1 — FELIZ CUMPLEAÑOS (frase corta sobre ella)
  // ---------------------------------------------------------------------
  FRASE_SOBRE_ELLA: "Con todo el amor del mundo para mi baby la mas especial mas sweet y con el heartcito mas bonito.", // [Con todo el amor del mundo para mi baby la mas especial mas sweet y con el heartcito mas bonito]

  // ---------------------------------------------------------------------
  // 4. SECCIÓN 2 — NUESTRA HISTORIA (línea de tiempo)
  //    Agrega, quita o edita momentos. "imagen" es opcional: si la dejas
  //    vacía ("") la tarjeta se muestra solo con texto.
  // ---------------------------------------------------------------------
  TIMELINE: [
    {
      fecha: "21/03/2025",                 // [REEMPLAZA]
      titulo: "El first side eye", // [REEMPLAZA]
      descripcion: "De los momentos mas bonitos donde inicio todo", // [REEMPLAZA]
      imagen: "images/momento-13.jpeg"
    },
    {
      fecha: "31/08/2025",
      titulo: "En los meros Naranjos",
      descripcion: "Nuestro first long trip juntos",
      imagen: "images/momento-10.jpeg"
    },
    {
      fecha: "29/03/2026",
      titulo: "Liberando a Robin y Willy",
      descripcion: "Ojala sigan nadando juntitos",
      imagen: "images/momento-5.jpeg"
    },
    {
      fecha: "10/09/2026",
      titulo: "Lagostooo",
      descripcion: "Increibles vacations juntitoss",
      imagen: "images/momento-1.jpeg"
    }
  ],

  // ---------------------------------------------------------------------
  // 5. SECCIÓN 3 — GALERÍA DE RECUERDOS
  //    Reemplaza "imagen" por el nombre de tu archivo, por ejemplo:
  //    "images/foto-1.jpg". La descripción es opcional (puedes dejarla "").
  // ---------------------------------------------------------------------
  GALERIA: [
    { imagen: "images/momento-2.jpeg", descripcion: "Sin miedo a las alturas" },
    { imagen: "images/momento-3", descripcion: "El mejor birthday de todos" },
    { imagen: "images/momento-4", descripcion: "En el tunco oink" },
    { imagen: "images/momento-6", descripcion: "Por mas valentines juntos" },
    { imagen: "images/momento-8", descripcion: "Fancy girl timeee" },
    { imagen: "images/momento-11", descripcion: "Alocate bb" }
  ],

  // ---------------------------------------------------------------------
  // 6. SECCIÓN 4 — 22 RAZONES
  //    Escribe una razón por cada número del 1 al 22. Si dejas el texto
  //    con corchetes, la tarjeta lo mostrará tal cual como recordatorio.
  // ---------------------------------------------------------------------
  RAZONES: [
    "Porque te amooo", "Because tu lindo heartcito", "Porque cada dia lo haces especial", "Porque me haces mejor personita", "Porque no hay nada mejor que verte sonreir",
    "Porque sos mi soulmate", "Porque iluminas mis dias", "Porque no hay nadie mejor que tu", "Porque ambos somos fans de los chambres", "Porque sino con quien hare el tiktok de pascal",
    "Porque te preocupas por los demas", "Porque siempre estas loquilla", "Porque si", "Ya te habia dicho que porque te amo?", "Porque sos bien pro",
    "y enserio Pro en todo lo que te propongas", "Porque sos bien sweet", "Porque sos la niña de mis dreams", "Porque te amo (por si se te olvida)", "Porque tenes los mejores stickers",
    "Porque sos mi fan #1", "Ti amo mi Lightning McQueen"
  ],

  // ---------------------------------------------------------------------
  // 7. SECCIÓN 5 — CAJA SORPRESA
  //    Puede ser una imagen, un mensaje, o ambos.
  // ---------------------------------------------------------------------
  SORPRESA: {
    imagen: "images/momento-12",     // [REEMPLAZA] o deja "" si no usarás imagen
    mensaje: "Esta no te la esperabas uh JAJAJAJA de mis favsss" // [REEMPLAZA]
  },

  // ---------------------------------------------------------------------
  // 8. SECCIÓN 6 — MENSAJE ESPECIAL (la carta)
  //    Este es el espacio más importante. Escribe tú el mensaje completo.
  // ---------------------------------------------------------------------
  CARTA: `[Ya otra vuelta al sooool mi solecito, espero te estes divirtiendo o almenos sacandote una sonrisa el yo del futuro lo averiguara, desde el fondo de mi corazon te deseo lo mejor, espero haber hecho este dia especial y sigue brillando mi SUPER ESTRELLAAAA]

Este espacio es solo tuyo: escribe lo que realmente quieres decirle.
Puedes usar varios párrafos, se leerán con el mismo formato con el
que los escribas aquí.`,

  // ---------------------------------------------------------------------
  // 9. SECCIÓN 7 — CANCIÓN ESPECIAL
  //    Si tienes un archivo de audio, colócalo en la carpeta "audio/"
  //    y escribe su nombre en ARCHIVO_AUDIO, por ejemplo "audio/cancion.mp3".
  //    Si lo dejas vacío, el reproductor se muestra pero deshabilitado.
  // ---------------------------------------------------------------------
  CANCION: "Soñar Contigo",   // [REEMPLAZA]
  ARTISTA: "Charlie Rodd",                 // [REEMPLAZA]
  ARCHIVO_AUDIO: "audio/cancion_CR.mp3",                    // [REEMPLAZA] ej: "audio/cancion_CR.mp3"

  // ---------------------------------------------------------------------
  // 10. SECCIÓN 8 — DESEO DE CUMPLEAÑOS
  // ---------------------------------------------------------------------
  MENSAJE_DESEO: "Espero poder seguir compartiendo muchos momentos contigo. ❤️", // puedes reemplazarlo

  // ---------------------------------------------------------------------
  // 11. SECCIÓN 9 — MENSAJE SECRETO
  // ---------------------------------------------------------------------
  PALABRA_SECRETA: "chiki",              // [REEMPLAZA] no distingue mayúsculas/acentos
  MENSAJE_SECRETO: "Ya estas old JAJAJA, pero omg emvejeces como el buen vino", // [REEMPLAZA]

  // ---------------------------------------------------------------------
  // 12. SECCIÓN FINAL
  // ---------------------------------------------------------------------
  FRASE_FINAL: "Por mas cumpleaños a tu lado mi amor", // [REEMPLAZA]
  FOTO_FINAL: "images/momento-14.jpeg"        // [REEMPLAZA] por tu foto final

};
