import React from 'react';
import styled from 'styled-components';

// const Card = styled.div`
//   padding: 1.6rem;
//   margin-bottom: 1rem;
//   background-color: #fff;
//   color: rgba(0, 0, 0, 0.8);
//   box-shadow: 0px 0.4rem 1rem 0px hsl(220, 50%, 95%);
//   border-radius: 6px;
// `;

// const ServiceStyle = styled(Card)`
//   font-size: 80%;
// `;

const Service = ({ service, className, ...rest }) => (
  <div
    {...rest}
    className={[
      'bg-white shadow-lg rounded-lg overflow-hidden flex flex-col px-6 py-4',
      className,
    ].join(' ')}
  >
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
);

export default Service;
