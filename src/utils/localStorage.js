export const getLocalData = () => {
  const localData = localStorage.getItem("Saved Passwords");
  return localData ? JSON.parse(localData) : [];
};

export const saveLocally = (data) => {
  let existingPasswords = getLocalData();
  return localStorage.setItem(
    "Saved Passwords",
    JSON.stringify([...existingPasswords, data])
  );
};
