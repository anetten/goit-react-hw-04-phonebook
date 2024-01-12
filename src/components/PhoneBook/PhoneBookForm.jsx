import React, { useState } from 'react';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';

export const PhoneBookForm = ({ handleAddForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFromSubmit = event => {
    event.preventDefault();
    // const form = e.currentTarget;

    const id = nanoid();
    const newContact = {
      id,
      name,
      number: Number(number),
    };

    handleAddForm(newContact);
    // event.currentTarget.reset();
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} action="" onSubmit={handleFromSubmit}>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input className={css.formInput} type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
