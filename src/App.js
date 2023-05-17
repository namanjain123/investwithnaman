//import { Flex, Box, Heading, Button } from "@chakra-ui/react";
//import { NavBar } from "./component/NavBar";
//import TopBar from "./component/topbar/topbar";
import Home from "./pages/homepage/home";
import AsianPaints from "./pages/AsianPaints/AsianPaints";
//import{ Projects }from "./component/projectcard/projectcards";
import './App.css';
function App() {
  return (
    <div>    
    <Home/>
    <br/>
    <AsianPaints/>
    </div>
  );
}

export default App;