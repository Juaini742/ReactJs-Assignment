import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../store/actions/authActions";
import { Button, InputBorder } from "../components/atom/index";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password, navigate));
  };

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundImage: "url(img/Rectangle3.jpg)" }}
    >
      <div className="h-full flex justify-center items-center">
        <form
          action="#"
          method="POST"
          onSubmit={handleLogin}
          className="w-[80%] md:w-[38%] h-96 flex flex-col rounded-xl shadow-2xl justify-center p-4 text-white backdrop-blur-sm bg-black/30"
        >
          <h2 className="text-2xl mb-5">Welcome to our Shop</h2>
          <div className="my-3">
            <InputBorder
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              text="Username"
            />
          </div>
          <div className="my-3">
            <InputBorder
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              text="Password"
            />
          </div>
          <Button variant="primary" type="submit" className="py-2">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
