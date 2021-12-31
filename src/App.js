import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Drawer from "./Components/Drawer";
import theme from "./Components/theme";
import Dashboard from "./Screens/Dashboard";
import Members from "./Screens/Members";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Drawer>
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Drawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
