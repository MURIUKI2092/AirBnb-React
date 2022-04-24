import { Navbar } from "./components/navbar";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/inspiration.css";
import "./styles/reviews.css";
import "./styles/search.css";
import "./styles/host.css";
import "./styles/writeReviews.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Inspiration } from "./components/inspiration";
import { Reviews } from "./components/reviews";
import { Search } from "./components/search";
import { Host } from "./components/host";


function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Inspiration/>
   <Reviews/>
   <Footer/>
   </>
  );
}

export default App;
