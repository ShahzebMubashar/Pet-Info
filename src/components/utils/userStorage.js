const users = {}; 

export const addUser = (email, password) => {
  users[email] = password;
};

export const getUser = (email) => {
  return users[email];
};