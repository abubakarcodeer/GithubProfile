import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = ""; // Add Github Token

// Thunk for logging or additional async logic
export const fetchUserWithLog = createAsyncThunk(
    "github/fetchUserWithLog",
    async (username, thunkAPI) => {
        try {
            // Optionally log fetch attempt
            console.log("Fetching user via Thunk:", username);

            // Fetch via GitHub API (or RTK Query refetch later)
            const response = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

const githubSlice = createSlice({
    name: "github",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserWithLog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserWithLog.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserWithLog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default githubSlice.reducer;
