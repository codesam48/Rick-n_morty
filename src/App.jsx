import Navigation from "./Components/Navigation"
import Character from "./Components/Characters"
import Home from "./Components/Home"  
import SelectedCharacter from "./Components/SelectedCharacter"
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/SelectedCharacter/:id" element={<SelectedCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


   


