import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add-book">Add Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
