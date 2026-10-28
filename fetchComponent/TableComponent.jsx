import { useEffect, useState } from "react";

function TableComponent(){
    const[users, setUsers] = useState([]);
    const[popupVisible, setPopupVisible] = useState(false);
    const[selectedUser, setSelectedUser] = useState();
    const[deleteUser, setDeleteUser] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPopupVisible(false);
        console.log(selectedUser)
        const response = await fetch("https://dummyjson.com/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(selectedUser)
        })
    }



    useEffect(() => {
        let userFetched = fetch("https://dummyjson.com/users").then(user => user.json())
        .then((e1) => e1.users)
        .then(data => setUsers(data))
    }, [])

    const changeVisibility = (user) => {
        console.log(user);
        setSelectedUser(user)
        setPopupVisible(true)    
    }

    const deleteuserGroup = () => {
        setDeleteUser(false);
    }


    return(
    <div>
        <table className= "table table-dark table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-danger" onClick={() => setDeleteUser(true)}>Delete</button>
                                <button type="button" class="btn btn-warning" 
                                onClick={() => changeVisibility(user)}>Edit</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>

        {popupVisible &&(
            <div className="modal show fade d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                 onClick={() => setPopupVisible(false)}></button>
                            </div>
                         
                            <div className="modal-body">
                                <input className="form-control mb-2" type="text"
                                placeholder="firstName"
                                value={selectedUser.firstName}
                                onChange={(e) => 
                                    setSelectedUser({...selectedUser, firstName: e.target.value})}/>

                                <input className="form-control mb-2" type="text"
                                placeholder="last Name"
                                value={selectedUser.lastName}
                                onChange={(e) => 
                                    setSelectedUser({...selectedUser, lastName: e.target.value})}/>
                                <input className="form-control mb-2" type="text"
                                placeholder="last Name"
                                value={selectedUser.lastName}
                                onChange={(e) => 
                                    setSelectedUser({...selectedUser, lastName: e.target.value})}/>
                                    <input className="form-control mb-2" type="text"
                                placeholder="email ID"
                                value={selectedUser.email}
                                onChange={(e) => 
                                    setSelectedUser({...selectedUser, email: e.target.value})}/>

                                <input className="form-control mb-2" type="text"
                                placeholder="phone"
                                value={selectedUser.phone}
                                onChange={(e) => 
                                    setSelectedUser({...selectedUser, phone: e.target.value})}/>
                            </div>
                           <div className="modal-footer">
                            <button type="submit" className="btn btn-secondary" onClick={() => setPopupVisible(false)}>Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>  
                           </div>
                       
                                
                        </form>
                    </div>
                </div>
            </div>
        )}

        {deleteUser && (
            <div class="modal show fade d-block" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDeleteUser(false)}></button>
      </div>
      <div class="modal-body">
        <p>Are sure? want to delete user ?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDeleteUser(false)}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        )}

        
        </div>

    );
}

export default TableComponent;


           