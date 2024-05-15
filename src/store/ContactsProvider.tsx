import { createContext, useState } from "react";

interface ContactsContextType {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}
export const ContactsContext = createContext<ContactsContextType>({} as ContactsContextType);

export type Contact =
  | { name: string; email: string; phone?: string }
  | { name: string; email?: string; phone: string };

function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
