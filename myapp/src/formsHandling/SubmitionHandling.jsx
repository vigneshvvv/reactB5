import { useState } from "react";

function SubmitionHandling(){
    const[name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        console.log("form submitted")
    }


    return(<>
    <div className="container mt-4">
        <h3>Registration</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3"
             value = {name} 
             onChange={(event) => setName(event.target.value)} 
             placeholder="Enter a name"/>

             <button type="submit" className="btn btn-primary">
                Add Name
             </button>

        </form>
    </div>
    
    
    </>);
}

export default SubmitionHandling