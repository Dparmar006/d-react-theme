import "./App.css";
import ExploreCards from "./Components/exploreCards/ExploreCards";
import Navbar from "./Components/navbar/Navbar";
import SearchCards from "./Components/searchCardSection/SearchCards";
function App() {
  return (
    <div className="app">
      <Navbar />
      <SearchCards />
      <ExploreCards />
    </div>
  );
}

export default App;
