import { SVGProps } from 'react';

export default function IconGit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      {/* Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE */}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M12 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.25-3.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 10v5M8.25 4.75L10.5 7m2.75 2.75l1.5 1.5"></path>
        <path d="M11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848z"></path>
      </g>
    </svg>
  );
}
