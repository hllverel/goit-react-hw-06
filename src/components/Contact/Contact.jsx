import css from './Contact.module.css'
import { useSelector } from "react-redux";

const Contact = ({ contact, onDelete }) => {
    const { name, number } = contact;
    
    return (
        <div className={css.contactcard}>
            <div className={css.contactinfo}>
                <div>
                    <svg><use href="/src/assets/symbol-defs.svg#icon-user"></use></svg>
                    <p>{name}</p>
                </div>
                <div>
                    <svg><use href="/src/assets/symbol-defs.svg#icon-phone"></use></svg>
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.deletebutton} onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    )
}

export default Contact