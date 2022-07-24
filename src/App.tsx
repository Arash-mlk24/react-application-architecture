import { Route, Routes } from 'react-router-dom';
import AppRepository from './core/repository/AppRepository';
import EntryPage from './pages/entry/EntryPage';
import Home from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';


function App() {

  return (
    <Routes>
      <Route path='/' element={<EntryPage />} />
      <Route
        path='/login'
        element={
          <LoginPage
            controller={
              AppRepository
                .getInstance()
                .getControllers()
                .getLoginController()
            }
          />
        }
      />
      <Route
        path='/home'
        element={
          <Home
            controller={
              AppRepository
                .getInstance()
                .getControllers()
                .getHomeController()
            }
          />
        } />
    </Routes>
  );

}


export default App;
