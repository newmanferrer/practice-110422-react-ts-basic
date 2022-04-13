import { useState, useRef } from 'react';
import { Subscriber } from '../../models';
import './Form.css';

interface FormState {
  form: Subscriber;
}

interface FormProps {
  handleNewSubscriber: (newSubscriber: Subscriber) => void;
}

const initialState: Subscriber = {
  id: '',
  nick: '',
  months: 1,
  avatar: '',
  description: ''
};

export const Form = ({ handleNewSubscriber }: FormProps) => {
  const [form, setForm] = useState<FormState['form']>(initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNewSubscriber(form);
    handleClear();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleClear = () => {
    setForm(initialState);
  };

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
