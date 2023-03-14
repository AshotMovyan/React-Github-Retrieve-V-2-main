import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components';
import HelloPage from './components/HelloPage'
import Organizations from './components/Organizations';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloPage />} exact/>
          <Route path="/info" element={<Main />} exact/>
          <Route path="info/orgs" element={<Organizations />} exact/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
