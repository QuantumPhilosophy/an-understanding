// Importing the React package
import React from 'react'

// Declaring the Form functional component
// This returns a Form component populated with other components and props
function Form ({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='Query'>
          <strong>Book</strong>
        </label>
        <input
          className='form-control'
          id='Title'
          type='text'
          value={q}
          placeholder='Ready Player One'
          name='q'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='pull-right'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='btn btn-lg btn-danger float-right'
        >
          Search
        </button>
      </div>
    </form>
  )
}

// Exporting the Form component
export default Form
