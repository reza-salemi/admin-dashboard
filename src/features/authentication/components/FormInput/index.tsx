import { FormInputProps } from "./type";

const FormInput: React.FC<FormInputProps> = ({ label, type, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control form-control-lg" type={type} {...rest} />
    </div>
  );
};

export default FormInput;