import { FieldValues } from "react-hook-form";
import { FormInputProps } from "./type";

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
) => {
  const { name, placeholder, register, rules, error, ...rest } = props;
  const errorMessage = error?.[name]?.message;

  return (
    <div className="mb-3">
      <input
        name={name}
        placeholder={placeholder}
        className={`form-control ${error?.[name] && "is-invalid"}`}
        style={{ width: "300px", height: "42px" }}
        {...rest}
        {...(register && register(name, rules))}
      />
      {errorMessage && <p style={{ color: "#d9534f" }}>{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
