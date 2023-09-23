import React, { useEffect } from "react";
import "./App.css"; 
const initValues = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

const App = () => {
  const gettingDataFromLS = () => {
    let dataFromLS = localStorage.getItem("data");
    console.log(dataFromLS, "from getting func");
    if (dataFromLS) return JSON.parse(dataFromLS);
    else {
      return [];
    }
  };

  const [formData, setFormData] = React.useState(initValues);
  const [showPassword, setShowPassword] = React.useState(false);
  const [saveInfo, setSaveInfo] = React.useState(false);
  const [error, setError] = React.useState("");
  const [correct, setCorrect] = React.useState("");
  const [savedData, setSavedData] = React.useState(gettingDataFromLS);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.password2) {
      setError("All inputs must be filled! ");
    } else if (formData.password !== formData.password2) {
      setError("Password must be the same! ");
    } else {
      setCorrect("Thank You For Your Response!");

      const newData = { ...formData };

      if (saveInfo) {

        setSavedData([...savedData, newData]);
        localStorage.setItem("data", JSON.stringify([...savedData, newData]));
      }

      console.log({ ...formData });
      setFormData(initValues);
      setShowPassword("");
      setError("");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(savedData));
  }, [savedData]);

  return (
    <div className="container">
    <h1 className="heading">Login Form</h1>
    <form onSubmit={submitHandler}>
      <div className="error">{error}</div>

      <label>Name</label>
      <input
      className="input-field"
        placeholder="Enter your name"
        type="text"
        value={formData.name}
        name="name"
        onChange={changeHandler}
      />
      <br />

      <label>Email</label>
      <input
      className="input-field"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        name="email"
        onChange={changeHandler}
      />
      <br />

      <label>Password</label>
      <input
      className="input-field"
        placeholder="Enter password"
        type={`${showPassword ? "text" : "password"}`}
        value={formData.password}
        name="password"
        onChange={changeHandler}
      />
      <br />

      <label>Confirm Password</label>
      <input
      className="input-field"
        placeholder="Re-Type password"
        type={`${showPassword ? "text" : "password"}`}
        value={formData.password2}
        name="password2"
        onChange={changeHandler}
      />
      <br />

      <small>Show password</small>
      <input
      className="checkbox"
        type="checkbox"
        value={showPassword}
        onChange={() => setShowPassword(!showPassword)}
      />
      <br />

      <small>Save info</small>
      <input
      className="checkbox"
        type="checkbox"
        value={saveInfo}
        onChange={() => setSaveInfo(!saveInfo)}
      />
      <br /><br></br>
     <input className="submit-button" type="submit" value="Submit" />
      <br></br>

  <div className="success">{correct}</div>
      
    </form>
    </div>
  );
};

export default App;
