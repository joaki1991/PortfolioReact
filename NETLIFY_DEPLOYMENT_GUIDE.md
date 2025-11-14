# 🚀 Guía de Despliegue en Netlify

Esta guía te ayudará a desplegar correctamente tu portfolio en Netlify y configurar el formulario de contacto para que funcione correctamente.

## 📋 Requisitos Previos

- Cuenta en [Netlify](https://www.netlify.com)
- Repositorio de GitHub conectado a Netlify
- Access Key de Web3Forms (ya configurado: `9e1e523b-4e28-44f5-9bc2-7c03d91b5cad`)

## 🔧 Configuración de Variables de Entorno en Netlify

### Paso 1: Acceder a la configuración del sitio

1. Ve a tu dashboard de Netlify: https://app.netlify.com
2. Selecciona tu sitio (joaquinpotfolio2)
3. Click en **"Site settings"** (Configuración del sitio)

### Paso 2: Configurar variables de entorno

1. En el menú lateral, selecciona **"Environment variables"** (Variables de entorno)
2. Click en **"Add a variable"** o **"Add environment variable"**
3. Configura la siguiente variable:

   **Variable Name (Nombre):**
   ```
   VITE_WEB3FORMS_ACCESS_KEY
   ```

   **Value (Valor):**
   ```
   9e1e523b-4e28-44f5-9bc2-7c03d91b5cad
   ```

4. Selecciona el scope: **"Same value for all deploy contexts"** (Mismo valor para todos los contextos)
5. Click en **"Create variable"** o **"Save"**

### Paso 3: Verificar la configuración

Tu variable de entorno debería verse así:

```
VITE_WEB3FORMS_ACCESS_KEY = 9e1e523b-4e28-44f5-9bc2-7c03d91b5cad
```

## 🔄 Re-desplegar el Sitio

Después de configurar la variable de entorno, necesitas redesplegar el sitio:

### Opción 1: Trigger deploy desde Netlify UI

1. Ve a **"Deploys"** en tu dashboard de Netlify
2. Click en **"Trigger deploy"**
3. Selecciona **"Deploy site"**

### Opción 2: Push un nuevo commit

```bash
git add .
git commit -m "Add Netlify configuration and deployment guide"
git push origin main
```

Netlify automáticamente detectará el push y desplegará el sitio.

## ✅ Verificación del Formulario

Una vez desplegado el sitio:

1. Ve a tu sitio: https://www.joaquinpotfolio2.netlify.app
2. Scroll hasta la sección de **Contacto**
3. Completa el formulario con datos de prueba
4. Click en **"Enviar mensaje"**
5. Deberías ver el mensaje: **"✓ ¡Mensaje enviado con éxito! Te contactaré pronto."**
6. Revisa tu email `joakanpde@gmail.com` (puede tardar 1-2 minutos)

## 🐛 Troubleshooting

### El formulario muestra error al enviar

**Posibles causas:**

1. **Variable de entorno no configurada correctamente**
   - Verifica que el nombre sea exactamente: `VITE_WEB3FORMS_ACCESS_KEY`
   - Verifica que el valor sea: `9e1e523b-4e28-44f5-9bc2-7c03d91b5cad`
   - Las variables de Vite **DEBEN** empezar con `VITE_`

2. **Sitio no redesplegado después de configurar la variable**
   - Las variables de entorno solo se aplican en nuevos builds
   - Trigger un nuevo deploy desde Netlify UI o push un nuevo commit

3. **Email de verificación de Web3Forms no confirmado**
   - Revisa tu bandeja de entrada de `joakanpde@gmail.com`
   - Busca emails de `notifications@web3forms.com`
   - Confirma tu email si aún no lo has hecho

### No recibo los emails

1. **Revisa la carpeta de SPAM**
   - Los emails llegan desde `notifications@web3forms.com`
   - Agrega este email a tu lista de contactos

2. **Espera 1-2 minutos**
   - Web3Forms puede tener un pequeño retraso

3. **Verifica el dashboard de Web3Forms**
   - Ve a: https://web3forms.com
   - Inicia sesión con: `joakanpde@gmail.com`
   - Verifica si los envíos están llegando

### Errores de CORS

Si ves errores de CORS en la consola del navegador:
- Web3Forms permite CORS desde cualquier origen
- Este error no debería ocurrir con Web3Forms
- Verifica que la URL de la API sea correcta: `https://api.web3forms.com/submit`

## 📊 Monitoreo y Límites

### Límites del Plan Gratuito

- **250 envíos por mes**
- Suficiente para un portfolio personal
- Puedes ver el uso en el dashboard de Web3Forms

### Dashboard de Web3Forms

Para ver estadísticas:

1. Ve a: https://web3forms.com
2. Inicia sesión con: `joakanpde@gmail.com`
3. Verás:
   - Número de envíos del mes
   - Emails recibidos
   - Tasas de éxito
   - Configuración del formulario

## 🔒 Seguridad

### ¿Es seguro exponer el Access Key?

**Sí**, el Access Key de Web3Forms está diseñado para ser usado en el frontend:

- ✅ Es público y debe estar en el código del frontend
- ✅ Web3Forms tiene protección anti-spam incorporada
- ✅ El Access Key solo permite enviar emails a tu dirección configurada
- ✅ No permite modificar la configuración ni acceder a tu cuenta
- ✅ Hay límites de rate-limiting (250 emails/mes en plan gratuito)

### Variables de Entorno en Netlify

Aunque el Access Key puede ser público, usar variables de entorno te permite:

- ✅ Cambiar el Access Key sin modificar código
- ✅ Usar diferentes keys para staging/producción
- ✅ Facilitar el mantenimiento

## 📝 Resumen de Archivos de Configuración

### `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### `.env.example` (para desarrollo local)
```env
VITE_WEB3FORMS_ACCESS_KEY=tu-access-key-aqui
```

### `.env` (no se sube a Git)
```env
VITE_WEB3FORMS_ACCESS_KEY=9e1e523b-4e28-44f5-9bc2-7c03d91b5cad
```

## 🎯 Checklist Final

Antes de marcar como completado, verifica que:

- [ ] Variable `VITE_WEB3FORMS_ACCESS_KEY` configurada en Netlify
- [ ] Sitio redesplegado después de configurar la variable
- [ ] Formulario de contacto probado en producción
- [ ] Email de prueba recibido en `joakanpde@gmail.com`
- [ ] No hay errores en la consola del navegador
- [ ] Mensaje de éxito se muestra al enviar el formulario

## 📞 Soporte

Si después de seguir esta guía el formulario aún no funciona:

1. Revisa los logs de build en Netlify
2. Abre la consola del navegador (F12) y busca errores
3. Verifica que el email de Web3Forms esté verificado
4. Contacta al soporte de Web3Forms si es necesario

---

**Última actualización:** Noviembre 2025

**Desarrollado con ❤️ por Joaquín**
