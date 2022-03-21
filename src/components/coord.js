console.log(adress)

  let myMap; 

  function myGeoCode(ymaps, myMap, address) {
      ymaps.geocode(address, {
          results: 1
      }).then(function (res) {
           //Выбираем первый результат геокодирования.
          let firstGeoObject = res.geoObjects.get(0)
           //Координаты геообъекта.
          let coords = firstGeoObject.geometry.getCoordinates()
           //Область видимости геообъекта.
          let bounds = firstGeoObject.properties.get('boundedBy');
          firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
           //Получаем строку с адресом и выводим в иконке геообъекта.
          firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
           //Добавляем первый найденный геообъект на карту.
          myMap.geoObjects.add(firstGeoObject);
           //Масштабируем карту на область видимости геообъекта.
          myMap.setBounds(bounds, {
              // Проверяем наличие тайлов на данном масштабе.
              checkZoomRange: true
          });
          //<Placemark geometry={[55.751574, 37.573856]} />
          let myPlacemark = new ymaps.Placemark(coords, {
              //iconContent: 'название города',
          }, {
              //preset: 'islands#violetStretchyIcon'
          });
  
          //myPlacemark.events.add('click', function() {
          //    alert(address)
          //});
  
          myMap.geoObjects.add(myPlacemark);
      });
    }
    
    //function init(ymaps, myMap) {
    //  //checkedObjects.forEach(address => myGeoCode(ymaps, myMap, `${address}`))  
    //  myGeoCode(ymaps, myMap, 'Москва')
    //}