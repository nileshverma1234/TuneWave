import { Icon } from "@iconify/react";
import { useContext, useState, useLayoutEffect, useRef } from "react";
import { Howl, Howler } from 'howler';
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";

const LoggedInContainer = ({ children, curActiveScreen }) => {

  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  
  const { currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused } = useContext(songContext);
  

    
  const firstUpdate = useRef(true);
  
  useLayoutEffect(() => {
    // the following if statement will prevent the useeffect from running on first render.
    
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if(!currentSong) {
        return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);


  const playSound = () => {
    if(!soundPlayed) {
        return;
    }
    soundPlayed.play();
  };
  
  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);

  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(currentSong.track);
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-full w-full bg-app-black">
      { createPlaylistModalOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)
      }} 
      />}

      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
        {/* This first div will be the left panel */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
          <div>
            <div className="logo p-5  w-full flex justify-left">
              <Icon icon="jam:music" color="white" width="100" />
              <h1 className="text-white font-blue-500">TUNEWAVE</h1>
            </div>
            <div className="py-5">
              <IconText iconName={"iconamoon:home"} displayText={"Home"} active= {curActiveScreen === "home"} targetLink = {"/home"}/>
              <IconText iconName={"mingcute:search-line"} displayText={"Search"}  active= {curActiveScreen === "search"}  targetLink = {"/search"} />
              <IconText iconName={"lucide:library"} displayText={"Your Library"}  active= {curActiveScreen === "yourLibrary"} />
              <IconText iconName={"mdi:music-box"} displayText={"My Music"}  active= {curActiveScreen === "myMusic"} targetLink = "/myMusic"cd />
            </div>
            <div className="pt-5">
              <IconText iconName={"octicon:plus-16"} displayText={"Create Playlist"} onClick = {()=> {setCreatePlaylistModalOpen(true);
              }} 
              />

              <IconText iconName={"icon-park-outline:like"} displayText={"Liked Songs"} />
            </div>
          </div>
        </div>

        {/* This second div will be the right part(main content) */}
        <div className="h-full w-4/5 bg-gray-700 overflow-auto">
          <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
            <div className="w-2/3 flex h-full">
              <div className="w-2/3 flex justify-around items-center">
                <TextWithHover displayText={"Premium"} />
                <TextWithHover displayText={"Support"} />
                <TextWithHover displayText={"Download"} />
                <div className="h-1/2 border-r border-white"></div>
              </div>

              <div className="w-1/3 flex justify-around h-full items-center">
                <TextWithHover displayText={"Upload Song"}  />
                <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  UT
                </div>
              </div>
            </div>
          </div>
          <div className="content p-5 pt-0 overflow-auto">
            {children}
          </div>
        </div>
      </div>

      {/* this div is for current playing song */}

      {currentSong && (
        <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src={currentSong.thumbnail}
              alt="currentSongThumbnail"
              className="h-14 w-14 rounded"
            />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
              <div className="text-xs text-gray-500 hover:underline cursor-pointer">{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center h-full flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              <Icon
                icon="mingcute:shuffle-line"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon="mdi-light:skip-previous"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon={
                  isPaused
                    ? "gridicons:play"
                    : "gridicons:pause"
                }
                fontSize={50}
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={togglePlayPause}
              />
              <Icon
                icon="mdi-light:skip-next"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon="mingcute:repeat-line"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
            </div>
          </div>
          {/* <div className="w-1/4 flex justify-end">hello</div> */}
        </div>
      )}

    </div> 
  );
};

export default LoggedInContainer;
