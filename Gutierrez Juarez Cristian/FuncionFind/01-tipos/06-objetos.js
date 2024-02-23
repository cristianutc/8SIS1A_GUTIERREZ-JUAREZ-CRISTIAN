//personaje de anime

let nombre = 'Tanjiro';
let anime = 'kimetsu no yaiba';
let efad = 16;

let personaje = {
    nombre: 'Tanjiro',
    anime: 'kimetsu no yaiba',
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 14;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);