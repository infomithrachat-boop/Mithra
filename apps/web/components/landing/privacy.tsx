import { CheckIcon, ShieldIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    title: "End-to-end encryption, done properly",
    description:
      "We’re building on a vetted, widely reviewed cryptographic protocol rather than inventing our own. It’s in development today — we’ll only call MITHRA end-to-end encrypted once it truly is.",
  },
  {
    title: "Collect only what’s needed",
    description:
      "Your phone number lets friends find you. Beyond what’s required to deliver your messages, we aim to know as little as possible.",
  },
  {
    title: "You stay in control",
    description:
      "Clear choices about who can reach you, what you share and how long it’s kept — without digging through settings.",
  },
];

export function Privacy() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="relative py-20 sm:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 size-[420px] rounded-full bg-violet-500/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-20 size-[380px] rounded-full bg-indigo-500/25 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/10 text-indigo-200 ring-1 ring-white/15">
                <ShieldIcon className="size-7" />
              </span>
              <SectionHeading
                id="privacy-heading"
                eyebrow="Privacy"
                title="Privacy isn’t a feature. It’s the foundation."
                description="Your conversations belong to you. Every decision we make starts with protecting them."
                align="left"
                tone="inverse"
              />
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-indigo-100 ring-1 ring-white/15">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-amber-300" />
                Status: encryption in active development
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {principles.map((p) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-400 to-violet-500 text-white">
                    <CheckIcon className="size-4" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-indigo-100/75">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
