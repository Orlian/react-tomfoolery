import './App.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Header from './components/Header';
import Main from './views/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlaceKitten from './views/PlaceKitten';

function App() {
  return (
    <>
      <Header name="Bob" title="React Tomfoolery"></Header>
      <Main />
      <PlaceKitten />
    </>
  );
}

export default App;
