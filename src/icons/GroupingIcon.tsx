import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function GroupingIcon({
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
      <path d="M2 2v4h1v12H2v4h4v-1h12v1h4v-4h-1V6h1V2h-4v1H6V2H2zm4 3h12v1h1v12h-1v1H6v-1H5V6h1V5zm1 2v6h6V7H7zm7 4v3h-3v3h6v-6h-3z" />
    </svg>
  );
}
export default GroupingIcon;
