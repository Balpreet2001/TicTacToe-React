import { Square } from './components/Square'
import './App.css'

function App() {
  

  return (
    <div>
      <h1>hello vite </h1>
      <img src='/vite.svg' />
      <Square/>
      <Square/>
      <Square value = "6"/>
      <Square value="4"/>
      <Square value="5"/>
    </div>
    
  )
}

export default App
