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
import "./styles/error.css";
import { Home } from "./containers/home";
import Router from "./router";
import { Display } from "./containers/Display";
import { Error } from "./components/error";
import { Description } from "./containers/Description";



function App() {
  return (
   <Router>
   <Description/>
   <Home/>
   <Display/>
   <Error/>
 
  
   </Router>
  );
}

export default App;
