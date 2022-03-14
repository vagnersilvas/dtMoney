import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer website',
          amount:500,
          type: 'deposit',
          category: 'Dev',
          createdAt: '01-02-2022 09:00:00'
        },
        {
          id: 2,
          title: 'Mercado',
          amount:100,
          type: 'withdraw',
          category: 'Compras',
          createdAt: '02-01-2022 14:30:00'
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
