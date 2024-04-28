import { useState } from "react";

export default function Form() {
  let [formData, setFormdata] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  // let [fullName, setFullName] = useState("");
  //  let [username, setUsername] = useState("");

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handleUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  let handleInputChange = (event) => {
   // let fieldName = event.target.name;
   // let newValue = event.target.value;

    setFormdata((currData) => {
      //currData[fieldName] = newValue;
      //return { ...currData,[fieldName]: newValue };
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormdata({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={formData.fullName}
        //onChange={handleNameChange}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter username"
        type="text"
        value={formData.username}
        // onChange={handleUsername}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter password"
        type="password"
        value={formData.password}
        // onChange={handleUsername}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <br></br>
      <button>Submit</button>
    </form>
  );
}
