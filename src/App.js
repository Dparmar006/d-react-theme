import "./App.css";
import Base from "./Base";
import ExploreCards from "./Components/exploreCards/ExploreCards";
import FormElements from "./Components/form/FormElements";
// import Notifications from "./Components/notifications/Notifications";
import SearchCards from "./Components/searchCardSection/SearchCards";
import TextTiles from "./Components/textTiles/TextTiles";
function App() {
  return (
    <Base>
      <SearchCards />
      <ExploreCards />
      <FormElements />
      {/* <Notifications /> */}
      <TextTiles />
    </Base>
  );
}

export default App;
