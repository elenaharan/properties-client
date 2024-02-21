import PropertyForm from "./PropertyForm";
import PropertyList from "./PropertyList";

export default function Main({
  setShowModal,
  loading,
  properties,
  showModal,
  handleAddProperty,
}: any) {
  return (
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
  );
}
