import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SortAscNameIcon({
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
      <path d="M1.2 4.8h7.1v2.4H1.2V4.8zm0 14.3v-2.4h21.4v2.4H1.2zm0-8.3h14.3v2.4H1.2v-2.4zM19.2 4.4h1.3l2.9 8.5h-1.1l-.8-2.3H18l-.6 2.4h-1.1l2.9-8.6zm2.1 5.3l-1.4-4.2-1.4 4.2h2.8z" />
    </svg>
  );
}
export default SortAscNameIcon;
