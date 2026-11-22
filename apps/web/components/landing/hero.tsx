import { ArrowRightIcon, SparkleIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ChatPreview } from "./chat-preview";

const highlights = ["Phone-number sign-up", "Voice & video calls", "Web first, mobile next"];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Decorative backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-linear-to-r from-brand/25 via-violet/20 to-brand/10 blur-3xl"
      />

      <Container className="grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-24 lg:pb-28">
        <div className="flex flex-col items-start gap-7 motion-safe:animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted shadow-sm backdrop-blur">
            <SparkleIcon className="size-3.5 text-brand" />
            MITHRA means “friend” — and that’s how it should feel
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Meaningful conversations.{" "}
            <span className="bg-linear-to-r from-brand via-violet to-brand-strong bg-clip-text text-transparent">
              Closer connections.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted">
            MITHRA is a simple, private messenger for the people who matter
            most. Chat one-to-one or in groups, share moments instantly, and
            call in voice or video — with privacy designed in from the very
            first line of code.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="#get-started" size="lg">
              Get Started
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" size="lg">
              Explore features
            </ButtonLink>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ChatPreview />
      </Container>
    </section>
  );
}
