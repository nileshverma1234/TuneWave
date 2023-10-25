const TextInput = ({label,placeholder,className, value , setValue}) =>{
    return(  
        <div className={`textInputDiv flex flex-col space-y-1 w-full ${className}`}>
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-400"
                id={label}
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};


export default TextInput;