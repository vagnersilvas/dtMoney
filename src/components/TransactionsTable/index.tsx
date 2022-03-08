import { Container } from "./style";

export function TransactionsTable() {
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
