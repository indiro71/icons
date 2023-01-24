import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Minus({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M2.5 5.5h7v1h-7z" />
    </svg>
  );
}
export default Minus;
