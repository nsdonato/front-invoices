import { Outlet } from "react-router-dom";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <>
      <p>Welcome to Invoice App</p>
      <Dropdown />
      <Outlet />
    </>
  );
}

export default App;
