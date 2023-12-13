import logo from './logo.svg';
import './App.css';
import './output.css';
import {useState} from "react";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";  
import LoginComponent  from './routes/Login';
import SignUpComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContext';

function App() {

  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] =useCookies(["token"]);

  return (
    <div className="w-screen h-screen">
       <BrowserRouter>
          {
            cookie.token ? (
              //logged In routes
              <songContext.Provider value={{currentSong, setCurrentSong}}>

              <Routes>

                <Route path="/" element={<div className="bg-blue-500">Go to /login</div>} />
                <Route path="/home" element={<LoggedInHomeComponent/>}/>
                <Route path="/upload" element={<UploadSong/>}/>
                <Route path="/myMusic" element={<MyMusic/>}/>
                <Route path='*' element={<Navigate to="/home"/>} />

              </Routes>
              
              </songContext.Provider>
            ):(
              // logged out routes
              <Routes>
                <Route path ="/login" element={<LoginComponent />}/>
                <Route path="/signup" element={<SignUpComponent/>}/>
                <Route path="/home" element={<HomeComponent/>}/>
                <Route path='*' element={<Navigate to="/login"/>} />
              </Routes>
            )
          }
          
       </BrowserRouter>
    </div>
  );
}

export default App;
