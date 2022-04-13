import { useState, ChangeEvent } from 'react';

export const useForm = <Type extends Object>(initialState: Type) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const clearForm = () => setForm(initialState);

  return {
    form,
    clearForm,
    handleChange
  };
};
