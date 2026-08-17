let center = [47.19344086121115, 39.68727648776622];
// let placemark = [47.19354507425864, 39.687048499999946];
function init(params) {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 18,
  });

  let placemark = new ymaps.Placemark(
    [47.19353958936652, 39.68705118220896],
    {},
    {
      // iconLayout: "default#image",
      // iconImageHref: "img/map-icon.png",
      // iconImageSize: [30, 30],
      // iconImageOffset: [-70, -50],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);