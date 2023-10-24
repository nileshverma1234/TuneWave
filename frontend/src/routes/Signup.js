import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const SignUpComponent=() =>{
    return(
        <div className="w-full h-full flex flex-col items-center" >
            <div className="logo p-7 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="jam:music" width="75"/>
            </div> 
            <div className="inputRegion w-1/4 py-7">
                <div className="font-semibold flex items-center justify-center flex-col mb-12" >Fill all the details to vibe</div>
            <TextInput label="Enter your Email " 
            placeholder="Email id "
            className="my-6"/>
            <TextInput label="Confirm your Email " 
            placeholder="Email id "
            className="my-6"/>
            <TextInput label="What should we call you " 
            placeholder="Enter your name "
            className="my-6"/>


            <PasswordInput label="Create Password" 
            placeholder="Password"/>

            <div className='flex items-center justify-center mt-5'>
            <button className='bg-purple-300 text-lg font-semibold p-3 px-10 rounded-full'>Sign Up</button>
            
            </div>
            <div className='w-full border border-solid border-gray-300 mt-5'></div>
            <div className='my-6 flex flex-col items-center font-semibold text-lg'>Already have an account!</div>
            <div className='border border-gray-400 font-semibold font-gray-400 flex flex-col items-center rounded-full w-full py-4'><Link to="/login">SIGN IN TO TUNEWAVE</Link></div>
            </div>
            
        </div>
    );
};

export default SignUpComponent; 