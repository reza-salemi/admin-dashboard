import logo from "@assets/images/logo.svg";
import FormInput from "@features/authentication/components/form-input";

import { persianStrings } from "@features/authentication/constants";

export const Login: React.FC = () => {
  const { help, notRegisteredYet, login, register, title, mobile, password } =
    persianStrings;

  return (
    <div className="main d-flex justify-content-center w-100">
      <main className="content d-flex p-0">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <img src={logo} style={{ height: "100px" }} alt="Logo" />
                  <h1 className="h2">{title}</h1>
                  <p className="lead">{help}</p>
                  <p className="lead">
                    {notRegisteredYet}
                    <a className="me-2">{register}</a>
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <form>
                        <FormInput label={mobile} type="text" />
                        <FormInput label={password} type="password" />
                        <div className="text-center mt-3">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary"
                          >
                            {login}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
