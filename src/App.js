import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Header from './components/Header';
import Main from './views/Main';

function App() {
  return (
    <>
      <Header name="Bob" title="React Tomfoolery"></Header>
      <Main />
    </>
  );
}

export default App;
