import './App.css';
import Comments from "../components/Comments"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Gallery from "../components/Gallery"

function App() {
  return (
    <div>
      <NavBar />
      <Gallery />
      <Comments currentUserId="1" />
      <Footer />
    </div>
  );
}

export default App;