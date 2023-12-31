import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, setFilter } from "../features/contactSLice";
import { toast } from "react-toastify";


const Home = () => {


  const { contacts, Filter } = useSelector(state => state.contact);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {

      dispatch(deleteContact(id))

      toast.success("Contact deleted successfully");


    }
  };



  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>

          {contacts.filter((it) => {
            if (Filter === "All") return it;
            else {
              return Filter === it.status;
            }
          }).map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDeleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <label>Status:</label>
      <button className="btn btn-active" onClick={() => dispatch(setFilter("Active"))}>Active</button>
      <button className="btn btn-inactive" onClick={() => dispatch(setFilter("Inactive"))}>Inactive</button>
      <button className="btn btn-reset" onClick={() => dispatch(setFilter("All"))}>Reset</button>


    </div>
  );
};

export default Home;
