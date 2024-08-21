function obtenerEmpleados(){
    const urlEmpleados = '../empleados.json';

    // fetch(urlEmpleados)
    //     .then( resultado => {
    //         return resultado.json();
    //     })
    //     .then( datos => {
    //         console.log(datos);
    //     })

    fetch(urlEmpleados)
        .then( resultado => resultado.json())
        // .then( datos => console.log(datos))
        // .then(datos => console.log(datos.empleados))
        .then( datos => {
            const { empleados } = datos;
            // console.log(empleados)
            empleados.forEach( empleado => {
                console.log(`Id: ${empleado.id} -- Nombre: ${empleado.nombre} -- Puesto: ${empleado.puesto}`);
            });
        })
}

async function obtenerEmpleados2(){
    const urlEmpleados = '../empleados.json';

    try {
        const resultado = await fetch(urlEmpleados);
        console.log(resultado)
        if(resultado.status === 200){
            const datos = await resultado.json();
            console.log(datos.empleados)
        }else if(resultado.status === 404){
            console.log('No se encuentran los datos')
        }else{
            console.log('Hubo un error')
        }
        

    } catch (error) {
        console.log(error)
    }

}

obtenerEmpleados2();