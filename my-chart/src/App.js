
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/home/Profile/Profile';



function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:"-18%",right:"0"}}></div>
      <div className="blur" style={{top:"36%",left:"-8rem"}}></div>
      {/* <Home/> */}
      <Profile/>
      {/* <Auth/> */}


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
