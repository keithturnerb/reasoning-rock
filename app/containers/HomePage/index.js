/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
// import HomeWrapper from './HomeWrapper'
import HeaderBackground from './HeaderBackground'
import Header from '../../components/Header/Loadable'
import SocialGroup from '../../components/SocialGroup/Loadable'

export default function HomePage() {
  return (
    <div>
      <div className='home-header'>
        <HeaderBackground>
          <Header />
        </HeaderBackground>
      </div>
      <section>
        <SocialGroup />
        <FormattedMessage {...messages.header} />
      </section>
    </div>
  )
}
