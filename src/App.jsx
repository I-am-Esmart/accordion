import { useState } from "react"
import data from "./data"
import { Questions } from "./Questions"

function App() {
  const [info, setInfo] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    console.log(id)
  }

  const showDetail = () => {
    setShow(!show)
  }

  return (
    <>
      <main>
        <Questions questions={info} />
      </main>
    </>
  )
}

export default App
