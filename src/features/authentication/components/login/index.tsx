import { Link } from "react-router-dom";
import logo from "@assets/images/logo.svg";
import FormInput from "@features/authentication/components/form-input";

import { persianStrings } from "@features/authentication/constants";

export const Login: React.FC = () => {
  const { help, notRegisteredYet, login, register, title, mobile, password } =
    persianStrings;

  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} alt="Logo" />
        <h1 className="h2">{title}</h1>
        <p className="lead">{help}</p>
        <p className="lead">
          {notRegisteredYet}
          <Link to="/register" className="me-2">
            {register}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form>
              <FormInput name="mobile" placeholder={mobile} type="text" />
              <FormInput
                name="password"
                placeholder={password}
                type="password"
              />
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  {login}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
