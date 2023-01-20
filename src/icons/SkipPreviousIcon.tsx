import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SkipPreviousIcon({
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
      <path d="M4 2v20H2V2h2zm18 0L6 12l16 10V2z" />
    </svg>
  );
}
export default SkipPreviousIcon;
