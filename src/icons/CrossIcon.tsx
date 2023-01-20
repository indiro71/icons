import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CrossIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 1l6 6m0 0l6-6M7 7l-6 6m6-6l6 6"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}
export default CrossIcon;
