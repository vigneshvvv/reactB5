import { useRef } from "react";

function useReference(){

    const nameRef = useRef(null)

    function handleRef(){
        nameRef.current.focus();
    }

    return(
    <>
        <input ref={nameRef} type="text" placeholder="Enter your name"/>

        <button onClick={handleRef}>submit</button>
    </>
    );
}

export default useReference;