import React from "react";

const ContactList = ({ contacts, onRemoveContact }) => (
  
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ':' + contact.number}
          {
            <button
              type="button"
              name="delte"
              onClick={() => onRemoveContact(contact.id)}
              
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
    
);

export default ContactList;




