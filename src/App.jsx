import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
