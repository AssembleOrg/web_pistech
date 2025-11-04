# Configuración del Formulario de Contacto

Los formularios de contacto del sitio web están configurados para usar **Web3Forms**, un servicio gratuito que permite recibir emails de formularios sin necesidad de backend.

## 🚀 Configuración en 3 Pasos

### 1. Obtener tu Access Key de Web3Forms

1. Visita [web3forms.com](https://web3forms.com/)
2. Ingresa tu email donde quieres recibir los mensajes
3. Haz clic en "Create Access Key"
4. Copia la clave que te proporcionan (algo como: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)

### 2. Reemplazar la Clave en los Archivos

Debes reemplazar `YOUR_WEB3FORMS_ACCESS_KEY_HERE` con tu clave real en estos archivos:

#### Archivo 1: `src/components/ContactForm.tsx`
```typescript
// Línea ~36
access_key: 'TU_CLAVE_AQUI', // Reemplaza con tu key de web3forms.com
```

#### Archivo 2: `src/components/ServiceContactForm.astro`
```javascript
// Línea ~408
access_key: 'TU_CLAVE_AQUI', // Reemplaza con tu key de web3forms.com
```

### 3. ¡Listo! Verifica que Funciona

1. Ejecuta `npm run build` para compilar el proyecto
2. Prueba el formulario enviando un mensaje de prueba
3. Revisa tu email - deberías recibir el mensaje en segundos

## 📧 ¿Qué Formularios Están Configurados?

- **Formulario Principal** (`ContactForm.tsx`): El formulario de contacto general de la página de inicio
- **Formularios de Servicios** (`ServiceContactForm.astro`): Formularios especializados en las páginas:
  - `/desarrollo-web`
  - `/aplicaciones-moviles`
  - `/software-a-medida`

## ✨ Características de Web3Forms

- ✅ **100% Gratis** hasta 250 envíos/mes
- ✅ **Sin Backend Necesario** - funciona directo desde el frontend
- ✅ **Protección Anti-Spam** incluida
- ✅ **Notificaciones por Email** instantáneas
- ✅ **Sin Dependencias** adicionales

## 🔒 Seguridad

Tu Access Key puede ser pública (está en el código frontend). Web3Forms la usa solo para identificar a dónde enviar los emails. Nadie puede usar tu clave para enviar spam o hacer daño.

## 🆘 ¿Problemas?

Si el formulario no funciona:

1. Verifica que reemplazaste la clave en **ambos archivos**
2. Asegúrate de que la clave no tenga espacios extra
3. Revisa la consola del navegador para ver errores
4. Verifica tu carpeta de spam por si el email llegó ahí

## 🌐 Alternativas

Si prefieres usar otro servicio, puedes cambiar el endpoint en los archivos:

- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Getform**: https://getform.io/

Solo cambia la URL de `fetch()` y ajusta el formato de los datos según el servicio que elijas.

---

**¿Necesitas ayuda?** Revisa la [documentación de Web3Forms](https://docs.web3forms.com/)
