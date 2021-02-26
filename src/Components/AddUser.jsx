import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import uuid from 'react-uuid'
import { addUser } from '../redux/Action/ActionCreator';


function AddUser() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const dispatch = useDispatch();
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuid(),
            name,
            email
        }
        
        dispatch(addUser(newUser));

        history.push('/')
    }

    return (
        <Form onSubmit={handleSubmit} className="add_form">
        <FormGroup>
          <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </FormGroup>
        <FormGroup>
        <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        </FormGroup>
        <Button type="submit" className="btn-block">Add User</Button>
        </Form>
    )
}

export default AddUser
