import { IConfig } from './../../models/config.model';

export interface IConfigState {
    config: IConfig;
}

export const initialCofigState = {
    config: null
};
