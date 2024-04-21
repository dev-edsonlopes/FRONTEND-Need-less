import { ComponentProps } from "react";

interface NavProps extends ComponentProps<"a"> {
  children: string;
}

export default function NavLink(props: NavProps) {
  return (
      <a {...props}>{props.children}</a>
  );
}
