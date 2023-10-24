import logo from './logo.svg';
import './App.css';
import './output.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";  
import LoginComponent  from './routes/Login';
import SignUpComponent from './routes/Signup';
import HomeComponent from './routes/Home';

function App() {
  return (
    <div className="w-screen h-screen">
       <BrowserRouter>
       <Routes>
        <Route path="/bye" element={<div className="bg-blue-500">bye</div>} />
        <Route path ="/login" element={<LoginComponent />}/>
        <Route path="/signup" element={<SignUpComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
