import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "@assets/images/logo.svg";
import FormInput from "@features/authentication/components/form-input";

import { persianStrings } from "@features/authentication/constants";

export const Register: React.FC = () => {
  const {
    alreadyRegistered,
    help,
    login,
    register: registerString,
    mobile,
    password,
    repeatPassword,
    title,
  } = persianStrings;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">{title}</h1>
        <p className="lead">{help}</p>
        <p className="lead">
          {alreadyRegistered}
          <Link to="/login" className="me-2">
            {login}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                {...register("mobile", {
                  required: "موبایل الزامی است",
                  maxLength: 11,
                  minLength: 11,
                })}
                error={errors.mobile?.message}
                label={mobile}
                type="text"
              />
              <FormInput label={password} type="password" />
              <FormInput label={repeatPassword} type="password" />
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  {registerString}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
