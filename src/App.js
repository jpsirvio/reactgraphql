import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

function App() {

  const GET_DATA = gql`
  query GetCountries { 
      countries {
		    code,
  	    name,
		    continent {
          name    
        }
	    }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);

  
  if (loading) return <p>Loading...</p>;
  else if (error) <p>Error...</p>
  else {
    return (
      <div className="App">
        <table>
          <thead>
            <td>Code</td>
            <td>Country</td>
            <td>Continent</td>
          </thead>
          <tbody>
            { data.countries.map((country, index) =>
              <tr key={index}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.continent.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
