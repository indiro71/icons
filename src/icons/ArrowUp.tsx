import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowUp({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        className="arrowUp_svg__st0"
        d="M1.2 12.5h6.3V24h9.1V12.5h6.3L12 0 1.2 12.5z"
      />
    </svg>
  );
}
export default ArrowUp;
