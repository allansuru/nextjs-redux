import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '@core/services/api.service';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {

    const response = await get('users');

    return response;
});

