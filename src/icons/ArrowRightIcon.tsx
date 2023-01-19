import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowRightIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M21.883 12l-7.527 6.235L15 19l9-7.521L15 4l-.645.764L21.884 11H0v1h21.883z" />
    </svg>
  );
}
export default ArrowRightIcon;
