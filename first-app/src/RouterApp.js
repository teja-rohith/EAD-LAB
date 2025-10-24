// src/RouterApp.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Hello1 from './Hello1';
import Hello2 from './Hello2';

function RouterApp() {
  return (
    <div>
      <h1>React Router Example</h1>
      <nav>
        <ul>
          <li><Link to="/hello1">Go to Hello1</Link></li>
          <li><Link to="/hello2">Go to Hello2</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/hello1" element={<Hello1 />} />
        <Route path="/hello2" element={<Hello2 />} />
      </Routes>
    </div>
  );
}

export default RouterApp;
