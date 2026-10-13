import { useEffect, useState } from "react";

function UseEffectHook(){

    const[data, setData] = useState(0);

    useEffect(() =>{
        console.log("Component mounted")
    },[data])


    return(
        <>
        <h1>useEffect Component </h1>
        <button onClick={() => setData(data+1)}>increment</button>
        </>
    );
}

export default UseEffectHook