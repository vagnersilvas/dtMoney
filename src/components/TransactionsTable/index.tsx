import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  const URL_BASE = "http://localhost:3000";

  useEffect(() => {
    api.get("transactions")
    .then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web site</td>
            <td className="deposit">R$ 1.200</td>
            <td>Desenvolvimento</td>
            <td>07/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>07/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
