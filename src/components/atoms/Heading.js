import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Heading = styled(({ level, children, bold, ...props }) =>
  React.createElement(`h${level}`, props, children),
)`
  font-size: ${({ level }) => `${0.75 + 1.4 * (1 / level)}rem`};
  font-weight: ${({ bold }) => (bold ? 700 : 600)};
  letter-spacing: 0.1rem;
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  bold: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
