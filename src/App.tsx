import { Outlet } from "react-router-dom";

import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <>
        <p>Welcome to Invoice App</p>
        <Outlet />
      </>
      <Button />
    </div>
  );
}

export default App;
