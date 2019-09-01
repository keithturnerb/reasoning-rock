/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from 'containers/HomePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import NavOverlayMenu from '../../components/NavOverlayMenu'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`

export default function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NavOverlayMenu />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home'>
          <Redirect to='/' />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  )
}

//  <Route path='/services' component={Services} />
// <Route path='/contact' component={Contact} />
