import "./App.css";
import Base from "./Base";
import ExploreCards from "./Components/exploreCards/ExploreCards";
import FormElements from "./Components/form/FormElements";
import Navbar from "./Components/navbar/Navbar";
import SearchCards from "./Components/searchCardSection/SearchCards";
function App() {
  return (
    <Base>
      <SearchCards />
      <ExploreCards />
      <FormElements />
    </Base>
  );
}

export default App;
