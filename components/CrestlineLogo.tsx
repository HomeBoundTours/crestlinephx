import CrestlineMark from "@/components/CrestlineMark";

type CrestlineLogoProps = {
  /** "dark" = for dark backgrounds (ivory text), "light" = for light backgrounds (navy text). */
  variant?: "dark" | "light";
  /** "md" for the header, "lg" for the footer. */
  size?: "md" | "lg";
  /** Hide the seal chip and show the wordmark only. */
  wordmarkOnly?: boolean;
};

/**
 * Crestline brand lockup: seal + stacked wordmark
 * (CRESTLINE over a green rule over CONSULTING).
 */
export default function CrestlineLogo({
  variant = "dark",
  size = "md",
  wordmarkOnly = false,
}: CrestlineLogoProps) {
  return (
    <span
      className={`pc-logo pc-logo-on-${variant}${size === "lg" ? " pc-logo-lg" : ""}`}
    >
      {!wordmarkOnly && <CrestlineMark chip size={size === "lg" ? 40 : 34} />}
      <span className="pc-logo-stack">
        <span className="pc-logo-word">CRESTLINE</span>
        <span className="pc-logo-rule" aria-hidden="true" />
        <span className="pc-logo-sub">CONSULTING</span>
      </span>
    </span>
  );
}
