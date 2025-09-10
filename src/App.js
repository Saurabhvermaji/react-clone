import React from "react";
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter basename="/react-clone">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
