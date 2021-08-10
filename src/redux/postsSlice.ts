import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from './store'
import { UserData } from "../interfaces/mock";

export const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: <UserData[]>[]
    },
    reducers: {
        updatePosts(state, { payload }) {
            return {...state, posts: payload}
        }
    }
})

export const { updatePosts } = slice.actions

export const selectPosts = (state: RootState) => state.posts

export default slice.reducer
