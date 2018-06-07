window.onload=function(){
      
    // center of the map
    var center = [38.9072, -77.0369];

    // Create the map
    var map = L.map('map').setView(center, 3);

    // Set up the OSM layer
    L.tileLayer(
      'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);

    var LeafIcon = L.Icon.extend({
      options: {
        shadowSize:   [50, 64],
        iconAnchor:   [5, 25],
        shadowAnchor: [4, 62],
        popupAnchor:  [0, 0]
      }
    });

    var redPin = new LeafIcon({
        iconUrl: 'http://thedevtip.com/notes/wp-content/uploads/2018/06/if_pin_299069-e1528223214319.png',
      className: 'redPin',
    });

    // Already Visited
    // add a marker in the given location
    L.marker(center, {icon: redPin}).bindPopup("Home: Washington D.C.").addTo(map);

    // North America
    L.marker([49.8951, -97.1384], {icon: redPin}).bindPopup("Traveled: Winnipeg, CA").addTo(map); 
    L.marker([45.5017, -73.5673], {icon: redPin}).bindPopup("Traveled: Montreal, CA").addTo(map);
    L.marker([44.9778, -93.2650], {icon: redPin}).bindPopup("Traveled: Minneapolis, MN").addTo(map);

    L.marker([42.3601, -71.0589], {icon: redPin}).bindPopup("Traveled: Boston, MA").addTo(map); 
    L.marker([40.7128, -74.0060], {icon: redPin}).bindPopup("Lived: NYC").addTo(map);

    L.marker([34.0522, -118.243], {icon: redPin}).bindPopup("Lived: L.A., CA").addTo(map);
    L.marker([32.7767, -96.7970], {icon: redPin}).bindPopup("Traveled: Dallas, TX").addTo(map);
    L.marker([36.1627, -86.7816], {icon: redPin}).bindPopup("Traveled: Nashville, TN").addTo(map);
    L.marker([39.9526, -75.1652], {icon: redPin}).bindPopup("Traveled: Philly, PA").addTo(map);
    L.marker([38.7209, -75.0760], {icon: redPin}).bindPopup("Traveled: Rehoboth, DE").addTo(map);
    L.marker([38.9784, -76.4922], {icon: redPin}).bindPopup("Traveled: Annapolis, MD").addTo(map);
    L.marker([39.2904, -76.6122], {icon: redPin}).bindPopup("Traveled: Baltimore, MD").addTo(map);
    L.marker([38.3498, -81.6326], {icon: redPin}).bindPopup("Traveled: Charleston, WV").addTo(map);
    L.marker([36.7098, -81.9773], {icon: redPin}).bindPopup("Traveled: Abingdon, VA").addTo(map);
    L.marker([37.5407, -77.4360], {icon: redPin}).bindPopup("Traveled: Richmond, VA").addTo(map);
    L.marker([36.8529, -75.9780], {icon: redPin}).bindPopup("Traveled: VB, VA").addTo(map);
    L.marker([35.5585, -75.4665], {icon: redPin}).bindPopup("Traveled: Outer Banks, NC").addTo(map);
    L.marker([33.6891, -78.8867], {icon: redPin}).bindPopup("Traveled: Myrtle Beach, SC").addTo(map);
    L.marker([25.7617, -80.1918], {icon: redPin}).bindPopup("Traveled: Miami, FL. ").addTo(map);
    L.marker([28.5383, -81.3792], {icon: redPin}).bindPopup("Traveled: Orlando, FL. ").addTo(map);


    L.marker([32.7157, -117.1611], {icon: redPin}).bindPopup("Traveled: SD, CA").addTo(map);
    L.marker([23.2494, -106.4111], {icon: redPin}).bindPopup("Traveled: Mazatlan, MX").addTo(map);
    L.marker([20.6534, -105.2253], {icon: redPin}).bindPopup("Traveled: Puerto Vallarta, MX").addTo(map);
    L.marker([17.0732, -96.7266], {icon: redPin}).bindPopup("Traveled: Oaxaca, MX").addTo(map);
    L.marker([15.8720, -97.0767], {icon: redPin}).bindPopup("Traveled: Puerto Escondido, MX").addTo(map);

    // Central America
    L.marker([9.9281, -84.0907], {icon: redPin}).bindPopup("Traveled: San José, Costa Rica").addTo(map);
    L.marker([10.2993, -85.8371], {icon: redPin}).bindPopup("Traveled: Tamarindo, Costa Rica").addTo(map);
    L.marker([10.2750, -84.8255], {icon: redPin}).bindPopup("Traveled: Monteverde, Costa Rica").addTo(map);
    L.marker([11.2634, -85.8640], {icon: redPin}).bindPopup("Traveled: San Juan Del Sur, Nica").addTo(map);
    L.marker([12.1150, -86.2362], {icon: redPin}).bindPopup("Traveled: Managua, Nica").addTo(map);
    L.marker([8.9824, -79.5199], {icon: redPin}).bindPopup("Traveled: Panama City, Panama").addTo(map);
    L.marker([9.4166, -82.5208], {icon: redPin}).bindPopup("Traveled: Bocas, Panama").addTo(map);
    L.marker([8.4007, -82.4428], {icon: redPin}).bindPopup("Traveled: David, Panama").addTo(map);
    L.marker([8.7761, -82.4324], {icon: redPin}).bindPopup("Traveled: Boquete, Panama").addTo(map);


    // Carib
    L.marker([19.7509, -70.4144], {icon: redPin}).bindPopup("Traveled: Cabarate, D.R.").addTo(map);
    L.marker([18.3402, -67.2499], {icon: redPin}).bindPopup("Traveled: Rincon, P.R.").addTo(map);
    L.marker([19.3222, -81.2409], {icon: redPin}).bindPopup("Traveled: Grand Cayman, UK").addTo(map);

    // South America
    L.marker([6.2442, -75.5812], {icon: redPin}).bindPopup("Traveled: Medellín, Colombia").addTo(map);
    L.marker([10.3910, -75.4794], {icon: redPin}).bindPopup("Traveled: Cartagena, Colombia").addTo(map);
    L.marker([-12.0464, -77.0428], {icon: redPin}).bindPopup("Traveled: Lima, Peru").addTo(map);
    L.marker([-13.1631, -72.5450], {icon: redPin}).bindPopup("Traveled: Machu Picchu, Peru").addTo(map);
    L.marker([-13.5320, -71.9675], {icon: redPin}).bindPopup("Traveled: Cusco, Peru").addTo(map);

    // Europe
    L.marker([51.5074, 0.1278], {icon: redPin}).bindPopup("Traveled: London, UK").addTo(map);
    L.marker([42.6977, 23.3219], {icon: redPin}).bindPopup("Traveled: Sofia, Bulgaria").addTo(map);


    // Asia
    L.marker([-8.6478, 115.1385], {icon: redPin}).bindPopup("Traveled: Canggu, Indonesia").addTo(map);
    L.marker([7.9519, 98.3381], {icon: redPin}).bindPopup("Traveled: Phuket, Thailand").addTo(map);
    L.marker([13.7563, 100.5018], {icon: redPin}).bindPopup("Traveled: Bangkok, Thailand").addTo(map);
    L.marker([10.0956, 99.8404], {icon: redPin}).bindPopup("Traveled: Ko Tao, Thailand").addTo(map);
    L.marker([41.0082, 28.9784], {icon: redPin}).bindPopup("Traveled: Istanbul, Turkey").addTo(map);
    L.marker([9.7319, 100.0136], {icon: redPin}).bindPopup("Traveled: Ko Pha-ngan, Thailand").addTo(map);
    L.marker([7.7407, 98.7784], {icon: redPin}).bindPopup("Traveled: Phi Phi Islands, Thailand").addTo(map);


    $('#map').addClass('floating');
    $('h2').addClass('blink');

    setTimeout(function() {
    /*     $("#map").removeClass("floating");
         */    $("h2").removeClass("blink");
    }, 4000);

}
