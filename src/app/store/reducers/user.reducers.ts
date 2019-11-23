import { UserActions, EUserActions } from '../actions/user.action';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
    state: IUserState = initialUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUserSuccess:
            return {
                ...state,
                selectedUser: action.payload
            };
        case EUserActions.GetUsersSuccess:
            return {
                ...state,
                users: action.payload
            };
        default: return state;
    }
};
