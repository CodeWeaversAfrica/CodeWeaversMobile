import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Define response types
interface AuthResponse {
  user: User;
}

// Register Action
export const register = createAsyncThunk<
  AuthResponse,
  { name: string; email: string; password: string; passwordConfirmation: string },
  { rejectValue: string }
>('auth/register', async (userData, { rejectWithValue }) => {
  try {
    await axios.get('https://your-laravel-api.com/sanctum/csrf-cookie');
    const response = await axios.post<AuthResponse>('https://your-laravel-api.com/api/register', userData, { withCredentials: true });

    // Store user & token in AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('isAuthenticated', 'true');

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Registration failed');
  }
});

// Login Action
export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    await axios.get('https://your-laravel-api.com/sanctum/csrf-cookie');
    const response = await axios.post<AuthResponse>('https://your-laravel-api.com/api/login', credentials, { withCredentials: true });

    // Store user & token in AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('isAuthenticated', 'true');

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Login failed');
  }
});

// Fetch User Action
export const fetchUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('auth/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<User>('https://your-laravel-api.com/api/user', { withCredentials: true });
    await AsyncStorage.setItem('user', JSON.stringify(response.data));
    await AsyncStorage.setItem('isAuthenticated', 'true');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Fetching user failed');
  }
});

// Load Auth State
export const loadAuthState = createAsyncThunk<User | null>('auth/loadAuthState', async () => {
  const user = await AsyncStorage.getItem('user');
  const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
  return user && isAuthenticated === 'true' ? JSON.parse(user) as User : null;
});

// Logout Action
export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('https://your-laravel-api.com/api/logout', {}, { withCredentials: true });
  await AsyncStorage.removeItem('user');
  await AsyncStorage.removeItem('isAuthenticated');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loadAuthState.fulfilled, (state, action) => {
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
