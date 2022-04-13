import { useReducer, useRef } from 'react';
import { Subscriber } from '../../models';
import './FormReducer.css';

interface FormState {
  form: Subscriber;
}

interface FormProps {
  handleNewSubscriber: (newSubscriber: Subscriber) => void;
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

export const FormReduder = ({ handleNewSubscriber }: FormProps) => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNewSubscriber(form);
    handleClear();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    dispatch({
      type: 'change_value',
      payload: {
        name,
        value
      }
    });
  };

  const handleClear = () => dispatch({ type: 'clear' });

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type='text' name='nick' value={form.nick} placeholder='nick' onChange={handleChange} />
      <input type='number' name='months' value={form.months} placeholder='months' onChange={handleChange} />
      <input type='text' name='avatar' value={form.avatar} placeholder='avatar' onChange={handleChange} />
      <textarea name='description' value={form.description} placeholder='description' onChange={handleChange} />

      <div className='buttonWrapper'>
        <button type='button' onClick={handleClear}>
          clear form
        </button>
      </div>

      <div className='buttonWrapper'>
        <button type='submit'>SEND</button>
      </div>
    </form>
  );
};
