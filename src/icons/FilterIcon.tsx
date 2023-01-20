import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FilterIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M12 28l6.4-4v-6.4L29.6 4H.8L12 17.6z" />
    </svg>
  );
}
export default FilterIcon;
