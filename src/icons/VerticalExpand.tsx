import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function VerticalExpand({
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
        className="verticalExpand_svg__st0"
        d="M13.3 13.9v5l1.7-.1c.8 0 1.2 1 .6 1.6l-3 3c-.4.4-.9.4-1.3 0l-3-3c-.6-.6-.2-1.5.6-1.5l1.7.1v-5c0-.3.3-.6.6-.6h1.4c.4-.1.7.2.7.5zm-2.6-3.8v-5L9 5.2c-.8 0-1.2-1-.6-1.6l3-3c.4-.4.9-.4 1.3 0l3 3c.6.6.2 1.5-.6 1.5L13.4 5v5c0 .3-.3.6-.6.6h-1.4c-.4.1-.7-.2-.7-.5z"
      />
    </svg>
  );
}
export default VerticalExpand;
