/**
 *
 * Header
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid } from 'semantic-ui-react'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import PaginationMenu from '../PaginationMenu'

/**
 * TODO: 1a) Add Styling to js file hiearchy with styled-components
 * TODO: 1b) remove inline styling in this file
 * TODO: 2) adapt to tablet and mobile sizes much better
 * TODO: 3) front-load the right @font-face files in global-styles
 */
function Header() {
  return (
    <div>
      <Grid centered columns={3}>
        <Grid.Row stretched>
          <Grid.Column
            floated='left'
            textAlign='center'
            style={{ maxWidth: '60px' }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'Amatic SC',
                  fontSize: '14px',
                  color: '#ffffffaa',
                  position: 'absolute',
                  maxHeight: '60px',
                  left: '58%',
                  top: '47%',
                  transform: 'translateX(-50%) translateY(-50%) rotate(90deg)',
                  minWidth: '29em',
                  letterSpacing: '5px',
                  borderBottom: '1px solid white',
                }}
              >
                CUSTOMIZED WEB SOLUTIONS
              </p>
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' textAlign='center' width={11}>
            <div>
              <h4
                style={{
                  color: '#ff002a',
                  fontFamily: 'Amatic SC',
                  fontSize: '32px',
                }}
              >
                Engineered Web Services
              </h4>
            </div>
            <div>
              <h4
                style={{
                  color: 'white',
                  fontFamily: 'Amatic SC',
                  fontSize: '48px',
                }}
              >
                Web Development
              </h4>
              <h5
                style={{
                  color: 'white',
                  fontFamily: 'Special Elite',
                  fontSize: '24px',
                  fontStyle: 'normal',
                }}
              >
                [ by reasoning rock ]
              </h5>
            </div>
          </Grid.Column>
          <Grid.Column floated='right' style={{ maxWidth: '120px' }}>
            <div>
              <PaginationMenu />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

Header.propTypes = {}

export default memo(Header)

/**
 *
 * TODO: Add Translations
 * <FormattedMessage {...messages.header} />
 *
 */
