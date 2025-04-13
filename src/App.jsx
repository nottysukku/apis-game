import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Joke from "./components/Joke";
import Crypto from "./components/Crypto";
import Cocktail from "./components/Cocktail";
import User from "./components/User";
import IP from "./components/IP";
import Dog from "./components/Dog";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="container my-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h1 className="text-center">Welcome to API Integration Website</h1>
          </div>
          <div className="card-body">
            <p className="lead text-center">Select a feature to explore:</p>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
              {/* Original APIs */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-light">Original APIs</div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <Link to="/joke" className="text-decoration-none">Get a Personalized Joke</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/crypto" className="text-decoration-none">Get Cryptocurrency Prices</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/cocktail" className="text-decoration-none">Get a Random Cocktail Recipe</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* New APIs */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-info text-white">New APIs</div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <Link to="/user" className="text-decoration-none">Generate Random User Profile</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/ip" className="text-decoration-none">Check Your IP Geolocation</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/dog" className="text-decoration-none">View Random Dog Images</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-warning mt-4">
              <small>Note: Weather and UV index features have been removed as they required API keys.</small>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/joke" element={<Joke />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/user" element={<User />} />
          <Route path="/ip" element={<IP />} />
          <Route path="/dog" element={<Dog />} />
        </Routes>

        <footer className="text-center mt-4">
          <p>© 2025 API Integration Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
