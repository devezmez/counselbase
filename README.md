# Consejo Base - Firebase Auth

Este es el primer paso de la app: autenticación con Firebase usando correo/contraseña y Google.

## Configuración

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Habilita **Authentication** y activa el proveedor **Google**.
3. En Firebase, agrega una app web y copia la configuración.
4. Abre `src/app.js` y reemplaza los valores de `firebaseConfig`.

## Ejecutar en local

Desde la raíz del proyecto:

```bash
python3 -m http.server 5173
```

Luego abre `http://localhost:5173` en tu navegador.

## Próximos pasos

Cuando quieras, agregamos base de datos (Firestore/Realtime DB), roles, perfiles y el estilo visual.
