import css from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={css.searchContainer}>
     <label className={css.labelSearch}>
      <span className={css.labelTextSearch}>Find contacts by name</span>
      <input className={css.inputSearch} type="text" name="text"/>
      </label>
    </div>
  )
}

export default SearchBox
