import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Register from "./pages/Register";
import Topics from "./pages/Topics";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

import { AddOnsProvider } from "./context/AddOnsContext";
import { UserInfoProvider } from './context/UserInfoContext';


const App = () => {

  return (

    <UserInfoProvider>
      <AddOnsProvider>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AddOnsProvider>
    </UserInfoProvider>

  );
};

export default App;