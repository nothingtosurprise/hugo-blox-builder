/**
 * Hero Block Component - Single source of truth
 * Used for both SSR and client-side hydration
 */

import {Icon} from "../../shared/components/Icon.jsx";

// Simple markdown renderer
export function renderText(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>");
}

// Title renderer: supports [highlight] syntax for gradient-text spans (in addition to markdown).
// `[word]` becomes a primary→secondary gradient span. Negative lookahead `(?!\()` avoids
// clobbering markdown link syntax `[text](url)`.
const HIGHLIGHT_CLS =
  "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400 bg-clip-text text-transparent";

export function renderTitle(text) {
  if (!text) return "";
  return String(text)
    .replace(/\[([^\]]+)\](?!\()/g, `<span class="${HIGHLIGHT_CLS}">$1</span>`)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

// Process URLs
export function processUrl(url) {
  if (!url) return {href: "#"};
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return {href: url, target: "_blank", rel: "noopener"};
  }
  return {href: url};
}

// Full literal class strings (Tailwind scanner safety)
const ACTION_STYLES = {
  gradient:
    "rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:from-primary-500 hover:to-secondary-500 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
  solid:
    "rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
  outline:
    "rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-inset ring-gray-300 dark:ring-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors",
  ghost:
    "rounded-full px-6 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors",
  text: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors",
};

function ActionButton({action, defaultStyle, iconSvg}) {
  if (!action?.url || !action?.text) return null;
  const styleKey = action.style && ACTION_STYLES[action.style] ? action.style : defaultStyle;
  const cls = ACTION_STYLES[styleKey];
  const url = processUrl(action.url);
  // text-style without an explicit icon shows the classic trailing arrow
  const showTextArrow = styleKey === "text" && !iconSvg;

  return (
    <a href={url.href} {...(url.target && {target: url.target, rel: url.rel})} class={`inline-flex items-center gap-2 ${cls}`}>
      <span dangerouslySetInnerHTML={{__html: renderText(action.text)}} />
      {iconSvg && (
        <span class="inline-flex">
          <Icon svg={iconSvg} attributes={{style: "height: 1em", class: "inline-block"}} />
        </span>
      )}
      {showTextArrow && <span aria-hidden="true">→</span>}
    </a>
  );
}

// Star strip for the trust block. Supports fractional values (e.g. 4.5 → 4 full + half).
const STAR_FULL = `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 0 0-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69L9.05 2.927Z"/></svg>`;
const STAR_EMPTY = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linejoin="round" d="M9.05 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 0 0-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69L9.05 2.927Z"/></svg>`;

function StarStrip({stars}) {
  const n = Math.max(0, Math.min(5, Number(stars) || 0));
  const full = Math.floor(n);
  return (
    <div class="inline-flex items-center gap-0.5 text-amber-400">
      {Array.from({length: 5}).map((_, i) => (
        <span key={i} class="w-4 h-4 inline-block" dangerouslySetInnerHTML={{__html: i < full ? STAR_FULL : STAR_EMPTY}} />
      ))}
    </div>
  );
}

function TrustStrip({trust}) {
  if (!trust) return null;
  const {stars, text} = trust;
  if (!stars && !text) return null;
  return (
    <div class="mt-8 flex items-center justify-center gap-3 flex-wrap">
      {stars != null && <StarStrip stars={stars} />}
      {text && <span class="text-sm text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: renderText(text)}} />}
    </div>
  );
}

// Announcement: pill above the title with optional leading badge.
// announcement.badge: {text, color?} — color is one of: primary | green | amber | rose
const BADGE_COLORS = {
  primary: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

function AnnouncementPill({announcement}) {
  if (!announcement?.text) return null;
  const badge = announcement.badge;
  const badgeCls = badge && BADGE_COLORS[badge.color] ? BADGE_COLORS[badge.color] : BADGE_COLORS.primary;

  return (
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div class="relative flex items-center gap-2 rounded-full pl-1 pr-4 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-300/30 hover:ring-gray-900/20 dark:hover:ring-gray-300/50 transition-all">
        {badge?.text && <span class={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeCls}`}>{badge.text}</span>}
        {!badge?.text && <span class="pl-2" />}
        <span dangerouslySetInnerHTML={{__html: renderText(announcement.text)}} />
        {announcement.link?.text && (
          <a
            href={processUrl(announcement.link.url).href}
            {...(processUrl(announcement.link.url).target && {
              target: processUrl(announcement.link.url).target,
              rel: processUrl(announcement.link.url).rel,
            })}
            class="font-semibold text-primary-600 dark:text-primary-300"
          >
            <span class="absolute inset-0" aria-hidden="true" />
            {announcement.link.text} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

// Hero Block Component - Single implementation
export const HeroBlock = ({content, design, _id, icon_svg, secondary_icon_svg}) => {
  const paddingClasses = design?.no_padding ? "" : "py-32 sm:py-48 lg:py-56";

  return (
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class={`mx-auto max-w-2xl ${paddingClasses}`}>
        <AnnouncementPill announcement={content.announcement} />

        <div class="text-center">
          {/* Eyebrow */}
          {content.eyebrow && (
            <p
              class="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400"
              dangerouslySetInnerHTML={{__html: renderText(content.eyebrow)}}
            />
          )}

          {/* Title */}
          {content.title && (
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
              dangerouslySetInnerHTML={{__html: renderTitle(content.title)}}
            />
          )}

          {/* Subtitle/Text */}
          {content.text && (
            <p
              class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{__html: renderText(content.text)}}
            />
          )}

          {/* Action Buttons */}
          {(content.primary_action?.url || content.secondary_action?.url) && (
            <div class="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-3">
              <ActionButton action={content.primary_action} defaultStyle="gradient" iconSvg={icon_svg} />
              <ActionButton action={content.secondary_action} defaultStyle="text" iconSvg={secondary_icon_svg} />
            </div>
          )}

          <TrustStrip trust={content.trust} />
        </div>
      </div>
    </div>
  );
};
