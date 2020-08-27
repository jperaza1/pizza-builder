# Pizza Builder 

## Descripción del proyecto
Este es un ejemplo sencillo de como hacer un Builder sin la necesidad de usar alguna libreria de canvas, se usan hooks para el manejo de los estados de la aplicacion y el localStorage para guardar la pizza customizada.

## Librerias usadas
* [ReactRouterDom](https://reactrouter.com/web/guides/quick-start)
* [Framer-motion](https://www.framer.com/motion/)

## PWA 
Se ha agregado la caracteristica de Progressive Web App. Cuando se crea un aplicación de react con el comando **create-react-app** nos crea un archivo llamado **serviceWorker.js** este archivo basicamente es un template que crea un archivo en el build que ese si ya es el archivo de serviceWorker que se usa, entonces cree otro serviceWorker llamado **sw-custom.js** que ese contiene el manejo de la cache de la PWA. Ahora para usar este archivo usamos el siguiente comando **react-scripts build && cat src/sw-custom.js >> build/service-worker.js** este comando lo que hace es que crea el build y usa el serviceWorkerCustom y listo ahora ya tenemos una PWA con un serviceWorkerCustom 

## Creditos
La idea de este proyecto la saque de usuario **[dhavaljardosh](https://github.com/dhavaljardosh/PizzaBuilder)**.

Link del proyecto original **[PizzaBuilder](https://github.com/dhavaljardosh)**.

Link del video **[Awesome Pizza Customization in 1 Hour - React JS Project - EduRise](https://www.youtube.com/watch?v=8YNYhUapAzY)**
