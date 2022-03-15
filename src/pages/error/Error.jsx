import React from "react"
import "./error.css"

const Error = () => {
  return (
    <div className='error-container'>
      <h1>Error 404, Page Not Found...!!</h1>
      <button className='btn btn-primary btn-back-home'>
        Back To Homepage
      </button>
    </div>
  )
}

export default Error
