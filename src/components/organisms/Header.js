import React from 'react';
import styled from 'styled-components';
import { connect } from 'kea';
//
import ContentSection from '~/components/molecules/ContentSection';
import { Heading } from '~/components/atoms/Heading';
import Button from '~/components/atoms/Button';

import filterStore, { setCategory } from '~/data/store/filterStore';

const HeaderStyled = styled.header`
  background-color: hsl(229, 75%, 59%);
  > .content {
    > * {
      position: relative;
      z-index: 2;
    }
  }
`;
const Header = connect({
  actions: [filterStore, ['setCategory']],
})(({ actions: { setCategory } }) => (
  <HeaderStyled className="relative min-h-10 pb-5">
    <ContentSection
      large
      className="content relative my-0 pt-16 pb-16 text-white text-left"
    >
      <Heading level={1}>Free for dev</Heading>
      <Heading level={3}>
        A list of online tools with free tiers, aimed at anyone in tech
      </Heading>
      <div>
        <Button onClick={() => setCategory('A')}>category A</Button>
      </div>
    </ContentSection>
  </HeaderStyled>
));

export default Header;
