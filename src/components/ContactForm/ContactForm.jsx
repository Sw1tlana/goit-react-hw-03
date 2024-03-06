import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContactsBox }) => {
const [values, setValues] = useState({
  name: "",
  number: ""
});

const handleChange = (evt) => {

  const key = evt.target.name;
  const value = evt.target.value;

  setValues({...values, [key]: value});

}

const handleFormSubmit = (evt) => {
evt.preventDefault();

const formData = {
  name: values.name,
  number: values.number,
}

onAddContactsBox(formData);

setValues({
  name: "",
  number: ""
})
}

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Name</span>
          <input className={css.inputContactForm}
          type="text" 
          name="name"
          value={values.name} 
          onChange={handleChange}
          required/>
        </label>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Number</span>
          <input className={css.inputContactForm} 
          type="number" 
          name="number"
          value={values.number} 
          onChange={handleChange}
          required/>
        </label>
        <button className={css.submitFormBtn} type="submit">Add contact</button>
      </form>

    </div>
  )
}

export default ContactForm
