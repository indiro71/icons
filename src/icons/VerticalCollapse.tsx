import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function VerticalCollapse({
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
        className="verticalCollapse_svg__st0"
        d="M10.7 22.4v-5.3l-1.7.1c-.8 0-1.2-1-.6-1.5l3-3c.4-.4.9-.4 1.3 0l3 3c.6.6.2 1.5-.6 1.5l-1.7-.1v5.3c0 .3-.3.6-.6.6h-1.4c-.4 0-.7-.2-.7-.6zm2.6-20.8v5.3l1.7-.1c.8 0 1.2 1 .6 1.5l-3 3c-.4.4-.9.4-1.3 0l-3-3c-.5-.5-.1-1.5.7-1.5l1.7.1V1.6c0-.4.3-.6.6-.6h1.4c.3 0 .6.2.6.6z"
      />
    </svg>
  );
}
export default VerticalCollapse;
