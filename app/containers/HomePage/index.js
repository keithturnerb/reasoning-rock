/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
// import { FormattedMessage } from 'react-intl'
import { Grid, Segment, Header } from 'semantic-ui-react'
// import messages from './messages'
// import HomeWrapper from './HomeWrapper'
import HeaderBackground from './HeaderBackground'
import MainHeader from '../../components/MainHeader/Loadable'
import SocialGroup from '../../components/SocialGroup/Loadable'

export default function HomePage() {
  return (
    <div>
      <div className='home-header'>
        <HeaderBackground>
          <MainHeader />
        </HeaderBackground>
      </div>
      <section>
        <SocialGroup />
      </section>
      <main>
        <Grid columns='equal'>
          <Grid.Row
            style={{
              margin: '1em 1em -1em 1em',
              backgroundColor: '#000000ff',
              borderBottom: '1px solid red',
            }}
          >
            <Grid.Column>
              <Segment basic textAlign='center'>
                <Header inverted as='h2' style={{ color: '#ccaa00ff' }}>
                  WELCOME ALL TO MY NEW WEBSITE! INCOMPLETE BY NECESSITY
                </Header>
                <Header inverted as='h3'>
                  NO AUTH, LIMITED TIME ALL DEV ACCESS, ALL INVITED, EVEN PEOPLE
                </Header>
                <Header inverted as='h4'>
                  SITE IS MY<i> PRE-ELUCUBRATION EXPERIENCE</i>
                  <b> GOAL OF SHAREING CUTTING EDGE USAGE AND CODE</b>
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column
            style={{ margin: '1em 1em 1em 1em', backgroundColor: '#bbbbbbff' }}
          >
            <Segment
              textAlign='center'
              basic
              style={{ backgroundColor: 'transparent' }}
            >
              <h2>
                BY PR10R1TY && L1NKS Hh2IGHLIGHTING FUTURE @dds t0 TH1S S1T3
              </h2>
              <h2>
                Directional love for this Shift? Tell me soon with API release
                as soon as 3weeks, so juiced for comments
              </h2>
            </Segment>
          </Grid.Column>
          <Grid.Row
            style={{
              margin: '-1em 1em -1em 1em',
              backgroundColor: '#000000ff',
            }}
          >
            <Grid.Column style={{ color: '#ffffff' }}>
              <ul>
                <li>
                  <h4 style={{ color: 'red' }}>Express Feature Adds</h4>
                </li>
                <li active>Fully Responsive</li>
                <li>Finalize Home Content/Style</li>
                <li>100% Coverage Test Goal</li>
                <li>Rock Dat Graphql API</li>
              </ul>
            </Grid.Column>
            <Grid.Column textAlign='left' style={{ color: '#ffffff' }}>
              <ul>
                <li>
                  <h4 style={{ color: 'red' }}>Priority 2Day Feature Adds</h4>
                </li>
                <li>Add to my Carousel</li>
                <li>DynamobD Complete</li>
                <li>Setup Comm Service on Site</li>
                <li>Finish Init Routing/Links</li>
              </ul>
            </Grid.Column>
            <Grid.Column textAlign='left' style={{ color: '#ffffff' }}>
              <ul>
                <li>
                  <h4 style={{ color: 'red' }}>First-Class Improvements</h4>
                </li>
                <li>Class2Function Hook Updates</li>
                <li>Implement Available Jest</li>
                <li>Review/Update Code Splitting</li>
                <li>Intl Strategy Updated</li>
              </ul>
            </Grid.Column>
            <Grid.Column style={{ color: '#ffffff' }}>
              <ul>
                <h4 style={{ color: 'red' }}>Retail Ground Improv</h4>
                <li>PolyFill Change Updated</li>
                <li>Loadable2React.Lazy</li>
                <li>Top-Down Tool Analysis</li>
                <li>SSR Code Prep</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              margin: '1em 1em 0em 1em',
              backgroundColor: '#555555ff',
            }}
          >
            <Grid.Column width={16} textAlign='center'>
              <Segment
                inverted
                basic
                style={{ minHeight: '120px', backgroundColor: 'transparent' }}
              >
                Holder for Incredible App Freatures Add
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              margin: '0em 1em 0.5em 1em',
              backgroundColor: '#ccaa0088',
            }}
          >
            <Grid.Column width={16} textAlign='center'>
              <Segment basic>Footer Here</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </main>
    </div>
  )
}
