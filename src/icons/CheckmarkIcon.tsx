import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CheckmarkIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11.61 28.504L.265 17.159l3.2-3.2 8.145 8.124L28.83 4.862l3.2 3.221z" />
    </svg>
  );
}
export default CheckmarkIcon;
