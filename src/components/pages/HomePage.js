import React from 'react';
import styled from 'styled-components';
//
import Header from '~/components/organisms/Header';
import Services from '~/components/organisms/Services';
import { Media } from '~/styles';
import ContentSection from '~/components/molecules/ContentSection';

const Filters = () => <div>filters</div>;

const ContentSectionStyled = styled(ContentSection)`
  background-color: hsl(220, 50%, 97%);
`;

const HomePageStyle = styled.div`
  height: 100vh;
  > .main {
    display: flex;
    flex-flow: column nowrap;
    ${Media.desktop`flex-flow:row-reverse wrap;`};
  }
  > .footer {
    width: 100%;
    height: 5rem;
    transform: rotate(180deg) scaleX(-1);
    margin-bottom: -1rem;
  }
`;
export default () => (
  <HomePageStyle>
    <Header />
    <ContentSectionStyled large>
      <Filters />
      <Services />
    </ContentSectionStyled>
  </HomePageStyle>
);
