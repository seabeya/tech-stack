import IconTechStack from '@/components/icons/tech-stack';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <IconTechStack aria-label="Tech Stack logo" />
        <span className="text-base font-medium">Tech Stack</span>
      </>
    ),
  },
  links: [
    {
      type: 'custom',
      children: <GithubInfo owner="seabeya" repo="tech-stack" className="mx-1.5 flex-row border px-3" />,
      secondary: true,
    },
  ],
};
