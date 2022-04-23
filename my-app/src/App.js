import { Navbar } from "./components/navbar";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/inspiration.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Inspiration } from "./components/inspiration";


function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Inspiration/>
   <Footer/>
   </>
  );
}

export default App;
