import React from 'react';
import { withRouteData } from 'react-static';
import { groupBy, map, pipe, toPairs, zipObj, filter, contains } from 'ramda';
import { connect } from 'kea';
import { compose } from 'recompose';
import styled from 'styled-components';
//
import Service from '~/components/molecules/Service';
import ListView from '~/components/atoms/ListView';
import { Heading } from '~/components/atoms/Heading';
import filterStore from '~/data/store/filterStore';

const byCategory = groupBy(s => s.category);
const toCategoriesList = pipe(
  byCategory,
  toPairs,
  map(zipObj(['title', 'services'])),
);
const filterCategoriesFunc = categoriesFilter =>
  categoriesFilter.length > 0
    ? filter(category => contains(category.title, categoriesFilter))
    : i => i;

const ServicesListStyled = styled(ListView)`
  &::after {
    content: '';
    flex: auto;
  }
`;

const Category = ({ category }) => (
  <div>
    <Heading level={2} bold className="text-grey-darkest mt-8 mb-5">
      {category.title}
    </Heading>
    <ServicesListStyled
      className="flex flex-wrap -m-2 justify-between"
      data={category.services}
      renderItem={service => (
        <Service
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
          service={service}
        />
      )}
    />
  </div>
);

const Services = compose(
  withRouteData,
  connect({ props: [filterStore, ['categoriesFilter']] }),
)(({ services, categoriesFilter }) => (
  <ListView
    data={filterCategoriesFunc(categoriesFilter)(toCategoriesList(services))}
    renderItem={category => <Category className="w-full" category={category} />}
  />
));

export default Services;
