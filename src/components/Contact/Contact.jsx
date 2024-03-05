import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div>
      <li className={css.contactItem}>
        <div className={css.containerContactItem}>
       
            <p>Name: {name}</p>
            <p>Number: {number}</p>
        
        <button className={css.contactDeleteBtn} type="button">Delete</button>
        </div>
      </li>

    </div>
  )
}

export default Contact
