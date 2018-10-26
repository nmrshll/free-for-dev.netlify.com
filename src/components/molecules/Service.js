import React from 'react';

const Service = ({ service, className, ...rest }) => (
  <div className={className} {...rest}>
    <div className="bg-white min-h-full shadow-lg rounded-lg overflow-hidden flex flex-col px-6 py-4">
      <p className="text-lg font-semibold text-grey-darkest leading-tight mb-1">
        {service.name}
      </p>
      <p className="text-xs leading-tight text-grey-dark mb-2">
        {service.description}
      </p>
      <button className="text-xs w-3/4 mt-auto font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white truncate">
        Go to {service.url}
      </button>
    </div>
  </div>
);

export default Service;
