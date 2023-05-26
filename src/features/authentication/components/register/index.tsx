import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "@features/authentication/components/form-input";
import Button from "components/Button";

import {
  persianStrings,
  validationSchema,
} from "@features/authentication/constants";
import { RegisterFormData } from "./interface";

export const Register: React.FC = () => {
  const {
    alreadyRegistered,
    login,
    signIn,
    register: registerString,
    mobile,
    password,
    repeatPassword,
  } = persianStrings;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: RegisterFormData) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                name="mobile"
                error={errors}
                register={register}
                placeholder={mobile}
                type="number"
              />
              <FormInput
                name="password"
                placeholder={password}
                register={register}
                type="password"
                error={errors}
              />
              <FormInput
                name="passwordConfirm"
                placeholder={repeatPassword}
                register={register}
                type="password"
                error={errors}
              />
              <div className="text-center mt-3">
                <Button type="submit" className="btn-primary">
                  {registerString}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="lead" style={{ fontSize: "0.875rem" }}>
            {alreadyRegistered}
            <Link to="/login" className="me-2">
              {signIn}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
