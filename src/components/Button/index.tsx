import { ButtonProps } from "./interface";

export default function Button({
  width = "300px",
  height = "42px",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="btn"
      style={{
        width,
        height,
        fontSize: "1rem",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
