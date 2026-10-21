import { Language } from '@/types/types';
import type { AxiosInstance } from 'axios';
import type { store } from './store';

// %======================== redux types ========================% //

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Process = {
  field: string;
};

export type AsyncThunkType = {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
};

// %------------------------ slices ------------------------% //
export type OpenElementsSlice = {
  openElements: (string | null)[];
};

export type LanguageSlice = {
  currentLanguage: Language;
};
