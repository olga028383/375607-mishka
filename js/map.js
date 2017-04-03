;
(function () {
  var myMap;
  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055, 59.938631, 30.323055],
      zoom: 14
    });
    var myPlacemark = new ymaps.Placemark(
            [59.938631, 30.323055, 59.938631, 30.323055]
            );
    myMap.geoObjects.add(myPlacemark);
  }

  /*  if (window.location.pathname === ' ' || window.location.pathname === 'index.html') {
   
   }
   */
  ymaps.ready(init);
})();
