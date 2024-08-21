import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import formReducer from './formSlice';

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  form: formReducer
});
//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); 