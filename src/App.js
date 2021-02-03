/* eslint-disable react/jsx-filename-extension */
import { Provider } from 'react-redux';
import React from 'react';
import { Container } from 'semantic-ui-react';
import createReduxStore from './createReduxStore';
import PictureOfDay from './components/PicOfDay';
import './App.css';

function App() {
    const store = createReduxStore();
    return (
        <div className="App">
            <Provider store={store}>
                <Container>
                    <PictureOfDay />
                </Container>
            </Provider>
        </div>
    );
}

export default App;
