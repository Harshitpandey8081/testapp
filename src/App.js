import React, { useEffect, useState } from "react";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7226/api/Home")
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Client List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Client No</th>
            <th>Client Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.clientNo}>
              <td>{client.clientNo}</td>
              <td>{client.clientName}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
