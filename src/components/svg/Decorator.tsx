import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDecorator = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1000 100"
    role="img"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="var(--primary-color)"
      d="M473 67.3c-203.9 88.3-263.1-34-320.3 0C66 119.1 0 59.7 0 59.7V0h1000v59.7S937.9 85.8 905.1 89c-32.8 3.3-62.8-12.3-75.8-22.1-23.3-17.3-84-58.2-134.4-62.2S492.4 59 473 67.3z"
      opacity={0.33}
    />
    <path
      fill="var(--primary-color)"
      d="M734 67.3c-45.5 0-77.2-23.2-129.1-39.1-28.6-8.7-150.3-10.1-254 39.1s-91.7-34.4-149.2 0C115.7 118.3 0 39.8 0 39.8V0h1000v36.5S971.8 18 907.9 18c-97.7.1-132.2 49.3-173.9 49.3z"
      opacity={0.66}
    />
    <path
      fill="var(--primary-color)"
      d="M766.1 28.9c-200-57.5-266 65.5-395.1 19.5-129-46.6-129-43-186.2-27.8-56.8 15.2-52.5 24.3-94.9 31.9C28.6 63.7 0 0 0 0h1000s-9.9 40.9-83.6 48.1-86.8-1.1-150.3-19.2z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDecorator);
export default ForwardRef;
