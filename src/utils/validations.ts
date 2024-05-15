const isEmailValid = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateContact = (name: string, email?: string, phone?: string) => {
  if (!name) {
    throw new Error("Name is required");
  }
  if (!email && !phone) {
    throw new Error("Either an Email or a phone number is required");
  }
  if (email && !isEmailValid(email)) {
    throw new Error("Invalid email");
  }
};
