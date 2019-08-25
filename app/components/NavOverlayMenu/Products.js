import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const google = 'https://google.com'

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
  margin: 0 -5em 0 5em;
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
        <Link to='/contact'>
          <ListItemContent>
            <Icon
              link
              name='world'
              size='tiny'
              src={google} /* width={48} height={48} */
            />
            <LisItemHeadingText>
              <ListItemHeading>PAYMENTS</ListItemHeading>
              <div>A complete payments platform engineered.</div>
            </LisItemHeadingText>
          </ListItemContent>
        </Link>
      </li>
      <li>
        <ListItemContent>
          <Icon
            link
            name='world'
            src={google}
            size='tiny' /* width={48} height={48} */
          />
          <LisItemHeadingText>
            <ListItemHeading>BILLING</ListItemHeading>
            <div>Build and scale your recurring business model.</div>
          </LisItemHeadingText>
        </ListItemContent>
      </li>
      <li>
        <ListItemContent>
          <Icon
            link
            name='world'
            src={google}
            size='tiny' /* width={48} height={48} */
          />
          <LisItemHeadingText>
            <ListItemHeading>CONNECT</ListItemHeading>
            <div>Everything platforms need to get sellers paid.</div>
          </LisItemHeadingText>
        </ListItemContent>
      </li>
    </List>
  </ListContainer>
)

export default Products
