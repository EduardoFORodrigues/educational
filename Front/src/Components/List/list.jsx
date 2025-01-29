import "./list.css";

export default function List() {
  return (
    
    <div className="container">
        
      <h1>Acesso Listagem Boletim</h1>

      <div>
        
        <table class="tabela">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>N1</th>
              <th>N2</th>
              <th>N3</th>
              <th>N4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matemática</td>
              <td>10</td>
              <td>90</td>
              <td>08</td>
              <td>70</td>
            </tr>
            <tr>
              <td>Portugues</td>
              <td>80</td>
              <td>70</td>
              <td>10</td>
              <td>50</td>
            </tr>
            <tr>
              <td>História</td>
              <td>90</td>
              <td>10</td>
              <td>80</td>
              <td>10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Inglês</th>
              <td>6,5</td>
              <td>7,8</td>
              <td>10</td>
              <td>50</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  );
}
