import React from 'react';
import styled from 'styled-components';
import { connect } from 'kea';
import { compose } from 'recompose';
import { withRouteData } from 'react-static';
import { groupBy, keys, contains } from 'ramda';
//
import ListView from '~/components/atoms/ListView';
import ContentSection from '~/components/molecules/ContentSection';
import { Heading } from '~/components/atoms/Heading';
import Button from '~/components/atoms/Button';
import filterStore from '~/data/store/filterStore';

const CategoryFilterButton = connect({
  actions: [filterStore, ['setCategory']],
})(({ categoryName, actions: { setCategory }, active }) => (
  <Button
    className={`text-xs font-semibold rounded-full px-2 py-1 mx-1 leading-normal hover:bg-white hover:text-indigo-dark ${
      active ? 'bg-white text-indigo-dark' : 'text-indigo-lightest'
    }`}
    onClick={() => setCategory(categoryName)}
  >
    {categoryName}
  </Button>
));

const byCategory = groupBy(s => s.category);

const HeaderStyled = styled.header`
  background-color: hsl(229, 75%, 59%);
`;
const HeaderHOCs = compose(
  connect({
    props: [filterStore, ['categoriesFilter']],
  }),
  withRouteData,
);
const Header = HeaderHOCs(({ services, categoriesFilter }) => (
  <HeaderStyled className="relative min-h-10">
    <ContentSection
      large
      className="content relative my-0 pt-16 pb-8 text-white text-left"
    >
      <div className="pb-4 border-b border-white">
        <Heading level={1}>Free for dev</Heading>
        <Heading level={3}>
          A list of online tools with free tiers, aimed at anyone in tech
        </Heading>
      </div>
      <ListView
        className="flex flex-wrap -mx-3 mt-4"
        data={keys(byCategory(services))}
        renderItem={categoryName => (
          <CategoryFilterButton
            categoryName={categoryName}
            nono={console.log({ categoryName, categoriesFilter })}
            active={contains(categoryName, categoriesFilter)}
          />
          // <Button
          //   active={contains(categoryName, categoriesFilter)}
          //   className={`text-xs font-semibold rounded-full px-2 py-1 mx-1 leading-normal border border-white text-indigo-lightest hover:bg-white hover:text-grey-darkest ${active}`}
          //   onClick={() => setCategory(categoryName)}
          // >
          //   {categoryName}
          // </Button>
        )}
      />
    </ContentSection>
  </HeaderStyled>
));

export default Header;
