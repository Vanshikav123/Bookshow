import { BrowserRouter as Router,  Routes ,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Movie from "./pages/movieDetail/Movie";
import Movielist from "./components/movielist/Movielist";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="shows/:id" element={<Movie/>}></Route>
     
        </Routes>
      </div>
    </Router>
  );
};

export default App;
