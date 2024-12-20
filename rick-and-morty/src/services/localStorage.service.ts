const saveUser = (userName: string): void => {
  console.log(userName);
  localStorage.setItem("User", userName);
};

const getUser = (): string | null => {
  return localStorage.getItem("User");
};

const clearUser = (): void => {
  localStorage.clear();
};

export const storage = { saveUser, getUser, clearUser };
