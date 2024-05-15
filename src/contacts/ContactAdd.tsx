import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Contact, ContactsContext } from "../store/ContactsProvider";
import { validateContact } from "../utils/validations";
import "./ContactAdd.scss";

function ContactAdd() {
  const { setContacts } = useContext(ContactsContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const addContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleAddClick = () => {
    try {
      validateContact(name, email, phone);
      addContact({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
      setError("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="contact-add">
      <h4>Add a new contact</h4>
      <div className="contact-add__form">
        <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Button type="button" onClick={handleAddClick}>
          Add
        </Button>
      </div>
      <p>{error}</p>
    </div>
  );
}

export default ContactAdd;
