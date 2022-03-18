import {createStore} from 'redux';

import { reduser } from '../reducers/reduser';

export const store = createStore(reduser);
