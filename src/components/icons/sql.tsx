import { SVGProps } from 'react';

export default function IconSQL(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      {/* Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE */}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4">
        <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"></path>
        <path d="M4 6v6a8 3 0 0 0 16 0V6"></path>
        <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
      </g>
    </svg>
  );
}
