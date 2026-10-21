import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/const';
import { languageSlice } from './processes/language.slice';
import { openElementSlice } from './processes/open-element.slice';

// %======================== rootReducer ========================% //

export const rootReducer = combineReducers({
  [NameSpace.OPEN_ELEMENTS]: openElementSlice.reducer,
  [NameSpace.LANGUAGE]: languageSlice.reducer,
});
