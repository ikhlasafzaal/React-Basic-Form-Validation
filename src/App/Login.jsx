import React from "react";

const App = () => {
  // onChange - input - event, properties
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [saveInfo, setSaveInfo] = React.useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // if(!email || !password)
    // if(email === "" || password === "")
    if (!email || !password) {
      alert("Fields are required");
    } else {
      if (saveInfo) {
        localStorage.setItem("info", JSON.stringify({ email, password }));
      }
      console.log({ email, password });
      setEmail("");
      setPassword("");
      setShowPassword(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* {JSON.stringify(showPassword)} */}
      <input
        placeholder="Enter your name"
        type="email"
        value={email}
        name="email"
        onChange={changeEmail}
        required
      />
      <input
        placeholder="Enter your name"
        type={`${showPassword ? "text" : "password"}`}
        value={password}
        name="password"
        onChange={changePassword}
        required
      />
      <br />
      <small>show password</small>
      <input
        type="checkbox"
        value={showPassword}
        onChange={() => setShowPassword(!showPassword)}
      />
      <br />
      <small>save info</small>
      <input
        type="checkbox"
        value={saveInfo}
        onChange={() => setSaveInfo(!saveInfo)}
      />
      <br />
      <br />
      <input type="submit" value={"login"} />
    </form>
  );
};

export default App;
