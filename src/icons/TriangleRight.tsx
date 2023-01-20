import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function TriangleRight({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M13 8L3 16V0l10 8zm0 0" fillRule="evenodd" />
    </svg>
  );
}
export default TriangleRight;
