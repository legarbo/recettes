import React from 'react'

const Summary = ({ ingredients = 1, steps = 0}) => {
  return <div>
    <p>{ingredients} Ingredients | { steps } Steps</p>
  </div>
}
Summary.propTypes =  {
   ingredients: React.PropTypes.number.isRequired,
   steps: React.PropTypes.number.isRequired,
 }

export default Summary
