import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const myEmail = 'https://keithturnerb@gmail.com'

const ListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`
const List = styled.ul`
  color: lightslategray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: 0.7;
  }
`
const LisItemHeadingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  margin-left: 10px;
`
const ListItemHeading = styled.div`
  margin: 0 -5em 0 1em;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
`

const Products = () => (
  <ListContainer>
    <List>
      <li>
        <ListItemContent>
          <Icon link name='world' size='tiny' src={myEmail} />
          <LisItemHeadingText>
            <ListItemHeading>LIFE TRANSFORMATION</ListItemHeading>
            <div>Let us meet and discuss options</div>
          </LisItemHeadingText>
        </ListItemContent>
      </li>
      <li>
        <ListItemContent>
          <Icon
            link
            name='world'
            src={myEmail}
            size='tiny' /* width={48} height={48} */
          />
          <LisItemHeadingText>
            <ListItemHeading>UNCLE OPTIONS</ListItemHeading>
            <div>Absolute must for any Modern Website</div>
          </LisItemHeadingText>
        </ListItemContent>
      </li>
      <li>
        <ListItemContent>
          <Icon
            link
            name='world'
            src={myEmail}
            size='tiny' /* width={48} height={48} */
          />
          <LisItemHeadingText>
            <ListItemHeading>QUESTIONS STILL?</ListItemHeading>
            <div>Sounds absolutely amazing intern in route</div>
          </LisItemHeadingText>
        </ListItemContent>
      </li>
    </List>
  </ListContainer>
)

export default Products
