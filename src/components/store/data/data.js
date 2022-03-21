import {createReducer} from '@reduxjs/toolkit';
import {changeAddress, changeCoords} from '../action';

const initialState = {
  address: ['Москва'],
  coords: ['55.751574 37.573856'],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAddress, (state, action) => {
      state.address = [];
      state.address.push(action.payload);
    })
    .addCase(changeCoords,(state, action) => {
      state.coords = [];
      state.coords.push(action.payload);
    });
});

export {data};