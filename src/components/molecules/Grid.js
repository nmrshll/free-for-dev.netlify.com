import React from 'react';
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
//
import ListView, { RawList } from '~/components/atoms/ListView';

const GridFlex = styled(Flex).attrs({
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'stretch',
})`
  max-width: 100vw;
  overflow: hidden;
  > *:last-child {
    margin-right: auto;
  }
`;

const Grid = ({ gap, widths, data, renderItem, ...props }) => (
  <GridFlex m={-gap} {...props}>
    <RawList
      data={data}
      renderItem={item => (
        <Box w={widths} p={gap}>
          {renderItem(item)}
        </Box>
      )}
    />
  </GridFlex>
);

export default Grid;
