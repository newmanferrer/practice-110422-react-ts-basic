import { useCallback, useReducer } from 'react';
import { Subscriber } from '../../models';

interface FormState {
  form: Subscriber;
}

type FormReducerAction =
  | {
      type: 'change_value';
      payload: {
        name: string;
        value: string;
      };
    }
  | {
      type: 'clear';
    };

const initialState: Subscriber = {
  id: '',
  nick: '',
  months: 1,
  avatar: '',
  description: ''
};

const formReducer = (state: FormState['form'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value': {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value
      };
    }
    case 'clear':
      return initialState;
    default:
      return state;
  }
};

export const useFormReducer = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const clearForm = useCallback(() => dispatch({ type: 'clear' }), []);
  const changeForm = useCallback(
    (name: string, value: string) => dispatch({ type: 'change_value', payload: { name, value } }),
    []
  );

  return {
    form,
    clearForm,
    changeForm
  };
};
