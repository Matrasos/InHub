function init() {
  let map = new ymaps.Map("map", {
    center: [54.878490, 69.132691],
    zoom: 16.5,
  });

  let placemark = new ymaps.Placemark([54.878490, 69.132691], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconImageSize: [30, 30],
    iconImageOffset: [-10, -35]
  })

  map.geoObjects.add(placemark)

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
}
ymaps.ready(init);
