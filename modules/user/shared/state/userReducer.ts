import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user';
import { fetchUsers } from './userThunk'

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
    },
});



export default userSlice.reducer;
