import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

const ContactList = ({ contacts, onDelete }) => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.value);
    
    return (
        <ul className={css.contactlist}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    );
};

export default ContactList