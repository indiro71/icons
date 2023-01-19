import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowDown({
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
      <path
        className="arrowDown_svg__st0"
        d="M22.8 11.5h-6.3V0h-9v11.5H1.2L12 24l10.8-12.5z"
      />
    </svg>
  );
}
export default ArrowDown;
