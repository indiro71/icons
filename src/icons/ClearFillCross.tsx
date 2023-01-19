import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ClearFillCross({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M22 24c.6 0 1-.2 1.4-.6s.6-.8.6-1.4V2c0-.6-.2-1-.6-1.4S22.6 0 22 0H2C1.4 0 1 .2.6.6S0 1.4 0 2v20c0 .6.2 1 .6 1.4s.8.6 1.4.6h20zm-7.2-12l4.2 4.2-2.8 2.8-4.2-4.2L7.8 19 5 16.2 9.2 12 4.9 7.8 7.7 5 12 9.2 16.2 5 19 7.8 14.8 12z" />
    </svg>
  );
}
export default ClearFillCross;
