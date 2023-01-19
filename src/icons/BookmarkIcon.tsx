import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function BookmarkIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect ry={0} x={2} height={16} width={1} fill="#b4b6ba" />
      <rect ry={0} x={13} height={16} width={1} fill="#b4b6ba" />
      <path d="M4 0v15l4-3 4 3V0H4" fill="#b4b6ba" />
    </svg>
  );
}
export default BookmarkIcon;
