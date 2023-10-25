import {useState} from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelpers'



const SignUpComponent=() =>{

    const [email, setEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [firstName, setfirst] = useState("");
    const [lastName, setlast] = useState("");

    const signUp =async ()=>{
    if(email !== confirmEmail){
        alert("email & confirm email not same");
        return;
    }
    const data={firstName, lastName, email, userName, password};
    console.log(data);
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
    if(response && ~response.error){
        console.log(response);
        alert("success");
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
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-semibold flex items-center justify-center flex-col mb-12" >Fill all the details to vibe</div>
                <TextInput 
                    label="Enter your Email " 
                    placeholder="Email id "
                    className="my-3"
                    value={email}
                    setValue={setEmail}
                />

                <TextInput 
                    label="Confirm your Email " 
                    placeholder="Confirm Email id "
                    className="my-3"
                    value={confirmEmail}
                    setValue={setconfirmEmail}
                />

                <TextInput 
                    label="UserName" 
                    placeholder="UserName"
                    className="my-3"
                    value={userName}
                    setValue={setuserName}
                />

                <PasswordInput 
                    label="Create Password" 
                    placeholder="Password"
                    className="my-3"
                    value={password}
                    setValue={setpassword}
                />

                <div className='w-full flex justify-between items-center space-x-4'>
                    <TextInput
                        label="First Name"
                        placeholder="Enter your First Name"
                        className="my-3"
                        value={firstName}
                        setValue={setfirst}
                    /> 

                    <TextInput
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        className="my-3"
                        value={lastName}
                        setValue={setlast}
                    /> 
                </div>

                <div className='flex items-center justify-center mt-5'>
                    <button className='bg-purple-300 text-lg font-semibold p-3 px-10 rounded-full' onClick={e=>{
                        e.preventDefault();
                        signUp();
                    }}>Sign Up</button>
                
                </div>
                <div className='w-full border border-solid border-gray-300 mt-5'></div>
                <div className='my-6 flex flex-col items-center font-semibold text-lg'>Already have an account!</div>
                <div className='border border-gray-400 font-semibold font-gray-400 flex flex-col items-center rounded-full w-full py-4'><Link to="/login">SIGN IN TO TUNEWAVE</Link></div>
            </div>
            
        </div>
    );
};

export default SignUpComponent; 