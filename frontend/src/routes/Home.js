import { Icon } from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const Home =()=>{
    return(
        <div className="h-full w-full flex">
            <div className="h-full w-1/5  bg-black">
                {/* this will be for leftpanel */}
                <div className="logo p-5  w-full flex justify-left">
                    
                <Icon icon="jam:music" color="white" width="100"   />
                <h1 className="font-blue-500">TUNEWAVE</h1>
                </div> 
                <div className="py-5">
                    <IconText iconName={"iconamoon:home"} displayText={"Home"} active/>
                    <IconText iconName={"mingcute:search-line"} displayText={"Search"} />
                    <IconText iconName={"lucide:library"} displayText={"Your Library"} />
                </div>
                <div className="pt-5">
                <IconText iconName={"octicon:plus-16"} displayText={"Create Playlist"} />
                <IconText iconName={"icon-park-outline:like"} displayText={"Liked Songs"} />
                </div>
            </div>

            <div className="h-full w-4/5 bg-gray-700">
                {/* this will be for rightpanel */}
                <div className="navabar w-full h-1/6 bg-black bg-opacity-40 flex justify-right">
                    <div className="flex"><TextWithHover displayText={"Premium"} />
                    <TextWithHover displayText={"Support"} />
                    <TextWithHover displayText={"Download"} />
                    <TextWithHover displayText={"Sign Up"} /></div>
                    
                    <div className="flex pt-10 py-10 px-10 flex-col items-center justify-right w-1/2 h-full">
                    <div className="bg-white flex  items-center justify-center font-semibold cursor-pointer h-2/3 px-8 rounded-full">Log In</div>
                    </div>
                </div>
                <div className="content p-5" >
                    <Playlistview/>
                    </div>   
            </div>
        </div>
    );
};

const Playlistview=()=>{
    return(
        <div className="text-white">
            <div className="text-2xl font-semibold">Focus</div>
            <div className="w-full flex justify-around ">
                <Card title={"Rigor Mortis"} description={"Soul YCE"}/>
                <Card title={"Second Second Chance"} description={"Soul YCE"}/>
                <Card title={"It's just love"} description={"Soul YCE"}/>
                <Card title={"Sideshow Bob"} description={"Soul YCE"}/>
                <Card title={"Weight"} description={"Soul YCE"}/>
                

            </div>
        </div>
    );
};

const Card=({title,description}) =>{
    return(
        <div className="bg-black bg-opacity-50 w-1/6 p-4 rounded">
            <div className="py-4">
                <img className="w-full rounded-md"rounded-md src="data:image/jpeg;base64,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"/>
            </div>
            <div className="text-white">{title}</div>
            <div className="text-gray-400 text-sm">{description}</div>
        </div>
    );
}

export default Home;


