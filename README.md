# Proyecto: Invoice App 🧾

👋🏻 Bienvenidx al Proyecto de [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl) desarrollado por la comunidad de Discord de [vamoacodear 👩🏻‍💻](https://www.twitch.tv/vamoacodear)

## Descripción

En este proyecto, construiremos un sitio donde los usuarios finales podrán:

- Crear, leer, actualizar y eliminar facturas
- Reciba validaciones de formularios cuando intente crear/editar una factura
- Guarde borradores de facturas y marque facturas pendientes como pagadas
- Filtrar facturas por estado (borrador/pendiente/pagada)
- Ver el diseño óptimo para la aplicación según el tamaño de pantalla de su dispositivo
- Ver estados de desplazamiento para todos los elementos interactivos en la página
- Alternar modo claro y oscuro

> Lucirá muy bien en tu portfolio 🎨

Lo que intetamos hacer con este proyecto es simular un espacio de trabajo.
Donde si bien no aplicamos al 100% metodologia Agile, ni marco Scrum, intentamos hacer lo posible considerando que es un grupo de trabajo interdiciplinario con diferentes usos horarios.

Para ello mediante GitHub Projects creamos y asignamos tareas, donde van cambiando de columna según su estado. Una vez realizada, el/la colaborador/a realiza un PR, se hace un Code Review y una vez que 2 aprobadores den el ok, recién ahí se mergea a Main.
De esta manera aprenderas cosas del día a día de un ambiente laboral!:

- Metodología Agile
- Marco Scrum
- PR
- Code Review
- Utilización de diferentes tecnologías que decidimos utilizar en el proyecto, como: Git, Github, React, TypeScript, Tailwind, entre otras!

## Diseño

El equipo de diseño de Frontend Mentor (?) nos dejó el diseño en el canal de Discord, tenerlo en cuenta en todo momento
ya que debe respestarse.

## Clonar el repositorio

```
git clone https://github.com/nsdonato/front-invoices
```

## Extensiones

En el proyecto hay extensiones recomendadas en el archivo .vscode/extensions.json (no tenes que hacer nada), puede salirte el cartel o directamente podes ir a la pestaña de extensiones y buscarlas poniendo: `@recommended`

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Pre-Instalación

Utilizar el comando `nvm use`, esto verifica si hay un archivo `.nvmrc` en el proyecto y si no estas usando esa versión la setea. Si no la tenes instalada al final del comentario del package, te deja el comando para instalar la versión correspondiente en tu pc.

## Instalar dependencias:

```
npm install
```

## Ejecutar la aplicación

```
npm run dev
```

## Ejecutar los test

```
npm run test
```

## Ayuda

Si tienes cualquier duda puedes preguntar en nuestro [Discord](https://discord.io/vamoacodear) canal #🧾-invoices-app

## Pull Request

> 🚨 Por favor utilizar el template de Pull Request para poder darle al code reviewer un mejor panorama de lo que va a revisar, gracias.

## Colaboradores

<a href="https://github.com/nsdonato/front-invoices/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nsdonato/front-invoices" />
</a>

## Design System

> Todos los colores y breakpoints utilizados en el proyecto! 🌈

### Breakpoints

| Tamaño | Nombre   | Descripción                        |
| ------ | -------- | ---------------------------------- |
| 480px  | brand-md | Medida para modales                |
| 730px  | brand-lg | Medida para el contenido principal |

### Colores

| Token                       | Nombre                 | Descripción/Caso de uso                                                |
| --------------------------- | ---------------------- | ---------------------------------------------------------------------- |
| #FFFFFF                     | brand-white            | -                                                                      |
| #7C5DFA                     | brand-violet           | Background del botón primario                                          |
| #9277FF                     | brand-violet-light     | Background del botón primario en hover                                 |
| #F9FAFE                     | brand-violet-ghost     | Background del botón secundario                                        |
| #DFE3FA                     | brand-violet-highlight | Background del botón secundario en hover                               |
| #7E88C3                     | brand-violet-muted     | Color de texto en el botón secundario                                  |
| #EC5757                     | brand-red              | Background del botón `delete`                                          |
| #FF9797                     | brand-red-light        | Background del botón `delete` en hover                                 |
| #FF8F00                     | brand-orange           | Texto del Badge naranja                                                |
| rgba(255, 143, 0, 0.0571)   | brand-orange-ghost     | Background del Badge naranja                                           |
| #33D69F                     | brand-green            | Texto del Badge verde                                                  |
| rgba(51, 214, 159, 0.0571)  | brand-green-ghost      | Background del Badge verde                                             |
| #373B53                     | brand-gray             | Background del botón terciario y color de Badge gris                   |
| #1E2139                     | brand-gray-dark        | Background del botón terciario (hover/Dark Mode)                       |
| rgba(55, 59, 83, 0.0571)    | brand-gray-ghost       | Background de Badge gris                                               |
| rgba(223, 227, 250, 0.0571) | brand-gray-light-ghost | Background de Badge gris en Dark mode                                  |
| #494E6E                     | brand-gray-light       | Color de Divider en Sidebar lateral                                    |
| #252945                     | brand-gray-muted       | Borde de Inputs en Dark Mode. Background botón secundario en Dark Mode |
| #0C0E16                     | brand-text             | Color de texto base                                                    |
| #858BB2                     | brand-text-light       | Color de texto secundario                                              |
| #888EB0                     | brand-text-muted       | Color de botón terciario                                               |
| #F8F8FB                     | brand-bg               | Background del sitio                                                   |
| #141625                     | brand-bg-dark          | Background del sitio en Dark Mode                                      |
| rgba(0, 0, 0, 0.4984)       | brand-dark-ghost       | Background transparente en modales                                     |
