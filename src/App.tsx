import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleAddProperty = async (formData: any) => {
    try {
      const res = await fetch(
        "https://properties-api-aa2cb0dedf98.herokuapp.com/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add property.");
      }

      setShowModal(false);
      await fetchData();
      alert("Property was added");
    } catch (err) {
      console.error("Error adding property: ", err);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to our property website!</h1>
      </header>
      <main className="main">
        <div className="button-container">
          <button onClick={() => setShowModal(true)}>Add Property</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <PropertyList properties={properties} />
        )}
        {showModal && (
          <PropertyForm
            onSubmit={handleAddProperty}
            onClose={() => setShowModal(false)}
            showModal={showModal}
          />
        )}
      </main>
    </div>
  );
}

function PropertyList({ properties }: any) {
  return (
    <ul className="properties">
      {properties.map((property: any) => (
        <PropertyCard property={property} />
      ))}
    </ul>
  );
}

function PropertyCard({ property }: any) {
  if (!property) return null;

  return (
    <li className="property">
      <img src={property.Image} alt="Advertised property" />
      <div>
        <p>{property.Address}</p>
        <span className="price">{property.Price}</span>
      </div>
    </li>
  );
}

function PropertyForm({ onSubmit, onClose, showModal }: any) {
  const [formData, setFormData] = useState({
    Image: "",
    Address: "",
    Price: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Property</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Image URL:
            <input
              type="text"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
