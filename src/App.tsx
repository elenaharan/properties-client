import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://properties-api-aa2cb0dedf98.herokuapp.com/properties"
        );

        if (!res.ok) {
          throw new Error("Something went wrong.");
        }

        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to our property website!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <PropertyList properties={properties} />
      )}
    </div>
  );
}

function PropertyList({ properties }: any) {
  return (
    <ul>
      {properties.map((property: any) => (
        <PropertyCard property={property} />
      ))}
    </ul>
  );
}

function PropertyCard({ property }: any) {
  if (!property) return null;
  console.log(property);

  return (
    <div className="card-container">
      <div className="property-card">
        <img src={property.Image} alt="Advertised property" />
        <div className="details">
          <p className="address">Address: {property.Address}</p>
          <span className="price">Price: {property.Price}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
