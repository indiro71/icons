import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowLong({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 7h15M1 7l5-5M1 7l5 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default ArrowLong;
