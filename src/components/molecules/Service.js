import React from 'react';
import Button from '~/components/atoms/Button';

const stripURL = url =>
  url
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0];
const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

const Service = ({ service, className, ...rest }) => (
  <div className={className} {...rest}>
    <div className="bg-white min-h-full shadow-lg rounded-lg overflow-hidden flex flex-col px-6 py-4">
      <p className="text-lg font-semibold text-grey-darkest leading-tight mb-2">
        {capitalizeFirst(service.name)}
      </p>
      <p className="text-xs leading-tight text-grey-dark mb-3">
        {service.description}
      </p>
      <div className="mt-auto">
        <Button
          href={service.url}
          className="text-xs font-semibold rounded-full px-4 py-1 leading-normal border border-purple text-purple hover:bg-purple hover:text-white truncate"
        >
          Go to {stripURL(service.url)}
        </Button>
      </div>
    </div>
  </div>
);

export default Service;
