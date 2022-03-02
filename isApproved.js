// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let index = 0;

for (let i = 0; i < alumns.length; i++) {
  if (alumns[i].T1 == true) {
    index = index + 1;
  }

  if (alumns[i].T2 == true) {
    index = index + 1;
  }
  if (alumns[i].T3 == true) {
    index = index + 1;
  }

  if (index >= 2) {
    alumns[i]["isApproved"] = true;
  } else {
    alumns[i]["isApproved"] = false;
  }
  index = 0;
}

console.log(alumns);

/////// segunda manera de hacerlo

for (const cities of alumns) {
  if (cities.T1 == true) {
    index = index + 1;
  }

  if (cities.T2 == true) {
    index = index + 1;
  }
  if (cities.T3 == true) {
    index = index + 1;
  }

  if (index >= 2) {
    cities["isApproved"] = true;
  } else {
    cities["isApproved"] = false;
  }
  index = 0;
}
console.log(alumns);
