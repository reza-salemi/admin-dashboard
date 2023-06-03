import { RouterProvider } from "react-router-dom";
import router from "./router-config";
import "./core/i18n";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
