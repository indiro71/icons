import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Start({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="-18 0 320 320.009"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M279.203 158.61l-264-157.2a10.064 10.064 0 00-15.2 8.598v300a10.117 10.117 0 004.903 8.601 10.087 10.087 0 009.899.2l264-142.801a10.072 10.072 0 00.398-17.398zm0 0" />
    </svg>
  );
}
export default Start;
