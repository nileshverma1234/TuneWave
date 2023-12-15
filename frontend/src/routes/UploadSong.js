import {useState} from "react";
import { Icon } from "@iconify/react";
import IconText from "../components/shared/IconText";
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";
import TextInput from "../components/shared/TextInput";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers"; 
import {useNavigate} from "react-router-dom";

const UploadSong =()=>{
    const[name, setName] = useState("");
    const[thumbnail, setThumbnail] = useState("");
    const[playlistUrl, setPlaylistUrl] = useState("");
    const[uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong =async()=> {
       const data = {name,thumbnail,track: playlistUrl};
       const response = await makeAuthenticatedPOSTRequest("/song/create", data);
       if(response.err) {
        alert("Could not upload");
        return;
       }
       console.log(response);
       alert("Success");
       navigate("/home");
    };

    return(
        <LoggedInContainer>
            <div className="content p-5 pt-0 overflow-auto" >
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <TextInput 
                                label="Song Name" 
                                labelClassName="text-white" 
                                placeholder="Name"
                                value = {name}
                                setValue = {setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                                label="Thumbnail" 
                                labelClassName={"text-white"} 
                                placeholder="Thumbanail"
                                value = {thumbnail}
                                setValue = {setThumbnail}
                            />
                        </div>
                    </div>
                        <div className = "py-5">
                            {uploadedSongFileName ? 
                            (
                                <div className = "bg-white text-black rounded-full p-3 w-1/3">
                                    {uploadedSongFileName.substring(0, 45)}...
                                    </div>
                            ):(
                            <CloudinaryUpload 
                                setUrl = {setPlaylistUrl} 
                                setName = {setUploadedSongFileName}
                            />
                            )}
                        </div>
                        <div className = "bg-white text-black rounded-full w-40 flex items-center justify-center p-4 cursor-pointer font-bold"  onClick= {submitSong}>
                            Submit Song
                        </div>
                </div>
        </LoggedInContainer>
    );
};






export default UploadSong;


