import { LANGUAGES, NameSpace } from '@/constants/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../types/types';
import { LanguageSlice } from '../store-types';

// %======================== languageSlice ========================% //

const initialState: LanguageSlice = {
  currentLanguage: LANGUAGES[0],
};

export const languageSlice = createSlice({
  name: NameSpace.LANGUAGE,
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
  },
  selectors: {
    getCurrentLanguage: (state) => state.currentLanguage,
  },
});

export const { changeLanguage } = languageSlice.actions;
export const { getCurrentLanguage } = languageSlice.selectors;
