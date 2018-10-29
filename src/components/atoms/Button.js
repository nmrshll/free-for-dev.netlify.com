import React from 'react';
import styled from 'styled-components';
//

const ButtonStyled = styled.button`
  border-style: none;
  cursor: pointer;
  outline: none;
  // background: ${({ disabled }) => (disabled ? 'hsl(0,0%,90%)' : 'none')};
`;

const LinkButton = ButtonStyled.withComponent('a');

export const Button = ({ href, disabled, style: customStyle, ...props }) =>
  href ? (
    <LinkButton href={href} {...props} style={customStyle} disabled={disabled}>
      {' '}
      {props.text || props.children}
    </LinkButton>
  ) : (
    <ButtonStyled {...props} style={customStyle} disabled={disabled}>
      {props.text || props.children}
    </ButtonStyled>
  );

export default Button;
