import { Outlet } from "react-router-dom";
import logo from "@assets/images/logo.svg";
import { persianStrings } from "@features/authentication/constants";

export const AuthenticationLayout = () => {
  const { title } = persianStrings;

  return (
    <>
      <div className="main d-flex justify-content-center w-100">
        <main className="content d-flex p-0">
          <div className="container d-flex flex-column">
            <div className="row h-100">
              <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <div className="text-center mb-4">
                    <img src={logo} style={{ height: "80px" }} alt="Logo" />
                    <h1 className="h2 mt-3">{title}</h1>
                  </div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
