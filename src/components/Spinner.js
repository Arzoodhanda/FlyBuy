import React from 'react'
import "./css/Spinner.css"

export default function Spinner(props) {
  return (
    props.loading && <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
  )
}
