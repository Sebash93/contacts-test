import { useContext, useMemo } from "react";
import Counter from "../components/Counter";
import { ContactsContext } from "../store/ContactsProvider";
import { getCount } from "../utils/counters";
import "./ContactsCounter.scss";

function ContactsCounter() {
  const { contacts } = useContext(ContactsContext);
  const counters = useMemo(() => getCount(contacts), [contacts]);
  return (
    <div className="contacts-counter">
      <Counter title="Contacts with Phone Number" number={counters.phone} />
      <Counter title="Contacts with Email" number={counters.email} />
    </div>
  );
}

export default ContactsCounter;
