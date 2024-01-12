import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
