import { useState } from "react";

function UserInfoPage(){
    // const[formData, setFormData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = Object.fromEntries(formData.entries())
        console.log(result)

        for (const [key, value] of formData.entries()){
            console.log(key, value);
        }

    }



    return(<>
    <div className="container mt-4">
        <h2>User Data registration</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="userName"
            placeholder="Enter your userName"
            className="form-control mb-3"/>

            <input
            type="text"
            name="Email"
            placeholder="Enter your Email Address"
            className="form-control mb-3"/>

            <input
            type="text"
            name="Password"
            placeholder="Enter your password"
            className="form-control mb-3"/>

            <button type="submit" className="btn btn-primary">
                submit
            </button>


        </form>
    </div>
    
    </>);    

}

export default UserInfoPage