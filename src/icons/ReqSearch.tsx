import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ReqSearch({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="reqSearch_svg__a">
          <stop stopColor="#9bdbfa" offset={0} />
          <stop stopColor="#36657d" offset={1} />
        </linearGradient>
        <linearGradient
          xlinkHref="#reqSearch_svg__a"
          id="reqSearch_svg__b"
          x1={0.132}
          y1={0.184}
          x2={0.816}
          y2={0.868}
        />
      </defs>
      <g stroke="null">
        <circle
          stroke="#000"
          fill="url(#reqSearch_svg__b)"
          strokeWidth={0.579}
          cy={10.642}
          cx={6.129}
          r={5.698}
        />
        <circle
          stroke="#000"
          fill="none"
          strokeWidth={0.8}
          cx={6.129}
          cy={10.642}
          r={3.05}
        />
        <path strokeWidth={0.69} d="M5.879 5.711h.5v9.863h-.5z" />
        <path
          transform="matrix(0 -.6164 .62555 0 7.755 1.227)"
          strokeWidth={0.69}
          d="M-15.673-10.598h.8v16h-.8z"
        />
      </g>
      <g stroke="null">
        <circle
          stroke="#000"
          fill="url(#reqSearch_svg__b)"
          strokeWidth={0.579}
          cy={15.71}
          cx={8.081}
          r={5.013}
        />
        <circle
          stroke="#000"
          fill="none"
          strokeWidth={0.8}
          cx={8.081}
          cy={15.71}
          r={2.683}
        />
        <path strokeWidth={0.69} d="M7.86 11.372h.443v8.677H7.86z" />
        <path
          transform="matrix(0 -.5423 .55411 0 7.169 2.341)"
          strokeWidth={0.69}
          d="M-25.052-6.353h.8v16h-.8z"
        />
      </g>
      <path
        d="M20.525 19.556c.16 0 .319 0 .478-.08.16-.079.32-.158.479-.316.16-.158.24-.317.319-.475s.08-.317.08-.475 0-.317-.08-.475-.16-.317-.32-.475l-5.024-4.988c.399-.633.718-1.266.957-1.979s.319-1.425.319-2.216c0-1.03-.16-1.98-.558-2.93s-.957-1.662-1.596-2.375c-.638-.712-1.515-1.187-2.392-1.583S11.272.556 10.235.556s-1.994.158-2.95.554c-.878.396-1.676.95-2.394 1.583S3.695 4.197 3.296 5.068s-.558 1.9-.558 2.93.16 1.979.558 2.929.957 1.662 1.595 2.375c.718.712 1.516 1.187 2.393 1.583s1.914.554 2.951.554c.798 0 1.516-.08 2.234-.317a9.208 9.208 0 001.994-.95l5.025 4.988c.16.158.319.237.478.317.16.079.4.079.559.079zM10.235 2.139c.798 0 1.596.158 2.313.475s1.356.713 1.915 1.267.957 1.187 1.276 1.9.479 1.504.479 2.296-.16 1.583-.479 2.295-.718 1.346-1.276 1.9-1.197.95-1.915 1.267c-.717.317-1.515.475-2.313.475s-1.595-.158-2.313-.475-1.356-.712-1.914-1.267-.957-1.187-1.276-1.9-.479-1.504-.479-2.295.16-1.584.479-2.296.718-1.346 1.276-1.9 1.196-.95 1.914-1.267 1.516-.475 2.313-.475z"
        stroke="null"
      />
    </svg>
  );
}
export default ReqSearch;
