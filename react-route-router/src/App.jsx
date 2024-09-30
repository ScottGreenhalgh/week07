import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Books from "./pages/Books";
import Animals from "./pages/Animals";
import UserPage from "./pages/UserPage";
import Materials from "./pages/Materials";
import IndividualMaterial from "./pages/IndividualMaterials";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  return (
    <div>
      {/* can put header here to render on every page */}
      <NavBar />
      <Routes>
        <Route path="/" element={<p>Root route</p>} />
        <Route path="/books" element={<Books />} />
        <Route path="/animals" element={<Animals />} />

        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:id" element={<IndividualMaterial />} />

        <Route path="/user/:username" element={<UserPage />}>
          <Route path="posts" element={<p>User posts page</p>} />
          <Route path="likes" element={<p>User likes page</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
