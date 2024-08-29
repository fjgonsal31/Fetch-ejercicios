function getEmpleados() {
  const url = "empleados.json";

  fetch(url)
    .then((resultado) => {
      return resultado.json();
    })
    .then((datos) => {
      console.log(datos);
      console.log(datos.empleados);
    });
}

// getEmpleados();

const ol = document.getElementById("miOl");
async function getLanzamientos() {
  //   const url = "empleados.json";
  const url = "https://api.spacexdata.com/v3/launches/";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  //   console.log(resultado);
//   console.log(datos);

  ol.innerHTML = datos.map((lanzamiento) => {
    let texto = "";
    if (
      lanzamiento.launch_failure_details &&
      lanzamiento.launch_failure_details.reason
    ) {
      texto = `${lanzamiento.mission_name}: ${lanzamiento.launch_failure_details.reason} <br>`;
    }
    return texto;
  }).join("");
}

getLanzamientos();
