import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { editUser } from "../redux/Action/ActionCreator";

function EditUser(props) {
    const [ selectedUser, setSelectedUser ] = React.useState({
        id: '',
        name: '',
        email: ''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUserId = props.match.params.id;

    const selectUser = useSelector(state => state.users)

    React.useEffect(() => {
        const userId = currentUserId;
        const selectedUser = selectUser.find(user =>user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, selectUser])

    const handleSubmit = () => {
      dispatch(editUser(selectedUser))
      history.push('/')
     };

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    } 

  return (
    <Form onSubmit={handleSubmit} className="add_form">
      <FormGroup>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={onChange}
          placeholder="Enter Name"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={selectedUser.email}
          onChange={onChange}
          placeholder="Enter Email"
        />
      </FormGroup>
      <Button type="submit" className="btn-block">
        Update User
      </Button>
    </Form>
  );
}

export default EditUser;
