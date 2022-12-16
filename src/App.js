import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";
import { dashboardTheme } from "./mainTheme/mainTheme";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Authentication = lazy(() =>
  import("./pages/authentication/Authentication")
);
const Database = lazy(() => import("./pages/database/Database"));
const Functions = lazy(() => import("./pages/functions/Functions"));
const MachineLearning = lazy(() =>
  import("./pages/machineLearning/MachineLearning")
);
const Hosting = lazy(() =>
  import("./pages/hosting/Hosting")
);
const Storage = lazy(() =>
  import("./pages/storage/Storage")
);

function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="authentication" element={<Authentication />} />
              <Route path="database" element={<Database />} />
              <Route path="functions" element={<Functions />} />
              <Route path="hosting" element={<Hosting />} />
              <Route path="machine-learning" element={<MachineLearning />} />
              <Route path="storage" element={<Storage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
