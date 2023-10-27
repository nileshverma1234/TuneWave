import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelpers';
import { useCookies } from 'react-cookie';

const LoginComponent=() =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies,  setCookie]= useCookies(["token"]);
    const navigate = useNavigate();

    const login =async ()=>{
        const data={email, password};
        console.log(data);
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        if(response && ~response.error){
            const token  = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("success");
            navigate('/home');
        }
        else{
            alert("Failure");
        }
    }

    return(
        <div className="w-full h-full flex flex-col items-center" >
            <div className="logo p-7 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="jam:music" width="75"/>
            </div> 
            <div className="inputRegion w-1/4 py-7">
                <div className="font-semibold flex items-center justify-center flex-col mb-12" >To continue, Login to Tunewave</div>
            <TextInput 
                label="Email id or Username" 
                placeholder="Email id or Username"
                className="my-6"
                value={email}
                setValue={setEmail}
            />

            <PasswordInput 
                label="Password" 
                placeholder="Password"
                value={password}
                setValue={setPassword}
            />

            <div className='flex items-center justify-center mt-5'>
            <button className='bg-purple-300 text-lg font-semibold p-3 px-10 rounded-full' onClick={(e)=>{
                e.preventDefault();
                login();
            }}>LOG IN</button>
            
            </div>
            <div className='w-full border border-solid border-gray-300 mt-5'></div>
            <div className='my-6 flex flex-col items-center font-semibold text-lg'>Don't, have an account?</div>
            <div className='border border-gray-400 font-gray-400 font-semibold flex flex-col items-center rounded-full w-full py-4' ><Link to="/signup">SIGN UP FOR TUNEWAVE</Link></div>
            </div>
            
        </div>
    );
};

export default LoginComponent; 