import { FieldValues } from "react-hook-form";
import { FormInputProps } from "./type";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import styles from "./form-input.module.css";

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
) => {
  const {
    name,
    placeholder,
    register,
    rules,
    error,
    type,
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  const errorMessage = error?.[name]?.message;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderRightIcon = () => {
    if (type === "password") {
      return <FaLock className={styles["input-icon"]} />;
    }
    return rightIcon || null;
  };

  const renderLeftIcon = () => {
    if (type === "password") {
      return (
        <span onClick={togglePasswordVisibility}>
          {leftIcon || (showPassword ? <FaEyeSlash /> : <FaEye />)}
        </span>
      );
    }
    return leftIcon || null;
  };

  const inputStyles =
    rightIcon || type === "password"
      ? { paddingRight: "1.6rem" }
      : { paddingRight: "0.7rem" };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={styles.wrapper}>
      <div className={styles["input-wrapper"]}>
        <div className={styles["right-icon"]}>{renderRightIcon()}</div>
        <div className={styles["left-icon"]}>{renderLeftIcon()}</div>
        <input
          name={name}
          placeholder={placeholder}
          className={`${styles["input-field"]} form-control ${
            error?.[name] && "is-invalid"
          }`}
          style={{ width: "100%", height: "42px", ...inputStyles }}
          type={inputType}
          {...rest}
          {...(register && register(name, rules))}
        />
      </div>
      {errorMessage && (
        <p style={{ color: "#d9534f", fontSize: "0.75rem" }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
