import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function App({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 13v8h8v-8H1zM1 1v8h8V1H1zM13 13v8h8v-8h-8zM13 1v8h8V1h-8z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default App;
