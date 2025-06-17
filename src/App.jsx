import { Catagory } from "./Components/Catagory";
import { Delivery } from "./Components/Delivery";
import { Header } from "./Components/Header";
import { Resto } from "./Components/Resto";

function App() {
  return (
    <div>
      <Header />
      <Catagory />
      <Resto />
      <Delivery/>
    </div>
  );
}

export default App;
