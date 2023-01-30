import NavBar from "../src/components/NavBar/index";
import EmptyState from "./components/EmptyState";

function App() {
  return (
    <main className="flex">
      <NavBar />
      <EmptyState
        title={"There is nothing here"}
        description={
          "Create an invoice by clicking the New Invoice button and get started"
        }
        imagePath="/empty_state.svg"
        imageAlt={
          "Image of a woman with a megaphone, announcing that there is nothing inside the empty envelope from which it comes out."
        }
      />
    </main>
  );
}

export default App;
