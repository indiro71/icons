import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SendIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" />
      <path d="M0 0h48v48H0z" fill="none" />
    </svg>
  );
}
export default SendIcon;
