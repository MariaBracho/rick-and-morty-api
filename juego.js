cartas = [{
  name: "tijera",
  numero: 2,
  gana: 5
}, {
  name: "piedra",
  numero: 1,
  gana: 3
}, {
  name: "Papel",
  numero: 3,
  gana: 4
}]
console.log(cartas)

function aleatorio(min, max) {
  let z = Math.floor(Math.random() * (max + 1 - min)) + min
  return (z)
}

function vidaDeUsuario(puntos) {
  let vida = puntos
  return {
    usuarioVida: function() {
      vida = 3 - vida
    },
    live: function() {
      return vida;

    },
  }
}
let mi = vidaDeUsuario(1)
mi.usuarioVida()
console.log(mi.live())

function vidaDeMaquina(puntos) {
  let vida = puntos
  return {
    usuarioVida: function() {
      vida = 3 - vida
    },
    live: function() {
      return vida;
    },
  }
}
function jugar() {
  let usuario = prompt("2:tijera, 1:piedra, 3:papel")
  let maquina = aleatorio(1, 3)

  let recorrer_usuario = cartas.find(function(personaje) {
    return personaje.numero == usuario
  })

  let recorrer_maquina = cartas.find(function(personaje) {
    return personaje.numero == maquina
  })

  let sumaDeResultado = recorrer_maquina.numero + recorrer_usuario.numero

  if (recorrer_usuario.gana == sumaDeResultado) {
    let vida_maqui = vidaDeMaquina(1)
    vida_maqui.usuarioVida()
    console.log("gana usuario")
  } else if (recorrer_maquina.gana == sumaDeResultado) {
    let vida_usu = vidaDeUsuario(1)
    vida_usu.usuarioVida()
    console.log("gana maquina")
  } else if (recorrer_usuario.gana == sumaDeResultado) {
    console.log("empate")
  } else {
    console.log("imtentalo de nuevo")
  }


  console.log(recorrer_maquina)
  console.log(recorrer_usuario)
  console.log(sumaDeResultado)
}

jugar()