import { useRef } from 'react';
import { useFormReducer } from '../../hooks';
import { Subscriber } from '../../models';
import './FormUseFormReducer.css';

interface FormProps {
  handleNewSubscriber: (newSubscriber: Subscriber) => void;
}

export const FormUseFormReduder = ({ handleNewSubscriber }: FormProps) => {
  const { form, clearForm, changeForm } = useFormReducer();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNewSubscriber(form);
    clearForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    changeForm(name, value);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type='text' name='nick' value={form.nick} placeholder='nick' onChange={handleChange} />
      <input type='number' name='months' value={form.months} placeholder='months' onChange={handleChange} />
      <input type='text' name='avatar' value={form.avatar} placeholder='avatar' onChange={handleChange} />
      <textarea name='description' value={form.description} placeholder='description' onChange={handleChange} />

      <div className='buttonWrapper'>
        <button type='button' onClick={clearForm}>
          clear form
        </button>
      </div>

      <div className='buttonWrapper'>
        <button type='submit'>SEND</button>
      </div>
    </form>
  );
};
