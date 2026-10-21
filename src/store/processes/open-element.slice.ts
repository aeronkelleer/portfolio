import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/const';
import type { OpenElementsSlice } from '../store-types';

// %======================== openElementProcess ========================% //

const initialState: OpenElementsSlice = {
  openElements: [],
};

export const openElementSlice = createSlice({
  name: NameSpace.OPEN_ELEMENTS,
  initialState,
  reducers: {
    addOpenElement: (state, action: PayloadAction<string>) => {
      if (state.openElements.includes(action.payload)) return;
      state.openElements.push(action.payload);
      document.body.style.overflow = 'hidden';
    },
    dropOpenElement: (state, action) => {
      const index = state.openElements.indexOf(action.payload);
      if (index !== -1) {
        state.openElements.splice(index, 1);
      }
      document.body.style.overflow = '';
    },
  },
  selectors: {
    getOpenElements: (state) => state.openElements,
  }
});


export const {
  addOpenElement,
  dropOpenElement,
} = openElementSlice.actions;

export const { getOpenElements } = openElementSlice.selectors;