import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Logout({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M17 15h.9l-.9.9V15zm0-14V.1l.9.9H17zM9 14.1h8v1.8H9v-1.8zm7.1.9V1h1.8v14h-1.8zM17 1.9H9V.1h8v1.8zM1 8l-.636-.636v1.272L1 8zm.636.636l5-5-1.272-1.272-5 5 1.272 1.272zm5 3.728l-5-5L.364 8.636l5 5 1.272-1.272zM12 7.1H1v1.8h11V7.1z"
        fill="currentColor"
      />
    </svg>
  );
}
export default Logout;
