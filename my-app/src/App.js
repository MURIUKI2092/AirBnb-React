import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/inspiration.css";
import "./styles/reviews.css";
import "./styles/search.css";
import "./styles/host.css";
import "./styles/writeReviews.css";
import "./styles/displayCard.css";
import "./styles/houseDesc.css";
import { Home } from "./containers/home";
import Router from './router'
import { DisplayCard } from "./components/displayCard";


function App() {
  return (
   <>
   <Router>
     <Home/>
     <DisplayCard/>
   </Router>
   </>
  );
}

export default App;
