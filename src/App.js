import "./App.css";
import useForecast from "./hooks/useForecast";
import Form from "./components/Form";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  function onSubmit(value) {
    console.log(value);
    console.log(submitRequest(value));
  }

  return (
    <div className="App">
      <Form submitSearch={onSubmit} />
    </div>
  );
}

export default App;
