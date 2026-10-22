// Sunshine Demolition icon set. One 24px grid, 2px round strokes, currentColor,
// so every icon inherits text color and sits on the same optical weight.
import type { SVGProps } from "react";

export type IconName =
  | "phone" | "message" | "mail" | "pin" | "clock" | "check" | "arrow"
  | "truck" | "hammer" | "fridge" | "palm" | "building" | "heart-home"
  | "shield" | "bolt" | "tag" | "home" | "camera" | "clipboard" | "broom" | "sun";

const paths: Record<IconName, React.ReactNode> = {
  phone: <path d="M5 4h3.2l1.6 4-2 1.4a11 11 0 0 0 6.8 6.8l1.4-2 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16.5 16.5 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />,
  message: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4V16h0A1.5 1.5 0 0 1 4 14.5Z" /><path d="M8 9h8M8 12h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  pin: <><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  arrow: <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />,
  // Box truck with a stacked load: junk removal.
  truck: <><path d="M2.5 6.5h11v9.5h-11z" /><path d="M13.5 9.5h4l3 3.5v3h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /><path d="M5 9.5h3.5M5 12.5h6" /></>,
  // Sledgehammer mid-swing over a cracked block: demolition.
  hammer: <><path d="m13.5 4.5 6 6-2 2-6-6z" /><path d="m12.5 9.5-8 8" /><path d="M3 21h9" /><path d="M14 21l1.5-3 1.5 1.5 1-2.5" /></>,
  fridge: <><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M6 10h12M9 5.5v2M9 13v3" /></>,
  palm: <><path d="M12 21c0-5 .5-9 1-12" /><path d="M13 9c-1.5-3-4.5-4-7.5-3 2 .5 4 2 5 4" /><path d="M13 9c1-3.5 4-5 7-4.5-2 1-3.5 2.5-4.5 4.5" /><path d="M13 9c2.5-.5 5.5 1 6.5 3.5-2.5-1-4.5-1.5-6.5-1" /><path d="M8 21h9" /></>,
  building: <><path d="M4 21V5.5L12 3v18M12 8.5l8 2.5v10" /><path d="M7 8h2M7 11.5h2M7 15h2M15 13h2M15 16.5h2M2.5 21h19" /></>,
  "heart-home": <><path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" /><path d="M12 17.5s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.8-3 3.8Z" /></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6Z" /><path d="m8.8 12 2.2 2.2 4.2-4.4" /></>,
  bolt: <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6Z" />,
  tag: <><path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1.4 1.4 0 0 1 0 2l-6.6 6.6a1.4 1.4 0 0 1-2 0Z" /><circle cx="8" cy="8" r="1.5" /></>,
  home: <><path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" /><path d="M10 20v-5h4v5" /></>,
  camera: <><path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.5L9 4.5h6L16.5 7H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5Z" /><circle cx="12" cy="13" r="3.3" /></>,
  clipboard: <><rect x="5" y="4.5" width="14" height="16.5" rx="2" /><path d="M9 4.5V3h6v1.5" /><path d="m8.8 13 2.2 2.2 4.2-4.4" /></>,
  broom: <><path d="M14.5 3 11 11" /><path d="M7.5 10.5 14 13.5l-2.5 7-8-3.5Z" /><path d="m6.5 15.5 1 3M9.5 16.8l.7 2.6" /><path d="M17 17.5h4M18.5 20.5h3" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" /></>,
};

export function Icon({ name, size = 20, className, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...rest}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`icon ${className ?? ""}`.trim()}
    >
      {paths[name]}
    </svg>
  );
}
