import { Icon } from "@iconify/react";
const TextWithHover =({iconName,displayText,active}) =>{
    return (
        <div className="flex items-center justify-start cursor-pointer">
            <div className="px-5 py-2">
                <Icon icon={iconName} color={active ? "white":"gray"} fontSize={35} />
            </div>
            <div className={`${active?"text-white" :"text-gray-400"} font-size-35 font-semibold hover:text-white text-lg`} >
                {displayText}
            </div>
        </div>
    );
};



export default TextWithHover;