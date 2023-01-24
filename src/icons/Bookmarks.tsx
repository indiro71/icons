import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Bookmarks({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18 16v-.9h-.9v.9h.9zm0 18h-.9l1.346.781L18 34zm14-18h.9v-.9H32v.9zm0 18l-.447.781L32.9 34H32zm-7-4l.447-.781-.447-.256-.447.256L25 30zm-6.1 4V16h-1.8v18h1.8zM18 16.9h14v-1.8H18v1.8zm13.1-.9v18h1.8V16h-1.8zm1.346 17.219l-7-4-.893 1.562 7 4 .893-1.562zm-7.892-4l-7 4 .893 1.562 7-4-.893-1.562z"
        fill="currentColor"
      />
    </svg>
  );
}
export default Bookmarks;
