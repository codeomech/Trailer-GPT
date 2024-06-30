import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/store';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Body></Body>
    </div>
    </Provider>
  );
}

export default App;
