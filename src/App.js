import "./App.css";

import AppRoutes from "~/routes";
import { UserAuthContextProvider } from "~/context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <AppRoutes />
    </UserAuthContextProvider>
  );
}

export default App;
