// store.ts
import { configureStore, createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Workspace } from './types';

// Define the state structure
interface DataState {
  workspaceData: Workspace[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: DataState = {
  workspaceData: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch data
export const fetchData = createAsyncThunk<Workspace[], void, { rejectValue: string }>(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: Workspace[] = await response.json();
      return data 
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Slice definition
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Workspace[]>) => {
        state.status = 'succeeded';
        state.workspaceData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unknown error occurred';
      });
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

// Export types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
