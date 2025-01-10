import './App.css';
import Comments from "../components/Comments"
import Footer from "../components/Footer"

function App() {
  return (
    <div>
      <Comments currentUserId="1" />
      <Footer />
    </div>
  );
}

export default App;