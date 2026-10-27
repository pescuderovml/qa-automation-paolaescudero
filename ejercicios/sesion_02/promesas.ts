interface CasoPrueba {
    id: number,
    titulo: string,
    prioridad: string,
    ejecutado: boolean
}

const testcases: Array<CasoPrueba> = [
    {
        id: 1,
        titulo: "Test Case 01",
        prioridad: "alta",
        ejecutado: true
    },
    {
        id: 2,
        titulo: "Test Case 02",
        prioridad: "media",
        ejecutado: false
    },
    {
        id: 3,
        titulo: "Test Case 03",
        prioridad: "baja",
        ejecutado: true
    },
    {
        id: 4,
        titulo: "Test Case 04",
        prioridad: "media",
        ejecutado: true
    },
    {
        id: 5,
        titulo: "Test Case 05",
        prioridad: "baja",
        ejecutado: false
    },
    {
        id: 6,
        titulo: "Test Case 06",
        prioridad: "alta",
        ejecutado: false
    },

]

//funcion que simula una peticion y devuelve una promesa tipada
function obtenerUsuarioAsync(): Promise<string>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const exito = true;
            if (exito) {
                resolve ("Ana");
            } else {
                reject ("No se pudo obtener el usuario")
            }
        }, 3000)
    })
}

// Consumiendo una promesa antes
function consumiendoPromesa() {
    const usuario = obtenerUsuarioAsync();
    usuario.then((result) => {
        console.log("Exito: ", result);
    }).catch((err) => {
        console.log("Error: ", err);
        
    })
}


// Con Aync/Await

async function consumiendoPromesaConAwait():Promise<void> {
    try{
        const usuario = await obtenerUsuarioAsync();
        console.log(`Usuario: ${usuario}`);
    } catch (error) {
        console.error("Error: ", error)
    }
}

console.log("hola mundo");
consumiendoPromesa()
consumiendoPromesaConAwait()