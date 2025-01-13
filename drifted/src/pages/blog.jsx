import './App.css';
import Comments from "../components/Comments"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"

function App() {
  return (
    <div>
      <SearchBar />
      <Comments currentUserId="1" />
      <Footer />
    </div>
  );
}

export default App;