import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { removeUser } from "../redux/Action/ActionCreator";

function UserList() {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <Table>
      {data.length > 0 ? <>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((user, i) => (
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2">Edit</Link>
              <Button onClick={() => dispatch(removeUser(user.id))} color="danger">Remove</Button>
            </td>
          </tr>
        ))}
      </tbody>
      </> : <>
         <h2>User Not Aviliable. Please <a href="/add">Create User</a> </h2>
         </>
      }
     
    </Table>
  );
}

export default UserList;
