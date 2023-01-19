import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Outline({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path id="outline_svg__a" d="M0 0h24v24H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="outline_svg__b" fill="#fff">
          <use xlinkHref="#outline_svg__a" />
        </mask>
        <use fillOpacity={0} fill="#FFF" xlinkHref="#outline_svg__a" />
        <path
          d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm.75 3.71v3.789l3.79.001v1.5l-3.79-.001v3.79h-1.5v-3.79l-3.79.001v-1.5l3.79-.001V7.461h1.5z"
          fill="#00497A"
          mask="url(#outline_svg__b)"
        />
      </g>
    </svg>
  );
}
export default Outline;
