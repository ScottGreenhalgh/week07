import { useParams, Link, Outlet } from "react-router-dom";

export default function UserPage() {
  const { username } = useParams();
  return (
    <div>
      <h2>User ID: {username}</h2>
      <nav>
        <Link to={`/users/${username}`}>User Profile</Link>
        <Link to={`/users/${username}/posts`}>User Posts</Link>
        <Link to={`/users/${username}/likes`}>User Likes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
