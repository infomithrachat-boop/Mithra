import type { ComponentType } from "react";
import {
  DevicesIcon,
  ImageIcon,
  LockIcon,
  VideoIcon,
  type IconProps,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
};

const features: Feature[] = [
  {
    title: "Private messaging",
    description:
      "One-to-one and group chats designed around privacy, with end-to-end encryption on a vetted, open protocol planned from day one.",
    icon: LockIcon,
  },
  {
    title: "Voice and video calls",
    description:
      "Clear, natural calls with the people you care about — whether they’re across the street or across the world.",
    icon: VideoIcon,
  },
  {
    title: "Fast media sharing",
    description:
      "Send photos, videos, voice notes and documents in a tap, optimised to stay quick on any connection.",
    icon: ImageIcon,
  },
  {
    title: "Cross-device communication",
    description:
      "Start on the web today and continue on Android and iOS as they arrive, with your conversations in sync.",
    icon: DevicesIcon,
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-14">
        <SectionHeading
          id="features-heading"
          eyebrow="Features"
          title="Everything a conversation needs. Nothing it doesn’t."
          description="MITHRA keeps the essentials beautifully simple, so you can focus on the people on the other side of the screen."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-30px_var(--glow)]"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-linear-to-br group-hover:from-brand group-hover:to-violet group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
