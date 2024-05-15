import { Contact } from "../store/ContactsProvider";
import "./ContactItem.scss";
function ContactItem({ contact }: { contact: Contact }) {
  return (
    <div className="contact-item">
      <h3 className="contact-item__name">{contact.name}</h3>
      <div className="contact-item__details">
        <span>Email: {contact.email}</span>
        <span>Phone: {contact.phone}</span>
      </div>
    </div>
  );
}

export default ContactItem;
