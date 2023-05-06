import { BrowserRouter as Router,  Routes ,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Movie from "./pages/movieDetail/Movie";
import Movielist from "./components/movielist/Movielist";
import Home from "./pages/home/Home";
import Book from "./pages/booking/Book";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="shows/:id" element={<Movie/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
