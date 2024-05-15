import ContactAdd from "./ContactAdd";
import ContactsCounter from "./ContactsCounter";
import ContactsList from "./ContactsList";
import "./Contacts.scss";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__header">
        <h1>Contacts List</h1>
        <ContactsCounter />
      </div>
      <ContactAdd />
      <ContactsList />
    </div>
  );
}

export default Contacts;
