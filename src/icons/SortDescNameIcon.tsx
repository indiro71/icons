import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SortDescNameIcon({
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
      <path d="M1.2 19.1h7.1v-2.4H1.2v2.4zm0-14.3v2.4h21.4V4.8H1.2zm0 8.4h14.3v-2.4H1.2v2.4zM19 10.4h1.3l2.9 8.5h-1.1l-.8-2.3H18l-.8 2.3h-1.1l2.9-8.5zm2.1 5.2l-1.4-4.2-1.4 4.2h2.8z" />
    </svg>
  );
}
export default SortDescNameIcon;
