import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('RegisterRequest', (state) => {
      state.loading = true;
    })
    .addCase('RegisterSuccess', (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    })
    .addCase('RegisterFailure', (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
});
