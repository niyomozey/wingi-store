import { UserActionTypes as action } from "../User/UserAction";

export interface User {
        email: string,
        name: string,
        phonenumber: string,
        password : string
}
export interface addUser {
    type: typeof action.CREATE_USER;
    payload: User;
}

export interface findUser {
    type: typeof action.FIND_USER;
    payload: string;
}

export const createUser = (user: User): UserActionTypes => {
    return {
        type: action.CREATE_USER,
        payload: user,
    };
};
export const findUser = (email: string): UserActionTypes => {
    return {
        type: action.FIND_USER,
        payload: email,
    };
};

export type UserActionTypes = addUser | findUser;
