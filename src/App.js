import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SearchJobs from "./Pages/SearchJobs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<SearchJobs/>}/>
      </Routes>
    </Router>
  );
}

export default App;






