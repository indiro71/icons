import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CategoryIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6 1h14M6 6h14M6 11h14M6 16h14M0 1h3M0 6h3M0 11h3M0 16h3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default CategoryIcon;
