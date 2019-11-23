import { ConfigActions, EConfigActions } from '../actions/config.action';
import { IConfigState, initialCofigState } from '../state/config.state';

export const configReducers = (
    state: IConfigState = initialCofigState,
    action: ConfigActions
): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess:
            return {
                ...state,
                config: action.payload
            };
        default: return state;
    }
};
