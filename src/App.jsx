import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './redux/filtersSlice';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className='phonebook'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList />
    </div>
  )
}

export default App