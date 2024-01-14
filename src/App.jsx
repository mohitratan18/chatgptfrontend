import './App.css'
import Firstpart from './Components/FirstPart/Firstpart'
import Secondpart from './Components/SecondPart/Secondpart'

function App() {

  return (
    <div className='app'>
      <div className="partone">
        <Firstpart/>
      </div>
      <div className="parttwo">
        <Secondpart/>
      </div>
    </div>
  )
}

export default App
