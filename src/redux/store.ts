import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginModalSlice'
import authReducer from './features/auth/authSlice'
import baseApi from './api/baseApi'
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import addToCartReducer from './features/addToCart/addToCart.slice';

const persistedAuthReducer = persistReducer({key: "auth", storage}, authReducer);
const persistedAddToCartReducer = persistReducer({key: 'addToCart', storage}, addToCartReducer)

export const store = configureStore({
  reducer: {
    loginModal: loginReducer,
    auth: persistedAuthReducer,
    addToCart: persistedAddToCartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (defaultMiddleware) => (defaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseApi.middleware))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);