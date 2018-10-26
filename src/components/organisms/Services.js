import React from 'react';
import { withRouteData } from 'react-static';
import { groupBy, map, pipe, toPairs, zipObj } from 'ramda';
//
import Service from '~/components/molecules/Service';
// import ContentSection from '~/components/molecules/ContentSection';
// import Grid from '~/components/molecules/Grid';
import ListView from '~/components/atoms/ListView';
import { Heading } from '~/components/atoms/Heading';

const byCategory = groupBy(s => s.category);
const toCategoriesList = pipe(
  byCategory,
  toPairs,
  map(zipObj(['title', 'services'])),
);

const Category = ({ category }) => (
  <div>
    <Heading level={2} bold className="text-grey-darkest mt-8 mb-5">
      {category.title}
    </Heading>
    <ListView
      className="flex flex-wrap -m-2 justify-between"
      data={category.services}
      renderItem={service => (
        <Service
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-2 flex-grow flex-shrink"
          service={service}
        />
      )}
    />
  </div>
);

const Services = withRouteData(({ services }) => (
  <ListView
    data={toCategoriesList(services)}
    renderItem={category => <Category className="w-full" category={category} />}
  />
));

export default Services;
