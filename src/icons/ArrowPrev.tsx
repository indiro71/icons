import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowPrev({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M.47 5.47a.75.75 0 000 1.06l4.773 4.773a.75.75 0 101.06-1.06L2.061 6l4.242-4.243a.75.75 0 00-1.06-1.06L.47 5.47zM16 5.25H1v1.5h15v-1.5z"
        fill="#000"
      />
    </svg>
  );
}
export default ArrowPrev;
