import { useRef, useState } from "react";

function RefCounter(){
    const countRef = useRef(0);
    let count = 0;

    const[display, setDisplay] = useState(0);

    const handleClick = () => {
        countRef.current++;
        console.log("Ref count", countRef.current);
        count++;
        console.log("Count after increment", count)
        
    } 
    console.log(count)
    return(<>
        <h2>Ref Count {countRef.current}</h2>
        <button onClick={handleClick}>incrementRef</button>
        <button onClick={() => setDisplay(display+1)}>Force-Rendener</button>
    
    </>);
}

export default RefCounter;