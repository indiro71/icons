import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ErrorIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 368.022 368.022"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M314.101 54.133c71.79 71.847 71.744 188.287-.103 260.077s-188.287 71.744-260.077-.103c-71.75-71.806-71.75-188.167 0-259.974 71.381-71.847 187.49-72.224 259.337-.843.282.28.563.561.843.843z"
        fill="#d7443e"
      />
      <path
        fill="#d4e1f4"
        d="M275.439 124.663l-59.559 59.56 59.559 59.559-31.869 31.869-59.559-59.559-59.559 59.559-31.87-31.869 59.56-59.559-59.56-59.56 31.87-31.869 59.559 59.559 59.559-59.559z"
      />
    </svg>
  );
}
export default ErrorIcon;
