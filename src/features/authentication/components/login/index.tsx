import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import FormInput from "@features/authentication/components/form-input";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center m-sm-4">
            <form>
              <FormInput
                name="mobile"
                placeholder={t("auth.mobile")}
                type="number"
              />
              <FormInput
                name="password"
                placeholder={t("auth.password")}
                type="password"
              />
              <div className="text-center mt-3">
                <Button className="btn-primary" type="submit">
                  {t("auth.login")}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="lead" style={{ fontSize: "0.875rem" }}>
            {t("auth.notRegisteredYet")}
            <Link to="/register" className="me-2">
              {t("auth.createAccount")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
