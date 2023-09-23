import React from "react";

const initValues = {
  email: "",
  password: "",
  password2: "",
  color: "",
};

const App = () => {
  // onChange - input - event, propertiesd
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [password2, setPassword2] = React.useState("");

  const [formData, setformData] = React.useState(initValues);

  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const changePassword2 = (e) => {
  //   setPassword2(e.target.value);
  // };

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert("Your password is not matching");
    }
    console.log({ email: formData.email, password: formData.password });
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        gap: "10px",
        backgroundColor: formData.color,
      }}
    >
      {/* {JSON.stringify(formData.color)} */}

      <label>Name</label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.name}
        name="name"
        onChange={changeHandler}
        required
      />

      <label>Email</label>
      <input
        placeholder="Enter your name"
        type="email"
        value={formData.email}
        name="email"
        onChange={changeHandler}
        required
      />

      <label>Password</label>
      <input
        placeholder="Enter your name"
        type={"password"}
        value={formData.password}
        name="password"
        onChange={changeHandler}
        required
      />
      <label>Confirm Password</label>
      <input
        placeholder="Enter your name"
        type={"password"}
        value={formData.password2}
        name="password2"
        onChange={changeHandler}
        required
      />
      <input type="submit" value={"login"} />
      <br />
      <input
        placeholder="Enter your name"
        type="color"
        name="color"
        value={formData.color}
        onChange={changeHandler}
      />
      <br />
      <input
        placeholder="Enter your name"
        type="time"
        // name="color"
        // value={formData.color}
        // onChange={changeHandler}
      />
    </form>
  );
};

export default App;
