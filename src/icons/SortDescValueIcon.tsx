import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SortDescValueIcon({
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
      <path d="M1.2 19.1h7.1v-2.4H1.2v2.4zm0-14.3v2.4h21.4V4.8H1.2zm0 8.4h14.3v-2.4H1.2v2.4zM22.4 9.5v9.3h-1.2v-8l-2.1 1-.4-.9 2.9-1.4h.8z" />
    </svg>
  );
}
export default SortDescValueIcon;
