import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ResizeIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 6 6"
      style={{
        backgroundColor: "#ffffff00",
      }}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M6 6H0V4.2h4.2V0H6v6z" opacity={0.302} />
    </svg>
  );
}
export default ResizeIcon;
