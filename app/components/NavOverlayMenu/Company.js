import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const myEmail = 'https://keithturnerb@gmail.com'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  padding: 0px 2px 0 -2px;
  color: peachpuff;
`
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  a:hover {
    opacity: 0.7;
  }
`
const Heading = styled.div`
  margin: 0;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`

const Company = () => (
  <List>
    <ListItem>
      <StyledLink href={myEmail}>
        <Icon name='globe' size='small' />
        <Heading>ABOUT ME</Heading>
      </StyledLink>
    </ListItem>
    <ListItem>
      <Icon link name='globe' size='small' src={myEmail} />
      <Heading>CUSTOMERS</Heading>
    </ListItem>
    <ListItem>
      <Icon name='globe' size='small' src={myEmail} />
      <Heading>JOBS</Heading>
    </ListItem>
    <ListItem>
      <Icon link name='globe' size='small' src={myEmail} />
      <Heading>ENVIRONMENT</Heading>
    </ListItem>
  </List>
)

export default Company
