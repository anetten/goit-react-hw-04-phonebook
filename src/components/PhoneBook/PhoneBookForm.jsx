import React, { Component } from 'react';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';

export class PhoneBookForm extends Component {
  handleFromSubmit = event => {
    event.preventDefault();
    // const form = e.currentTarget;

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const id = nanoid();
    const newContact = {
      id,
      name,
      number: Number(number),
    };

    this.props.handleAddForm(newContact);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className={css.form} action="" onSubmit={this.handleFromSubmit}>
          <label className={css.formLabel}>
            <span className={css.formLabelText}>Name</span>
            <input className={css.formInput} type="text" name="name" required />
          </label>
          <label className={css.formLabel}>
            <span className={css.formLabelText}>Number</span>
            <input
              className={css.formInput}
              type="tel"
              name="number"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
