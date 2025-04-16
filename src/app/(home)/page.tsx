import Hero from '@/components/hero';
import IconTechStack from '@/components/icons/tech-stack';
import ToDocsBtn from '@/components/to-docs-btn';
import { APP_NAME, DOCS } from '@/consts';

export default function HomePage() {
  return (
    <main className="container flex flex-col gap-8 py-8 lg:gap-16 lg:py-16">
      {/* Hero */}
      <Hero title={APP_NAME} desc="A Developer Handbook" icon={<IconTechStack className="size-12 shrink-0" />} />
      {/* Docs */}
      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-4">
          {Object.values(DOCS).map(({ title, path, icon: Icon }) => {
            return <ToDocsBtn key={title} title={title} href={path} icon={<Icon className="size-6 shrink-0" />} />;
          })}
        </div>
        {/* Notes */}
        <p className="text-fd-muted-foreground max-w-md text-center text-sm lg:max-w-2xl">
          {`The original docs are in a different file format and not in English, so it will take some time to refactor and
          publish them. That's why some of the links above are currently disabled.`}
        </p>
        <p suppressHydrationWarning className="text-fd-muted-foreground -mt-4 text-center text-sm">
          {`© ${new Date().getFullYear()} Sha'an Aliyev / `}
          <a href="https://www.seabeya.com/" target="_blank" className="hover:text-fd-accent-foreground underline">
            seabeya.com
          </a>
        </p>
      </div>
    </main>
  );
}
