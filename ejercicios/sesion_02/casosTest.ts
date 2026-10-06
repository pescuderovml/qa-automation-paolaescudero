interface  CasoDeTest {
    id: number,
    titulo: string,
    prioridad: string,
    ejecutado: boolean
}

const casosDeTest: Array<CasoDeTest> = [
    {
        id: 1,
        titulo: "Caso 01",
        prioridad: "alta",
        ejecutado: true
    },
    {
        id: 2,
        titulo: "Caso 02",
        prioridad: "media",
        ejecutado: false
    },
    {
        id: 3,
        titulo: "Caso 03",
        prioridad: "baja",
        ejecutado: true
    }
]

function obtenerCasosDeTest(): Promise<CasoDeTest[]> {

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const exito = true;
            if (exito) {
                resolve (casosDeTest);
            } else {
                reject ("No se pudo obtener el usuario")
            }
        }, 500)
    })

}

function consumiendoPromesa() {
    const usuario = obtenerCasosDeTest();
    usuario.then((result) => {
        console.log("Exito: ", result);
        result.forEach((item) => {
            console.log(`Test ID: ${item.id} - Titulo: ${item.titulo} - Prioridad: ${item.prioridad} - Ejecutado: ${item.ejecutado}`);
        })
        
    }).catch((err) => {
        console.log("Error: ", err);
        
    })
}

async function consumiendoPromesaConAwait():Promise<void> {
    try{
        const casos = await obtenerCasosDeTest();
        casos.forEach((item) => {
            console.log(`AWAIT ---- Test ID: ${item.id} - Titulo: ${item.titulo} - Prioridad: ${item.prioridad} - Ejecutado: ${item.ejecutado}`);
        })
    } catch (error) {
        console.error("Error: ", error)
    }
}
consumiendoPromesa()
consumiendoPromesaConAwait()