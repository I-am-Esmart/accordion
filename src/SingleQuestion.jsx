import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

export const SingleQuestion = ({ q }) => {
  const [show, setShow] = useState(false)

  return (
    <article className="question">
      <header>
        <h5> {q.title} </h5>
        <button className="question-btn" onClick={() => setShow(!show)}>
          {" "}
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p> {q.info} </p>}
    </article>
  )
}
