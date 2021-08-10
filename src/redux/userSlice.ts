
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from './store'

export const slice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        updateUser(state, { payload }) {
            return {...state, user: payload}
        }
    }
})

export const { updateUser } = slice.actions

export const selectUser = (state: RootState) => state.user

export default slice.reducer
