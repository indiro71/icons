import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Icon3Ds({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="icon-3ds_svg__Ebene_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 33"
      xmlSpace="preserve"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>
        {".icon-3ds_svg__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#005386}"}
      </style>
      <g id="icon-3ds_svg__Symbols">
        <g
          id="icon-3ds_svg__DESKTOP_menu_notif_final"
          transform="translate(-71 -13)"
        >
          <g id="icon-3ds_svg__MENU">
            <g id="icon-3ds_svg__logo" transform="translate(71 13)">
              <path
                id="icon-3ds_svg__Fill-1"
                className="icon-3ds_svg__st0"
                d="M15.2.4c2.8-.1 6.1.5 6.7 2.4 1 3.2-4.1 7.9-8.5 10.2-1.1.6-1.7.7-2 .7-.3 0-.3-.3-.2-.5.2-.3.9-1 1.8-1.8 5-3.9 6.6-6.8 5.7-7.9-.6-.7-3.1-1.3-5.8-1.3-.7 0-2.6.2-2.8-.5C10 1.2 12.5.5 15.2.4"
              />
              <path
                id="icon-3ds_svg__Fill-3"
                className="icon-3ds_svg__st0"
                d="M9.4 15.2c2.4-.1 5.3.3 6.9 1.5.8.6 1.4 1.8 1 3.1-.9 3.7-4.4 8.2-12.2 11.6C2.6 32.5.7 32.9.3 32.6c-.4-.3.8-2.8 1.2-3.6 1.2-2.6 2.8-5.2 4.3-7.5.6-.9 1.4-2.4 2.2-2.2.7.1-.1 1.7-.7 2.7-.9 1.7-3.4 6.4-2.6 6.7 1.8.6 10.3-5.9 9.1-9.5-.6-1.7-4.3-1.8-6.6-1.8-1.1 0-3.4.3-3.5-.6-.1-.7 3.5-1.5 5.7-1.6"
              />
              <path
                id="icon-3ds_svg__Fill-5"
                className="icon-3ds_svg__st0"
                d="M27.8 11.2c1.4.3 2.6.5 2.9 1.1.3.7-1.3.7-2 .7-3.8.1-6 .1-6.2 1.4-.1 1.6 1.6 3.3 3.3 5.6 1.6 2.1 3.4 4.2 2.9 6.2-.6 2.4-3.6 3-6.5 3-2.7 0-5.3-.4-6.4-.6-1.4-.3-1.1-.9-.8-1.1.4-.2 2.7-.2 4.3-.3 1.3-.2 5.1-.2 5.7-1.2.7-1.2-1.1-3.2-2.7-5.4-2-2.7-4.3-5.4-3.1-7.5 1.6-2.5 6.1-2.4 8.6-1.9"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export default Icon3Ds;
