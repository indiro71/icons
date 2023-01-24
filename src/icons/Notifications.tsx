import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Notifications({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 15H.1v.9H1V15zM1 1V.1H.1V1H1zm18 0h.9V.1H19V1zm0 14v.9h.9V15H19zM9 15v-.9h-.373l-.263.264L9 15zm-5 0h.9v-.9H4v.9zm0 5h-.9l1.536.636L4 20zm-2.1-5V1H.1v14h1.8zM1 1.9h18V.1H1v1.8zM18.1 1v14h1.8V1h-1.8zm.9 13.1H9v1.8h10v-1.8zM3.1 15v5h1.8v-5H3.1zm5.264-.636l-5 5 1.272 1.272 5-5-1.272-1.272zM1 15.9h3v-1.8H1v1.8z"
        fill="currentColor"
      />
      <path d="M4 6h12M4 10h10" stroke="currentColor" strokeWidth={1.8} />
    </svg>
  );
}
export default Notifications;
