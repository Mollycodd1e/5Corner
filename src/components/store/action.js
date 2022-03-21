import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_ADDRESS: '/changeAdress',
  CHANGE_COORDS: '/changeCoords',
};

export const changeAddress = createAction(ActionType.CHANGE_ADDRESS, (address) => ({
  payload: address,
}));

export const changeCoords = createAction(ActionType.CHANGE_COORDS, (coords) => ({
  payload: coords,
}));