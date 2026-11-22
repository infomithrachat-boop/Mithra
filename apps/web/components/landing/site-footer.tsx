import { MithraLogo } from "@/components/brand/mithra-logo";
import { LockIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "./nav-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <MithraLogo markClassName="size-8" />
            <p className="text-sm leading-relaxed text-muted">
              Your people. Your conversations. A private, friendly messenger —
              built with care, one honest step at a time.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-surface-muted p-4 text-sm text-muted">
          <LockIcon className="mt-0.5 size-4 shrink-0 text-brand" />
          <p>
            <span className="font-medium text-foreground">Privacy note:</span>{" "}
            MITHRA is in early development. End-to-end encryption is planned
            using a vetted, open cryptographic protocol and is not yet
            available. We’ll share clear details about how it works before it
            launches.
          </p>
        </div>

        <p className="text-xs text-muted">© 2026 MITHRA. All rights reserved.</p>
      </Container>
    </footer>
  );
}
