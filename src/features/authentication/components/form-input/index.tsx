import { FieldValues } from "react-hook-form";
import { FormInputProps } from "./type";
import { FaMobile, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
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
      return <FaLock />;
    }
    if (type === "number") {
      return <FaMobile />;
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

  const inputType = type === "password" && showPassword ? "text" : type;

  const isErrorEmpty = !error?.[name];

  return (
    <div className={`${styles.wrapper} ${isErrorEmpty && styles["mb-2"]}`}>
      <div className={styles["input-wrapper"]}>
        <div className={styles["right-icon"]}>{renderRightIcon()}</div>
        <div className={styles["left-icon"]}>{renderLeftIcon()}</div>
        <input
          name={name}
          placeholder={placeholder}
          className={`${styles["input-field"]} form-control ${
            error?.[name] && "is-invalid"
          }`}
          style={{ width: "100%", height: "42px", paddingRight: "1.6rem" }}
          type={inputType}
          {...rest}
          {...(register && register(name, rules))}
        />
      </div>
      {errorMessage && (
        <p className={styles["error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
