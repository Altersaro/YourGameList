import React from 'react'

function ReleaseDate(props) {
  return (
    props.released ? <p>{props.released}</p> : "TBA"

  )
}

export default ReleaseDate