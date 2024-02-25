function suma(a, b){ //en el paretencen le asignamos un parametro
   console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 2, 3, 5); //aqui le pasamos el argumento que va ser el valor de 5 y la asignamos a una variable llamado resultado
console.log(resultado); //imprimimos el resultado de la suma
console.log(typeof suma);