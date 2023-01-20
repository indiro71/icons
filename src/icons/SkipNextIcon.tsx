import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SkipNextIcon({
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
      <path d="M20 22V2h2v20h-2zM2 22l16-10L2 2v20z" />
    </svg>
  );
}
export default SkipNextIcon;
