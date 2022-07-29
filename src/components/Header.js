import React from 'react'
import Content from './Content'
import {useDispatch, useSelector} from "react-redux"

function Header(props) {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    
  return (
      <nav>
          <button
              onClick={
                  () => {
                      dispatch({
                          type: "DECREMENT",
                          payload:5
                      })
                  }
          }
          >Decrease Number</button>
          Ben bir Header {count}
          <Content onClick={props.onClick} userName={ props.userName} />
      </nav>
  )
}

export default Header