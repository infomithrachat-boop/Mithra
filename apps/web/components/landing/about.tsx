import { ArrowRightIcon, HeartIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  { label: "Trustworthy", text: "Honest about what we build and how it works." },
  { label: "Private", text: "Designed to protect your conversations." },
  { label: "Friendly", text: "Simple enough for everyone you love." },
];

export function About() {
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-20 sm:py-24"
      >
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title={
              <>
                MITHRA means{" "}
                <span className="bg-linear-to-r from-brand to-violet bg-clip-text text-transparent">
                  friend
                </span>
                .
              </>
            }
            description="The name comes from an ancient word for friend and companion. That’s the promise behind every detail: a messenger that feels warm, keeps your trust, and brings your people closer."
            align="left"
          />

          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((v) => (
              <li
                key={v.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <HeartIcon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{v.label}</h3>
                  <p className="text-sm text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="get-started"
        aria-labelledby="get-started-heading"
        className="pb-20 sm:pb-28"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-24 mx-auto h-48 w-3/4 rounded-full bg-linear-to-r from-brand/25 via-violet/25 to-brand/25 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
              <h2
                id="get-started-heading"
                className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Your people. Your conversations.
              </h2>
              <p className="text-lg text-pretty text-muted">
                MITHRA is in early development. Sign-up with your phone number
                is on its way — accounts aren’t open just yet.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#features" size="lg">
                  See what’s coming
                  <ArrowRightIcon className="size-4" />
                </ButtonLink>
                <ButtonLink href="#privacy" variant="secondary" size="lg">
                  Our privacy principles
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
