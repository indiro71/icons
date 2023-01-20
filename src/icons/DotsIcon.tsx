import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DotsIcon({
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
      <path fill="currentColor" d="M5 13h4v4H5zM13 13h4v4h-4zM21 13h4v4h-4z" />
    </svg>
  );
}
export default DotsIcon;
