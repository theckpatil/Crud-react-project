import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
function Create(props) {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const history=useNavigate()
    const handleData=(e)=>{
        e.preventDefault()
        console.log("Data Submitted")
        axios.post("https://64a6a315096b3f0fcc802f54.mockapi.io/crud1",{name:name,email:email}).then(()=>{
          history('/read')
        })
    }
    return (
      <div>
        <div className='d-flex justify-content-between mt-4 ms-3 me-5'>
          <h2>Create Data</h2>
          <Link to='/read'>
          <button className='btn btn-secondary'>Show Data</button>
          </Link>
        </div>
        <form className="container" style={{ width: "40%" }}>
          <h1>Crud Operation</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleData}>
            Submit
          </button>
        </form>
      </div>
    );
}

export default Create;