# wallet-api

_REST API para simular una wallet con conexion a servidor [soap](https://github.com/gersvasqz/wallet-soap)_

Crear un .env en base a .env.example con HOST y PORT opcionales (por defecto corre en el puerto 9000) y el HOST_SOAP url del servidor soap (no opcional)

## Instalación
```
# Instala las dependencias
$ npm install

# Genera la documentación de endpoints, en la ruta /apidoc
$ npm run docs

# Levanta el servidor de desarrollo con formateo de codigo y reload
$ npm run dev

# Levanta el servidor de desarrollo
$ npm run start

# Prepara el proyecto para producción
$ npm run build

# Levanta el servidor en modo producción
$ npm run serve
``` 
## Herramientas
* [express](https://expressjs.com/es/) Framework para generar un servidor con Nodejs
* [apidoc](https://apidocjs.com/) Para documentar los endpoints
* [prettier](prettier.io) Formateador de código
* [esLint](eslint.org) Analizador de código de javascript
* [babel](https://babeljs.io/) Compilador de javascript
* [nodemon](https://nodemon.io/) Para monitorear los cambios y reiniciar el servidor en modo desarrollo
* [soap](https://www.npmjs.com/package/soap) Cliente SOAP para nodejs

_NOTA: Todas las respuestas son en ingles para estandarización
