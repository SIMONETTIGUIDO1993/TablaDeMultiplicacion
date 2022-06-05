let numeroAmultiplicar: number = Number(
  prompt("Ingrese el Numero a Multiplicar")
);

let numeroHastaElQueSeMultiplica: number = Number(
  prompt("Ingrese el Numero hasta el que desea multiplicar")
);

for (let i: number = 1; i <= numeroHastaElQueSeMultiplica; i++) {
  let resultado: number = i * numeroAmultiplicar;
  console.log(`${numeroAmultiplicar} x ${i} = ${resultado}`);
}
