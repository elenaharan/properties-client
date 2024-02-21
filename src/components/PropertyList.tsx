import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }: any) {
  return (
    <ul className="properties">
      {properties.map((property: any) => (
        <PropertyCard property={property} key={property._id} />
      ))}
    </ul>
  );
}
