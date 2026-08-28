# 💌 Sorpresa de cumpleaños

Página web estática, sin backend, lista para publicarse en **GitHub Pages**.

## Estructura

```
├── index.html          → estructura de la página (no necesitas editarlo)
├── css/style.css        → estilos (no necesitas editarlo)
├── js/
│   ├── config.js        → ✏️ AQUÍ EDITAS TODO EL CONTENIDO
│   └── script.js         → lógica de la página (no necesitas editarlo)
├── images/               → fotos de placeholder, reemplázalas por las tuyas
└── audio/                → (créala tú) coloca aquí tu archivo de canción, si tienes uno
```

## 1. Personaliza el contenido

Abre **`js/config.js`**. Es el único archivo que necesitas tocar para el texto.
Cada campo marcado con `[REEMPLAZA]` es información personal de tu relación
(nombres, fechas, la carta, las 22 razones, el mensaje secreto, etc.) que
dejé preparada para que la escribas tú.

## 2. Agrega tus fotos

1. Copia tus fotos dentro de la carpeta `images/` (formatos `.jpg`, `.jpeg`,
   `.png` o `.webp` funcionan bien).
2. En `js/config.js`, cambia las rutas `images/foto-1.svg`, etc. por el
   nombre real de tu archivo, por ejemplo `images/foto-1.jpg`.
3. Haz lo mismo para `TIMELINE` (imagen de cada momento), `SORPRESA.imagen`
   y `FOTO_FINAL`.

Tip: si una foto se ve muy pesada, comprímela antes (por ejemplo con
[squoosh.app](https://squoosh.app)) para que la página cargue rápido en el celular.

## 3. Agrega tu canción (opcional)

1. Crea una carpeta `audio/` junto a `index.html`.
2. Coloca ahí tu archivo, por ejemplo `audio/cancion.mp3`.
3. En `config.js`, escribe `ARCHIVO_AUDIO: "audio/cancion.mp3"`.

Si no agregas ningún archivo, el reproductor se muestra igual pero el botón
no hace nada — no afecta al resto de la página.

## 4. Pruébala en tu computadora antes de publicar

No necesitas instalar nada especial. Solo abre `index.html` haciendo doble
clic, o si tienes Python instalado, desde la carpeta del proyecto ejecuta:

```
python3 -m http.server 8000
```

y visita `http://localhost:8000` en tu navegador.

## 5. Publícala en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado o público).
2. Sube todo el contenido de esta carpeta al repositorio (incluyendo la
   carpeta `images/` con tus fotos ya puestas).
3. Ve a **Settings → Pages** en el repositorio.
4. En "Source", selecciona la rama `main` (o `master`) y la carpeta `/root`.
5. Guarda. En un par de minutos GitHub te dará un enlace como:
   `https://tu-usuario.github.io/nombre-del-repositorio/`

Ese es el enlace que le compartes a ella. 💛

## Notas

- La página es 100% estática: no usa base de datos ni login, así que
  funciona igual en GitHub Pages que en cualquier otro hosting estático.
- Si quieres que el repositorio sea privado pero que ella pueda verlo,
  puedes usar un repo privado para el código y dejar el sitio de GitHub
  Pages público (por defecto Pages es público aunque el repo sea privado
  en cuentas Pro; revisa la configuración de tu cuenta si esto te importa).
- Todo el código evita animaciones excesivas y respeta
  `prefers-reduced-motion` para quienes lo tengan activado.
