import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Profile from './pages/Protected/Profile/Profile';
import SignUp from './pages/Sign-Up/SignUp';
import Login from './pages/Login/Login';
import Store from './pages/Protected/Store/Store';
import NewGame from './pages/Protected/NewGame/NewGame';
import GamePage from './pages/Protected/GamePage/GamePage';
import Community from './pages/Protected/Community/Community';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route 
          index 
          element={<Home />}
          />
          <Route
          path='/store'
          element={<Store />}
          />
          <Route
          path='/community'
          element={<Community />}
          />
          <Route
          path='/new-game'
          element={<NewGame />}
          />
          <Route
          path='/game/spider-man'
          element={<GamePage />}
          />
          <Route
          path='/login'
          element={<Login />}
          />
          <Route
          path='/profile'
          element={<Profile />}
          />
          <Route
          path='/sign-up'
          element={<SignUp />}
          />
        </Route>
      </Routes>
    </>
  );         
}

export default App;
