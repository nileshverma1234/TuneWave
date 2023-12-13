import { Icon } from "@iconify/react";
import { useContext, useState, useEffect } from "react";
import { Howl, Howler } from 'howler';
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";

const LoggedInContainer = ({ children }) => {
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const { currentSong, setCurrentSong } = useContext(songContext);

    
  useEffect(() => {
    if(!currentSong) {
        return;
    }

    changeSong(currentSong.track);
  }, [currentSong]);


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
    <div className={`${currentSong ? "h-9/10" : "h-full"} w-full bg-app-black`}>
      <div className="h-9/10 w-full flex">
        <div className="h-full w-1/5  bg-black">
          <div className="logo p-5  w-full flex justify-left">
            <Icon icon="jam:music" color="white" width="100" />
            <h1 className="text-white font-blue-500">TUNEWAVE</h1>
          </div>
          <div className="py-5">
            <IconText iconName={"iconamoon:home"} displayText={"Home"} active targetLink = {"/home"}/>
            <IconText iconName={"mingcute:search-line"} displayText={"Search"} />
            <IconText iconName={"lucide:library"} displayText={"Your Library"} />
            <IconText iconName={"mdi:music-box"} displayText={"My Music"} targetLink = "/myMusic"cd />
          </div>
          <div className="pt-5">
            <IconText iconName={"octicon:plus-16"} displayText={"Create Playlist"} />
            <IconText iconName={"icon-park-outline:like"} displayText={"Liked Songs"} />
          </div>
        </div>

        <div className="h-full w-4/5 bg-gray-700 overflow-auto">
          <div className="navabar w-full h-1/6 bg-black bg-opacity-40 flex justify-right">
            <div className="w-2/3 flex h-full">
              <div className="flex">
                <TextWithHover displayText={"Premium"} />
                <TextWithHover displayText={"Support"} />
                <TextWithHover displayText={"Download"} />
              </div>

              <div className="w-1/3 flex justify-around h-full items-center">
                <TextWithHover displayText={"Upload Song"} />
                <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  TV
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
          <div className="w-1/4 flex justify-end">hello</div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
