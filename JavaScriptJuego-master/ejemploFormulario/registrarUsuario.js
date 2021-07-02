
console.log ("*** Registrar Usuasrio")

const formularioRegistro = document.getElementById("formularioRegistro")
let lista = []


formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioIn = document.getElementById("usuarioIn");
    const nombreIn = document.getElementById("nombreIn");
    const claveIn = document.getElementById("claveIn");

    const nuevoUsuario = {
      usu: usuarioIn.value,
      nom: nombreIn.value,
      cla: claveIn.value,
    }

   guardarUsuario(nuevoUsuario)

})

const guardarUsuario = (usuario) => {

    if (localStorage.getItem ('usuarios') == null) {
        lista.push(usuario)
        const usuariosString = JSON.stringify(lista)
        localStorage.setItem ('usuarios' ,usuariosString )
    } else {
        lista = JSON.parse(localStorage.getItem('usuarios'))

        if (!comprobarUsuario (usuario.cla, lista)) {
            lista.push(usuario)
            const usuariosString = JSON.stringify(lista)
            localStorage.setItem ('usuarios' ,usuariosString )
            console.log ("usuario guardado con exito ")
        } else {
            location.href ="memoria.html";
        }
        
    }
    
   
}

const comprobarUsuario = (clareo, arreglo) => {
    let existe = false
    for (let item of arreglo) {
        if (clareo == item.cla) {
            existe = true
            return existe 
        }
    }
    return existe

}

