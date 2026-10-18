function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
          demo.innerHTML = "Geolocalização não é suportada por este navegador.";
        }
      }

      function showPosition(position) {
        demo.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
      }