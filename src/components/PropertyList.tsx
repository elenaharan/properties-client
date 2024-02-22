import PropertyCard from "./PropertyCard";
import { PropertyListProps } from "../types/types";

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <ul className="properties">
      {properties.map((property: any) => (
        <PropertyCard property={property} key={property._id} />
      ))}
    </ul>
  );
}
