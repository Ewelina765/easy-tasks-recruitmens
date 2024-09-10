import React, { useState } from "react";

const FormExample = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const saveForm = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      return setMessage("All fields are required");
    }
    setMessage("Well done");
    // alert("Well done!");
  };

  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Simple form</h1>
      <form onSubmit={saveForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={firstName}
            placeholder="name"
            id="name"
            onChange={handleChangeName}
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            value={lastName}
            placeholder="lastName"
            id="lastName"
            onChange={handleChangeLastName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            id="email"
            onChange={handleChangeEmail}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default FormExample;
