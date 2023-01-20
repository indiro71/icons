import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Info({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450.56 450.56"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M225.28 0C101.376 0 0 101.376 0 225.28s101.376 225.28 225.28 225.28 225.28-101.376 225.28-225.28S349.184 0 225.28 0zm23.552 321.024h-48.128V183.296h48.128v137.728zm0-167.424h-48.128v-30.208h48.128V153.6z" />
    </svg>
  );
}
export default Info;
