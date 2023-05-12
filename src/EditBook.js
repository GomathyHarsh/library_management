import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
            BookName:"",
            Author:"",
            PresentOwner:"",
            AssignedDate:"",
            ReturnDate:"",
            Edition:""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/library/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  const { BookName,Author,PresentOwner,AssignedDate,ReturnDate,Edition } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/library/${id}`, user);
      navigate('/books');
      alert("Successfully Edited")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Book Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Book name"
              name="BookName"
              value={BookName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Author</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Author Name"
              name="Author"
              value={Author}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Present Owner Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter owner name"
              name="PresentOwner"
              value={PresentOwner}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Assigned Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="AssignedDate"
              value={AssignedDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Return Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="ReturnDate"
              value={ReturnDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Book Edition</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter edition"
              name="Edition"
              value={Edition}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Book</button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;