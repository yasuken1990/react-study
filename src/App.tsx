import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>yasuken1</td>
          <td>yasuken1991@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>yasuken2</td>
          <td>yasuken1992@gmail.com</td>
        </tr>
        <tr>
          <td>1</td>
          <td>yasuken2</td>
          <td>yasuken1993@gmail.com</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
