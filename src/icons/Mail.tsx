import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Mail({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M17 18v1l1-1h-1zM1 18H0l1 1v-1zM17 7h1l-.47-.848L17 7zM1 7l-.53-.848L0 7h1zm8 5l-.53.848.53.331.53-.331L9 12zM9 2l.53-.848L9 .821l-.53.331L9 2zm8 15H1v2h16v-2zM0 7v11h2V7H0zm18 11V7h-2v11h2zM16.47 6.152l-8 5 1.06 1.696 8-5-1.06-1.696zm-6.94 5l-8-5L.47 7.848l8 5 1.06-1.696zm8-5l-8-5-1.06 1.696 8 5 1.06-1.696zm-9.06-5l-8 5 1.06 1.696 8-5-1.06-1.696z"
        fill="currentColor"
      />
    </svg>
  );
}
export default Mail;
