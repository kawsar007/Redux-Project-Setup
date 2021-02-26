import uuid from 'react-uuid';
import { ADD_USER, EDIT_USER, REMOVE_USER } from '../Action/Types';
const initialState = {
    users: [
        { name: "Kawsar Ahamed", email: "imkawsar007@gmail.com", id: uuid() },
        { name: "Ashik Ahamed", email: "imashik007@gmail.com", id: uuid() },
        { name: "Toufik Ahamed", email: "toufik007@gmail.com", id: uuid() },
    ],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_USER:
            {
                return {
                    users: state.users.filter(user => user.id !== action.payload)
                }
            }
        case ADD_USER:
            {
                return {
                    users: [...state.users, action.payload]
                }
            }
        case EDIT_USER:
            {
                const updateUser = action.payload;
                const updateUsers = state.users.map(user => {
                    if (user.id === updateUser.id) {
                        return updateUser
                    }
                    return user;
                })
                return {
                    users: updateUsers
                }
            }
        default:
            {
                return state;
            }
    }
}

export default reducer;