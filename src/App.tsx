import NavBar from "../src/components/NavBar/index";
import EmptyState from "./components/EmptyState";

function App() {
  return (
    <main className="flex flex-col md:flex-row">
      <NavBar />

      <main className="flex items-center justify-center w-full h-screen">
        <section className="">
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
        </section>
      </main>
    </main>
  );
}

export default App;
