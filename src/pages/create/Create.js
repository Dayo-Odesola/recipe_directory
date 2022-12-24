import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setcookingTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime)
  }

  return (
    <div>
      <div className='create'>
        <h2 className='page-title'>Add a New Recipe</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe title:</span>
            <input 
              type="text" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          {/* { ingredients go here} */}

          <label>
            <span>Recipe method:</span>
            <textarea 
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>

          <label> 
            <span>Cooking Time (minutes): </span>
            <input 
              type="number"
              onChange={(e) => setcookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>

          <button className='btn'>submit</button>
        </form>
      </div>
    </div>
  )
}
