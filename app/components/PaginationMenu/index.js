/**
 *
 * PaginationMenu
 *
 */

import React, { memo, useState } from 'react'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Menu } from 'semantic-ui-react'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import PaginationMenuWrapper from './PaginationMenuWrapper'

const PaginationMenu = () => {
  const [activeItem, handleItemClick] = useState(1)
  return (
    <PaginationMenuWrapper>
      <Menu
        className='pagination-menu-items'
        pagination
        pointing
        secondary
        vertical
        fluid
        inverted
      >
        {console.debug(`Active Item is ${activeItem.value}`)}

        <Menu.Item
          name='I'
          value={1}
          active={activeItem.value === 1}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='II'
          value={2}
          active={activeItem.value === 2}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='III'
          value={3}
          active={activeItem.value === 3}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='IV'
          value={4}
          active={activeItem.value === 4}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='V'
          value={5}
          active={activeItem.value === 5}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='VI'
          value={6}
          active={activeItem.value === 6}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='VII'
          value={7}
          active={activeItem.value === 7}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='VIII'
          value={8}
          active={activeItem.value === 8}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='VIV'
          value={9}
          active={activeItem.value === 9}
          onClick={(evt, value) => handleItemClick(value)}
        />
        <Menu.Item
          name='X'
          value={10}
          active={activeItem.value === 10}
          onClick={(evt, value) => handleItemClick(value)}
        />
      </Menu>
    </PaginationMenuWrapper>
  )
}

PaginationMenu.propTypes = {}

export default memo(PaginationMenu)

// <FormattedMessage {...messages.header} />
