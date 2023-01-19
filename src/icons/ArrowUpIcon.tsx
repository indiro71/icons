import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowUpIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrowUpIcon_svg__arrow-up"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M24 16.67l-2.829 2.83-9.175-9.339L2.829 19.5 0 16.67 11.996 4.5z" />
    </svg>
  );
}
export default ArrowUpIcon;
