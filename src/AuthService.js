export const login = () => {
  console.log("Loguje");
  window.localStorage.setItem("auth", true);
  console.log("Ustawiło: ", window.localStorage.getItem("auth"));
};

export const isAuthenticated = () => {
  console.log("Came here is auth");
  if (window.localStorage.getItem("auth") == null) {
    console.log("Item", window.localStorage.getItem("auth"));
    return false;
  } else {
    console.log("Came here is auth");
    return true;
  }
};

export const logout = () => {
  console.log("Came here logout");
  if (window.localStorage.getItem("auth") != null) {
    window.localStorage.removeItem("auth");
  }
};
