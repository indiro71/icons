import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function MinusIcon({
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
      <path d="M19 13H5v-2h14v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}
export default MinusIcon;
