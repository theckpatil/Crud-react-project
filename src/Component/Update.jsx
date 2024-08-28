import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Update(props) {
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [email, setEmail] = useState("");

    const navigate=useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault()
        console.log("id...",id)
        axios.put(`https://64a6a315096b3f0fcc802f54.mockapi.io/crud1/${id}`,{name:name,email:email}).then(()=>{
            navigate("/read")
        })
    }
    return (
      <div>
        <form className="container" style={{ width: "40%" }}>
          <h1>Update Data</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control" value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      </div>
    );
}

export default Update;