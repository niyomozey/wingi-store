import { UserAction, UserActionTypes } from "../components/User/UserAction";
import { User } from "../components/User/UserType";
import users from "../service/users";

export interface UserState {
    users: User[];
}

const initialState: UserState = {
  users: users
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case UserActionTypes.CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case UserActionTypes.FIND_USER:
      return {
        ...state,
        users: state.users.filter(user => user.email !== action.payload.email)
      };
    default:
      return state;
  }
};

export default userReducer;
