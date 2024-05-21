import { IToastMessage } from './../types/toast-type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IToastState {
  toastList: IToastMessage[];
}

const initialState: IToastState = {
  toastList: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<IToastMessage>) => {
      state.toastList.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<number>) => {
      state.toastList = state.toastList.filter(
        (toast) => toast.id !== action.payload,
      );
    },
  },
});

export default toastSlice.reducer;
export const { addToast, removeToast } = toastSlice.actions;
