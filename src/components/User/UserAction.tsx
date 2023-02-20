import {User} from '../User/UserType'

export enum UserActionTypes {
    FIND_USER = "FIND_USER",
    CREATE_USER = "CREATE_USER"
}

export interface CreateUserAction {
  type: typeof UserActionTypes.CREATE_USER;
  payload: User;
}

export interface FindUserAction {
    type: typeof UserActionTypes.FIND_USER;
    payload: User;
}


export type UserAction = CreateUserAction | FindUserAction ;
