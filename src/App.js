import Counter from './Counter'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>[Redux Counter]</h1>
      <Counter increaseCount={increaseCount}
           decreaseCount={decreaseCount}
           countValue={countValue} />
    </div>
  )
}

export default App