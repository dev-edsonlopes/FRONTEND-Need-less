import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

export default function AppProvider() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
