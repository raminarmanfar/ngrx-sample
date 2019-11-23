import { RouterReducerState } from '@ngrx/router-store';
import { IConfigState, initialCofigState } from './config.state';
import { IUserState, initialUserState } from './user.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialCofigState
};
