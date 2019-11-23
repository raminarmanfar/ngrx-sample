import { IUserHttp } from './../../models/user-http.model';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { IAppState } from '../state/app.state';
import { 
    EUserActions,
    GetUser,
    GetUserSuccess,
    GetUsers,
    GetUsersSuccess
} from '../actions/user.action';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );
}