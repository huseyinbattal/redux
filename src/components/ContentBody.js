import React from 'react'

function ContentBody(props) {
  return (
      <div>
          <h1 onClick={props.onClick}> Bana gelen değer {props.userName}</h1>
      </div>
  )
}

export default ContentBody