import { FC } from 'react';

import { BaseProps } from '#types/props';

const Logomark: FC<BaseProps> = ({ className = '' }) => (
  <svg
    className={className}
    fill="none"
    height="44"
    viewBox="0 0 44 44"
    width="44"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M8.80005 16.1333C8.80005 23.4168 14.6423 26.4 20.5334 26.4V36.6667C20.5334 37.4766 21.19 38.1333 22.0001 38.1333C22.8101 38.1333 23.4667 37.4766 23.4667 36.6667V26.4V9.09334H26.4001V36.6667C26.4001 37.4766 27.0567 38.1333 27.8667 38.1333C28.6767 38.1333 29.3334 37.4766 29.3334 36.6667V9.09334H33.7334C34.6245 9.09334 35.3467 8.37103 35.3467 7.48C35.3467 6.58897 34.6245 5.86667 33.7334 5.86667H27.8667H23.4667H22.0001H20.5334C14.6423 5.86667 8.80005 8.84987 8.80005 16.1333Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
);

export { Logomark };
