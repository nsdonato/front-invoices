import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <p>Welcome to Invoice App</p>
        <Outlet />
      </>
    </div>
  );
}

export default App;
