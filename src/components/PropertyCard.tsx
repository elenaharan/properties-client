export default function PropertyCard({ property }: any) {
  if (!property) return null;

  const formattedPrice = new Intl.NumberFormat("en-GB", {
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