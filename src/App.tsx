import { AuthProvider } from "./context/AuthProvider";
import AppProvider from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider />
    </AuthProvider>
  );
}
