/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { updateVersion, setThemeState } from './actions';

export interface GlobalState {
  isDark: boolean;
}

export const initialState: GlobalState = {
  isDark: false,
};

export default createReducer(initialState, builder =>
  builder
    .addCase(updateVersion, () => {})
    .addCase(setThemeState, (state, { payload: { isDark } }) => {
      return {
        ...state,
        isDark,
      };
    })
);
