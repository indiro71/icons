import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Search({
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
      <path d="M22.3 24c.2 0 .4 0 .6-.1.2-.1.4-.2.6-.4.2-.2.3-.4.4-.6s.1-.4.1-.6 0-.4-.1-.6-.2-.4-.4-.6l-6.3-6.3c.5-.8.9-1.6 1.2-2.5s.4-1.8.4-2.8c0-1.3-.2-2.5-.7-3.7s-1.2-2.1-2-3c-.8-.9-1.9-1.5-3-2S10.7 0 9.4 0 6.9.2 5.7.7c-1.1.5-2.1 1.2-3 2s-1.5 1.9-2 3S0 8.1 0 9.4s.2 2.5.7 3.7 1.2 2.1 2 3c.9.9 1.9 1.5 3 2s2.4.7 3.7.7c1 0 1.9-.1 2.8-.4.9-.3 1.7-.7 2.5-1.2l6.3 6.3c.2.2.4.3.6.4.2.1.5.1.7.1zM9.4 2c1 0 2 .2 2.9.6s1.7.9 2.4 1.6 1.2 1.5 1.6 2.4.6 1.9.6 2.9-.2 2-.6 2.9-.9 1.7-1.6 2.4-1.5 1.2-2.4 1.6c-.9.4-1.9.6-2.9.6s-2-.2-2.9-.6-1.7-.9-2.4-1.6-1.2-1.5-1.6-2.4-.6-1.9-.6-2.9.2-2 .6-2.9.9-1.7 1.6-2.4S5.6 3 6.5 2.6 8.4 2 9.4 2z" />
    </svg>
  );
}
export default Search;
