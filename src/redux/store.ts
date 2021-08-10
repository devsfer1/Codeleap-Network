import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postsReducer from './postsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
