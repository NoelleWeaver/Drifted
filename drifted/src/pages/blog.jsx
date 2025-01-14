import './App.css';
import Comments from "../components/Comments"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import Gallery from "../components/Gallery"

function App() {
  return (
    <div>
      <SearchBar />
      <Gallery />
      <Comments currentUserId="1" />
      <Footer />
    </div>
  );
}

export default App;