import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Intro from "./pages/Intro.jsx";
import Courses from "./pages/Courses.jsx";
import Instructors from "./pages/Instructors.jsx";
import WhyUs from "./pages/WhyUs.jsx";
import Community from "./pages/Community.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
