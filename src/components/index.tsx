import Input from "./Input";

export const App = () => {
  <Input
    className="brand-violet-highlight"
    value="test"
    onChange={() => {
      alert("test");
    }}
  />;
};
