import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getContact } from "../features/contactSLice";
import "./View.css";

const View = () => { 
  const { id } = useParams();
   const dispatch=useDispatch();
  const {contact}=useSelector( state=> state.contact  );

  useEffect( ()=>{
    dispatch( getContact(id) );
    
 },[id]  )


  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
           <strong>Name: </strong>
          <span>{contact.name}</span>
         <br />
          <br />
          <strong>Email: </strong>
          <span>{contact.email}</span>
          <br />
          <br />
          <strong>Status: </strong>
          <span>{contact.status}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{contact.phone}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;