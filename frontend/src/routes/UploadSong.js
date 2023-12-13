import {useState} from "react";
import { Icon } from "@iconify/react";
import IconText from "../components/shared/IconText";
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import TextWithHover from "../components/shared/TextWithHover";
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
        <div className="h-full w-full flex">
            <div className="h-full w-1/5  bg-black">
                {/* this will be for leftpanel */}
                <div className="logo p-5  w-full flex justify-left">
                    
                <Icon icon="jam:music" color="white" width="100"   />
                <h1 className="text-white font-blue-500">TUNEWAVE</h1>
                </div> 
                <div className="py-5">
                    <IconText iconName={"iconamoon:home"} displayText={"Home"} active/>
                    <IconText iconName={"mingcute:search-line"} displayText={"Search"} />
                    <IconText iconName={"lucide:library"} displayText={"Your Library"} />
                    <IconText iconName={"mdi:music-box"} displayText={"My Music"} />
                </div>
                <div className="pt-5">
                <IconText iconName={"octicon:plus-16"} displayText={"Create Playlist"} />
                <IconText iconName={"icon-park-outline:like"} displayText={"Liked Songs"} />
                </div>
            </div>

            <div className="h-full w-4/5 bg-gray-700 overflow-auto">
                {/* this will be for rightpanel */}
                <div className="navabar w-full h-1/10 bg-black bg-opacity-40 flex justify-right">
                    <div className="w-2/3 flex h-full">
                        <div className="flex">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            {/* <div className="h-1/2 border-r border-white"></div> */}
                        </div>
                    
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"} />
                            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                TV
                            </div>
                        </div>
                    </div>
                    
                </div>
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
                                labelClassName="text-white" 
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
            </div>
        </div>
    );
};






export default UploadSong;


