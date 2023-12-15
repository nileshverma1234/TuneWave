import TextInput from "../components/shared/TextInput";
import {useState} from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({closeModal}) => {

    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/create", 
            {name: playlistName, thumbnail: playlistThumbnail, songs: []});
            if(response._id) {
                closeModal();
            }
    };


    return (
        <div className = "absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className = "bg-black w-1/3 rounded-md p-8" onClick={(e) =>{
                e.stopPropagation();
            }}
            >
                
                <div className="text-white mb-5 font-semibold text-lg">Create Playlist</div>
                <div className="space-y-5 flex flex-col justify-center items-center">
                <TextInput 
                                label="Name" 
                                labelClassName={"text-white"} 
                                placeholder="Playlist Name"
                                value = {playlistName}
                                setValue = {setPlaylistName}
                            />
                            <TextInput 
                                label="Thumbnail" 
                                labelClassName={"text-white"} 
                                placeholder="Thumbanail"
                                value = {playlistThumbnail}
                                setValue = {setPlaylistThumbnail}
                            />
                            <div className="bg-white w-1/5 rounded flex justify-center items centerfont-semibold py-3 font-semibold text-lg margin-top cursor-pointer" 
                            onClick = {createPlaylist}
                            >
                                Create
                                </div>
                </div>
            </div>
        </div>
    )
};

export default CreatePlaylistModal;