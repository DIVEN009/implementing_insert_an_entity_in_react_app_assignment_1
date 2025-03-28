import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Add styling for AddBook form

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book added successfully! (Functionality not implemented)");
    navigate("/"); // Navigate back to Home after submission
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <textarea placeholder="Description" required />
        <input type="url" placeholder="Cover Image URL" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
