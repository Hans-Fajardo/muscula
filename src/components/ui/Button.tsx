import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button = ({ variant = "primary", size = "medium", ...props }: Props) => {
  return <button {...props}></button>;
};

export default Button;
