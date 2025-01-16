import { SVGProps } from "react"

export function TableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 5v14" />
      <path d="M21 5v14" />
      <path d="M3 5h18" />
      <path d="M3 10h18" />
    </svg>
  )
}

export function ChairIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 19v2" />
      <path d="M18 19v2" />
      <path d="M6 5v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5" />
      <path d="M5 5h14" />
      <path d="M6 9h12" />
    </svg>
  )
}

