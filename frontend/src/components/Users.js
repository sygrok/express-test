import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setUsers(jsonRes.usersList);
      });
  }, []);

  const populateUsers = () => {
    return users.map((user, index) => <p key={index}>{user}</p>);
  };

  return <div>{populateUsers()}</div>;
};

export default Users;
