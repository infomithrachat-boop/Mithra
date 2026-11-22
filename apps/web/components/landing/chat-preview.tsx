import { MithraMark } from "@/components/brand/mithra-logo";
import {
  DoubleCheckIcon,
  LockIcon,
  MicIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  SearchIcon,
  VideoIcon,
} from "@/components/icons";

const conversations = [
  {
    name: "Ananya",
    initial: "A",
    preview: "Dinner on Saturday? 🍜",
    time: "9:41",
    unread: 2,
    active: true,
    avatar: "from-pink-400 to-rose-500",
  },
  {
    name: "Family",
    initial: "F",
    preview: "Mum: Photos from today!",
    time: "9:12",
    unread: 0,
    active: false,
    avatar: "from-amber-400 to-orange-500",
  },
  {
    name: "Leo Martins",
    initial: "L",
    preview: "Call you in five",
    time: "Yesterday",
    unread: 0,
    active: false,
    avatar: "from-emerald-400 to-teal-500",
  },
  {
    name: "Design crew",
    initial: "D",
    preview: "Kenji: New mockups ✨",
    time: "Mon",
    unread: 0,
    active: false,
    avatar: "from-sky-400 to-indigo-500",
  },
];

const waveform = [6, 12, 18, 10, 22, 14, 8, 16, 24, 12, 6, 14, 20, 10, 16, 8, 12, 18, 6, 10];

function Avatar({
  initial,
  gradient,
  className = "size-10",
}: {
  initial: string;
  gradient: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-linear-to-br text-sm font-semibold text-white ${gradient} ${className}`}
    >
      {initial}
    </span>
  );
}

function Time({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={`ml-2 inline-flex translate-y-1 items-center gap-0.5 text-[10px] ${
        light ? "text-white/75" : "text-muted"
      }`}
    >
      {children}
    </span>
  );
}

/**
 * A static, decorative preview of the MITHRA chat interface built with
 * HTML and CSS. It is presented to assistive technology as a single image.
 */
export function ChatPreview() {
  return (
    <div
      role="img"
      aria-label="Preview of the MITHRA app: a conversation list beside an open chat with messages, a voice note and a shared photo."
      className="relative mx-auto w-full max-w-xl motion-safe:animate-fade-up [animation-delay:150ms]"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[40px] bg-linear-to-br from-brand/30 via-violet/20 to-transparent blur-3xl"
      />

      <div
        aria-hidden="true"
        className="overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_40px_100px_-30px_rgb(49_46_129/0.45)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex items-center gap-2 text-xs font-medium text-muted">
            <MithraMark className="size-4" />
            MITHRA
          </span>
        </div>

        <div className="flex h-[440px] sm:h-[460px]">
          {/* Conversation list */}
          <aside className="hidden w-52 shrink-0 flex-col border-r border-border bg-surface sm:flex">
            <div className="p-3">
              <div className="flex items-center gap-2 rounded-xl bg-surface-muted px-3 py-2 text-xs text-muted">
                <SearchIcon className="size-3.5" />
                Search
              </div>
            </div>
            <ul className="flex flex-col gap-0.5 px-2">
              {conversations.map((c) => (
                <li
                  key={c.name}
                  className={`flex items-center gap-2.5 rounded-xl px-2 py-2 ${
                    c.active ? "bg-brand-soft" : ""
                  }`}
                >
                  <Avatar initial={c.initial} gradient={c.avatar} className="size-9" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-xs font-semibold text-foreground">
                        {c.name}
                      </span>
                      <span className="shrink-0 text-[10px] text-muted">{c.time}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[11px] text-muted">{c.preview}</span>
                      {c.unread > 0 ? (
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand text-[9px] font-semibold text-white">
                          {c.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Open conversation */}
          <section className="flex min-w-0 flex-1 flex-col">
            <header className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="relative">
                <Avatar initial="A" gradient="from-pink-400 to-rose-500" />
                <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-surface bg-success" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">Ananya</p>
                <p className="text-xs text-success">online</p>
              </div>
              <div className="flex items-center gap-1 text-muted">
                <span className="inline-flex size-8 items-center justify-center rounded-full hover:bg-surface-muted">
                  <PhoneIcon className="size-4" />
                </span>
                <span className="inline-flex size-8 items-center justify-center rounded-full hover:bg-surface-muted">
                  <VideoIcon className="size-4" />
                </span>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-2.5 overflow-hidden bg-surface-muted/60 px-4 py-4">
              <span className="mx-auto rounded-full bg-surface px-3 py-1 text-[10px] font-medium text-muted shadow-sm">
                Today
              </span>

              <div className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-bubble-in px-3.5 py-2 text-[13px] text-bubble-in-foreground shadow-sm">
                Are we still on for dinner on Saturday? 🍜
                <Time>9:38</Time>
              </div>

              <div className="max-w-[78%] self-end rounded-2xl rounded-br-md bg-linear-to-br from-brand to-violet px-3.5 py-2 text-[13px] text-white shadow-sm">
                Absolutely! I’ll book the place by the lake.
                <Time light>
                  9:39
                </Time>
                <DoubleCheckIcon className="ml-1 inline size-3.5 translate-y-0.5 text-white/85" />
              </div>

              <div className="flex max-w-[78%] items-center gap-2.5 self-start rounded-2xl rounded-bl-md bg-bubble-in px-3 py-2 shadow-sm">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <PlayIcon className="size-3.5 translate-x-px" />
                </span>
                <span className="flex h-6 items-center gap-[3px]">
                  {waveform.map((h, i) => (
                    <span
                      key={i}
                      className={`w-[3px] rounded-full ${i < 8 ? "bg-brand" : "bg-muted/40"}`}
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </span>
                <span className="text-[10px] text-muted">0:14</span>
              </div>

              <div className="max-w-[70%] self-end overflow-hidden rounded-2xl rounded-br-md bg-linear-to-br from-brand to-violet p-1 shadow-sm">
                <div className="relative h-24 overflow-hidden rounded-xl bg-linear-to-b from-indigo-400 via-violet-400 to-amber-300 sm:h-28">
                  <span className="absolute bottom-5 left-1/2 size-10 -translate-x-1/2 rounded-full bg-amber-100/90 blur-[1px]" />
                  <span className="absolute inset-x-0 bottom-0 h-7 bg-indigo-950/40" />
                </div>
                <p className="px-2 py-1.5 text-[12px] text-white">
                  Sunset from yesterday 🌅
                  <Time light>9:40</Time>
                </p>
              </div>

              <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-md bg-bubble-in px-3.5 py-3 shadow-sm">
                <span className="size-1.5 rounded-full bg-muted motion-safe:animate-typing" />
                <span className="size-1.5 rounded-full bg-muted motion-safe:animate-typing [animation-delay:150ms]" />
                <span className="size-1.5 rounded-full bg-muted motion-safe:animate-typing [animation-delay:300ms]" />
              </div>
            </div>

            <footer className="flex items-center gap-2 border-t border-border px-3 py-3">
              <span className="inline-flex size-8 items-center justify-center text-muted">
                <PaperclipIcon className="size-4" />
              </span>
              <span className="flex-1 rounded-full bg-surface-muted px-4 py-2 text-xs text-muted">
                Message
              </span>
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-linear-to-br from-brand to-violet text-white">
                <MicIcon className="size-4" />
              </span>
            </footer>
          </section>
        </div>
      </div>

      {/* Floating detail cards */}
      <div
        aria-hidden="true"
        className="absolute -left-6 bottom-16 hidden items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur md:flex motion-safe:animate-float"
      >
        <Avatar initial="L" gradient="from-emerald-400 to-teal-500" className="size-9" />
        <div>
          <p className="text-xs font-semibold text-foreground">Leo Martins</p>
          <p className="text-[11px] text-muted">Incoming video call</p>
        </div>
        <span className="ml-1 inline-flex size-8 items-center justify-center rounded-full bg-success text-white">
          <VideoIcon className="size-4" />
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute -right-4 top-20 hidden items-center gap-2 rounded-full border border-border bg-surface/95 px-3.5 py-2 text-xs font-medium text-foreground shadow-xl backdrop-blur md:flex motion-safe:animate-float [animation-delay:1.5s]"
      >
        <LockIcon className="size-3.5 text-brand" />
        Privacy-first by design
      </div>
    </div>
  );
}
