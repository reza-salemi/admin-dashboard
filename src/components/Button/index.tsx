import { ButtonProps } from "./interface";

export default function Button({
  width = "390px",
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
        borderRadius: "0.438rem",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
