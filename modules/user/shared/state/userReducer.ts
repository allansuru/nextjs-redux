import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/User';
import { fetchUsers } from './userThunk'

const initialState: User[] = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // ... outras ações ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload; // Atualize o estado com os usuários buscados
            });
    },
});



export default userSlice.reducer;
