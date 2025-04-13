import { cn } from 'fumadocs-ui/utils/cn';
import Link from 'next/link';
import { JSX } from 'react';

interface ToDocsBtnProps {
  href?: string;
  title: string;
  icon: JSX.Element;
}

export default function ToDocsBtn({ href, title, icon }: ToDocsBtnProps) {
  return (
    <Link
      href={href || ''}
      aria-disabled={!href}
      className={cn(
        'flex items-center gap-3 overflow-hidden rounded-md border px-3 py-3 lg:gap-4 lg:px-4 lg:py-3',
        href ? 'bg-fd-card hover:bg-fd-muted' : 'text-fd-muted-foreground pointer-events-none',
      )}
    >
      <span className={cn('rounded-sm border p-1', href ? 'bg-fd-muted border-fd-accent' : '')}>{icon}</span>
      <span>{title}</span>
    </Link>
  );
}
