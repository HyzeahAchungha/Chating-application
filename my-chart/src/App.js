
import { useSelector } from 'react-redux';
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/home/Profile/Profile';
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        {/* <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        /> */}
      </Routes>
      {/* <Home/> */}
      {/* <Profile/> */}



      {/* {serverList.map((server, index) => {
                        return (
                            <div  >
                                <h3>{server.sendmessage}</h3>
                                <h3>{server.name}</h3>
                                <h3>{server.email}</h3>
                                <h3>{server.subject}</h3>
                                
                                <button onClick={() => deleteServer(server._id)}>cancel</button>
                                
                            </div>
                        )
                    })} */}
    </div>
  );
}

export default App;
