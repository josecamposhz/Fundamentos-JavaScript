// GEOLOCATION API

const getCurrentPosition = () => {
    document.getElementById("resultado").innerHTML = "<h4>Cargando...</h4>";
    navigator.geolocation.getCurrentPosition(success, error);
}
  
function success(pos) {
    console.log('More or less ' + pos.coords.accuracy + ' meters.');
    document.getElementById("resultado").innerHTML = "Cargando...";
    document.getElementById("resultado").innerHTML = `
        <h4>Su ubicación actual es:</h4>
        <h4>Latitud: ${pos.coords.latitude} - Longitud: ${pos.coords.longitude}</h4>
    `;
};

function error(err) {
    document.getElementById("resultado").innerHTML = `
        <h4>Error: ${err.message}</h4>
        <h4>Error Code: ${err.code}</h4>
    `;
};