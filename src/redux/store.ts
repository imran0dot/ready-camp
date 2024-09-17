import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginModalSlice'
import authReducer from './features/auth/authSlice'
import baseApi from './api/baseApi'

export const store = configureStore({
  reducer: {
    loginModal: loginReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (defaultMiddleware) => (defaultMiddleware().concat(baseApi.middleware))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch