/**
 *
 * NavOverlayMenu
 *
 */

import React, { memo /* , Fragment */ } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import styled from 'styled-components'
import SiteNav, { ContentGroup } from 'react-site-nav'
import {
  // Divider,
  // Grid,
  // Icon,
  // Button,
  // Segment,
  Label,
  Image,
} from 'semantic-ui-react'

// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import Products from './Products'
import Company from './Company'
import Developers from './Developers'
import NavWrapper from './NavWrapper'
import img from '../../images/potatohead.png'

const Header = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: 80px;
  background: transparent;
`

const NavOverlayMenu = () => (
  <div
    style={{
      backgroundColor: '#00000aff',
      borderRadius: '1px',
      height: '50px',
      zIndex: '2',
      display: 'block',
      padding: '0 1em 0 3em',
    }}
  >
    <div style={{ float: 'right' }}>
      <Label as={Link} to='/' style={{ backgroundColor: 'transparent' }}>
        <Image size='tiny' circular src={img} />
      </Label>
    </div>
    <SiteNav
      align='left' /* center, left, right. This directly maps to justify-content of the root grid. */
      columnWidth='85'
      rowHeight='55'
      background='transparent'
      color='#fafbfcff'
      fontSize='18'
      fontFamily='Special Elite, sans-serif'
      contentBackground='#ff002abb' /* Applies to all content groups */
      contentColor='#fafbfcff' /* Applies to all content groups */
      // contentTop='20' /* Adjusts the distance between ContentGroups and root items */
      breakpoint='496' /* Show site nav at this breakpoint */
      // debug /* Keep ContentGroups open to make debugging easier */
      // style={{ zIndex: 2 }}
      // style={{ border: '2px dotted pink' }}
    >
      <ContentGroup title='ExPloR' width='220' height='280'>
        <Company />
      </ContentGroup>

      <ContentGroup title='.  .  .' width='360' height='280'>
        <Developers />
      </ContentGroup>
      <ContentGroup title='WonDeR' width='360' height='280'>
        <Products />
      </ContentGroup>
    </SiteNav>
  </div>
)

NavOverlayMenu.propTypes = {}

export default memo(NavOverlayMenu)

// <FormattedMessage {...messages.header} />
/**
 *         <Grid.Column style={{ border: '2px dotted blue' }}>
 *             <ContentGroup title='hi' height='80'>          <div >
              <Link to='/'>
                <Icon
                  style={{ margin: '0.5em auto auto 0.5em' }}
                  name='globe'
                  size='large'
                  color='red'
                  to='/'
                />
              </Link>          </div>
            </ContentGroup>

                        <ContentGroup title="Pricing" width="420" height="300">
              <Pricing/>
            </ContentGroup>
 * 
 */
