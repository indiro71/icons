import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PersonIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9 22v1H8v-1h1zm0-2H8l.445-.832L9 20zm12 2h1v1h-1v-1zm0-2l.555-.832L22 20h-1zm-6-4l-.555-.832.555-.37.555.37L15 16zm-5 4v2H8v-2h2zm-1 1h12v2H9v-2zm11 1v-2h2v2h-2zm.445-1.168l-6-4 1.11-1.664 6 4-1.11 1.664zm-4.89-4l-6 4-1.11-1.664 6-4 1.11 1.664z"
        fill="currentColor"
      />
      <path
        d="M12 14v1l-1-1h1zm0-6h-1l1-1v1zm6 6h1l-1 1v-1zm0-6V7l1 1h-1zm-5 0v6h-2V8h2zm-1 5h6v2h-6v-2zm5 1V8h2v6h-2zm1-5h-6V7h6v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default PersonIcon;
