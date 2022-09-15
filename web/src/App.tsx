import { GameProvider } from "./context/GameContext"
import { Home } from "./pages/Home"


function App() {


  return (
    <>
      <GameProvider>
        <Home />
      </GameProvider>
    </>
  )
}

export default App
