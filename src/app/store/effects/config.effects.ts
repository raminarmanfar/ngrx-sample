import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfigService } from '../../services/config.service';
import { IConfig } from '../../models/config.model';
import {
    GetConfig,
    EConfigActions,
    GetConfigSuccess
} from '../actions/config.action';

@Injectable()
export class ConfigEffects {
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions) { }

    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );
}