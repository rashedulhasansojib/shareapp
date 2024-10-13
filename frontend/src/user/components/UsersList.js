import React from "react";
import "./UsersList.css";
import "./UserItem";
import UserItem from "./UserItem";
const UsersList = ({ users }) => {
  if (!users.length) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
