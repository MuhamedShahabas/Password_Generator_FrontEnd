export const getLocalData = () =>
  localStorage.getItem("Password Generator User Email");

export const saveLocally = (token) =>
  localStorage.setItem("Password Generator User Email", token);

export const deleteLocalData = () =>
  localStorage.removeItem("Password Generator User Email");
