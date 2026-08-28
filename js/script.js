/* =========================================================================
   SCRIPT.JS — Lógica de la experiencia. No necesitas editar este archivo
   para personalizar textos o fotos: todo eso vive en js/config.js
   ========================================================================= */
(function(){
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    pintarTextosBasicos();
    construirTimeline();
    construirGaleria();
    construirRazones();
    construirSorpresa();
    construirCarta();
    construirPlayer();
    construirDeseo();
    construirSecreto();
    construirCierre();

    iniciarPortada();
    iniciarParticulas();
    iniciarProgreso();
    iniciarRevelado();
    iniciarLightbox();
  });

  function normalizar(str){
    return (str || "")
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ---------------------------------------------------------------------
     TEXTOS BÁSICOS
     --------------------------------------------------------------------- */
  function pintarTextosBasicos(){
    document.title = `Feliz cumpleaños, ${CONFIG.NOMBRE} 🎂`;
    setText("fraseInicial", CONFIG.FRASE_INICIAL);
    setText("tituloSaludo", `Feliz cumpleaños, ${CONFIG.NOMBRE} ❤️`);
    setText("fraseElla", CONFIG.FRASE_SOBRE_ELLA);
  }

  function setText(id, text){
    const el = document.getElementById(id);
    if(el) el.textContent = text;
  }

  /* ---------------------------------------------------------------------
     PORTADA
     --------------------------------------------------------------------- */
  function iniciarPortada(){
    const btn = document.getElementById("btnEntrar");
    const portada = document.getElementById("portada");
    const contenido = document.getElementById("contenido");

    btn.addEventListener("click", () => {
      portada.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      portada.style.opacity = "0";
      portada.style.transform = "scale(0.98)";
      setTimeout(() => {
        portada.style.display = "none";
        contenido.scrollIntoView({ behavior: "smooth" });
      }, 650);
    });
  }

  /* ---------------------------------------------------------------------
     PARTÍCULAS AMBIENTALES SUTILES
     --------------------------------------------------------------------- */
  function iniciarParticulas(){
    const cont = document.getElementById("ambient");
    const simbolos = ["♥", "✦", "✧"];
    const cantidad = window.innerWidth < 640 ? 10 : 18;

    for(let i = 0; i < cantidad; i++){
      const span = document.createElement("span");
      span.textContent = simbolos[i % simbolos.length];
      span.style.left = Math.random() * 100 + "%";
      span.style.fontSize = (10 + Math.random() * 10) + "px";
      span.style.animationDuration = (14 + Math.random() * 12) + "s";
      span.style.animationDelay = (Math.random() * 16) + "s";
      cont.appendChild(span);
    }
  }

  /* ---------------------------------------------------------------------
     HILO DE PROGRESO
     --------------------------------------------------------------------- */
  function iniciarProgreso(){
    const fill = document.getElementById("progressFill");
    const heart = document.getElementById("progressHeart");

    function actualizar(){
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      const pct = alto > 0 ? (window.scrollY / alto) * 100 : 0;
      fill.style.width = pct + "%";
      heart.style.left = pct + "%";
    }
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    actualizar();
  }

  /* ---------------------------------------------------------------------
     REVELADO AL HACER SCROLL
     --------------------------------------------------------------------- */
  function iniciarRevelado(){
    const elementos = document.querySelectorAll(".reveal, .timeline-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
     TIMELINE
     --------------------------------------------------------------------- */
  function construirTimeline(){
    const cont = document.getElementById("timeline");
    CONFIG.TIMELINE.forEach(momento => {
      const item = document.createElement("div");
      item.className = "timeline-item reveal";

      const imagenHTML = momento.imagen
        ? `<div class="timeline-img"><img src="${momento.imagen}" alt="${escapeHtml(momento.titulo)}" loading="lazy"></div>`
        : "";

      item.innerHTML = `
        <span class="timeline-dot"></span>
        <p class="timeline-fecha">${escapeHtml(momento.fecha)}</p>
        <h3 class="timeline-titulo">${escapeHtml(momento.titulo)}</h3>
        <p class="timeline-desc">${escapeHtml(momento.descripcion)}</p>
        ${imagenHTML}
      `;
      cont.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------------
     GALERÍA + LIGHTBOX
     --------------------------------------------------------------------- */
  let galeriaIndex = 0;

  function construirGaleria(){
    const cont = document.getElementById("galeriaGrid");
    CONFIG.GALERIA.forEach((foto, i) => {
      const item = document.createElement("div");
      item.className = "galeria-item";
      item.innerHTML = `<img src="${foto.imagen}" alt="${escapeHtml(foto.descripcion || 'Foto ' + (i+1))}" loading="lazy">`;
      item.addEventListener("click", () => abrirLightbox(i));
      cont.appendChild(item);
    });
  }

  function iniciarLightbox(){
    document.getElementById("lightboxCerrar").addEventListener("click", cerrarLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => moverLightbox(-1));
    document.getElementById("lightboxNext").addEventListener("click", () => moverLightbox(1));
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if(e.target.id === "lightbox") cerrarLightbox();
    });
    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("lightbox");
      if(!lb.classList.contains("abierto")) return;
      if(e.key === "Escape") cerrarLightbox();
      if(e.key === "ArrowLeft") moverLightbox(-1);
      if(e.key === "ArrowRight") moverLightbox(1);
    });
  }

  function abrirLightbox(i){
    galeriaIndex = i;
    pintarLightbox();
    document.getElementById("lightbox").classList.add("abierto");
    document.getElementById("lightbox").setAttribute("aria-hidden", "false");
  }

  function cerrarLightbox(){
    document.getElementById("lightbox").classList.remove("abierto");
    document.getElementById("lightbox").setAttribute("aria-hidden", "true");
  }

  function moverLightbox(delta){
    galeriaIndex = (galeriaIndex + delta + CONFIG.GALERIA.length) % CONFIG.GALERIA.length;
    pintarLightbox();
  }

  function pintarLightbox(){
    const foto = CONFIG.GALERIA[galeriaIndex];
    document.getElementById("lightboxImg").src = foto.imagen;
    document.getElementById("lightboxDesc").textContent = foto.descripcion || "";
  }

  /* ---------------------------------------------------------------------
     22 RAZONES
     --------------------------------------------------------------------- */
  function construirRazones(){
    const cont = document.getElementById("razonesGrid");
    CONFIG.RAZONES.forEach((razon, i) => {
      const num = String(i + 1).padStart(2, "0");
      const card = document.createElement("div");
      card.className = "razon-card";
      card.innerHTML = `
        <div class="razon-inner">
          <div class="razon-cara razon-frente">${num}</div>
          <div class="razon-cara razon-reverso">${escapeHtml(razon)}</div>
        </div>
      `;
      card.addEventListener("click", () => card.classList.toggle("abierta"));
      cont.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------------
     CAJA SORPRESA
     --------------------------------------------------------------------- */
  function construirSorpresa(){
    const img = document.getElementById("sorpresaImg");
    if(CONFIG.SORPRESA.imagen){
      img.src = CONFIG.SORPRESA.imagen;
      img.hidden = false;
    }
    setText("sorpresaMensaje", CONFIG.SORPRESA.mensaje);

    const btn = document.getElementById("cajaBtn");
    btn.addEventListener("click", () => {
      if(btn.classList.contains("abierta")) return;
      btn.classList.add("abierta");
      document.getElementById("cajaHint").textContent = "¡Sorpresa!";
      document.getElementById("sorpresaReveal").hidden = false;
      lanzarConfeti();
    }, { once: true });
  }

  function lanzarConfeti(){
    const colores = ["#C4536B", "#C9A66B", "#E7C7CE", "#F3E9DD"];
    for(let i = 0; i < 40; i++){
      const pieza = document.createElement("div");
      pieza.className = "confeti-pieza";
      pieza.style.left = Math.random() * 100 + "vw";
      pieza.style.background = colores[i % colores.length];
      pieza.style.animationDelay = (Math.random() * 0.4) + "s";
      pieza.style.animationDuration = (2 + Math.random() * 1.2) + "s";
      document.body.appendChild(pieza);
      setTimeout(() => pieza.remove(), 3800);
    }
  }

  /* ---------------------------------------------------------------------
     CARTA
     --------------------------------------------------------------------- */
  function construirCarta(){
    setText("cartaTexto", CONFIG.CARTA);
    const sello = document.getElementById("cartaSello");
    const papel = document.getElementById("cartaPapel");
    sello.addEventListener("click", () => {
      sello.classList.add("oculto");
      papel.classList.add("abierta");
    });
  }

  /* ---------------------------------------------------------------------
     REPRODUCTOR
     --------------------------------------------------------------------- */
  function construirPlayer(){
    setText("playerCancion", CONFIG.CANCION);
    setText("playerArtista", CONFIG.ARTISTA);

    const audio = document.getElementById("audio");
    const btn = document.getElementById("playBtn");
    const iconPlay = document.getElementById("iconPlay");
    const iconPause = document.getElementById("iconPause");
    const barFill = document.getElementById("playerBarFill");

    if(CONFIG.ARCHIVO_AUDIO){
      audio.src = CONFIG.ARCHIVO_AUDIO;
    } else {
      btn.title = "Agrega tu archivo de audio en config.js (ARCHIVO_AUDIO)";
    }

    btn.addEventListener("click", () => {
      if(!CONFIG.ARCHIVO_AUDIO) return;
      if(audio.paused){
        audio.play();
        iconPlay.hidden = true;
        iconPause.hidden = false;
      } else {
        audio.pause();
        iconPlay.hidden = false;
        iconPause.hidden = true;
      }
    });

    audio.addEventListener("timeupdate", () => {
      if(audio.duration){
        barFill.style.width = (audio.currentTime / audio.duration * 100) + "%";
      }
    });
    audio.addEventListener("ended", () => {
      iconPlay.hidden = false;
      iconPause.hidden = true;
      barFill.style.width = "0%";
    });
  }

  /* ---------------------------------------------------------------------
     DESEO / VELA
     --------------------------------------------------------------------- */
  function construirDeseo(){
    const vela = document.getElementById("velaBtn");
    vela.addEventListener("click", () => {
      if(vela.classList.contains("soplada")) return;
      vela.classList.add("soplada");
      const reveal = document.getElementById("deseoReveal");
      reveal.textContent = CONFIG.MENSAJE_DESEO;
      reveal.hidden = false;
    }, { once: true });
  }

  /* ---------------------------------------------------------------------
     MENSAJE SECRETO
     --------------------------------------------------------------------- */
  function construirSecreto(){
    const form = document.getElementById("secretoForm");
    const input = document.getElementById("secretoInput");
    const feedback = document.getElementById("secretoFeedback");
    const mensaje = document.getElementById("secretoMensaje");

    const frasesError = [
      "Mmm, esa no es... ¡intenta de nuevo! 🤔",
      "Casi... pero no. ¿Otra idea?",
      "Esa palabra no abre nada por aquí 👀"
    ];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(normalizar(input.value) === normalizar(CONFIG.PALABRA_SECRETA)){
        feedback.textContent = "";
        mensaje.textContent = CONFIG.MENSAJE_SECRETO;
        mensaje.hidden = false;
        input.disabled = true;
        form.querySelector("button").disabled = true;
      } else {
        mensaje.hidden = true;
        feedback.textContent = frasesError[Math.floor(Math.random() * frasesError.length)];
        input.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     CIERRE
     --------------------------------------------------------------------- */
  function construirCierre(){
    setText("cierreTitulo", `Feliz cumpleaños, ${CONFIG.NOMBRE} ❤️`);
    setText("cierreFrase", CONFIG.FRASE_FINAL);
    setText("cierreFirma", `${CONFIG.MI_NOMBRE} · ${CONFIG.FECHA_CUMPLEANOS}`);
    const foto = document.getElementById("cierreFoto");
    foto.src = CONFIG.FOTO_FINAL;
    foto.alt = `${CONFIG.MI_NOMBRE} y ${CONFIG.NOMBRE}`;
  }

  /* ---------------------------------------------------------------------
     UTIL
     --------------------------------------------------------------------- */
  function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

})();
