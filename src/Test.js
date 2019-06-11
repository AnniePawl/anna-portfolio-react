import React from 'react'

const Test = (props) => {
  return (
    <div>
      • <strong><a className="" href={props.url}>{props.title}</a></strong>
    </div>
  )
}

export default Test