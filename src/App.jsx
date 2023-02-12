import { Header } from "./components/Header";
import { About } from "./components/About";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import styles from "../src/assets/styles/index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
