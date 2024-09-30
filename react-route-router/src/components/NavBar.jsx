import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { materials } from "../stores/materialsList";

export default function NavBar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim()) {
      navigate(`/user/${username.trim()}`);
      setUsername(""); //optional reset
    }
  };

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/books"}>Books</Link>
      <Link to={"/animals"}>Animals</Link>

      {materials.map((material) => {
        return (
          <div key={material.id}>
            <Link to={`/materials/${material.id}`}>{material.name}</Link>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter Username"
          required
        />
        <button type="submit">Go</button>
      </form>
    </nav>
  );
}
