import axios from "axios"
import { useState } from "react"

const AddTutorial = ({getTutorials}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit =async(e) => {
    e.preventDefault()
  const Base_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    const newTutorial={title,description}
await axios.post(Base_URL, newTutorial)
  setDescription("")
  setTitle("")  
  getTutorials();
  }
console.log(title)
console.log(description)
  return (
    <div className="container text-center mt-4">
      <h1 className="fw-6 text-warning">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light fs-3">
            Title
          </label>
          <input
            type="text"
            className="form-control bg-warning rounded-5"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label text-light fs-3">
            Description
          </label>
          <input
            type="text"
            className="form-control bg-warning rounded-5"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-4">
          Submit
        </button>
      </form>
      <hr className="text-light" />
      <hr className="text-light" />
    </div>
  )
}

export default AddTutorial
