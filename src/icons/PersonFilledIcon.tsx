import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PersonFilledIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1 15v-2l6-4 6 4v2H1z" fill="currentColor" />
      <path
        d="M1 13H0l.445-.832L1 13zm0 2v1H0v-1h1zm12 0h1v1h-1v-1zm0-2l.555-.832L14 13h-1zM7 9l-.555-.832.555-.37.555.37L7 9zm-5 4v2H0v-2h2zm-1 1h12v2H1v-2zm11 1v-2h2v2h-2zm.445-1.168l-6-4 1.11-1.664 6 4-1.11 1.664zm-4.89-4l-6 4-1.11-1.664 6-4 1.11 1.664zM4 7V1h6v6H4z"
        fill="currentColor"
      />
      <path
        d="M4 1H3l1-1v1zm0 6v1L3 7h1zm6 0h1l-1 1V7zm0-6V0l1 1h-1zM5 1v6H3V1h2zM4 6h6v2H4V6zm5 1V1h2v6H9zm1-5H4V0h6v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default PersonFilledIcon;
