import React from "react"
import Emoji from "./emoji"
import styled from "styled-components"

const Tag = styled.div`
  margin: 0.1rem 0.5rem 0.1rem 0.5rem;
  display: flex;
  flex-direction: column;
`

const Line1 = styled.div`
  font-size: 1.5rem;
  color: ivory;
`

const Line3 = styled.div`
color: grey;
font-size: 1rem;
overflow-wrap: break-word;
overflow: auto;
`

const ProjectTag = (props) => {
  return (
    <Tag>
      <Line1>
        {props.name}
        <div style={{textAlign: `right`, float: `right`, fontSize: `1rem`}}>
          <Emoji
            symbol="⭐" label="stars"
            style={{ fontSize: `1rem`, textAlign: `center`, marginRight: `0.25rem` }}
          />
          {props.stars}
        </div>
      </Line1>
      <div style={{ fontSize: `1.25rem`, color: `${props.plang['color']}` }}>
        {props.plang['name']}
      </div>
      <Line3> {props.desc} </Line3>
    </Tag>
  )
}

export default ProjectTag