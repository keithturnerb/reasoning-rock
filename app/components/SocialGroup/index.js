/**
 *
 * SocialGroup
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

const SocialGroup = () => (
  <div
    style={{
      textAlign: 'left',
      margin: '0',
      padding: '1em 0.3em',
      backgroundColor: '#040608',
      borderRadius: '1px',
    }}
  >
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        style={{ color: '#3b5998' }}
        size='large'
        inverted
        fitted
        name='facebook'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#1da1f2' }}
        inverted
        fitted
        name='twitter'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#DD4B39' }}
        inverted
        fitted
        name='google plus'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#4c75a3' }}
        inverted
        fitted
        name='vk'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#0077B5' }}
        inverted
        fitted
        name='linkedin'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#3f729b' }}
        inverted
        fitted
        name='instagram'
      />
    </Button>
    <Button style={{ padding: '3px 6px 9px 6px' }} basic size='mini' compact>
      <Icon
        size='large'
        style={{ color: '#c4302b' }}
        inverted
        fitted
        name='youtube'
      />
    </Button>
  </div>
)

SocialGroup.propTypes = {}

export default memo(SocialGroup)

// <FormattedMessage {...messages.header} />
