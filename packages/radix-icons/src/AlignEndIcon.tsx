import * as React from 'react';
import { IconProps } from './types';

export const AlignEndIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 11V4H9V11H6ZM5 3.75C5 3.33579 5.33579 3 5.75 3H9.25C9.66421 3 10 3.33579 10 3.75V11.25C10 11.6642 9.66421 12 9.25 12H5.75C5.33579 12 5 11.6642 5 11.25V3.75ZM1.49919 13.05C1.25067 13.05 1.04919 13.2515 1.04919 13.5C1.04919 13.7486 1.25067 13.95 1.49919 13.95L13.4992 13.95C13.7477 13.95 13.9492 13.7486 13.9492 13.5C13.9492 13.2515 13.7477 13.05 13.4992 13.05H1.49919Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignEndIcon;