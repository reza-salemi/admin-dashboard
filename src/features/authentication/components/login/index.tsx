import { Link } from "react-router-dom";

import Button from "components/button";
import FormInput from "@features/authentication/components/form-input";

import { persianStrings } from "@features/authentication/constants";

export const Login: React.FC = () => {
  const { createAccount, notRegisteredYet, login, mobile, password } =
    persianStrings;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center m-sm-4">
            <form>
              <FormInput name="mobile" placeholder={mobile} type="number" />
              <FormInput
                name="password"
                placeholder={password}
                type="password"
              />
              <div className="text-center mt-3">
                <Button className="btn-primary" type="submit">
                  {login}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="lead" style={{ fontSize: "0.875rem" }}>
            {notRegisteredYet}
            <Link to="/register" className="me-2">
              {createAccount}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
