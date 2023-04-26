import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewBook() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://63ec8d3d32a08117239d13f9.mockapi.io/api/library/${id}`);
      console.log(response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      alert('Error fetching user data');
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <h1>Book Information</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Book Name:</td>
                <td>{user.BookName}</td>
              </tr>
              <tr>
                <td>Author:</td>
                <td>{user.Author}</td>
              </tr>
              <tr>
                <td>Present Owner:</td>
                <td>{user.PresentOwner}</td>
              </tr>
              <tr>
                <td>Assigned Date:</td>
                <td>{user.AssignedDate}</td>
              </tr>
              <tr>
                <td>Return Date:</td>
                <td>{user.ReturnDate}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ViewBook;