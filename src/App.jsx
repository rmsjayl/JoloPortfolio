import React, { Suspense } from "react";
import "@styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "@components/Preloader";

const Home = React.lazy(() => import("@components/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
