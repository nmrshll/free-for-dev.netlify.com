import React from 'react';
import styled from 'styled-components';
//
import Header from '~/components/organisms/Header';
import Services from '~/components/organisms/Services';
import { Media } from '~/styles';
import ContentSection from '~/components/molecules/ContentSection';

const Filters = () => <div>filters</div>;

const HomePageStyle = styled.div`
  min-height: 100vh;
  background-color: hsl(220, 80%, 98%);
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
    <ContentSection large>
      <Filters />
      <Services />
    </ContentSection>
  </HomePageStyle>
);
