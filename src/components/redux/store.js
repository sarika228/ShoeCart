/* eslint-disable prettier/prettier */
import {createStore} from 'readux';
import {persistStore,persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage';
import cartReducer from './reducers';

const persistConfig={
    kay:'root',
    storage:AsyncStorage,
}

const persistedReducer=persistReducer(persistConfig,cartReducer);

export const store=createStore(persistedReducer);
export const persistor=persistStore(store);