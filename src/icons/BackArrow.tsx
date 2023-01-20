import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function BackArrow({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        strokeWidth={2}
        stroke="#000"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 10H1M1 10l8.062-8.062M1 10l8.062 8.062" />
      </g>
    </svg>
  );
}
export default BackArrow;
