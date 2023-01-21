import { Outlet } from "react-router-dom";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <>
        <p>Welcome to Invoice App</p>
        <Outlet />
      </>

      <div className="w-9/12 min-w-0 m-auto mt-8">
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 justify-items-center">
          <div>
            <Button
              buttonLabel="New Invoice"
              onClick={() => {
                console.log("New Invoice");
              }}
            >
              <svg
                className="text-xl"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
                  fill="#7C5DFA"
                />
              </svg>
            </Button>
          </div>
          <div>
            <Button
              buttonLabel="Mark as Paid"
              onClick={() => {
                console.log("Mark as Paid");
              }}
            />
          </div>
          <div>
            <Button
              variant="secondary"
              buttonLabel="Edit"
              onClick={() => {
                console.log("Edit");
              }}
            />
          </div>
          <div>
            <Button
              variant="tertiary"
              buttonLabel="Save as Draft"
              onClick={() => {
                console.log("Save as Draft");
              }}
            />
          </div>
          <div>
            <Button
              variant="delete"
              buttonLabel="Delete"
              onClick={() => {
                console.log("Delete");
              }}
            />
          </div>
          <div className="w-full">
            <Button
              variant="secondary"
              buttonLabel="+ Add New Item"
              widthFull
              onClick={() => {
                console.log("Add New Item");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
