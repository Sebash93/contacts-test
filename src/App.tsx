import Contacts from "./contacts/Contacts";
import ContactsProvider from "./store/ContactsProvider";
import "./App.scss";

export function App() {
  return (
    <ContactsProvider>
      <Contacts />
    </ContactsProvider>
  );
}
