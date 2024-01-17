import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    email: "vishnu",
    name: "",
    password: "",
  });
  console.log(data.email, "data enamjkjjjjj");
  const handelChange = (e) => {
    e.preventDefault();

    // const { name, value } = e.target;

    setData((rest) => ({
      ...rest,
      [e.target.name]: e.target.value,
    }));
  };

  const sumitData = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={sumitData}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={handelChange}
            type="email"
            name="email"
            value={data.email}
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={handelChange}
            type="text"
            name="name"
            value={data.name}
            className="form-control"
            id="name"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handelChange}
            value={data.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
