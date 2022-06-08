import { useState } from "react";

function Form({ submitSearch }) {
  const [location, setLocation] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    submitSearch(location);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Set Location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
