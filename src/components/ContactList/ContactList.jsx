import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={css.contactsList}>
        { contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number}/>
        ))} 
      </ul>

    </div>
  )
}

export default ContactList;
