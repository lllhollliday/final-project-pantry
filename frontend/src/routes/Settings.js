import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../context/globalContext";
import toast, {Toaster} from "react-hot-toast";

export default function EditSettings() {
  const{user, setUser} = useContext(globalContext);
  const navigate = useNavigate();
  console.log(user)

  const SettingsUpdateRequest = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch(`http://localhost:8000/users/${user._id}`, {
      method: "PATCH",
      headers: {token: localStorage.getItem("token")},
      body: data,
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if(result.success){
        toast.success("User Settings Updated!");
        setUser(result.user);
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        toast.error(result.message)
      }
    })
  } 


  return (
    
    <div>
      <Toaster />
      <h1>Settings</h1>
      
      <div>

        <h2>Edit Profile</h2>

        <form onSubmit = {SettingsUpdateRequest} >
          <label>
            First Name* :{" "}
            <input type="text" name="firstName" defaultValue={user.firstName} />
            {" "}  
          </label>
          <br/>
          <label>
            Last Name* :{" "}
            <input type="text" name="lastName" defaultValue={user.lastName}/>
          </label>
         <br/>
         <label>
          City, State, County (optional)
          <input type="text" name="location" defaultValue={user.location}/>
         </label>
        
        <h2>Edit Settings</h2>
          <label>
            Birthday :{" "}
            <input type="date" name="birthday" placeholder={"dd / mm / yyyy"} />
          </label>
          <br />
          
          <button >Save Changes</button>
          <button>Cancel</button>
        </form>
      </div>


    </div>  
  )
}


