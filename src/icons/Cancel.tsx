import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Cancel({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 489 489"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M244.5 0C109.3 0 0 109.3 0 244.5S109.3 489 244.5 489 489 379.7 489 244.5 379.7 0 244.5 0zm0 448.4c-112.4 0-203.9-91.5-203.9-203.9S132.1 40.6 244.5 40.6s203.9 91.5 203.9 203.9-91.5 203.9-203.9 203.9z" />
      <path d="M354.8 134.2c-8.3-8.3-20.8-8.3-29.1 0l-81.2 81.2-81.1-81.1c-8.3-8.3-20.8-8.3-29.1 0s-8.3 20.8 0 29.1l81.1 81.1-81.1 81.1c-8.3 8.3-8.6 21.1 0 29.1 6.5 6 18.8 10.4 29.1 0l81.1-81.1 81.1 81.1c12.4 11.7 25 4.2 29.1 0 8.3-8.3 8.3-20.8 0-29.1l-81.1-81.1 81.1-81.1c8.4-8.4 8.4-20.9.1-29.2z" />
    </svg>
  );
}
export default Cancel;
