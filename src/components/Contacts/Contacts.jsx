import React, { Component } from 'react';
import css from './Contacts.module.css';

export class Contacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div className={css.contacts}>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
