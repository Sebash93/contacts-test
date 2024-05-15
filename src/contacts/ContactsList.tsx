import { useContext } from "react";
import { ContactsContext } from "../store/ContactsProvider";
import ContactItem from "./ContactItem";
import "./ContactsList.scss";

function ContactsList() {
  const { contacts } = useContext(ContactsContext);
  return (
    <div className="contacts-list">
      {contacts?.length ? (
        contacts.map((contact, index) => <ContactItem key={index} contact={contact} />)
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
}
export default ContactsList;
