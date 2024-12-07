import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
