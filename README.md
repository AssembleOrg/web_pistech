# Pistech - Software Factory Website

Una web moderna y profesional para Pistech, una Software Factory especializada en desarrollo de soluciones digitales innovadoras.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con colores inspirados en el pistacho
- **100% Responsive**: Optimizada para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Suaves**: Efectos sutiles y elegantes sin sobrecargar la experiencia
- **SEO Optimizado**: Estructura semántica y meta tags apropiados
- **Rendimiento Optimizado**: Carga rápida y eficiente
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework moderno para sitios web estáticos
- **Tailwind CSS**: Framework de CSS utility-first
- **Lucide Icons**: Iconografía moderna y consistente
- **TypeScript**: Tipado estático para mejor desarrollo

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.astro    # Navegación principal
│   ├── Hero.astro      # Sección principal
│   ├── Services.astro  # Servicios ofrecidos
│   ├── Projects.astro  # Proyectos destacados
│   ├── Team.astro      # Equipo de trabajo
│   ├── Contact.astro   # Formulario de contacto
│   └── Footer.astro    # Pie de página
├── layouts/            # Layouts de página
│   └── Layout.astro    # Layout principal
├── pages/              # Páginas del sitio
│   └── index.astro     # Página principal
└── styles/             # Estilos globales
    └── global.css      # Estilos y configuración de Tailwind
```

## 🎨 Paleta de Colores

La web utiliza una paleta de colores inspirada en el pistacho:

- **Pistachio 50**: `#f7f9f4` - Fondo muy claro
- **Pistachio 100**: `#eef4e8` - Fondo claro
- **Pistachio 500**: `#8ba66a` - Color principal
- **Pistachio 600**: `#6f8a4f` - Color principal oscuro
- **Pistachio 900**: `#3f4b30` - Texto principal

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd web_pistech
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run astro ...` - Ejecuta comandos de Astro

## 📱 Secciones de la Web

### 1. Hero Section
- Mensaje principal impactante
- Call-to-action prominente
- Características destacadas
- Indicador de scroll

### 2. Servicios
- 6 servicios principales
- Iconos descriptivos
- Descripción detallada
- CTA para consulta

### 3. Proyectos
- 4 proyectos destacados
- Tecnologías utilizadas
- Enlaces a demo y código
- Estadísticas de la empresa

### 4. Equipo
- 6 miembros del equipo
- Roles y especialidades
- Enlaces a redes sociales
- CTA para oportunidades laborales

### 5. Contacto
- Formulario completo
- Información de contacto
- Tiempo de respuesta
- Ventajas competitivas

## 🔧 Personalización

### Cambiar Colores
Los colores se pueden personalizar editando `tailwind.config.mjs`:

```javascript
colors: {
  pistachio: {
    50: '#f7f9f4',
    100: '#eef4e8',
    // ... más tonos
  }
}
```

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `src/components/`
2. Importa y usa el componente en `src/pages/index.astro`
3. Agrega el enlace correspondiente en la navegación

### Modificar Contenido
- Textos: Edita directamente en los archivos `.astro`
- Imágenes: Coloca en `public/` y referencia con `/nombre-imagen`
- Iconos: Usa Lucide Icons importando desde `lucide-astro`

## 📈 Optimización

### Performance
- Imágenes optimizadas
- CSS y JS minificados
- Lazy loading de componentes
- Preload de fuentes críticas

### SEO
- Meta tags completos
- Estructura semántica HTML
- Open Graph tags
- Schema markup (opcional)

### Accesibilidad
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos
- Estructura de encabezados

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Conecta tu repositorio a Vercel
2. Framework preset: Astro
3. Deploy automático

### Otros
- GitHub Pages
- Surge.sh
- Firebase Hosting

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: hola@pistech.com
- **Teléfono**: +34 600 000 000
- **Horario**: Lun - Vie: 9:00 - 18:00

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Pistech** - Transformando ideas en realidad digital 🚀

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
