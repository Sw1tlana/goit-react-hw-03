import css from './ContactForm.module.css';

const ContactForm = () => {
const handleFormSubmit = (evt) => {
evt.preventDefault();
console.log("Submit")
}
  return (
    <div>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Name</span>
          <input className={css.inputContactForm} type="text" name="name" required/>
        </label>
        <label className={css.labelForm}>
          <span className={css.labelTextForm}>Number</span>
          <input className={css.inputContactForm} type="number" name="number" required/>
        </label>
        <button className={css.submitFormBtn} type="submit">Add contact</button>
      </form>

    </div>
  )
}

export default ContactForm
