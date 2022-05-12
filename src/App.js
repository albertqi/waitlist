import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WaitlistForm from "./pages/WaitlistForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/join-waitlist" element={<WaitlistForm />} />
      </Routes>
    </Router>
  );
}

export default App;
