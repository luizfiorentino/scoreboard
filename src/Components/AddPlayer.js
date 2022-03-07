import { useState } from "react";

export default function AddPlayer(props) {
  const [name, set_name] = useState("");
  console.log("What's set name?", set_name);

  return (
    <div>
      <p>
        Add a new player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            set_name(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.addPlayer(name);
            set_name("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
