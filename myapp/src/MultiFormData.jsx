import { useState } from "react";

function MultiFormData(){

    const[formData, setFormData] = useState({
        name: "",
        email:"",
        age:""
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData((previousData) => ({
            ...previousData, [name]: value
        }));
        console.log(formData);
    }


    return(
        <>
        <div className="container mt-4">
            <h2>Register Details</h2>
            <input className="form-control mb-3" type="text" name="name"
            placeholder="Enter your name" value={formData.name}
            onChange={handleChange}/>

            <input className="form-control mb-3" type="text" name="email"
            placeholder="Enter your email" value={formData.email}
            onChange={handleChange}/>

            <input className="form-control mb-3" type="text" name="age"
            placeholder="Enter your age" value={formData.age}
            onChange={handleChange}/>
        </div>
        </>
    );
}

export default MultiFormData