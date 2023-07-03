export const getLocalData = () => {
  const localData = localStorage.getItem("Saved Passwords");
  return localData ? JSON.parse(localData) : [];
};

export const saveLocally = (data) => {
  let existingPasswords = getLocalData();
  existingPasswords = existingPasswords.filter(
    ({ name }) => name !== data.name
  );
  return localStorage.setItem(
    "Saved Passwords",
    JSON.stringify([...existingPasswords, data])
  );
};

export const deletePassword = (nameToDelete) => {
  let existingPasswords = getLocalData();
  existingPasswords = existingPasswords.filter(
    ({ name }) => nameToDelete !== name
  );
  return localStorage.setItem(
    "Saved Passwords",
    JSON.stringify(existingPasswords)
  );
};
