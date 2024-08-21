import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formId: null
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setFormNumber: (state, action) => {
        state.formId = action.payload
        },
    }
});

export const { setFormNumber } = formSlice.actions;

export default formSlice.reducer;