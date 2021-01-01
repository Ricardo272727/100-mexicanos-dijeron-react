const createQuestion = (question = '', options = []) => ({question, options});
const createOption = (text, points) => ({text, points, show: false});

/*
export const questions = [
  createQuestion('Disfraz infantil mas comun en los festivales de primavera', 
    [
      createOption('Mariposa', 60),
      createOption('Abejita', 25),
      createOption('Flor', 10),
      createOption('Pollito', 5),
    ]
  ),
  createQuestion('Vegetacion que puedes encontrar en el desierto', 
    [
      createOption('Cactus', 55),
      createOption('Arbustos', 25),
      createOption('Magueyes', 15),
      createOption('Nopales', 10),
    ]
  ),
  createQuestion('Menciona algo opuesto a la libertad', [
    createOption('Esclavitud', 49),
    createOption('Encierro', 31),
    createOption('Prision', 11),
    createOption('Opresion', 9),
  ]),
  createQuestion('Fruta que por fuera es verde', [
    createOption('Pera', 38),
    createOption('Manzana', 26),
    createOption('Sandia', 22),
    createOption('Limon', 14),
  ]),
  createQuestion('Que se le puede hacer al piso?', [
    createOption('Pulirlo', 40),
    createOption('Trapearlo', 37),
    createOption('Encerarlo', 15),
    createOption('Barrerlo', 8),
  ]),
  createQuestion('Algo que prendes y apagas todos los días', [
    createOption('Luz', 38),
    createOption('Television', 26),
    createOption('Computadora', 15),
    createOption('El radio/Estereo', 11),
  ]),
  createQuestion('Además del pollo, menciona otra ave que se coma', [
    createOption('Guajolote/Pavo', 48),
    createOption('Pato', 23),
    createOption('Codorniz', 14),
    createOption('Gallina', 8),
  ]),
  createQuestion('Problema que te puede pasar cuando estas en el WC/Baño', [
    createOption('Se acabo el papel', 41),
    createOption('Estar estreñido', 27),
    createOption('No hay agua', 13),
    createOption('Esta tapado el excusado', 10),
  ]),
  createQuestion('Regalo de bodas mas comun de recien casados', [
    createOption('Vajilla_', 34),
    createOption('Licuadora', 29),
    createOption('Toallas', 21),
    createOption('Plancha', 15),
  ]),
  createQuestion('Antojitos mexicanos más populares', [
    createOption('Tacos', 41),
    createOption('Pozole', 19),
    createOption('Enchiladas', 18),
    createOption('Quezadillas', 9),
  ]),
  createQuestion('Propositos de año nuevo', [
    createOption('Hacer dieta', 39),
    createOption('Hacer ejercicio', 27),
    createOption('Ahorrar', 17),
    createOption('Comprar algún articulo', 9),
  ]),  
  createQuestion('Platillo típico para la cena de navidad', [
    createOption('Pavo', 39),
    createOption('Bacalao', 32),
    createOption('Romeritos', 12),
    createOption('Lomo/Pierna', 11),
  ]),    
  createQuestion('Cuantos quilates puede tener una cadena de oro?', [
    createOption('14 kilates', 45),
    createOption('10 kilates', 18),
    createOption('24 kilates', 13),
    createOption('18 kilates', 7),
  ]),      
  createQuestion('Especifica una razon por la que la gente se detiene en el acotaimiento de la carretera', [
    createOption('Descompostura', 33),
    createOption('Descansar', 12),
    createOption('Accidente', 11),
    createOption('Para ir al baño', 9),
  ]),
  createQuestion('Menciona una forma popular de decir niño', [
    createOption('chamaco', 77),
    createOption('bebe', 15),
    createOption('escuincle', 15),
    createOption('chiquillo', 8),
  ]),
  createQuestion('Dinos un alimento quese frie', [
    createOption('Pescado', 36),
    createOption('Pollo', 17),
    createOption('carne', 17),
    createOption('papas', 13),
  ]),
  createQuestion('Dinos algo que haya en los drenajes de las ciudades', [
    createOption('Ratas', 33),
    createOption('basura', 22),
    createOption('excremento', 10),
    createOption('agua', 8),
  ]),
  createQuestion('Menciona algo especifico quedistingue a un turista', [
    createOption('Forma de vestir', 20),
    createOption('el fisico', 18),
    createOption('su acento.', 17),
    createOption('el idioma..', 15),
  ]),
  createQuestion('Menciona una forma popular de decir dinero', [
    createOption('Lana', 32),
    createOption('Money', 18),
    createOption('Billete', 8),
    createOption('Feria', 5),
  ]),
  createQuestion('Especifica una fruta que tenga semillas', [
    createOption('Naranja', 22),
    createOption('Manzana', 18),
    createOption('Sandia', 16),
    createOption('Limon', 15),
  ]),
];
*/

export const questions = [
  createQuestion('Algo a lo que los niños le temen: ', [
    createOption('oscuridad', 40),
    createOption('doctor', 20),
    createOption('al coco', 19),
    createOption('inyecciones', 10)
  ]),
  createQuestion('Algo a lo que los niños le temen: ', [
    createOption('oscuridad', 40),
    createOption('doctor', 20),
    createOption('al coco', 19),
    createOption('inyecciones', 10)
  ]),
  createQuestion('Menciona el nombre (especie) de un pez', [
    createOption('beta', 45),
    createOption('dorado', 25),
    createOption('payaso', 15),
    createOption('sardina', 5)
  ]),
  createQuestion('Menciona un sabor de chicle', [
    createOption('frutas', 35),
    createOption('menta', 25),
    createOption('hierbabuena', 15),
    createOption('mora', 10)
  ]),
];
