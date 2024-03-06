import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Contact = ({ name, number }) => {
  return (
    <div>
      <li className={css.contactItem}>
        <div className={css.containerContactItem}>
          <div>
            <p><FaUser /><span className={css.contactInfo}>{name}</span></p>
            <p><FaPhoneAlt /><span className={css.contactInfo}>{number}</span></p>
          </div>
        <button className={css.contactDeleteBtn} type="button">Delete</button>
        </div>
      </li>

    </div>
  )
}

export default Contact
