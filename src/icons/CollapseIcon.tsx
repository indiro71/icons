import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CollapseIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M23 20l-5-4 5-4M7 20l5-4-5-4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default CollapseIcon;
