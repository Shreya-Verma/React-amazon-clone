import { useContext } from 'react';
import { Context as BasketContext } from './BasketContext';
import { Context as AuthContext } from './AuthContext';

export const useAuth = () => useContext(AuthContext);
export const useBasket = () => useContext(BasketContext);
