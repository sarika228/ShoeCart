/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/components/Root';
import {store,persistor} from "./redux/store";

const App=()=>{
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
}

export default App;