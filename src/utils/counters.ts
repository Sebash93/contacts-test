export const getCount = (contacts: any[]) => {
  return contacts.reduce(
    (acc, contact) => {
      if (contact.phone) {
        acc.phone += 1;
      }
      if (contact.email) {
        acc.email += 1;
      }
      return acc;
    },
    { phone: 0, email: 0 }
  );
};
