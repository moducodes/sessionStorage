// Get saved data from sessionStorage
let title = sessionStorage.getItem('title');
let lat_max = sessionStorage.getItem('lat_max');
let lat_min = sessionStorage.getItem('lat_min');
let lon_max = sessionStorage.getItem('lon_max');
let lon_min = sessionStorage.getItem('lon_min');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
if(title != undefined){
    let p_title = document.querySelector('#title');
    p_title.innerHTML = title;
}

if(title != undefined){
    let p_title = document.querySelector('#title');
    p_title.innerHTML = title;
}

if(lat_max != undefined){
    let p_lat_max = document.querySelector('#lat_max');
    p_lat_max.innerHTML = lat_max;
}

if(lat_min != undefined){
    let p_lat_min = document.querySelector('#lat_min');
    p_lat_min.innerHTML = lat_min;
}

if(lon_max != undefined){
    let p_lon_max = document.querySelector('#lon_max');
    p_lon_max.innerHTML = lon_max;
}

if(lon_min != undefined){
    let p_lon_min = document.querySelector('#lon_min');
    p_lon_min.innerHTML = lon_min;
}