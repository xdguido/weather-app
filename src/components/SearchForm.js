import { useState } from "react";

import { Form, Button } from "react-bootstrap";

function SearchForm({ submitSearch, isLoading }) {
  const [location, setLocation] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    submitSearch(location);
  }

  return (
    // <Form onSubmit={onSubmit}>
    //   <div className="form-control">
    //     <label>Location</label>
    //     <input
    //       type="text"
    //       placeholder="Set Location"
    //       required
    //       value={location}
    //       onChange={(e) => setLocation(e.target.value)}
    //     />
    //     <button type="submit">Search</button>
    //   </div>
    // </Form>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="citySearch">
        <Form.Control
          type="text"
          placeholder="Search city"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Button variant="primary" disabled={isLoading} type="submit">
        {isLoading ? "Loading…" : "Search"}
      </Button>
    </Form>
  );
}

export default SearchForm;
