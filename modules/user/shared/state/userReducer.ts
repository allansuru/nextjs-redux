import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user';
import { fetchUsers, createUser, updateUser } from './userThunk'

const initialState =
{
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // ... outras ações ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                debugger
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                debugger
                const updatedIndex = state.users.findIndex(
                    (user) => user.id === action.payload.id
                );
                if (updatedIndex !== -1) {
                    state.users[updatedIndex] = action.payload;
                }
            });
    },
});



export default userSlice.reducer;
