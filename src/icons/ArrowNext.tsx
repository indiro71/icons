import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowNext({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M15.53 6.53a.75.75 0 000-1.06L10.757.697a.75.75 0 00-1.06 1.06L13.939 6l-4.242 4.243a.75.75 0 001.06 1.06L15.53 6.53zM0 6.75h15v-1.5H0v1.5z"
        fill="#000"
      />
    </svg>
  );
}
export default ArrowNext;
