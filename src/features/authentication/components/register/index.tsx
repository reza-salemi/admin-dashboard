import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "@assets/images/logo.svg";
import FormInput from "@features/authentication/components/form-input";

import {
  persianStrings,
  validationRules,
} from "@features/authentication/constants";
import { RegisterFormData } from "./interface";

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
  } = useForm<RegisterFormData>();

  const {
    mobile: mobileValidationRules,
    password: passwordValidationRules,
    "repeat-password": repeatPasswordValidationRules,
  } = validationRules;

  const onSubmit = (data: RegisterFormData) => console.log(data);

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
                name="mobile"
                error={errors}
                register={register}
                rules={mobileValidationRules}
                label={mobile}
                type="text"
              />
              <FormInput
                name="password"
                rules={passwordValidationRules}
                label={password}
                register={register}
                type="password"
                error={errors}
              />
              <FormInput
                name="repeatPassword"
                rules={repeatPasswordValidationRules}
                label={repeatPassword}
                register={register}
                type="password"
                error={errors}
              />
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
