import { Navbar } from "./components/navbar";
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
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Inspiration } from "./components/inspiration";
import { Reviews } from "./components/reviews";
import { Search } from "./components/search";
import { Host } from "./components/host";
import { Display } from "./containers/Display";
import { Description } from "./containers/Description";
import { Home } from "./containers/home";


function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Footer/>
   </>
  );
}

export default App;
