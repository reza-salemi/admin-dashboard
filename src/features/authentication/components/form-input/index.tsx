import { FieldValues } from "react-hook-form";
import { FormInputProps } from "./type";

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
) => {
  const { name, label, register, rules, error, ...rest } = props;
  const errorMessage = error?.[name]?.message;

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        name={name}
        className={`form-control form-control-lg ${
          error?.[name] && "is-invalid"
        }`}
        {...rest}
        {...(register && register(name, rules))}
      />
      {errorMessage && <p style={{ color: "#d9534f" }}>{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
