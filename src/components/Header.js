import React from 'react'
import Content from './Content'

function Header(props) {
    console.log(props)
  return (
      <nav>
          Ben bir Header
          <Content onClick={props.onClick} userName={ props.userName} />
      </nav>
  )
}

export default Header