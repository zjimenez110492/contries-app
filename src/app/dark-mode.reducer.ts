import {Action} from '@ngrx/store';
export function darkMode(state: boolean=false, action: Action)
{
  switch (action.type) {
    case 'CHANGE':{
      return !state;
    }
    default:
      return state;
  }
}
