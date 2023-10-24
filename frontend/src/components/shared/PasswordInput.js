const TextInput = ({label,placeholder}) =>{
    return(  
    <div className="textInputDiv flex flex-col space-y-1 w-full">
        <label for="123" className="font-semibold">{label}</label>
        <input type="password" 
    placeholder={placeholder} 
    className="p-2 border border-gray-400 border-solid rounded placeholder-gray-400"
    id={label}
    />
    </div>
    );
};


export default TextInput;