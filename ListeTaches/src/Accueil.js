import React from 'react'

function Accueil(props) {
  return (
    <div>
         
         <h2>{props.name ? `Welcome - ${props.name}` : " yyyyyy"}</h2>
    </div>
  )
}

export default Accueil
