import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import Weather from "./Pages/Weather";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/calc" element={<Calculator />}></Route>
          <Route exact path="/weather" element={<Weather />}></Route>
          {/* <Route exact path="/skills" element={<SkillsPage />}></Route>
            <Route exact path="/blogs" element={<Blog />}></Route>
            <Route exact path="/blog/:id" element={<BlogPage />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/project/:id" element={<ProjectPage />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/test" element={<Test />}></Route> */}
            {/* <Route exact path="*" element={<PageNotFound />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
