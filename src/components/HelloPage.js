import React from 'react'
import { Link } from 'react-router-dom'
const HelloPage = () => {
  return (
    <div style={{height: '100vh'}} className="d-flex justify-content-center center align-items-center">
      <Link to="/info">
        <button className='btn btn-primary'>
            Go to Search page
        </button>
      </Link>
    </div>
  )
}

export default HelloPage