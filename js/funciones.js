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

    const resultado = await fetch(urlEmpleados);
    const datos = await resultado.json();
}

obtenerEmpleados();