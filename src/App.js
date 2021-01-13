import { Provider } from 'react-redux';
import createReduxStore from './createReduxStore';
import PictureOfDay from './components/PicOfDay';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
  const store = createReduxStore();
  return (
    <div className='App'>
      <Provider store={store}>
        <Container>
          <PictureOfDay></PictureOfDay>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
