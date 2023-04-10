import React from 'react';

// greased: // false
// highest medal achieved: // "bronze"
// image: // "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg"
// name: // "Babe"
// specialty: // "Being incredibly cute"
// weight: // 2

function Card({hog}){
  return (
    <div className="Card">
      <img src={hog.image} alt="hog"/>
      <div className="description">
        <div><strong>Name:</strong> {hog.name}</div>
        <div className="hiddenSection">
        <div><strong>Weight:</strong> {hog.weight}</div>
          <div><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</div>
          <div><strong>Specialty:</strong> {hog.specialty}</div>
          <div><strong>Highest medal achieved:</strong> {hog['highest medal achieved']}</div>
        </div>
      </div>
    </div>
  )
}

export default Card