import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <h1 className="">{count}</h1>
  </>
  )
}

export default App
