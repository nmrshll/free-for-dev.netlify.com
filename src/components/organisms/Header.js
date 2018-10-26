import React from 'react';
import styled from 'styled-components';
//
import ContentSection from '~/components/molecules/ContentSection';
import { Heading } from '~/components/atoms/Heading';

const HeaderStyle = styled.header`
  position: relative;
  min-height: 10rem;
  padding-bottom: 5rem;
  background-color: hsl(229, 75%, 59%);
  > .content {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding: 5rem 0 2rem 0;
    color: #fff;
    text-align: left;
    > * {
      position: relative;
      z-index: 2;
    }
  }
`;
const Header = () => (
  <HeaderStyle>
    <ContentSection large className="content">
      <Heading level={1}>Free for dev</Heading>
      <Heading level={3}>
        A list of online tools with free tiers, aimed at anyone in tech
      </Heading>
    </ContentSection>
  </HeaderStyle>
);

export default Header;
