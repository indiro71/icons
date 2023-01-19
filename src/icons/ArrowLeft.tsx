import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ArrowLeft({
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
        className="arrowLeft_svg__st0"
        d="M12.5 22.8v-6.3H24v-9H12.5V1.2L0 12l12.5 10.8z"
      />
    </svg>
  );
}
export default ArrowLeft;
