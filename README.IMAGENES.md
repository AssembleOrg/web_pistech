# Guía de Optimización de Imágenes

Este documento explica cómo optimizar las imágenes del sitio web para mejorar el rendimiento y SEO.

## 📊 Estado Actual

### Logos (carpeta `public/Logos Pistech/`)
Los logos PNG tienen tamaños entre 47KB y 74KB, que son razonables para logos de marca de alta calidad.

**Logos disponibles:**
- `Logo-p-pistech-verde.png` (69KB) - **Actualmente en uso en navbar**
- `Logo-p-pistech-blanco.png` (67KB)
- `Logo-p-pistech-negro.png` (74KB)
- `P-verde.png` (53KB)
- `P-blanca.png` (55KB)
- `Pistech-verde.png` (52KB)
- `Pistech-blanco.png` (47KB)
- `Pistech-verdenegro.png` (47KB)

## 🎯 Tareas Pendientes

### 1. Crear Imagen OG (Open Graph)

Actualmente falta crear `/public/og-image.jpg` que está referenciada en el Layout.

**Especificaciones recomendadas:**
- **Tamaño**: 1200x630 px (ratio 1.91:1)
- **Formato**: JPG optimizado o WebP
- **Peso máximo**: 100KB
- **Contenido sugerido**:
  - Logo de Pistech centrado
  - Texto: "Pistech - Software Factory"
  - Fondo con los colores de marca (#93C572, #111214)
  - Tagline: "Transformamos procesos en soluciones digitales"

**Herramientas para crear:**
- [Canva OG Image Templates](https://www.canva.com/)
- [Figma](https://www.figma.com/)
- [OG Image Playground](https://og-playground.vercel.app/)

### 2. Optimizar Logos PNG (Opcional)

Si quieres reducir aún más el tamaño sin perder calidad:

**Herramientas recomendadas:**
- [TinyPNG](https://tinypng.com/) - Compresión automática inteligente
- [Squoosh](https://squoosh.app/) - Control total sobre la compresión
- [ImageOptim](https://imageoptim.com/) (Mac) - Optimización local

**Proceso:**
1. Sube los PNG a TinyPNG
2. Descarga las versiones optimizadas (suelen reducirse 50-70%)
3. Reemplaza los archivos en `public/Logos Pistech/`

### 3. Considerar Formato WebP (Recomendado para el futuro)

Los logos WebP pueden ser 25-35% más pequeños que PNG con la misma calidad.

**Beneficios:**
- ✅ Menor peso = carga más rápida
- ✅ Soportado por el 97% de navegadores modernos
- ✅ Transparencia como PNG

**Conversión:**
```bash
# Instalar herramienta (Mac/Linux)
brew install webp

# Convertir PNG a WebP
cwebp -q 90 Logo-p-pistech-verde.png -o Logo-p-pistech-verde.webp
```

**Uso en código:**
```html
<picture>
  <source srcset="/Logos Pistech/Logo-p-pistech-verde.webp" type="image/webp">
  <img src="/Logos Pistech/Logo-p-pistech-verde.png" alt="Pistech Logo">
</picture>
```

## 📱 Iconos y Favicons

### Estado Actual
- ✅ Favicon SVG presente en `/public/favicon.svg`

### Mejoras Opcionales

Considera agregar:

1. **Apple Touch Icon**
```html
<!-- En Layout.astro -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

2. **Android Chrome Icons**
Crea un archivo `manifest.json`:
```json
{
  "name": "Pistech",
  "short_name": "Pistech",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#93C572",
  "background_color": "#111214",
  "display": "standalone"
}
```

## 🚀 Otras Recomendaciones de Rendimiento

### Lazy Loading
Para imágenes fuera del viewport inicial:
```html
<img src="..." alt="..." loading="lazy">
```

### Usar Astro Image
Para imágenes dinámicas, usa el componente `<Image>` de Astro que optimiza automáticamente:
```astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';
---

<Image src={logo} alt="Logo" width={200} height={50} />
```

### CDN para Imágenes
Considera usar Cloudinary o Cloudflare Images para:
- Optimización automática
- Conversión a formatos modernos
- Redimensionamiento dinámico
- Cache global

## ✅ Checklist de Optimización

- [ ] Crear imagen OG (1200x630px)
- [ ] Optimizar logos PNG con TinyPNG
- [ ] (Opcional) Convertir logos a WebP
- [ ] Crear Apple Touch Icon
- [ ] Crear manifest.json con icons
- [ ] Verificar que todas las imágenes tienen atributo `alt`
- [ ] Implementar lazy loading donde sea apropiado

## 📊 Medir Resultados

Después de optimizar, verifica mejoras en:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Meta**: Lighthouse Performance Score > 90
