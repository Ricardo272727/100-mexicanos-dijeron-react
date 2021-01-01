# 100 mexicanos dijieron con react

Este proyecto está inspirado en que queria jugar 100 mexicanos dijeron 
con mi familia en año nuevo, pero no encontré nada en github que pudiera 
instalar facilmente!.
(Persona del futuro si estas leyendo esto: es 2020, si no sabes que ocurrió en 2020: buscalo en google o en la gran fuente de información que tengas en tu tiempo)


- Sonidos: 
  - Respuesta correcta/incorrecta
  - Ganador
  - Entrada triunfal
- Incluye marcadores automáticos
- Agrega las preguntas que quieras
- Fondo de tablero personalizable
- Escrito con React hooks


# Instalacion:

- Descarga el zip o copia con git clone

- Entra a la carpeta del proyecto: 
` 
  $ cd 100-mexicanos-dijeron-react
`

- Instala dependencias:
`
  $ npm install
`


# Ejecutar la aplicación

Para iniciar el proyecto en localhost:3000

`
  $ npm start
`

Crea una version comprimida de la aplicación en el directorio /build
`
  $ npm run build
`

Ejecuta la aplicación comprimida
`
  $ npx serve -s build
`


# Uso

La aplicación está pensada para utilizarse unicamente con el teclado,
por lo que cada acción o comando se ejecuta al presionar determinada tecla. 


### Sonidos
Al presionar la tecla correspondiente se escuchará ese sonido:

Respuesta correcta: <Enter>
Respuesta incorrecta: e
Gana ronda: g
Entrada triunfal: <Espacio>

### Preguntas
En el archivo: src/questions.js están definidas las preguntas
que se presentarán en el juego:

##### questions.js:
`
export const questions = [
  createQuestion('Menciona una raza de gato', [
    createOption('Blanco', 50),
    createOption('Mombay', 30),
    createOption('Coliente', 10),
    createOption('Negrito', 5),
  ])
]
`

#### Agregar preguntas
Para agregar preguntas simplemente copia y pega un nuevo elemento en
el arreglo de preguntas descrito en el archivo src/questions.js.
Y sigue el patron para escribir las preguntas:

`
  createQuestion('Aqui va tu pregunta', [
    createOption('Aqui va una opcion de la pregunta', Puntaje)
  ])
`

### Errores
Cada vez que la tecla 'e' es presionada, el tablero muestra una 'X', 
en la parte inferior. Si quieres borrar una 'X' presiona 'w'.

### Marcadores
Muestran el puntaje hasta el momento obtenido en el juego. 
Hay 3 marcadores en el tablero:
- Marcador actual
- 1 marcador para cada equipo

##### Marcador actual
Muestran los puntos acumulados al destapar las opciones de la pregunta
actual. 
Al final de cada ronda se pueden sumar estos puntos a un equipo:

Presiona:
- k para agregar los puntos al equipo de la izquierda
- l para agregar los puntos al equipo de la derecha

### Destapar preguntas y opciones:
Para destapar una pregunta y ocultarla presiona 's'

Para destapar una opcion tienes que presionar el numero de la opcion
que quieres destapar. 

Presiona:
- 1 Destapar opcion 1
- 2 ... opcion 2
- 3 ... asi sucesivamente

Nota: El sonido de respuesta correcta no se reproduce al destapar una
pregunta. Por lo que tienes que presionar <Enter> y luego el numero
de la opcion a destapar para crear el mismo efecto que en el juego real.
Nota 2: Al destapar una opcion, su puntaje es agregado al marcador actual,
entonces para el caso donde nadie adivinó la respuesta, tienes que ocultar
de nuevo las opciones para no sumar a ningun equipo esos puntos.


### Moverse entre preguntas:
- Presiona la tecla derecha para ir a la siguiente pregunta
- Presiona la tecla izquierda para ir a la pregunta anterior (No se recomienda, 
retroceder entre preguntas, si es que no entiendes muy bien como funcionan las teclas
del marcador)

### Personalizar el fondo:
Para personalizar el fondo necesitas una imagen de 1024 x 576 px aproximadamente 
( puede ser de otro tamaño pero debe de ser una imagen rectangular ).

Entra al archivo src/config.json y edita el campo "bgImage", puede
ser una url o el nombre de un archivo dentro del directorio /public
dentro del proyecto.


Notas del super desarrollador:

- Disfruta con tu familia y juega en remoto por zoom o google meet!

- El juego tiene precargadas algunas preguntas

- El código está desorganizado y tiene muchas cosas que mejorar, si quieres mejorarlo estoy abierto a sugerencias xD

- Futuras mejoras:
  - Crear un servicio con socket.io e implementar una sencilla interfaz para usar botones al inicio de cada ronda
  - Panel de control con una interfaz grafica 
  - Agregar mas css y estilos
  - Implementar rondas finales individuales
  - Sonido de respuesta repetida
  - Buscar mas sonidos del juego
  - Refactorizacion
  - Creacion de build con electron
