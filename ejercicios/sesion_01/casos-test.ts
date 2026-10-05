const testcases = [
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

/* Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad.  */
function contarPorPrioridad(casos){
    
    //console.log(`Total de Objetos: ${casos.length}`);

    let resultado = {
        alta: 0,
        media: 0,
        baja: 0
    }

    casos.forEach((item) => {
       // console.log(`Array de objetos ID: ${item.titulo}`); 
        if (item.prioridad === "alta") {
            resultado.alta += 1
        } else if (item.prioridad === "media") {
            resultado.media += 1
        } else if (item.prioridad === "baja") {
            resultado.baja += 1
        } 
        
    })

    //console.log(resultado);
    return resultado;
}
console.log("---- Casos por prioridad:");
console.log(contarPorPrioridad(testcases));


/* Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false.  */

function listarPendientes(casos){

    let casosPendientes = []

     casos.forEach((item) => {
       // console.log(`Array de objetos ID: ${item.titulo}`); 
        if (!item.ejecutado) {
            casosPendientes.push(item)
        } 
    })

    return casosPendientes
}

console.log("---- Casos pendientes de ejecucion:");
console.log(listarPendientes(testcases));

/* Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, por ejemplo: "#1 - Login válido (alta) - Pendiente".  */
/* Al final del archivo, usar forEach para imprimir por consola todos los casos formateados con formatearCaso.  */

function formatearCaso(casos){

    casos.forEach((caso) => {
        let casoFormateado: string
        casoFormateado = `#${caso.id} - Login Valido (${caso.prioridad}) - Pendiente: ${caso.ejecutado}`
        console.log(casoFormateado);
        
    })
      
}

formatearCaso(testcases);