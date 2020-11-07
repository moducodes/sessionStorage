const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = "";
  busRoute = document.querySelector('#busroute').value;
  console.log(busRoute);

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "";
    busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        console.log(route);
        console.log(route);
        sessionStorage.setItem('title', route.title);
        sessionStorage.setItem('lat_max', route.lat_max);
        sessionStorage.setItem('lat_min', route.lat_min);
        sessionStorage.setItem('lon_max', route.lon_max);
        sessionStorage.setItem('lon_min', route.lon_min);
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
