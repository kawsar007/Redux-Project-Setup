import { ADD_USER, EDIT_USER, REMOVE_USER } from "./Types";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

export const removeUser = (id) => {
    return {
        type: REMOVE_USER,
        payload: id
    }
}

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}