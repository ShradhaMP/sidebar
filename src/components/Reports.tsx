import React, { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";
import UsersData from "./UsersData";
import '../index.css'

function Reports() {
  const [users, setUSers] = useState([]);

  const fetchUsers = async (url: string) => {
    const dataset = await fetch(url);
    const data = await dataset.json();
    if (data.length > 0) {
      setUSers(data);
    }
    console.log(data);
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <UsersData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default Reports;
