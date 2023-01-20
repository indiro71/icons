import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ChevronLeftSolid({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="chevron-left"
      className="chevron-left-solid_svg__svg-inline--fa chevron-left-solid_svg__fa-chevron-left chevron-left-solid_svg__fa-w-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      />
    </svg>
  );
}
export default ChevronLeftSolid;
