const demoElement = document.getElementById("demo");

function getLocation() {
  if (!navigator.geolocation) {
    demoElement.innerHTML = "Geolocalização não é suportada por este navegador.";
    return;
  }

  demoElement.innerHTML = "A obter coordenadas...";
  navigator.geolocation.getCurrentPosition(showPosition, showError);
}

function showPosition(position) {
  const lat = position.coords.latitude.toFixed(6);
  const lon = position.coords.longitude.toFixed(6);

  demoElement.innerHTML = `Latitude: ${lat}<br>Longitude: ${lon}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      demoElement.innerHTML = "Permissão de localização negada pelo utilizador.";
      break;
    case error.POSITION_UNAVAILABLE:
      demoElement.innerHTML = "As informações de localização estão indisponíveis.";
      break;
    case error.TIMEOUT:
      demoElement.innerHTML = "O pedido para obter a localização expirou.";
      break;
    default:
      demoElement.innerHTML = "Ocorreu um erro desconhecido.";
      break;
  }
}
