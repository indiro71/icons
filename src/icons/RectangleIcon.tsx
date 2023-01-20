import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function RectangleIcon({
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
      <rect width="100%" height="100%" rx={5} fill="currentColor" />
    </svg>
  );
}
export default RectangleIcon;
