import { JSX } from 'react';

interface HeroProps {
  title: string;
  desc: string;
  icon: JSX.Element;
}

export default function Hero({ title, desc, icon }: HeroProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="bg-fd-card aspect-square rounded-full border p-6">{icon}</div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-fd-muted-foreground">{desc}</p>
    </div>
  );
}
