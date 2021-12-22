## AngularCoinMarketCap
Sitio Web que consume Api https://github.com/Santiago503/ApiRestCoinMarketCap, 
para consultar precio de las crypto moneda que desees, con solo colocar los simbolos de la moneda dividido por coma.


## Repositorios
Back End: https://github.com/Santiago503/ApiRestCoinMarketCap
Frond End: https://github.com/Santiago503/AngularCoinMarketCap


## Instrucciones 
  1-Bajar los dos Repositorios BackEnd y FrondEnd.
  2-Entrar a la carpeta y correr el comando npm install.
  3-Dentro de la carpeta correr el comando ng serve.
  4-Ejecutar el Api Rest que esta en el otro repo.
  
  nota: Antes de empezar a usar asegurarse que el Api Rest en C# se este ejecutando.


## Estructura del codigo
dist/                        web app production build
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- components/            shared module  (common components)
|  |- shared/                shared module  (common components)
|  |- service/               folders)
|  |- models/                all models   (models)
|  |- views/                 (components, page)
|  |- app.component.*        app root component
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
proxy.conf.js                backend proxy configuration
    
#### Librarias

- [Angular](https://angular.io)
- [Bootstrap 5](https://getbootstrap.com)
- [ngx-toastr]


