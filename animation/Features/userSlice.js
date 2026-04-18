import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Authentication states
    loading: false,
    isAuthorized: false,
    user: null,

    // Registration specific states
    isRegistering: false,
    registrationSuccess: false,
    registrationError: null,

    // Common error state
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // ========== LOGIN ACTIONS ==========
        loginStart(state) {
            state.loading = true;
            state.error = null;
            state.isAuthorized = false;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthorized = true;
            state.user = action.payload.user;
            state.error = null;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.isAuthorized = false;
            state.error = action.payload;
            state.user = null;
        },

        // ========== REGISTER ACTIONS ==========
        registerStart(state) {
            state.isRegistering = true;
            state.registrationSuccess = false;
            state.registrationError = null;
            state.error = null;
        },
        registerSuccess(state, action) {
            state.isRegistering = false;
            state.registrationSuccess = true;
            state.user = action.payload.user;
            state.isAuthorized = true; // Auto-login after registration
            state.registrationError = null;
        },
        registerFailure(state, action) {
            state.isRegistering = false;
            state.registrationSuccess = false;
            state.registrationError = action.payload;
            state.error = action.payload;
        },

        // ========== COMMON ACTIONS ==========
        logout(state) {
            state.loading = false;
            state.isAuthorized = false;
            state.isRegistering = false;
            state.registrationSuccess = false;
            state.user = null;
            state.error = null;
            state.registrationError = null;
        },

        updateUser(state, action) {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },

        clearErrors(state) {
            state.error = null;
            state.registrationError = null;
        },

        resetRegistration(state) {
            state.isRegistering = false;
            state.registrationSuccess = false;
            state.registrationError = null;
        },
    },
});

// Export all actions
export const {
    // Login actions
    loginStart,
    loginSuccess,
    loginFailure,
    // Register actions
    registerStart,
    registerSuccess,
    registerFailure,
    // Common actions
    logout,
    updateUser,
    clearErrors,
    resetRegistration,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;