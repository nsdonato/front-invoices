import NavBar from "../src/components/NavBar/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>

      <NavBar />
      <h1 className="text-8xl font-bold underline decoration-sky-600 hover:decoration-blue-400">
        Invoice App
        </h1>
        <Outlet />
   </>
  );
}

export default App;
