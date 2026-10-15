import { useState } from "react";

function InputHandling(){
    const [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value)
    }

    const resultHandle = (event) => {
        setName(event.target.value)
    }

    return(
        <>
        <div className="container mt-4">
            <h2>Enter your name</h2>

            <input type="text"className="form-control"
            value={name}
            onChange={resultHandle}
            placeholder="Enter your Name"/>

            <h3 className="mt-3"> Hello, {name}</h3>

        </div>
        </>
    );
}

export default InputHandling;