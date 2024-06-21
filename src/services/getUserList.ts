export const getUserList = async (url: string) => {
  const response = await fetch(url);
  const usersList = await response.json();
  return usersList;
};
