import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowRight({
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
        className="arrowRight_svg__st0"
        d="M11.5 1.2v6.3H0v9.1h11.5v6.3L24 12 11.5 1.2z"
      />
    </svg>
  );
}
export default ArrowRight;
