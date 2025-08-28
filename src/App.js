import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <Router >
      <AppRoutes />
    </Router >
  );
};

export default App;
