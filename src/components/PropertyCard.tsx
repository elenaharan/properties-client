import { PropertyCardProps } from "../types/types";

export default function PropertyCard({ property }: PropertyCardProps) {
  if (!property) return null;

  const formattedPrice =
    property.Price &&
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(property.Price);

  return (
    <li className="property">
      <img src={property.Image} alt="Advertised property" />
      <div>
        <p>{property.Address}</p>
        <span className="price">{formattedPrice}</span>
      </div>
    </li>
  );
}
