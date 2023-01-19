import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function AddPersonIcon({
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
        d="M23 19h-6v2h6v-2zm-2 4v-6h-2v6h2zM8 22v1H7v-1h1zm0-2H7l.445-.832L8 20zm6-4l-.555-.832.527-.351.543.325L14 16zm-5 4v2H7v-2h2zm5.555-3.168l-6 4-1.11-1.664 6-4 1.11 1.664zm1.43 1.526l-2.5-1.5 1.03-1.716 2.5 1.5-1.03 1.716zM8 21h8v2H8v-2z"
        fill="currentColor"
      />
      <path
        d="M11 14v1l-1-1h1zm0-6h-1l1-1v1zm6 6h1l-1 1v-1zm0-6V7l1 1h-1zm-5 0v6h-2V8h2zm-1 5h6v2h-6v-2zm5 1V8h2v6h-2zm1-5h-6V7h6v2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default AddPersonIcon;
