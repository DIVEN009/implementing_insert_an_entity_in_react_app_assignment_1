import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      
      {/* Button Container to Center Buttons */}
      <div className="button-container">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/add-book")}>Add Book</button>
      </div>

      {/* Book Cards Grid */}
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
