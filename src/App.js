import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/store';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <Provider store={appStore}>
      <LanguageProvider>
    <div className="App">
      <Body></Body>
    </div>
    </LanguageProvider>
    </Provider>
  );
}

export default App;
