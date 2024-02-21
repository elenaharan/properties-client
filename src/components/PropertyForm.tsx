import { useState } from "react";

export default function PropertyForm({ onSubmit, onClose, showModal }: any) {
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
    <>
      <div className={`overlay ${showModal ? "" : "hidden"}`}></div>
      <div className={`modal ${showModal ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Add Property</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>Image URL</label>
            <input
              type="text"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              placeholder="Enter image url"
            />
            <label>Address</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Enter property address"
            />

            <label>Price</label>
            <input
              type="text"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              placeholder="Enter property price"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
