import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {YMaps , Map, Placemark} from 'react-yandex-maps';
import {changeCoords } from "../store/action";
import {getAddress, getCoords} from "../store/data/selector";

function InteractiveMap() {
    
  const dispatch = useDispatch();
  
  var newCoords = useSelector(getAddress);
  const coordsArray = [useSelector(getCoords)[0].split(' ')[1], useSelector(getCoords)[0].split(' ')[0]]

  let myMap;
  
  useEffect(() => {
    function maps () {
      let api= `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=6215fd9c-5f31-4de2-8103-b367c7a38cd7&geocode=${newCoords}`;
      fetch(api)
      .then(res => res.json()).then((data => 
        dispatch(changeCoords(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos))));        
    }
    maps();
  }, [newCoords])

  return (
    <YMaps query={{
      ns: 'use-load-option',
      apikey: '6215fd9c-5f31-4de2-8103-b367c7a38cd7',
      load: 'package.full'
    }}>
      <Map state={{center: coordsArray, zoom: 10,controls: []}} width={window.innerWidth > 1024 ? '555px' : '100%'}
            height={window.innerWidth > 1024 ? '700px' : '200px'} modules={["geolocation", "geocode"]} onLoad={ymaps => {
            ymaps.ready(() => {
            })}}  instanceRef={yaMap => {
              if (yaMap) {
                  myMap = yaMap;    
              }               
            }}>
            <Placemark 
              properties={{
                hintContent: `Ваш адрес`,
                iconCaption : `${newCoords}`
              }}
              geometry={coordsArray} />
        </Map>
    </YMaps>
  )
}

export default InteractiveMap;