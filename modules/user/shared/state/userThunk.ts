import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post, put } from '../../../../core/services/api.service';

import { User } from '../interfaces/user';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {

    const response = await get('users');

    return response;
});

export const createUser = createAsyncThunk("user/createUser", async (user) => {
    const response = await post("users", user);
    return response;
});

export const updateUser = createAsyncThunk<User, User>("user/updateUser", async (user) => {

    const response = await put(`users/${user.id}`, user);
    return response;
});

