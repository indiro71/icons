import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function LeaveIcon({
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
        d="M23 21h1l-1 1v-1zm0-12V8l1 1h-1zm-8 11h8v2h-8v-2zm7 1V9h2v12h-2zm1-11h-8V8h8v2zM8 15l-.707-.707v1.414L8 15zm.707.707l4-4-1.414-1.414-4 4 1.414 1.414zm4 2.586l-4-4-1.414 1.414 4 4 1.414-1.414zM19 14H8v2h11v-2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default LeaveIcon;
