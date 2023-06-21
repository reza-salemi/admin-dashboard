import { useEffect } from "react";

import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
  useRouteError,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import FormInput from "@features/authentication/components/form-input";
import Button from "components/button";

import { validationSchema } from "@features/authentication/constants";
import { RegisterFormData } from "./interface";
import { httpService } from "core/http-service";

export const Register: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(validationSchema),
  });
  const { t } = useTranslation();

  const navigation = useNavigation();
  const submitForm = useSubmit();
  const navigate = useNavigate();
  const routerErrors = useRouteError();
  const isSuccessOperation = useActionData();

  const isSubmitting = navigation.state !== "idle";

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword, ...userData } = data;
    submitForm(userData, { method: "post" });
  };

  useEffect(() => {
    if (isSuccessOperation) {
      setTimeout(() => {
        navigate("./login");
      }, 2000);
    }
  }, [isSuccessOperation]);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center m-sm-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                name="mobile"
                error={errors}
                register={register}
                placeholder={t("auth.mobile")}
                type="number"
              />
              <FormInput
                name="password"
                placeholder={t("auth.password")}
                register={register}
                type="password"
                error={errors}
              />
              <FormInput
                name="confirmPassword"
                placeholder={t("auth.repeatPassword")}
                register={register}
                type="password"
                error={errors}
              />
              <div className="text-center mt-3">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn-primary"
                >
                  {isSubmitting ? t("auth.inProgress") : t("auth.register")}
                </Button>
              </div>
              {isSuccessOperation && (
                <div className="alert alert-success text-sucess p-2 mt-3">
                  {t("auth.successOperation")}
                </div>
              )}

              {routerErrors && (
                <div className="alert alert-danger text-danger p-2 mt-3">
                  {routerErrors.response?.data.map((error) => (
                    <p className="mb-0">{error.description}</p>
                  ))}
                </div>
              )}
            </Form>
          </div>
        </div>

        <div className="text-center">
          <p className="lead" style={{ fontSize: "0.875rem" }}>
            {t("auth.alreadyRegistered")}
            <Link to="/login" className="me-2">
              {t("auth.signIn")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export async function registerAction({ request }: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  return response.status === 200;
}
