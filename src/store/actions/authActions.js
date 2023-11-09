export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

import swal from "sweetalert";
import getUsers from "../services/users.service";

export const login = (username, password, navigate) => {
  return async (dispatch) => {
    try {
      const users = await getUsers();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: user.id,
            username: user.username,
            role: user.role,
          },
        });

        if (user.role === "admin") {
          navigate("/home");
          swal({
            title: "Welcome",
            text: "Hi sir, have a nice day",
            icon: "success",
          });
        } else if (user.role === "client") {
          navigate("/home");
        }
      } else {
        dispatch({ type: LOGIN_FAILURE });
        swal({
          title: "Error",
          text: "Invalid username or password",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
