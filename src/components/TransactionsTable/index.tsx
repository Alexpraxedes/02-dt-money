import { useEffect } from "react";
import { Container } from "./styles";
import { api } from '../../services/api';


export function TransactionsTable() {
    useEffect( () => {
        api.get('transactions').then( response => console.log(response.data) )
    }, [] );

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
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>DEV</td>
                        <td>08/02/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>DEV</td>
                        <td>08/02/2022</td>
                    </tr>
                    
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>DEV</td>
                        <td>08/02/2022</td>
                    </tr>
                    
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.000</td>
                        <td>Casa</td>
                        <td>10/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}