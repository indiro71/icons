import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ChapterIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 22 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 1.99981 -.006 -3.997)"
          r={1.002}
          fy={8.997}
          fx={19.004}
          cy={8.997}
          cx={19.004}
          id="chapterIcon_svg__b"
          xlinkHref="#chapterIcon_svg__a"
        />
        <linearGradient id="chapterIcon_svg__a">
          <stop offset={0} stopColor="#6fb4d2" />
          <stop offset={1} stopColor="#397895" stopOpacity={0.961} />
        </linearGradient>
      </defs>
      <path d="M1 19.638V1h20v20H1zM17 13V6h3V2H2v18h15zm3 5.5V17h-2v3h2zm0-4.5v-2h-2v4h2zm0-5V7h-2v4h2z" />
      <path
        d="M3 4v1h13V4H3zm0 3v1h13V7H3zm0 3v1h13v-1H3zm0 3v1h13v-1H3z"
        fill="#777"
      />
      <path
        d="M17.996 14.002v-1.997l.34-.008c.435-.01.906-.01 1.33 0l.334.008V15.998h-2.004z"
        fill="url(#chapterIcon_svg__b)"
      />
      <path
        d="M2 2v18h15V6h3V2H2zm1 2h13v1H3V4zm0 3h13v1H3V7zm15.197 0l-.199.006V11H20V7.004l-.053-.002A83.987 83.987 0 0018.197 7zM3 10h13v1H3v-1zm0 3h13v1H3v-1zm14.986 3.998v2.998h2.01v-2.998h-2.01z"
        fill="#e0e1df"
      />
    </svg>
  );
}
export default ChapterIcon;
