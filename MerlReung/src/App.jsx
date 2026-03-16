import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./page/user/Home"
import Genre from "./page/user/Genres"
import MovieDetails from "./page/user/MovieDetail"
import Favorite from "./page/user/Favorites"
import Profile from "./page/user/Profile"

import Dashboard from "./page/admin/Dashboard"
import ManageMovie from "./page/admin/ManageMovie"


function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin/dashboard" element={<Dashboard />}

      </Routes>
    </Router>
  )
}

export default App
