import { useEffect, useState } from "react";
import "./App.css";
import type { Property } from "./types/types";
import Header from "./components/Header";
import Main from "./components/Main";

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

  const handleAddProperty = async (formData: Property) => {
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
      <Header />
      <Main
        properties={properties}
        handleAddProperty={handleAddProperty}
        setShowModal={setShowModal}
        loading={loading}
        showModal={showModal}
      />
    </div>
  );
}

export default App;
