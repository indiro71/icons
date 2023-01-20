import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SeparatorIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 13l6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default SeparatorIcon;
