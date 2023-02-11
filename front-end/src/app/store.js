import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import accountReducer from'../features/accounts/accountSlice'
import payeeReducer from '../features/payees/payeeSlice'
import categoryReducer from '../features/categories/categorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountReducer,
    payees: payeeReducer,
    categories: categoryReducer,
  },
});
